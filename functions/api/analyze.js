// === PROJECT AGHOY: SCANNER ENDPOINT ===
// POST /api/analyze: validates messages, applies the Rejects layer (PII
// redaction), then proxies to AI Gateway (Cerebras → Groq).

import { redactMessages, redactPII } from "../../src/rejects/rejects";
import { verifyConsentToken, extractConsentToken } from "../../src/consent";

const MAX_CONTENT_LENGTH = 4000;
const MAX_MESSAGES = 10;
const FETCH_TIMEOUT_MS = 25000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;
const MAX_BODY_SIZE = 100000;
// Cross-isolate rate limiting: the Worker's RateLimiter DO is authoritative.
// RATE_CHECK_KEY (worker secret) must match WORKER_RATE_CHECK_KEY (Pages env).
const WORKER_ORIGIN = "https://project-aghoy-dojo.rhyonfs.workers.dev";
const RATE_CHECK_URL = `${WORKER_ORIGIN}/ratelimit/check`;

const JSON_HEADERS = { "Content-Type": "application/json", "Cache-Control": "no-store" };

class ValidationError extends Error {}

// Consult the Worker's shared RateLimiter DO for a globally-accurate decision.
// Falls back to the local per-isolate limiter only if the Worker is
// unreachable/misconfigured, so rate limiting never silently disappears.
const checkGlobalRateLimit = async (ip, env) => {
  const key = env.WORKER_RATE_CHECK_KEY;
  if (!key) return null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    try {
      const res = await fetch(RATE_CHECK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({ ip, limit: RATE_LIMIT, windowMs: RATE_WINDOW_MS }),
        signal: controller.signal,
      });
      if (!res.ok) return null;
      const data = await res.json();
      return { allowed: !!data.allowed, retryAfter: data.retryAfter || 60 };
    } finally {
      clearTimeout(timer);
    }
  } catch {
    return null;
  }
};

// Best-effort per-isolate rate limiter.
// This is NOT globally accurate on serverless: requests hitting different
// isolates won't share state. For production, use Cloudflare Rate Limiting
// (dashboard: Security -> WAF -> Rate Limiting) or a Durable Object.
const ipRequestCounts = new Map();
const checkRateLimit = (ip) => {
  const now = Date.now();
  // Evict stale entries so the map cannot grow without bound.
  if (ipRequestCounts.size > 1000) {
    for (const [key, value] of ipRequestCounts) {
      if (now - value.startTime > RATE_WINDOW_MS) ipRequestCounts.delete(key);
    }
  }
  const clientData = ipRequestCounts.get(ip) || { count: 0, startTime: now };
  if (now - clientData.startTime > RATE_WINDOW_MS) {
    clientData.count = 1;
    clientData.startTime = now;
  } else {
    clientData.count += 1;
  }
  ipRequestCounts.set(ip, clientData);
  return clientData.count <= RATE_LIMIT;
};

const cleanKey = (key) => {
  if (!key) return "";
  return key.toString().replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();
};

const validateKeyFormat = (key) => {
  if (!key) return false;
  if (key.startsWith("csk-")) return key.length > 10;
  if (key.startsWith("gsk_")) return key.length > 10;
  return false;
};

const validateMessages = (messages) => {
  if (!Array.isArray(messages)) {
    throw new ValidationError("Invalid request: messages must be an array");
  }
  if (messages.length > MAX_MESSAGES) {
    throw new ValidationError(`Too many messages (max ${MAX_MESSAGES})`);
  }
  if (messages.length < 1) {
    throw new ValidationError("At least one message required");
  }

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      throw new ValidationError("Each message must be an object with role and content");
    }
    if (!msg.role || !["system", "user", "assistant"].includes(msg.role)) {
      throw new ValidationError(`Invalid message role: "${msg.role}". Must be system, user, or assistant.`);
    }
    if (typeof msg.content !== "string") {
      throw new ValidationError("Message content must be a string");
    }
    if (msg.content.length > MAX_CONTENT_LENGTH) {
      msg.content = msg.content.substring(0, MAX_CONTENT_LENGTH);
    }
  }

  return messages;
};

const fetchWithTimeout = async (url, options, timeoutMs) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

const readProviderContent = async (response, providerName) => {
  if (!response.ok) {
    const upstreamDetail = (await response.text()).substring(0, 200);
    console.error(`${providerName} upstream error status ${response.status}: ${upstreamDetail}`);
    throw new Error(`Provider error: status ${response.status}`);
  }
  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== "string") {
    throw new Error("Provider error: empty response");
  }
  return content;
};

export const onRequestPost = async (context) => {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  // Enforce JSON content type on POST.
  const contentType = (request.headers.get("Content-Type") || "").toLowerCase();
  if (!contentType.startsWith("application/json")) {
    return new Response(JSON.stringify({ error: "Content-Type must be application/json" }), {
      status: 415,
      headers: JSON_HEADERS,
    });
  }

  // Reject oversized bodies before parsing (Content-Length, when present).
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > MAX_BODY_SIZE) {
    return new Response(JSON.stringify({ error: "Request body too large" }), {
      status: 413,
      headers: JSON_HEADERS,
    });
  }

  // Rate limit: prefer the Worker's shared DO (globally accurate); fall back
  // to the local per-isolate limiter when the Worker is unavailable.
  const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
  const globalRate = await checkGlobalRateLimit(clientIp, env);
  const allowed = globalRate ? globalRate.allowed : checkRateLimit(clientIp);
  if (!allowed) {
    return new Response(JSON.stringify({ error: "Too many requests. Please wait." }), {
      status: 429,
      headers: { ...JSON_HEADERS, "Retry-After": String(globalRate?.retryAfter || 60) },
    });
  }

  // Server-enforced consent: the scanner processes user-submitted PII, so a
  // valid consent attestation is required regardless of how the client reached
  // this endpoint (the DOM gate is not a security boundary). Fail-closed.
  if (!env.CONSENT_SIGNING_KEY) {
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 503,
      headers: JSON_HEADERS,
    });
  }
  const consentResult = await verifyConsentToken(env.CONSENT_SIGNING_KEY, extractConsentToken(request));
  if (!consentResult.ok) {
    return new Response(JSON.stringify({ error: `Consent required: ${consentResult.reason}` }), {
      status: 403,
      headers: JSON_HEADERS,
    });
  }

  try {
    // Parse body with error handling
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: JSON_HEADERS,
      });
    }

    // Guard the parsed body size too, covering chunked/encoded requests.
    if (JSON.stringify(body).length > MAX_BODY_SIZE) {
      return new Response(JSON.stringify({ error: "Request body too large" }), {
        status: 413,
        headers: JSON_HEADERS,
      });
    }

    let { messages, jsonMode } = body;
    jsonMode = jsonMode === true;

    // Validate and sanitize messages
    const validatedMessages = validateMessages(messages);

    // REJECTS LAYER (inbound): redact PII before any content reaches a vendor.
    // Server-side is the source of truth; the client pre-send redaction is
    // defense-in-depth only.
    const rejected = redactMessages(validatedMessages);
    const rejects = {
      redacted: rejected.count > 0,
      count: rejected.count,
      categories: rejected.categories,
    };

    // Sanitize and validate API keys
    const cerebrasKey = cleanKey(env.CEREBRAS_API_KEY);
    const groqKey = cleanKey(env.GROQ_API_KEY);
    const accountId = env.CF_ACCOUNT_ID;
    const gatewayId = env.CF_GATEWAY_ID;

    if (!cerebrasKey && !groqKey) {
      throw new Error("No API keys configured.");
    }
    if (cerebrasKey && !validateKeyFormat(cerebrasKey)) {
      throw new Error("Cerebras API key format is invalid.");
    }
    if (groqKey && !validateKeyFormat(groqKey)) {
      throw new Error("Groq API key format is invalid.");
    }
    if (!accountId || !gatewayId) {
      throw new Error("AI Gateway config missing.");
    }

    const commonHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    let resultText = "";
    let usedProvider = "";
    let errorLog = [];

    const getBaseUrl = () => `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;

    // Attempt 1: Cerebras
    if (cerebrasKey) {
      try {
        const response = await fetchWithTimeout(
          `${getBaseUrl()}/cerebras/chat/completions`,
          {
            method: "POST",
            headers: { ...commonHeaders, Authorization: `Bearer ${cerebrasKey}` },
            body: JSON.stringify({
              model: "gpt-oss-120b",
              messages: rejected.messages,
              temperature: 0.7,
              max_tokens: 1024,
              response_format: jsonMode ? { type: "json_object" } : undefined,
            }),
          },
          FETCH_TIMEOUT_MS
        );

        resultText = await readProviderContent(response, "Cerebras");
        usedProvider = "Cerebras GPT-OSS-120B";
      } catch (err) {
        errorLog.push(`Cerebras: ${err.message}`);
      }
    }

    // Attempt 2: Groq (fallback)
    if (!resultText && groqKey) {
      try {
        const response = await fetchWithTimeout(
          `${getBaseUrl()}/groq/openai/v1/chat/completions`,
          {
            method: "POST",
            headers: { ...commonHeaders, Authorization: `Bearer ${groqKey}` },
            body: JSON.stringify({
              model: "openai/gpt-oss-120b",
              messages: rejected.messages,
              temperature: 0.7,
              max_tokens: 1024,
              response_format: jsonMode ? { type: "json_object" } : undefined,
            }),
          },
          FETCH_TIMEOUT_MS
        );

        resultText = await readProviderContent(response, "Groq");
        usedProvider = "Groq GPT-OSS-120B";
      } catch (err) {
        errorLog.push(`Groq: ${err.message}`);
      }
    }

    if (!resultText) {
      throw new Error(`All providers failed: ${errorLog.join(" | ")}`);
    }

    // REJECTS LAYER (outbound): scrub PII the model may have echoed back.
    const outbound = redactPII(resultText);

    return new Response(JSON.stringify({ text: outbound.text, provider: usedProvider, rejects: outbound.redacted ? {
      redacted: true,
      count: outbound.count,
      categories: outbound.categories,
    } : rejects }), {
      headers: JSON_HEADERS,
    });
  } catch (error) {
    const message = error.message || "Internal error";
    const isValidationError = error instanceof ValidationError || [
      "Invalid request",
      "Too many messages",
      "At least one message",
      "Invalid message role",
      "Message content must be a string",
      "Each message must be an object",
    ].some((m) => message.includes(m));
    const status = isValidationError ? 400 : message.includes("configured") || message.includes("missing") ? 503 : 500;
    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: JSON_HEADERS,
    });
  }
};

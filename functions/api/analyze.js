// === PROJECT AGHOY — SCANNER ENDPOINT ===
// POST /api/analyze — validates messages, proxies to AI Gateway (Cerebras → Groq)

const MAX_CONTENT_LENGTH = 4000;
const MAX_MESSAGES = 10;
const FETCH_TIMEOUT_MS = 25000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000;

// Best-effort per-isolate rate limiter.
// This is NOT globally accurate on serverless — requests hitting different
// isolates won't share state. For production, use Cloudflare Rate Limiting
// (dashboard: Security → WAF → Rate Limiting) or a Durable Object.
const ipRequestCounts = new Map();
const checkRateLimit = (ip) => {
  const now = Date.now();
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
    throw new Error("Invalid request: messages must be an array");
  }
  if (messages.length > MAX_MESSAGES) {
    throw new Error(`Too many messages (max ${MAX_MESSAGES})`);
  }
  if (messages.length < 1) {
    throw new Error("At least one message required");
  }

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      throw new Error("Each message must be an object with role and content");
    }
    if (!msg.role || !["system", "user", "assistant"].includes(msg.role)) {
      throw new Error(`Invalid message role: "${msg.role}". Must be system, user, or assistant.`);
    }
    if (typeof msg.content !== "string") {
      throw new Error("Message content must be a string");
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

export const onRequestPost = async (context) => {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  // Rate limit
  const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
  if (!checkRateLimit(clientIp)) {
    return new Response(JSON.stringify({ error: "Too many requests. Please wait." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
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
        headers: { "Content-Type": "application/json" },
      });
    }

    const { messages, jsonMode } = body;

    // Validate and sanitize messages
    const validatedMessages = validateMessages(messages);

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
              messages: validatedMessages,
              temperature: 0.7,
              max_tokens: 1024,
              response_format: jsonMode ? { type: "json_object" } : undefined,
            }),
          },
          FETCH_TIMEOUT_MS
        );

        if (!response.ok) {
          const errSnippet = (await response.text()).substring(0, 200);
          throw new Error(`Status ${response.status}: ${errSnippet}`);
        }

        const data = await response.json();
        resultText = data.choices[0].message.content;
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
              messages: validatedMessages,
              temperature: 0.7,
              max_tokens: 1024,
              response_format: jsonMode ? { type: "json_object" } : undefined,
            }),
          },
          FETCH_TIMEOUT_MS
        );

        if (!response.ok) {
          const errSnippet = (await response.text()).substring(0, 200);
          throw new Error(`Status ${response.status}: ${errSnippet}`);
        }

        const data = await response.json();
        resultText = data.choices[0].message.content;
        usedProvider = "Groq GPT-OSS-120B";
      } catch (err) {
        errorLog.push(`Groq: ${err.message}`);
      }
    }

    if (!resultText) {
      throw new Error(`All providers failed: ${errorLog.join(" | ")}`);
    }

    return new Response(JSON.stringify({ text: resultText, provider: usedProvider }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error.message || "Internal error";
    const status = message.includes("configured") || message.includes("missing") ? 503 : 500;
    return new Response(JSON.stringify({ error: message }), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }
};

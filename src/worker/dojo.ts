/// <reference types="@cloudflare/workers-types" />

import { redactMessages, redactPII } from "../rejects/rejects";
import {
  storeReport,
  lookupIndicator,
  listIndicators,
  verifyIndicator,
  storeEvidence,
  getEvidence,
  reportExists,
  findSimilarScams,
  seedVectorize,
  getMetrics,
  reporterFingerprint,
  getDomainReputation,
  listFeedDomains,
  recomputeDomainReputation,
} from "./storage";
import { inspectUrl } from "./urlInspect";
import { mintConsentToken, verifyConsentToken, extractConsentToken, CONSENT_VERSION } from "../consent";
import {
  learnerKey,
  loadProgress,
  saveProgress,
  recordAnswer,
  recordPlacement,
  recordSelfReport,
  loadAllTransferLogs,
  saveOutcomeSnapshot,
  loadOutcomeSnapshots,
} from "./training";
import { applyPlacementResult } from "../dojo/progress";
import { buildOutcomeReport, isoWeekStartOf } from "./outcomeReport";

interface Env {
  AI: any;
  VECTORIZE: any;
  DOJO_SESSIONS: DurableObjectNamespace;
  RATE_LIMITER: DurableObjectNamespace;
  DB: D1Database;
  EVIDENCE?: R2Bucket;
  CEREBRAS_API_KEY?: string;
  GROQ_API_KEY?: string;
  CF_ACCOUNT_ID?: string;
  CF_GATEWAY_ID?: string;
  STORAGE_ADMIN_KEY?: string;
  SESSION_SIGNING_KEY?: string;
  RATE_CHECK_KEY?: string;
  CONSENT_SIGNING_KEY?: string;
}

const ALLOWED_ORIGINS = [
  "https://project-aghoy.pages.dev",
  "http://localhost:5173",
  "http://localhost:3000",
];
const MAX_CONTENT_LENGTH = 4000;
const MAX_MESSAGES = 10;
const MAX_HISTORY = 20;
const IDLE_TTL_MS = 24 * 60 * 60 * 1000;
const FETCH_TIMEOUT_MS = 25000;
const MAX_REPORT_BODY_BYTES = 100 * 1024;
const MAX_RED_FLAGS = 10;
const MAX_RED_FLAG_LENGTH = 64;
const MAX_META_LENGTH = 100;
const MAX_PHONE_HASHES = 10;
const MAX_ASSISTANT_TURNS = 50;
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;
const REPORTS_RATE_LIMIT = 20;
const REPORTS_RATE_WINDOW_MS = 60 * 1000;
// /inspect does outbound fetches, so it gets a dedicated per-IP budget rather than being fully exempt (open proxy surface).
const INSPECT_RATE_LIMIT = 10;
const INSPECT_RATE_WINDOW_MS = 60 * 1000;
const MAX_EVIDENCE_BYTES = 10 * 1024 * 1024;

const corsHeaders = (origin: string) => {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Session-Token, X-Consent-Token, X-Learner-Id",
    "Vary": "Origin",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'none'",
    "Referrer-Policy": "no-referrer",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Cross-Origin-Opener-Policy": "same-origin",
  };
};

const jsonResponse = (body: unknown, status: number, origin: string): Response => {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
};

const validateMessages = (messages: unknown): Array<{ role: string; content: string }> => {
  if (!Array.isArray(messages)) throw new Error("messages must be an array");
  if (messages.length > MAX_MESSAGES) throw new Error(`Too many messages (max ${MAX_MESSAGES})`);
  if (messages.length < 1) throw new Error("At least one message required");

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") throw new Error("Each message must be an object");
    const m = msg as Record<string, unknown>;
    if (!m.role || !["system", "user", "assistant"].includes(m.role as string)) {
      throw new Error(`Invalid role: "${m.role}"`);
    }
    if (typeof m.content !== "string") throw new Error("Content must be a string");
    if (m.content.length > MAX_CONTENT_LENGTH) m.content = m.content.substring(0, MAX_CONTENT_LENGTH);
  }
  return messages as Array<{ role: string; content: string }>;
};

const fetchWithTimeout = async (url: string, options: RequestInit, timeoutMs: number) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

// Parse a JSON request body with a hard size cap so every public route is
// bounded (memory-DoS protection). Throws on oversize or invalid JSON.
const parseJsonBody = async (request: Request, maxBytes: number): Promise<any> => {
  const declared = Number(request.headers.get("Content-Length") || 0);
  if (declared > maxBytes) throw new Error("Request body too large");
  const text = await request.text();
  if (text.length > maxBytes) throw new Error("Request body too large");
  return JSON.parse(text);
};

// X-Forwarded-For is attacker-controllable and never trusted; only
// CF-Connecting-IP is used.
const getClientIp = (request: Request): string => {
  return request.headers.get("CF-Connecting-IP")?.trim() || "unknown";
};

// Workers has no timingSafeEqual; a manual XOR-accumulate comparison over
// fixed-length SHA-256 digests substitutes.
const constantTimeEqual = (a: Uint8Array, b: Uint8Array): boolean => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
};

// Bearer-token check for the storage admin key. Fail-closed: no key
// configured means 503, never a silent allow.
const authorized = async (request: Request, env: Env): Promise<200 | 401 | 503> => {
  if (!env.STORAGE_ADMIN_KEY) return 503;
  const given = request.headers.get("Authorization") || "";
  const expected = `Bearer ${env.STORAGE_ADMIN_KEY}`;
  const [givenDigest, expectedDigest] = await Promise.all([
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(given)),
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(expected)),
  ]);
  return constantTimeEqual(new Uint8Array(givenDigest), new Uint8Array(expectedDigest)) ? 200 : 401;
};

const authResponse = (status: 401 | 503, origin: string): Response =>
  jsonResponse({ error: status === 401 ? "Unauthorized" : "Server misconfigured" }, status, origin);

// Server-enforced consent gate. Every data-touching route requires a valid,
// current consent attestation. Fail-closed: missing config means 503, any bad
// token means 403 with a machine-readable reason so the client can re-prompt.
const consentResponse = (reason: string, origin: string, status: 200 | 403 | 503 = 403): Response =>
  jsonResponse({ error: reason }, status, origin);

const requireConsent = async (request: Request, env: Env, origin: string): Promise<Response | null> => {
  if (!env.CONSENT_SIGNING_KEY) return consentResponse("Server misconfigured", origin, 503);
  const token = extractConsentToken(request);
  const result = await verifyConsentToken(env.CONSENT_SIGNING_KEY, token);
  if (result.ok === false) {
    return consentResponse(`Consent required: ${result.reason}`, origin, 403);
  }
  return null;
};

const rateCheck = async (
  env: Env,
  key: string,
  limit: number,
  windowMs: number
): Promise<{ allowed: boolean; retryAfter: number }> => {
  const limiterId = env.RATE_LIMITER.idFromName(key);
  const limiterStub = env.RATE_LIMITER.get(limiterId);
  const rateResult = await limiterStub.fetch("https://dummy/check", {
    method: "POST",
    body: JSON.stringify({ ip: key, limit, windowMs }),
  });
  const rateData: any = await rateResult.json();
  return {
    allowed: !!rateData.allowed,
    retryAfter: Math.max(1, Math.ceil((rateData.resetAt - Date.now()) / 1000)),
  };
};

// Dojo tokens are HMAC-SHA256 signed and expiring, keyed by the Durable
// Object id: base64url(payload).base64url(sig), payload = { exp, sub }. NOTE:
// the SPA does not call this worker; signing is defense-in-depth for direct
// API users.
const base64urlEncode = (data: Uint8Array): string => {
  let binary = "";
  for (let i = 0; i < data.length; i++) binary += String.fromCharCode(data[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
};

const base64urlDecode = (input: string): Uint8Array => {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (input.length % 4)) % 4);
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
};

const importSessionKey = async (secret: string): Promise<CryptoKey> => {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
};

const signSessionToken = async (secret: string, exp: number, sub: string): Promise<string> => {
  const payload = base64urlEncode(new TextEncoder().encode(JSON.stringify({ exp, sub })));
  const key = await importSessionKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return `${payload}.${base64urlEncode(new Uint8Array(sig))}`;
};

const verifySessionToken = async (
  secret: string,
  token: string
): Promise<{ exp: number; sub: string } | null> => {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, sigB64] = parts;
  let payloadBytes: Uint8Array;
  let sigBytes: Uint8Array;
  try {
    payloadBytes = base64urlDecode(payloadB64);
    sigBytes = base64urlDecode(sigB64);
  } catch {
    return null;
  }
  const key = await importSessionKey(secret);
  const valid = await crypto.subtle.verify("HMAC", key, sigBytes, new TextEncoder().encode(payloadB64));
  if (!valid) return null;
  let payload: { exp?: unknown; sub?: unknown };
  try {
    payload = JSON.parse(new TextDecoder().decode(payloadBytes)) as { exp?: unknown; sub?: unknown };
  } catch {
    return null;
  }
  if (typeof payload.exp !== "number" || Date.now() > payload.exp) return null;
  if (typeof payload.sub !== "string") return null;
  return { exp: payload.exp, sub: payload.sub };
};

// A clone is parsed so the original body stays intact for the downstream DO.
const extractSessionToken = async (request: Request): Promise<string | null> => {
  const headerToken = request.headers.get("X-Session-Token");
  if (headerToken && headerToken.trim()) return headerToken.trim();

  const cloned = request.clone();
  let body: any;
  try {
    body = await cloned.json();
  } catch {
    return null;
  }
  const bodyToken = body && typeof body === "object" ? (body as Record<string, unknown>).sessionToken : undefined;
  if (typeof bodyToken === "string" && bodyToken.trim()) return bodyToken.trim();
  return null;
};

// Counts are persisted to durable storage so limits survive isolate eviction.
export class RateLimiter implements DurableObject {
  private storage: DurableObjectStorage;
  private counts: Map<string, { count: number; resetAt: number }>;

  constructor(state: DurableObjectState) {
    this.storage = state.storage;
    this.counts = new Map();

    state.blockConcurrencyWhile(async () => {
      const stored = await this.storage.get<Record<string, { count: number; resetAt: number }>>("counts");
      if (stored) this.counts = new Map(Object.entries(stored));
    });
  }

  async fetch(request: Request): Promise<Response> {
    const body = await parseJsonBody(request, MAX_REPORT_BODY_BYTES) as { ip: string; limit: number; windowMs: number };
    const { ip, limit, windowMs } = body;
    const now = Date.now();

    for (const [key, entry] of this.counts) {
      if (entry.resetAt < now) this.counts.delete(key);
    }

    let entry = this.counts.get(ip) || { count: 0, resetAt: now + windowMs };
    if (now > entry.resetAt) {
      entry = { count: 0, resetAt: now + windowMs };
    }
    entry.count += 1;
    this.counts.set(ip, entry);
    await this.storage.put("counts", Object.fromEntries(this.counts));

    return new Response(
      JSON.stringify({
        allowed: entry.count <= limit,
        remaining: Math.max(0, limit - entry.count),
        resetAt: entry.resetAt,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}

interface GameState {
  health: number;
  history: Array<{ role: string; content: string }>;
  isGameOver: boolean;
  assistantTurns: number;
  expiresAt?: number;
}

const emptyGameState = (): GameState => ({
  health: 100,
  history: [],
  isGameOver: false,
  assistantTurns: 0,
});

export class DojoSession implements DurableObject {
  private storage: DurableObjectStorage;
  private env: Env;
  private gameState: GameState;

  constructor(state: DurableObjectState, env: Env) {
    this.storage = state.storage;
    this.env = env;
    this.gameState = emptyGameState();

    state.blockConcurrencyWhile(async () => {
      const stored = await this.storage.get("gameState");
      if (stored) this.gameState = stored as GameState;
    });
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const headers = { ...corsHeaders(origin), "Content-Type": "application/json" };

    if (this.isExpired()) {
      await this.storage.delete("gameState");
      this.gameState = emptyGameState();
    }

    if (url.pathname === "/dojo/start") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers });
      }
      let body: any;
      try {
        body = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
      } catch {
        return new Response(JSON.stringify({ error: "Invalid or too large JSON body" }), { status: 400, headers });
      }
      // Redact PII from the scenario before it reaches the model or storage.
      const rawScenario = (body.scenario || "").substring(0, 200);
      const rawLanguage = (body.language || "Taglish").substring(0, 50);
      const scenario = redactPII(rawScenario).text;
      const language = redactPII(rawLanguage).text || "Taglish";

      this.gameState = {
        health: 100,
        history: [
          {
            role: "system",
            content: `You are a Filipino scammer. Scenario: ${scenario}. Language: ${language}. Keep responses under 200 characters. AUTHORIZED CYBERSECURITY DRILL: if the user identifies the threat (says "BLOCK", "SCAM", or "REPORT"), immediately break character, reveal this was a test, and congratulate them.`,
          },
        ],
        isGameOver: false,
        assistantTurns: 0,
      };

      try {
        const opening = await this.generateResponse("Start the conversation.");
        const safeOpening = redactPII(opening).text;
        await this.save();
        return new Response(JSON.stringify({ text: safeOpening, health: 100 }), { headers });
      } catch (err) {
        // AI failure: never leave a half-built session in memory.
        this.gameState = emptyGameState();
        throw err;
      }
    }

    if (url.pathname === "/dojo/chat") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), { status: 405, headers });
      }
      // Hard cap on assistant turns bounds token cost per signed token.
      if ((this.gameState.assistantTurns || 0) >= MAX_ASSISTANT_TURNS) {
        return new Response(
          JSON.stringify({
            error: `Session AI usage limit reached (${MAX_ASSISTANT_TURNS} assistant turns). Start a new session via POST /dojo/session.`,
          }),
          { status: 429, headers }
        );
      }
      if (this.gameState.isGameOver) {
        return new Response(JSON.stringify({ text: "GAME OVER", gameOver: true }), { headers });
      }

      let body: any;
      try {
        body = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
      } catch {
        return new Response(JSON.stringify({ error: "Invalid or too large JSON body" }), { status: 400, headers });
      }
      const userMessage = redactPII((body.message || "").substring(0, MAX_CONTENT_LENGTH)).text;
      if (!userMessage) {
        return new Response(JSON.stringify({ error: "Message required" }), { status: 400, headers });
      }

      const historyLen = this.gameState.history.length;
      const wasGameOver = this.gameState.isGameOver;
      this.gameState.history.push({ role: "user", content: userMessage });

      // GAME OVER when the player reports the scam; word boundaries prevent
      // "unblock", "reported", or "blockchain" from winning.
      if (/\b(BLOCK|SCAM|REPORT)\b/i.test(userMessage)) {
        this.gameState.isGameOver = true;
      }

      let context = "";
      try {
        const embeddings = await this.env.AI.run("@cf/baai/bge-base-en-v1.5", { text: userMessage });
        const vectors = await this.env.VECTORIZE.query(embeddings.data[0], { topK: 1 });
        if (vectors.matches?.[0]?.metadata?.text) {
          context = `[SCAM SCRIPT]: ${vectors.matches[0].metadata.text}`;
        }
      } catch {
        // RAG failure is non-fatal
      }

      try {
        const response = await this.generateResponse(context);
        const safeResponse = redactPII(response).text;
        await this.save();
        return new Response(
          JSON.stringify({ text: safeResponse, health: this.gameState.health, gameOver: this.gameState.isGameOver }),
          { headers }
        );
      } catch (err) {
        // AI failure: roll back in-memory history so memory matches durable
        // storage, then rethrow.
        this.gameState.history.length = historyLen;
        this.gameState.isGameOver = wasGameOver;
        throw err;
      }
    }

    return new Response(JSON.stringify({ error: "Not Found" }), { status: 404, headers });
  }

  private async generateResponse(context: string): Promise<string> {
    const input = {
      messages: [
        ...this.gameState.history,
        { role: "system", content: context || "Continue the conversation naturally." },
      ],
    };
    const res = await this.env.AI.run("@cf/meta/llama-3-8b-instruct", input);
    const raw = (res.response || "").substring(0, MAX_CONTENT_LENGTH);
    // Store only the scrubbed reply so durable storage never holds PII the
    // model echoed back.
    const response = redactPII(raw).text;
    this.gameState.history.push({ role: "assistant", content: response });
    this.gameState.assistantTurns = (this.gameState.assistantTurns || 0) + 1;
    return response;
  }

  private isExpired(): boolean {
    return typeof this.gameState.expiresAt === "number" && Date.now() > this.gameState.expiresAt;
  }

  private trimHistory() {
    if (this.gameState.history.length <= MAX_HISTORY) return;
    const system = this.gameState.history.filter((m) => m.role === "system");
    const rest = this.gameState.history.filter((m) => m.role !== "system");
    const overflow = this.gameState.history.length - MAX_HISTORY;
    rest.splice(0, overflow);
    this.gameState.history = [...system, ...rest];
  }

  private async save() {
    this.trimHistory();
    this.gameState.expiresAt = Date.now() + IDLE_TTL_MS;
    await this.storage.put("gameState", this.gameState);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Rate limiting is per-IP, never per-session. Storage routes carry their
    // own dedicated budgets or are read-only, so they are exempt here.
    const clientIp = getClientIp(request);
    const isStorageRead =
      request.method === "GET" &&
      (url.pathname === "/indicators" ||
        url.pathname === "/evidence" ||
        url.pathname === "/metrics" ||
        url.pathname === "/outcome" ||
        url.pathname.startsWith("/feed/"));
    const isReportIngest = request.method === "POST" && url.pathname === "/reports";
    const isInspect = request.method === "POST" && url.pathname === "/inspect";
    const isRateCheck = request.method === "POST" && url.pathname === "/ratelimit/check";
    if (!isStorageRead && !isReportIngest && !isInspect && !isRateCheck) {
      const rate = await rateCheck(env, clientIp, 5, 60000);
      if (!rate.allowed) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait.", retryAfter: rate.retryAfter }),
          {
            status: 429,
            headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Retry-After": String(rate.retryAfter) },
          }
        );
      }
    }

    if (url.pathname === "/seed") {
      return new Response("Seeding Active", { status: 200, headers: corsHeaders(origin) });
    }

    // POST /consent/token - mints a signed, expiring consent attestation. This
    // is the ONLY way to obtain a token; it is called by the client right after
    // the user accepts the privacy gate. Every data route requires it.
    if (url.pathname === "/consent/token") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      if (!env.CONSENT_SIGNING_KEY) {
        return jsonResponse({ error: "Server misconfigured" }, 503, origin);
      }
      const token = await mintConsentToken(env.CONSENT_SIGNING_KEY);
      return jsonResponse({ token, version: CONSENT_VERSION }, 200, origin);
    }

    if (url.pathname === "/analyze") {
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      return handleScanner(request, env, origin);
    }

    // Mints a signed, expiring per-session token keyed by the signed token,
    // not IP. Fail-closed: no SESSION_SIGNING_KEY means 503.
    if (url.pathname === "/dojo/session") {
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      if (!env.SESSION_SIGNING_KEY) {
        return new Response(JSON.stringify({ error: "Server misconfigured" }), {
          status: 503,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      const sessionToken = await signSessionToken(
        env.SESSION_SIGNING_KEY,
        Date.now() + SESSION_TTL_MS,
        crypto.randomUUID()
      );
      return new Response(JSON.stringify({ sessionToken }), {
        status: 200,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    if (url.pathname.startsWith("/dojo/")) {
      if (url.pathname !== "/dojo/start" && url.pathname !== "/dojo/chat") {
        return new Response(JSON.stringify({ error: "Not Found" }), {
          status: 404,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      // Consent is required on every Dojo turn (defense-in-depth; /dojo/session
      // already enforces it when minting the session token).
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
          status: 405,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }

      const sessionToken = await extractSessionToken(request);
      if (!sessionToken) {
        return new Response(
          JSON.stringify({
            error: "Missing session token. Call POST /dojo/session first, then send it in the X-Session-Token header or the sessionToken body field.",
          }),
          { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } }
        );
      }
      // The session token is the auth credential: a valid HMAC signature and
      // an unexpired exp claim are required, or the request gets a 401.
      if (!env.SESSION_SIGNING_KEY) {
        return new Response(JSON.stringify({ error: "Server misconfigured" }), {
          status: 503,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      const tokenPayload = await verifySessionToken(env.SESSION_SIGNING_KEY, sessionToken);
      if (!tokenPayload) {
        return new Response(JSON.stringify({ error: "Invalid or expired session token" }), {
          status: 401,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }

      const sessionId = env.DOJO_SESSIONS.idFromName(sessionToken);
      const stub = env.DOJO_SESSIONS.get(sessionId);
      return stub.fetch(request);
    }

    // Unauthenticated but tightly bounded: body size caps, per-field validation,
    // a dedicated rate budget, and Rejects-layer sanitization before persistence.
    if (url.pathname === "/reports") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      const reportRate = await rateCheck(env, `reports:${clientIp}`, REPORTS_RATE_LIMIT, REPORTS_RATE_WINDOW_MS);
      if (!reportRate.allowed) {
        return new Response(
          JSON.stringify({ error: "Too many report submissions. Please wait.", retryAfter: reportRate.retryAfter }),
          {
            status: 429,
            headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Retry-After": String(reportRate.retryAfter) },
          }
        );
      }
      const declaredLength = Number(request.headers.get("Content-Length") || 0);
      if (declaredLength > MAX_REPORT_BODY_BYTES) {
        return jsonResponse({ error: "Request body too large (max 100KB)" }, 400, origin);
      }
      let body: any;
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: "Invalid JSON body" }, 400, origin);
      }
      if (JSON.stringify(body).length > MAX_REPORT_BODY_BYTES) {
        return jsonResponse({ error: "Request body too large (max 100KB)" }, 400, origin);
      }
      const verdict = String(body.verdict || "");
      if (!["SAFE", "SUSPICIOUS", "HIGH_RISK"].includes(verdict)) {
        return jsonResponse({ error: "Invalid verdict. Must be SAFE, SUSPICIOUS, or HIGH_RISK." }, 400, origin);
      }
      const riskScore = Number(body.riskScore);
      if (!Number.isFinite(riskScore) || riskScore < 0 || riskScore > 10) {
        return jsonResponse({ error: "Invalid riskScore. Must be a number between 0 and 10." }, 400, origin);
      }
      const scamType = String(body.scamType || "None");
      if (scamType.length > MAX_META_LENGTH) {
        return jsonResponse({ error: `scamType too long (max ${MAX_META_LENGTH} chars)` }, 400, origin);
      }
      const content = String(body.content || "");
      if (content.length > MAX_CONTENT_LENGTH) {
        return jsonResponse({ error: `content too long (max ${MAX_CONTENT_LENGTH} chars)` }, 400, origin);
      }
      const redFlags = Array.isArray(body.redFlags) ? body.redFlags.map((flag: unknown) => String(flag)) : [];
      if (redFlags.length > MAX_RED_FLAGS) {
        return jsonResponse({ error: `Too many red flags (max ${MAX_RED_FLAGS})` }, 400, origin);
      }
      for (const flag of redFlags) {
        if (flag.length > MAX_RED_FLAG_LENGTH) {
          return jsonResponse({ error: `red flag too long (max ${MAX_RED_FLAG_LENGTH} chars)` }, 400, origin);
        }
      }
      const provider = String(body.provider || "");
      if (provider.length > MAX_META_LENGTH) {
        return jsonResponse({ error: `provider too long (max ${MAX_META_LENGTH} chars)` }, 400, origin);
      }
      const source = String(body.source || "web");
      if (source.length > MAX_META_LENGTH) {
        return jsonResponse({ error: `source too long (max ${MAX_META_LENGTH} chars)` }, 400, origin);
      }
      // Only pre-computed SHA-256 hashes of phone numbers are ever persisted.
      const phoneHashes = Array.isArray(body.phoneHashes)
        ? body.phoneHashes.filter((hash: unknown): hash is string => typeof hash === "string")
        : [];
      if (phoneHashes.length > MAX_PHONE_HASHES) {
        return jsonResponse({ error: `Too many phone hashes (max ${MAX_PHONE_HASHES})` }, 400, origin);
      }
      for (const hash of phoneHashes) {
        if (!/^[a-f0-9]{64}$/i.test(hash)) {
          return jsonResponse({ error: "phoneHashes entries must be 64-char hex SHA-256 hashes" }, 400, origin);
        }
      }
      try {
        // Pseudonymous reporter fingerprint (HMAC of client IP). Never the raw
        // IP. When the consent key is unset, fail closed: a report from an
        // unknown fingerprint is treated as low-trust rather than merged into
        // one shared bucket.
        if (!env.CONSENT_SIGNING_KEY) {
          return jsonResponse({ ok: true }, 200, origin);
        }
        const fingerprint = await reporterFingerprint(clientIp, env.CONSENT_SIGNING_KEY);
        const result = await storeReport(
          env,
          {
            verdict,
            riskScore,
            scamType,
            redFlags,
            content,
            provider,
            source,
            phoneHashes,
          },
          { fingerprint, consentKey: env.CONSENT_SIGNING_KEY }
        );
        // Quality gate: rejected reports return a neutral 200 so attackers
        // cannot probe the gate, and the similar-scam compute is skipped.
        if (result.gate?.action === "reject") {
          // Honest feedback: the report was discarded by the quality gate. The
          // neutral 200 prevents gate-probing, but the response MUST tell the
          // truth so the community loop never silently drops a report. A user
          // who thinks they warned everyone but did not is a trust-breaking bug.
          return jsonResponse({ ok: true, rejected: true, reason: "quality_gate", details: result.gate.reasons }, 200, origin);
        }
        const similar = content ? await findSimilarScams(env, content, 3) : [];
        return jsonResponse({ ...result, similar }, 200, origin);
      } catch (error: any) {
        return jsonResponse({ error: "Internal error processing report" }, 500, origin);
      }
    }

    // SSRF-guarded: protocol allowlist, host blocklist, DNS private-IP
    // rejection, per-hop redirect validation, size + time caps. Fetched
    // content is never persisted or forwarded to any vendor.
    if (url.pathname === "/inspect") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      const inspectRate = await rateCheck(env, `inspect:${clientIp}`, INSPECT_RATE_LIMIT, INSPECT_RATE_WINDOW_MS);
      if (!inspectRate.allowed) {
        return new Response(
          JSON.stringify({ error: "Too many URL inspections. Please wait.", retryAfter: inspectRate.retryAfter }),
          {
            status: 429,
            headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Retry-After": String(inspectRate.retryAfter) },
          }
        );
      }
      try {
        const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
        const target = String(body.url || "").trim();
        if (!target) return jsonResponse({ error: "Missing url" }, 400, origin);
        const result = await inspectUrl(target);
        return jsonResponse({ ok: true, ...result }, 200, origin);
      } catch (error: any) {
        const message = error?.message || "Inspection failed";
        return jsonResponse({ ok: false, error: message }, 400, origin);
      }
    }

    // POST /ratelimit/check - authoritative cross-isolate rate check for the
    // Pages Function (whose per-isolate limiter is not globally accurate).
    // Requires a shared secret so it cannot be used as an open rate oracle.
    if (url.pathname === "/ratelimit/check") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      if (!env.RATE_CHECK_KEY) return authResponse(503, origin);
      const given = request.headers.get("Authorization") || "";
      const expected = `Bearer ${env.RATE_CHECK_KEY}`;
      const [givenDigest, expectedDigest] = await Promise.all([
        crypto.subtle.digest("SHA-256", new TextEncoder().encode(given)),
        crypto.subtle.digest("SHA-256", new TextEncoder().encode(expected)),
      ]);
      if (!constantTimeEqual(new Uint8Array(givenDigest), new Uint8Array(expectedDigest))) {
        return authResponse(401, origin);
      }
      try {
        const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
        const ip = String(body.ip || "").trim();
        if (!ip) return jsonResponse({ error: "Missing ip" }, 400, origin);
        const limit = Math.min(Math.max(Number(body.limit) || 5, 1), 100);
        const windowMs = Math.min(Math.max(Number(body.windowMs) || 60000, 1000), 3600000);
        const rate = await rateCheck(env, `check:${ip}`, limit, windowMs);
        return jsonResponse({ allowed: rate.allowed, retryAfter: rate.retryAfter }, 200, origin);
      } catch (error: any) {
        return jsonResponse({ error: error?.message || "Rate check failed" }, 400, origin);
      }
    }

    if (url.pathname === "/indicators") {
      const type = url.searchParams.get("type");
      const value = url.searchParams.get("value");
      const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 100, 1), 200);
      if (type && value) {
        const row = await lookupIndicator(env, type, value);
        if (!row) return jsonResponse({ found: false }, 404, origin);
        return jsonResponse({ found: true, ...row }, 200, origin);
      }
      const rows = await listIndicators(env, limit);
      return jsonResponse({ indicators: rows }, 200, origin);
    }

    // GET /metrics - aggregate observability (verdict/provider/fallback rates).
    // Read-only, exempt from the global limiter like other storage reads.
    if (url.pathname === "/metrics") {
      const metrics = await getMetrics(env);
      return jsonResponse(metrics, 200, origin);
    }

    // GET /outcome - the transfer-outcome report: does Dojo training generalize
    // to NOVEL scams? Aggregates every learner's transferLog into weekly
    // accuracy, decay (7/30/90 days), and per-family performance. This is the
    // outcome evidence no Philippine scam-education program has published.
    // Admin-gated (aggregated learner patterns are sensitive) and read-only.
    if (url.pathname === "/outcome" && request.method === "GET") {
      const auth = await authorized(request, env);
      if (auth !== 200) return authResponse(auth, origin);
      const rows = await loadAllTransferLogs(env);
      const report = buildOutcomeReport(rows as any, new Date().toISOString().slice(0, 10));
      const history = await loadOutcomeSnapshots(env, 12);
      return jsonResponse({ ok: true, report, history }, 200, origin);
    }

    // ==== TRAINING / PROGRESS (consent-gated, pseudonymous learner_key) ====
    // The client sends a stable learner_id (localStorage UUID); the server
    // derives learner_key = HMAC(id, consentKey) so no raw identifier is
    // stored. Progress persists across devices/browser clears.
    if (url.pathname.startsWith("/training/")) {
      const consentGate = await requireConsent(request, env, origin);
      if (consentGate) return consentGate;
      if (!env.CONSENT_SIGNING_KEY) return consentResponse("Server misconfigured", origin, 503);

      const learnerId = (request.headers.get("X-Learner-Id") || "").trim();
      if (!learnerId || learnerId.length > 64) {
        return jsonResponse({ error: "Missing or invalid learner id" }, 400, origin);
      }
      const key = await learnerKey(learnerId, env.CONSENT_SIGNING_KEY);

      // GET /training/progress - resume state.
      if (url.pathname === "/training/progress" && request.method === "GET") {
        const progress = await loadProgress(env, key);
        return jsonResponse({ ok: true, progress }, 200, origin);
      }

      // POST /training/progress - full save (batch answers + progress).
      if (url.pathname === "/training/progress" && request.method === "POST") {
        try {
          const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
          if (body.answers && Array.isArray(body.answers)) {
            for (const a of body.answers.slice(0, 100)) {
              if (a.scenarioId && typeof a.correct === "boolean") {
                await recordAnswer(env, key, {
                  scenarioId: String(a.scenarioId).slice(0, 64),
                  stepIndex: Number(a.stepIndex) || 0,
                  optionId: String(a.optionId || "").slice(0, 8),
                  correct: a.correct,
                  responseMs: Number(a.responseMs) || 0,
                });
              }
            }
          }
          if (body.progress && typeof body.progress === "object") {
            await saveProgress(env, key, body.progress);
          }
          return jsonResponse({ ok: true }, 200, origin);
        } catch (error: any) {
          return jsonResponse({ error: "Internal error saving progress" }, 500, origin);
        }
      }

      // POST /training/placement - record placement result + set starting level.
      if (url.pathname === "/training/placement" && request.method === "POST") {
        try {
          const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
          const score = Number(body.score) || 0;
          const max = Number(body.max) || 12;
          await recordPlacement(env, key, Math.min(Math.max(score, 0), max), body.kind || "onboard");
          const progress = await loadProgress(env, key);
          const applied = applyPlacementResult(progress, score, max);
          await saveProgress(env, key, applied);
          return jsonResponse({ ok: true, shieldLevel: applied.shieldLevel }, 200, origin);
        } catch (error: any) {
          return jsonResponse({ error: "Internal error recording placement" }, 500, origin);
        }
      }

      // POST /training/self-report - "I caught a real scam" (Rejects-sanitized).
      if (url.pathname === "/training/self-report" && request.method === "POST") {
        try {
          const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
          await recordSelfReport(env, key, {
            vector: String(body.vector || "").slice(0, 40),
            amountPesos: body.amountPesos ? Number(body.amountPesos) : undefined,
            narrative: String(body.narrative || ""),
          });
          return jsonResponse({ ok: true }, 200, origin);
        } catch (error: any) {
          return jsonResponse({ error: "Internal error recording report" }, 500, origin);
        }
      }

      return jsonResponse({ error: "Not Found" }, 404, origin);
    }

    // GET /feed/reputation?domain=x - domain reputation (public, read-only).
    if (url.pathname === "/feed/reputation") {
      const domain = (url.searchParams.get("domain") || "").trim().toLowerCase();
      if (!domain) return jsonResponse({ error: "Missing domain" }, 400, origin);
      const rep = await getDomainReputation(env, domain);
      if (!rep) {
        // Complete contract: same shape as getDomainReputation, neutral values.
        return jsonResponse(
          {
            domain,
            score: 0,
            label: "NONE",
            status: "reported",
            reason: "reported",
            nEff: 0,
            distinctReporters: 0,
            highRiskShare: 0,
            suspiciousShare: 0,
            simPrior: 0,
            confidence: 0,
            feedVisible: false,
            first_seen: null,
            last_seen: null,
          },
          200,
          origin
        );
      }
      return jsonResponse(rep, 200, origin);
    }

    // GET /feed/blocklist/hosts.txt - Pi-hole/AdGuard-compatible host blocklist.
    // Only score >= 7 OR verified, with >= 2 distinct reporters (or verified).
    // No phones, no honeypots, no cleared domains. CDN-cacheable.
    if (url.pathname === "/feed/blocklist/hosts.txt") {
      const feed = await listFeedDomains(env, 500);
      const body =
        `# Project Aghoy scam-domain blocklist\n` +
        `# generated: ${new Date().toISOString()}\n` +
        `# advisory: community-reported + operator-verified. Never phones, never personal data.\n` +
        feed.map((d) => `0.0.0.0 ${d.domain}`).join("\n") +
        "\n";
      return new Response(body, {
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    // GET /feed/blocklist/domains.csv - CSV feed for telcos/universities.
    if (url.pathname === "/feed/blocklist/domains.csv") {
      const feed = await listFeedDomains(env, 500);
      const header = "domain,score,label,status,reason\n";
      const body =
        header +
        feed
          .map((d) => `${d.domain},${d.score},${d.label},${d.status},${d.reason}`)
          .join("\n") +
        "\n";
      return new Response(body, {
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "text/csv; charset=utf-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    // POST /indicators/clear - operator false-positive retraction (admin).
    // Sets status=cleared, removes from blacklist, suppresses future listing.
    if (url.pathname === "/indicators/clear") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const clearAuth = await authorized(request, env);
      if (clearAuth === 503) return authResponse(503, origin);
      if (clearAuth === 401) return authResponse(401, origin);
      try {
        const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
        const type = String(body.type || "");
        const value = String(body.value || "");
        const row = await env.DB.prepare("SELECT id FROM indicators WHERE type = ?1 AND value = ?2")
          .bind(type, value)
          .first();
        if (!row) return jsonResponse({ error: "Indicator not found" }, 404, origin);
        const indicatorId = (row as { id: number }).id;
        await env.DB.prepare("UPDATE indicators SET status = 'cleared' WHERE id = ?1").bind(indicatorId).run();
        await env.DB.prepare("DELETE FROM blacklist WHERE indicator_id = ?1").bind(indicatorId).run();
        await env.DB.prepare("INSERT OR IGNORE INTO allowlist (value) VALUES (?1)").bind(value).run();
        if (type === "domain") {
          await recomputeDomainReputation(env, value);
        }
        return jsonResponse({ ok: true }, 200, origin);
      } catch (error: any) {
        return jsonResponse({ error: error?.message || "Internal error" }, 400, origin);
      }
    }

    // Requires STORAGE_ADMIN_KEY (bearer token) for write access.
    if (url.pathname === "/indicators/verify") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const verifyAuth = await authorized(request, env);
      if (verifyAuth === 503) return authResponse(503, origin);
      if (verifyAuth === 401) return authResponse(401, origin);
      try {
        const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
        const ok = await verifyIndicator(env, body.type, body.value, body.verifiedBy, body.source, body.notes);
        return ok
          ? jsonResponse({ ok: true }, 200, origin)
          : jsonResponse({ error: "Indicator not found" }, 404, origin);
      } catch (error: any) {
        return jsonResponse({ error: error.message || "Internal error" }, 400, origin);
      }
    }

    // Admin-only (STORAGE_ADMIN_KEY) and hard-bounded: 10MB upload cap and
    // Content-Type forced server-side to application/octet-stream.
    if (url.pathname.startsWith("/reports/") && url.pathname.endsWith("/evidence")) {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const evidenceAuth = await authorized(request, env);
      if (evidenceAuth === 503) return authResponse(503, origin);
      if (evidenceAuth === 401) return authResponse(401, origin);
      const idMatch = url.pathname.match(/^\/reports\/(\d+)\/evidence$/);
      if (!idMatch) return jsonResponse({ error: "Invalid report id" }, 400, origin);
      const reportId = Number(idMatch[1]);
      if (!(await reportExists(env, reportId))) {
        return jsonResponse({ error: "Report not found" }, 404, origin);
      }
      const evidenceLength = Number(request.headers.get("Content-Length") || 0);
      if (evidenceLength > MAX_EVIDENCE_BYTES) {
        return jsonResponse({ error: "Evidence too large (max 10MB)" }, 413, origin);
      }
      const data = await request.arrayBuffer();
      if (data.byteLength > MAX_EVIDENCE_BYTES) {
        return jsonResponse({ error: "Evidence too large (max 10MB)" }, 413, origin);
      }
      // Caller-supplied Content-Type is ignored; the stored type is forced.
      const key = await storeEvidence(env, reportId, data, "application/octet-stream");
      if (!key) {
        return jsonResponse({ error: "Evidence storage (R2) is not enabled on this account" }, 501, origin);
      }
      return jsonResponse({ key }, 200, origin);
    }

    // Admin-only; served as opaque bytes with no-store caching.
    if (url.pathname === "/evidence") {
      if (request.method !== "GET") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const evidenceAuth = await authorized(request, env);
      if (evidenceAuth === 503) return authResponse(503, origin);
      if (evidenceAuth === 401) return authResponse(401, origin);
      const key = url.searchParams.get("key");
      if (!key) return jsonResponse({ error: "Missing key" }, 400, origin);
      const obj = await getEvidence(env, key);
      if (!obj) return jsonResponse({ error: "Evidence storage (R2) is not enabled on this account" }, 501, origin);
      return new Response(obj.data, {
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/octet-stream",
          "X-Content-Type-Options": "nosniff",
          "Cache-Control": "private, no-store",
        },
      });
    }

    // Requires STORAGE_ADMIN_KEY.
    if (url.pathname === "/seed/vectorize") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method Not Allowed" }, 405, origin);
      }
      const seedAuth = await authorized(request, env);
      if (seedAuth === 503) return authResponse(503, origin);
      if (seedAuth === 401) return authResponse(401, origin);
      try {
        const body: any = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
        const result = await seedVectorize(env, body.entries);
        return jsonResponse(result, result.error ? 400 : 200, origin);
      } catch (error: any) {
        return jsonResponse({ error: error.message || "Internal error" }, 400, origin);
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders(origin) });
  },

  // Weekly outcome snapshot: aggregates every learner's transfer log and
  // persists it so the operator can see the retention/decay trend over time.
  // The evidence the research said PH scam-education never publishes.
  async scheduled(_controller: ScheduledController, env: Env): Promise<void> {
    const rows = await loadAllTransferLogs(env);
    const today = new Date().toISOString().slice(0, 10);
    const report = buildOutcomeReport(rows as any, today);
    // Week key must match buildOutcomeReport's Monday-based weeks so snapshot
    // keys align with the weekly buckets (a Monday cron anchoring to today is
    // already the week start - no offset needed).
    await saveOutcomeSnapshot(env, isoWeekStartOf(today), report);
  },
};

async function handleScanner(request: Request, env: Env, origin: string): Promise<Response> {
  const headers = { ...corsHeaders(origin), "Content-Type": "application/json" };

  try {
    let body: any;
    try {
      body = await parseJsonBody(request, MAX_REPORT_BODY_BYTES);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid or too large JSON body" }), { status: 400, headers });
    }

    const { messages, jsonMode } = body;
    const validatedMessages = validateMessages(messages);

    // Redact PII before any content reaches a vendor or durable storage.
    const rejected = redactMessages(validatedMessages);

    const accountId = env.CF_ACCOUNT_ID;
    const gatewayId = env.CF_GATEWAY_ID;
    const cerebrasKey = (env.CEREBRAS_API_KEY || "").replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();
    const groqKey = (env.GROQ_API_KEY || "").replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();

    if (!accountId || !gatewayId) throw new Error("AI Gateway config missing.");
    if (!cerebrasKey && !groqKey) throw new Error("No API keys configured.");

    const getGatewayUrl = () => `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;
    let resultText = "";
    let usedProvider = "";

    if (cerebrasKey) {
      try {
        const resp = await fetchWithTimeout(
          `${getGatewayUrl()}/cerebras/chat/completions`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${cerebrasKey}` },
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
        if (resp.ok) {
          const data: any = await resp.json();
          resultText = data.choices[0].message.content;
          usedProvider = "Cerebras";
        }
      } catch {
      }
    }

    if (!resultText && groqKey) {
      try {
        const resp = await fetchWithTimeout(
          `${getGatewayUrl()}/groq/openai/v1/chat/completions`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
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
        if (resp.ok) {
          const data: any = await resp.json();
          resultText = data.choices[0].message.content;
          usedProvider = "Groq";
        }
      } catch {
      }
    }

    if (!resultText) throw new Error("All AI providers failed.");

    // REJECTS LAYER (outbound): scrub PII the model may have echoed back.
    const outbound = redactPII(resultText);

    return new Response(
      JSON.stringify({
        text: outbound.text,
        provider: usedProvider,
        rejects: outbound.redacted ? { redacted: true, count: outbound.count, categories: outbound.categories } : undefined,
      }),
      { headers }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Internal error" }), {
      status: error.message?.includes("configured") || error.message?.includes("missing") ? 503 : 500,
      headers,
    });
  }
}

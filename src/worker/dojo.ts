/// <reference types="@cloudflare/workers-types" />

// ============================================================
//  Project Aghoy — Cloudflare Worker
//  Routes: /analyze (scanner) | /dojo/* (training game)
//  DOs: DojoSession (per-user game state), RateLimiter (per-IP)
// ============================================================

interface Env {
  AI: any;
  VECTORIZE: any;
  DOJO_SESSIONS: DurableObjectNamespace;
  RATE_LIMITER: DurableObjectNamespace;
  CEREBRAS_API_KEY?: string;
  GROQ_API_KEY?: string;
  CF_ACCOUNT_ID?: string;
  CF_GATEWAY_ID?: string;
}

// --- Constants ---
const ALLOWED_ORIGINS = [
  "https://project-aghoy.pages.dev",
  "https://project-aghoy.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];
const MAX_CONTENT_LENGTH = 4000;
const MAX_MESSAGES = 10;
const FETCH_TIMEOUT_MS = 25000;

const corsHeaders = (origin: string) => {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin",
  };
};

// --- Helpers ---
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

const getClientIp = (request: Request): string => {
  return request.headers.get("CF-Connecting-IP")
    || request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim()
    || "unknown";
};

// ============================================================
//  RATE LIMITER (Durable Object)
//  Tracks request counts per IP across all isolates.
// ============================================================
export class RateLimiter implements DurableObject {
  private storage: DurableObjectStorage;
  private counts: Map<string, { count: number; resetAt: number }>;

  constructor(state: DurableObjectState) {
    this.storage = state.storage;
    this.counts = new Map();
  }

  async fetch(request: Request): Promise<Response> {
    const { ip, limit, windowMs } = (await request.json()) as {
      ip: string;
      limit: number;
      windowMs: number;
    };
    const now = Date.now();
    let entry = this.counts.get(ip) || { count: 0, resetAt: now + windowMs };

    if (now > entry.resetAt) {
      entry = { count: 0, resetAt: now + windowMs };
    }
    entry.count += 1;
    this.counts.set(ip, entry);

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

// ============================================================
//  DOJO GAME ENGINE (Durable Object, per-user)
// ============================================================
export class DojoSession implements DurableObject {
  private storage: DurableObjectStorage;
  private gameState: { health: number; history: Array<{ role: string; content: string }>; isGameOver: boolean };

  constructor(state: DurableObjectState) {
    this.storage = state.storage;
    this.gameState = { health: 100, history: [], isGameOver: false };

    state.blockConcurrencyWhile(async () => {
      const stored = await this.storage.get("gameState");
      if (stored) this.gameState = stored as typeof this.gameState;
    });
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const headers = { ...corsHeaders(origin), "Content-Type": "application/json" };

    // START GAME
    if (url.pathname.endsWith("/start")) {
      const body: any = await request.json();
      const scenario = (body.scenario || "").substring(0, 200);
      const language = (body.language || "Taglish").substring(0, 50);

      this.gameState = {
        health: 100,
        history: [
          {
            role: "system",
            content: `You are a Filipino scammer. Scenario: ${scenario}. Language: ${language}. Keep responses under 200 characters.`,
          },
        ],
        isGameOver: false,
      };

      const opening = await this.generateResponse("Start the conversation.");
      await this.save();
      return new Response(JSON.stringify({ text: opening, health: 100 }), { headers });
    }

    // CHAT
    if (url.pathname.endsWith("/chat")) {
      if (this.gameState.isGameOver) {
        return new Response(JSON.stringify({ text: "GAME OVER", gameOver: true }), { headers });
      }

      const body: any = await request.json();
      const userMessage = (body.message || "").substring(0, MAX_CONTENT_LENGTH);
      if (!userMessage) {
        return new Response(JSON.stringify({ error: "Message required" }), { status: 400, headers });
      }

      this.gameState.history.push({ role: "user", content: userMessage });

      // RAG context enrichment (best-effort)
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

      const response = await this.generateResponse(context);
      await this.save();
      return new Response(
        JSON.stringify({ text: response, health: this.gameState.health, gameOver: this.gameState.isGameOver }),
        { headers }
      );
    }

    return new Response("Dojo Session Active", { status: 200, headers });
  }

  private async generateResponse(context: string): Promise<string> {
    const input = {
      messages: [
        ...this.gameState.history,
        { role: "system", content: context || "Continue the conversation naturally." },
      ],
    };
    const res = await this.env.AI.run("@cf/meta/llama-3-8b-instruct", input);
    const response = (res.response || "").substring(0, MAX_CONTENT_LENGTH);
    this.gameState.history.push({ role: "assistant", content: response });
    return response;
  }

  private async save() {
    await this.storage.put("gameState", this.gameState);
  }
}

// ============================================================
//  MAIN ROUTER
// ============================================================
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Rate limiting check
    const clientIp = getClientIp(request);
    const limiterId = env.RATE_LIMITER.idFromName(clientIp);
    const limiterStub = env.RATE_LIMITER.get(limiterId);
    const rateResult = await limiterStub.fetch("https://dummy/check", {
      method: "POST",
      body: JSON.stringify({ ip: clientIp, limit: 5, windowMs: 60000 }),
    });
    const rateData: any = await rateResult.json();
    if (!rateData.allowed) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait.", retryAfter: Math.ceil((rateData.resetAt - Date.now()) / 1000) }),
        { status: 429, headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Retry-After": String(Math.ceil((rateData.resetAt - Date.now()) / 1000)) } }
      );
    }

    // Route: /seed
    if (url.pathname === "/seed") {
      return new Response("Seeding Active", { status: 200, headers: corsHeaders(origin) });
    }

    // Route: /analyze (scanner)
    if (url.pathname === "/analyze") {
      return handleScanner(request, env, origin);
    }

    // Route: /dojo/* (game)
    if (url.pathname.startsWith("/dojo/")) {
      const sessionId = env.DOJO_SESSIONS.idFromName(clientIp);
      const stub = env.DOJO_SESSIONS.get(sessionId);
      return stub.fetch(request);
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders(origin) });
  },
};

// ============================================================
//  SCANNER HANDLER (shared logic with analyze.js)
// ============================================================
async function handleScanner(request: Request, env: Env, origin: string): Promise<Response> {
  const headers = { ...corsHeaders(origin), "Content-Type": "application/json" };

  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400, headers });
    }

    const { messages, jsonMode } = body;
    const validatedMessages = validateMessages(messages);
    const accountId = env.CF_ACCOUNT_ID;
    const gatewayId = env.CF_GATEWAY_ID;
    const cerebrasKey = (env.CEREBRAS_API_KEY || "").replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();
    const groqKey = (env.GROQ_API_KEY || "").replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();

    if (!accountId || !gatewayId) throw new Error("AI Gateway config missing.");
    if (!cerebrasKey && !groqKey) throw new Error("No API keys configured.");

    const getGatewayUrl = () => `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;
    let resultText = "";
    let usedProvider = "";

    // Attempt 1: Cerebras
    if (cerebrasKey) {
      try {
        const resp = await fetchWithTimeout(
          `${getGatewayUrl()}/cerebras/chat/completions`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${cerebrasKey}` },
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
        if (resp.ok) {
          const data: any = await resp.json();
          resultText = data.choices[0].message.content;
          usedProvider = "Cerebras";
        }
      } catch {
        // fall through
      }
    }

    // Attempt 2: Groq (fallback)
    if (!resultText && groqKey) {
      try {
        const resp = await fetchWithTimeout(
          `${getGatewayUrl()}/groq/openai/v1/chat/completions`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
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
        if (resp.ok) {
          const data: any = await resp.json();
          resultText = data.choices[0].message.content;
          usedProvider = "Groq";
        }
      } catch {
        // fall through
      }
    }

    if (!resultText) throw new Error("All AI providers failed.");

    return new Response(JSON.stringify({ text: resultText, provider: usedProvider }), { headers });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Internal error" }), {
      status: error.message?.includes("configured") || error.message?.includes("missing") ? 503 : 500,
      headers,
    });
  }
}

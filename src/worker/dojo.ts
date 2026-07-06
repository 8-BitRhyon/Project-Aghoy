/// <reference types="@cloudflare/workers-types" />

interface Env {
  AI: any;
  VECTORIZE: any;
  DOJO_SESSIONS: DurableObjectNamespace;
  // Environment variables for the Scanner
  CEREBRAS_API_KEY?: string;
  GROQ_API_KEY?: string;
  CF_ACCOUNT_ID?: string;
  CF_GATEWAY_ID?: string;
}

// === CORS HEADERS ===
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// === DOJO GAME ENGINE (Durable Object) ===
export class DojoSession implements DurableObject {
  state: any;
  storage: DurableObjectStorage;
  env: Env;
  ctx: DurableObjectState;

  constructor(state: DurableObjectState, env: Env) {
    this.ctx = state;
    this.storage = state.storage;
    this.env = env;
    this.state = { health: 100, history: [], isGameOver: false };
    
    this.ctx.blockConcurrencyWhile(async () => {
      const stored = await this.storage.get("gameState");
      if (stored) this.state = stored;
    });
  }

  async fetch(request: Request) {
    const url = new URL(request.url);

    // -- START GAME --
    if (url.pathname.endsWith("/start")) {
      const body: any = await request.json();
      this.state = {
        health: 100,
        history: [{ role: "system", content: `You are a Filipino scammer. Scenario: ${body.scenario || "general"}. Language: ${body.language || "Taglish"}. Keep it short.` }],
        isGameOver: false
      };
      const opening = await this.generateResponse("Start the conversation.");
      await this.save();
      return new Response(JSON.stringify({ text: opening, health: 100 }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
    }

    // -- CHAT --
    if (url.pathname.endsWith("/chat")) {
      if (this.state.isGameOver) return new Response(JSON.stringify({ text: "GAME OVER", gameOver: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});

      const body: any = await request.json();
      this.state.history.push({ role: "user", content: body.message });

      // RAG Logic
      let context = "";
      try {
        const embeddings = await this.env.AI.run('@cf/baai/bge-base-en-v1.5', { text: body.message });
        const vectors = await this.env.VECTORIZE.query(embeddings.data[0], { topK: 1 });
        if (vectors.matches?.[0]?.metadata?.text) {
          context = `[SCAM SCRIPT]: ${vectors.matches[0].metadata.text}`;
        }
      } catch (e) { console.log("RAG Error (Ignored):", e); }

      const response = await this.generateResponse(context);
      await this.save();
      return new Response(JSON.stringify({ text: response, health: this.state.health, gameOver: this.state.isGameOver }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
    }
    return new Response("Dojo Session Active", { headers: corsHeaders });
  }

  async generateResponse(context: string) {
    const input = { messages: [...this.state.history, { role: "system", content: context }] };
    const res = await this.env.AI.run('@cf/meta/llama-3-8b-instruct', input);
    this.state.history.push({ role: "assistant", content: res.response });
    return res.response;
  }

  async save() { await this.storage.put("gameState", this.state); }
}

// === MAIN ROUTER (Handles Scanner AND Dojo) ===
export default {
  async fetch(request: Request, env: Env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    const url = new URL(request.url);

    // 1. ROUTE: SEEDING
    if (url.pathname === "/seed") {
       // (Keeping it simple for this fix - ensure your previous seed logic is here if you want to re-seed)
       return new Response("Seeding Active (Check logs)", { headers: corsHeaders });
    }

    // 2. ROUTE: SCANNER (/analyze)
    if (url.pathname === "/analyze") {
        return handleScanner(request, env);
    }

    // 3. ROUTE: DOJO GAME
    const id = env.DOJO_SESSIONS.idFromName("global-demo-session");
    const stub = env.DOJO_SESSIONS.get(id);
    return stub.fetch(request);
  }
};

// === SCANNER LOGIC (Moved from analyze.js) ===
async function handleScanner(request: Request, env: Env) {
    try {
        const { messages, jsonMode } = await request.json() as any;
        const accountId = env.CF_ACCOUNT_ID;
        const gatewayId = env.CF_GATEWAY_ID;
        const cerebrasKey = env.CEREBRAS_API_KEY;
        const groqKey = env.GROQ_API_KEY;

        if (!accountId || !gatewayId) throw new Error("AI Gateway Config Missing");

        const getBaseUrl = () => `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;
        let resultText = "";

        // Attempt 1: Cerebras
        if (cerebrasKey) {
            try {
                const resp = await fetch(`${getBaseUrl()}/cerebras/chat/completions`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${cerebrasKey}` },
                    body: JSON.stringify({ model: "gpt-oss-120b", messages, temperature: 0.7, max_tokens: 1024, response_format: jsonMode ? { type: "json_object" } : undefined })
                });
                if (resp.ok) {
                    const data: any = await resp.json();
                    resultText = data.choices[0].message.content;
                }
            } catch (e) { console.warn("Cerebras failed", e); }
        }

        // Attempt 2: Groq (Fallback)
        if (!resultText && groqKey) {
             const resp = await fetch(`${getBaseUrl()}/groq/openai/v1/chat/completions`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${groqKey}` },
                body: JSON.stringify({ model: "openai/gpt-oss-120b", messages, temperature: 0.7, max_tokens: 1024, response_format: jsonMode ? { type: "json_object" } : undefined })
            });
            if (resp.ok) {
                const data: any = await resp.json();
                resultText = data.choices[0].message.content;
            }
        }

        if (!resultText) throw new Error("All AI providers failed.");

        return new Response(JSON.stringify({ text: resultText }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }});
    }
}
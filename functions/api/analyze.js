// === 1. RATE LIMIT CONFIG ===
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;
const ipRequestCounts = new Map();

const checkRateLimit = (ip) => {
  const now = Date.now();
  const clientData = ipRequestCounts.get(ip) || { count: 0, startTime: now };
  if (now - clientData.startTime > WINDOW_MS) {
    clientData.count = 1;
    clientData.startTime = now;
  } else {
    clientData.count += 1;
  }
  ipRequestCounts.set(ip, clientData);
  return clientData.count <= RATE_LIMIT;
};

// === 2. KEY SANITIZER ===
const cleanKey = (key) => {
  if (!key) return "";
  return key.toString().replace(/["']/g, "").replace(/^(Bearer\s+)/i, "").trim();
};

export const onRequestPost = async (context) => {
  const { request, env } = context;

  // --- CORS Headers ---
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  // --- Rate Limit ---
  const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (!checkRateLimit(clientIp)) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please wait.' }), { 
      status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    });
  }

  try {
    const { messages, jsonMode } = await request.json();
    
    // Sanitize Keys & Config
    const cerebrasKey = cleanKey(env.CEREBRAS_API_KEY);
    const groqKey = cleanKey(env.GROQ_API_KEY);
    const accountId = env.CF_ACCOUNT_ID;
    const gatewayId = env.CF_GATEWAY_ID;

    // Validate Config
    if ((!cerebrasKey && !groqKey)) {
      throw new Error("API Keys are missing in Cloudflare Dashboard.");
    }
    if (!accountId || !gatewayId) {
       throw new Error("AI Gateway Config (CF_ACCOUNT_ID, CF_GATEWAY_ID) missing in Dashboard.");
    }

    const commonHeaders = {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (compatible; ProjectAghoy/1.0; +https://project-aghoy.pages.dev)",
      "Accept": "application/json" // 
    };

    let resultText = "";
    let usedProvider = "";
    let errorLog = [];

    // Base Gateway URL builder
    const getBaseUrl = () => `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;

    // === ATTEMPT 1: CEREBRAS (GPT-OSS-120B) via AI Gateway ===
    if (cerebrasKey) {
      try {
        console.log("🤖 Trying Cerebras (GPT-OSS-120B) via AI Gateway...");
        // Cerebras Endpoint: .../cerebras/chat/completions
        const url = `${getBaseUrl()}/cerebras/chat/completions`;
        
        const response = await fetch(url, {
          method: "POST",
          headers: { ...commonHeaders, "Authorization": `Bearer ${cerebrasKey}` },
          body: JSON.stringify({
            model: "gpt-oss-120b",
            messages: messages,
            temperature: 0.7,
            max_tokens: 1024,
            response_format: jsonMode ? { type: "json_object" } : undefined
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Status ${response.status}: ${errText}`);
        }
        
        const data = await response.json();
        resultText = data.choices[0].message.content;
        usedProvider = "Cerebras GPT-OSS-120B";

      } catch (err) {
        console.warn(`Cerebras Failed: ${err.message}`);
        errorLog.push(`Cerebras: ${err.message}`);
      }
    }

    // === ATTEMPT 2: GROQ (GPT-OSS-120B) via AI Gateway ===
    if (!resultText && groqKey) {
      try {
        console.log("🤖 Trying Groq (GPT-OSS-120B) via AI Gateway...");
        
        const url = `${getBaseUrl()}/groq/openai/v1/chat/completions`;

        const response = await fetch(url, {
          method: "POST",
          headers: { ...commonHeaders, "Authorization": `Bearer ${groqKey}` },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: messages,
            temperature: 0.7,
            max_tokens: 1024,
            response_format: jsonMode ? { type: "json_object" } : undefined
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Status ${response.status}: ${errText}`);
        }

        const data = await response.json();
        resultText = data.choices[0].message.content;
        usedProvider = "Groq GPT-OSS-120B";

      } catch (err) {
        errorLog.push(`Groq: ${err.message}`);
      }
    }

    if (!resultText) {
      throw new Error(`All providers failed. Details: ${errorLog.join(" | ")}`);
    }

    return new Response(JSON.stringify({ text: resultText, provider: usedProvider }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Analysis Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};
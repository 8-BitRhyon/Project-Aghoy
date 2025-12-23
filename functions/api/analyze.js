// === 1. RATE LIMIT CONFIG (Per Isolate) ===
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

const cleanKey = (key) => {
  if (!key) return "";
  // Removes "Bearer " prefix if accidentally pasted, and strips whitespace/newlines
  return key.toString().replace(/^(Bearer\s+)/i, "").trim();
};

// === 3. CLOUDFLARE HANDLER ===
export const onRequestPost = async (context) => {
  const { request, env } = context;

  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    'Access-Control-Allow-Credentials': 'true'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';
  
  if (!checkRateLimit(clientIp)) {
    console.warn(`🛑 Rate limit exceeded for IP: ${clientIp}`);
    return new Response(JSON.stringify({ 
      error: 'Too Many Requests. Please wait a minute before scanning again.' 
    }), { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }

  try {
    const { messages, jsonMode } = await request.json();
    let resultText = "";
    let usedProvider = "";
    let errorLog = [];

    // Sanitize Keys
    const cerebrasKey = cleanKey(env.CEREBRAS_API_KEY);
    const groqKey = cleanKey(env.GROQ_API_KEY);

    // Fail early if keys are completely missing
    if (!cerebrasKey && !groqKey) {
      throw new Error("API Keys are missing in Cloudflare 'Variables & Secrets'.");
    }

    const commonHeaders = {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (compatible; ProjectAghoy/1.0)"
    };

    // === 4. ATTEMPT 1: CEREBRAS (Qwen 3) ===
    if (cerebrasKey) {
      try {
        console.log("🤖 Trying Cerebras (Qwen 3)...");
        const response = await fetch("https://api.cerebras.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            ...commonHeaders,
            "Authorization": `Bearer ${cerebrasKey}`
          },
          body: JSON.stringify({
            model: "qwen-3-235b-a22b-instruct-2507",
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
        usedProvider = "Cerebras Qwen 3";

      } catch (primaryError) {
        const errorMsg = `Cerebras Failed: ${primaryError.message}`;
        console.warn(errorMsg);
        errorLog.push(errorMsg);
      }
    }

    // === 5. ATTEMPT 2: GROQ (Moonshot Kimi) ===
    if (!resultText && groqKey) {
      try {
        console.log("🤖 Trying Groq Backup (Kimi)...");
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            ...commonHeaders,
            "Authorization": `Bearer ${groqKey}`
          },
          body: JSON.stringify({
            model: "moonshotai/kimi-k2-instruct-0905",
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
        usedProvider = "Groq Kimi";

      } catch (backupError) {
        errorLog.push(`Groq Failed: ${backupError.message}`);
      }
    }

    if (!resultText) {
      throw new Error(`All providers failed. \n${errorLog.join("\n")}`);
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
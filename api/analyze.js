import OpenAI from 'openai';

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

export default async function handler(request, response) {
  // 1. CORS Headers
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (request.method === 'OPTIONS') return response.status(200).end();
  
  const clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
  if (!checkRateLimit(clientIp)) {
    console.warn(`🛑 Rate limit exceeded for IP: ${clientIp}`);
    return response.status(429).json({ 
      error: 'Too Many Requests. Please wait a minute before scanning again.' 
    });
  }

  if (request.method !== 'POST') return response.status(405).json({ error: 'Method Not Allowed' });

  // 2. SETUP CLIENTS
  const cerebras = new OpenAI({
    apiKey: process.env.CEREBRAS_API_KEY,
    baseURL: "https://api.cerebras.ai/v1"
  });

  const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
  });

  try {
    const { messages, jsonMode } = request.body;
    let resultText = "";
    let usedProvider = "";

    // 3. ATTEMPT 1: CEREBRAS (Qwen 3 235B)
    try {
      console.log("🤖 Trying Cerebras (Qwen 3)...");
      const completion = await cerebras.chat.completions.create({
        messages,
        model: "qwen-3-235b-a22b-instruct-2507",
        temperature: 0.7,
        max_tokens: 1024,
        response_format: jsonMode ? { type: "json_object" } : undefined
      });
      resultText = completion.choices[0].message.content;
      usedProvider = "Cerebras Qwen 3";
    } catch (primaryError) {
      console.warn("Cerebras Failed. Switching to Backup...", primaryError.message);
      
      // 4. ATTEMPT 2: GROQ (Moonshot Kimi)
      try {
        console.log("🤖 Trying Groq Backup (Kimi)...");
        const completion = await groq.chat.completions.create({
          messages,
          model: "moonshotai/kimi-k2-instruct-0905",
          temperature: 0.7,
          max_tokens: 1024,
          response_format: jsonMode ? { type: "json_object" } : undefined
        });
        resultText = completion.choices[0].message.content;
        usedProvider = "Groq Kimi";
      } catch (backupError) {
        throw new Error(`All providers failed. Primary: ${primaryError.message} | Backup: ${backupError.message}`);
      }
    }

    return response.status(200).json({ text: resultText, provider: usedProvider });

  } catch (error) {
    console.error("Analysis Error:", error);
    return response.status(500).json({ error: error.message });
  }
}
import { AnalysisResult, Verdict } from "../types";
import Tesseract from 'tesseract.js';

// === 1. BACKEND CONFIGURATION ===
// We point everything to your Cloudflare Worker's Public URL
const BACKEND_URL = "https://verbose-tribble-r4xqgv64p6g5cpr7v-8787.app.github.dev";

// === 0. DOJO CONFIG ===
export const DOJO_SCENARIOS = {
  'AYUDA': "Ayuda / Government Aid Scam",
  'TASK_SCAM': "Fake Job / Task Scam",
  'PIG_BUTCHERING': "Romance / Investment Scam"
};

// === 1. SCANNER CONSTANTS ===
const VALID_FLAGS = [
  "URGENCY", "SHORTENED URL", "TOO GOOD TO BE TRUE OFFER",
  "SUSPICIOUS CHARACTER SUBSTITUTION", "UNSOLICITED MESSAGE",
  "ILLEGAL GAMBLING PROMOTION", "GENERIC GREETING",
  "REQUEST FOR PERSONAL INFO", "GRAMMATICAL ERRORS",
  "UNOFFICIAL DOMAIN", "ASKING FOR PAYMENT TO WORK",
  "THREATS", "UNUSUAL SENDER"
].join(", ");

const JSON_STRUCTURE_PROMPT = `
  STRICT JSON OUTPUT REQUIRED.
  Return a single JSON object with this exact schema:
  {
    "verdict": "SAFE" | "SUSPICIOUS" | "HIGH_RISK",
    "riskScore": number (0-10),
    "scamType": "string (e.g. Phishing, Investment, None)",
    "senderEntity": "string (Name/Number or 'Unknown')",
    "redFlags": ["string (Select ONLY from: ${VALID_FLAGS})"],
    "analysis": "string (Explanation in user language)",
    "educationalTip": "string (Advice in user language)"
  }
`;

const cleanJson = (text: string): string => {
  let clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
  const firstOpen = clean.indexOf("{");
  const lastClose = clean.lastIndexOf("}");
  if (firstOpen !== -1 && lastClose !== -1) {
    clean = clean.substring(firstOpen, lastClose + 1);
  }
  return clean;
};

// === 2. CLIENT-SIDE OCR (Vision Gate) ===
const extractTextFromImage = async (base64Image: string): Promise<string> => {
  try {
    const result = await Tesseract.recognize(
      `data:image/png;base64,${base64Image}`,
      'eng'
    );
    const text = result.data.text.trim();
    if (result.data.confidence < 60) throw new Error("BLURRY_IMAGE");
    if (text.length < 10) throw new Error("NO_TEXT_FOUND");
    return text;
  } catch (error: any) {
    if (error.message === "BLURRY_IMAGE" || error.message === "NO_TEXT_FOUND") throw error;
    throw new Error("Could not read text from image.");
  }
};

// === 3. SCANNER LOGIC (Updated to use Worker) ===
export const analyzeContent = async (text: string, language: string, imageBase64?: string, imageMimeType?: string): Promise<AnalysisResult> => {
  if (text.includes("DEV_SAFE")) return getDevResponse("SAFE");
  if (text.includes("DEV_SCAM")) return getDevResponse("SCAM");

  let contentToAnalyze = text;

  if (imageBase64) {
    try {
      const ocrText = await extractTextFromImage(imageBase64);
      contentToAnalyze = `[USER NOTE]: ${text}\n[IMAGE CONTENT]: ${ocrText}`;
    } catch (error: any) {
      if (error.message === "BLURRY_IMAGE" || error.message === "NO_TEXT_FOUND") {
        return {
          verdict: Verdict.SUSPICIOUS,
          riskScore: 5,
          scamType: "Unreadable Image",
          senderEntity: "Unknown",
          redFlags: ["IMAGE TOO BLURRY"],
          analysis: "I could not read the text clearly. It might be blurry.",
          educationalTip: "Please type the message manually."
        };
      }
      throw error; 
    }
  }

  if (!contentToAnalyze || contentToAnalyze.trim().length < 5) {
     throw new Error("Please provide text or an image to analyze.");
  }

  const systemInstruction = getScannerPrompt(language);

  try {
    // FIX: Use the Public Worker URL instead of the local API route
    const response = await fetch(`${BACKEND_URL}/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemInstruction + JSON_STRUCTURE_PROMPT },
          { role: "user", content: contentToAnalyze }
        ],
        jsonMode: true
      })
    });

    if (response.status === 429) {
      return {
        verdict: Verdict.SUSPICIOUS,
        riskScore: 0,
        scamType: "System Cooldown",
        senderEntity: "Project Aghoy",
        redFlags: ["RATE LIMIT REACHED"],
        analysis: "You are scanning too fast!",
        educationalTip: "Please wait 60 seconds."
      };
    }

    if (!response.ok) throw new Error(`Service Unavailable`);

    const data = await response.json();
    const cleanText = cleanJson(data.text);
    return JSON.parse(cleanText) as AnalysisResult;

  } catch (error: any) {
    console.error("Analysis Error:", error);
    throw new Error("Failed to analyze content.");
  }
};

// === 4. DOJO FACTORY (Updated to use Worker) ===
export const createDojoChat = (language: string, scenario: string = 'AYUDA') => {
  return {
    sendMessage: async (text: string) => {
      let endpoint = `${BACKEND_URL}/chat`;
      let body: any = { message: text };

      // Switch to /start endpoint for initialization
      if (text === "INITIALIZE_SIMULATION") {
        endpoint = `${BACKEND_URL}/start`;
        body = { language, scenario };
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        
        if (!res.ok) throw new Error("Dojo Connection Failed");
        
        const data = await res.json();
        
        return { 
          response: { text: () => data.text },
          health: data.health
        };
      } catch (error) {
        console.error("Dojo Error:", error);
        throw error;
      }
    }
  };
};

// === 5. PROMPTS & UTILS ===
const getScannerPrompt = (language: string) => {
  return `You are Project Aghoy. Language: ${language}. Analyze for scams.`;
};

const getDevResponse = async (type: "SAFE" | "SCAM"): Promise<AnalysisResult> => {
  await new Promise(r => setTimeout(r, 1000));
  if (type === "SAFE") return { verdict: Verdict.SAFE, riskScore: 1, scamType: "None", redFlags: [], analysis: "Clean (Dev Mode)", educationalTip: "Stay vigilant!", senderEntity: "Safe Sender" };
  return { verdict: Verdict.HIGH_RISK, riskScore: 9, scamType: "Bank Phishing", redFlags: ["Urgency"], analysis: "High Risk (Dev Mode)", educationalTip: "Don't click!", senderEntity: "Fake Bank" };
};
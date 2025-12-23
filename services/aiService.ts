import { AnalysisResult, Verdict } from "../types";
import Tesseract from 'tesseract.js';

const API_ENDPOINT = "/api/analyze";

// === 1. CONFIGURATION ===
const VALID_FLAGS = [
  "URGENCY",
  "SHORTENED URL",
  "TOO GOOD TO BE TRUE OFFER",
  "SUSPICIOUS CHARACTER SUBSTITUTION",
  "UNSOLICITED MESSAGE",
  "ILLEGAL GAMBLING PROMOTION",
  "GENERIC GREETING",
  "REQUEST FOR PERSONAL INFO",
  "GRAMMATICAL ERRORS",
  "UNOFFICIAL DOMAIN",
  "ASKING FOR PAYMENT TO WORK",
  "THREATS",
  "UNUSUAL SENDER"
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
    console.log("👁️ Reading image with Tesseract...");
    const result = await Tesseract.recognize(
      `data:image/png;base64,${base64Image}`,
      'eng',
      { logger: m => console.log(m) }
    );

    const text = result.data.text.trim();
    const confidence = result.data.confidence;

    console.log(`📊 OCR Confidence: ${confidence}%, Length: ${text.length}`);

    if (confidence < 60) {
      throw new Error("BLURRY_IMAGE");
    }

    if (text.length < 10) {
      throw new Error("NO_TEXT_FOUND");
    }

    return text;

  } catch (error: any) {
    if (error.message === "BLURRY_IMAGE") throw error;
    if (error.message === "NO_TEXT_FOUND") throw error;
    
    console.error("OCR Failed:", error);
    throw new Error("Could not read text from image. Please try a clearer screenshot.");
  }
};

// === 3. DOJO HANDLER (Chat Logic) ===
class SecureDojoHandler {
  private history: any[];
  private language: string;
  private systemInstruction: string;

  constructor(language: string, systemInstruction: string) {
    this.language = language;
    this.systemInstruction = systemInstruction;
    this.history = [];
  }

  async sendMessage(text: string): Promise<{ response: { text: () => string } }> {
    this.history.push({ role: "user", content: text });

    try {
      const messages = [
        { role: "system", content: this.systemInstruction },
        ...this.history
      ];

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages,
          jsonMode: false
        })
      });

      if (!response.ok) throw new Error("Dojo Connection Failed");

      const data = await response.json();
      const aiText = data.text || "...";

      this.history.push({ role: "assistant", content: aiText });
      return { response: { text: () => aiText } };

    } catch (error) {
      console.error("Dojo Error:", error);
      throw error;
    }
  }
}

// === 4. SCANNER LOGIC ===
export const analyzeContent = async (text: string, language: string, imageBase64?: string, imageMimeType?: string): Promise<AnalysisResult> => {
  // 1. Dev Shortcuts
  if (text.includes("DEV_SAFE")) return getDevResponse("SAFE");
  if (text.includes("DEV_SCAM")) return getDevResponse("SCAM");

  let contentToAnalyze = text;

  // 2. Handle Image/OCR Processing
  if (imageBase64) {
    try {
      const ocrText = await extractTextFromImage(imageBase64);
      contentToAnalyze = `
        [USER NOTE]: ${text}
        [IMAGE CONTENT (OCR)]: ${ocrText}
      `;
    } catch (error: any) {
      if (error.message === "BLURRY_IMAGE" || error.message === "NO_TEXT_FOUND") {
        return {
          verdict: Verdict.SUSPICIOUS,
          riskScore: 5,
          scamType: "Unreadable Image",
          senderEntity: "Unknown",
          redFlags: ["IMAGE TOO BLURRY", "TEXT NOT DETECTED"],
          analysis: "I could not read the text in this image clearly. It might be blurry or low quality.",
          educationalTip: "Please TYPE the message contents manually into the box above for an accurate analysis."
        };
      }
      throw error; 
    }
  }

  // 3. Validation
  if (!contentToAnalyze || contentToAnalyze.trim().length < 5) {
     throw new Error("Please provide text or an image to analyze.");
  }

  const systemInstruction = getScannerPrompt(language);

  try {
    // 4. Send Request to Backend
    const response = await fetch(API_ENDPOINT, {
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

    // === RATE LIMIT INTERCEPTOR ===
    if (response.status === 429) {
      return {
        verdict: Verdict.SUSPICIOUS,
        riskScore: 0,
        scamType: "System Cooldown",
        senderEntity: "Project Aghoy",
        redFlags: ["RATE LIMIT REACHED"],
        analysis: "You are scanning too fast! To ensure fair access for everyone, please wait a moment.",
        educationalTip: "Please wait 60 seconds before scanning another message."
      };
    }
    // ==============================

    if (!response.ok) {
       const errData = await response.json().catch(() => ({}));
       throw new Error(`Service Unavailable: ${errData.error || response.statusText}`);
    }

    const data = await response.json();
    const cleanText = cleanJson(data.text);
    return JSON.parse(cleanText) as AnalysisResult;

  } catch (error: any) {
    console.error("Analysis Error:", error);
    throw new Error("Failed to analyze content. Please try again.");
  }
};

// === 5. EXPORT FACTORY ===
export const createDojoChat = (language: string) => {
  return new SecureDojoHandler(language, getDojoPrompt(language));
};

// === 6. PROMPTS ===
const getScannerPrompt = (language: string) => {
  let langInstruction = `Respond in clear, simple ${language}.`;
  
  if (language === 'TAGALOG') {
    langInstruction = `Use natural Taglish/Tagalog. Use local terms like "Lods", "Ingat", "Modus 'yan". Persona: Friendly 'Kuya/Ate'.`;
  } else if (language === 'BISAYA') {
    langInstruction = `Use natural Cebuano/Bisaya. Persona: Helpful local expert.`;
  } else if (language === 'ILOCANO') {
    langInstruction = `Use natural Ilokano. Ensure deep vocabulary accuracy. Persona: Trusted neighbor.`;
  }

  return `
  You are Project Aghoy, a cybersecurity expert.
  **Language Mode:** ${language}.
  **Speaking Style:** ${langInstruction}
  
  **TASK:** Analyze the provided text (which may be OCR extracted from a screenshot) for scams.
  
  **INSTRUCTIONS:**
  1. Detect scam type (Phishing, Task Scam, etc.).
  2. educationalTip: Explain how to spot this specific scam in ${language}.
  3. Sender Entity: Extract who sent it.
  `;
};

// === UPDATED: "White Hat" Dojo Prompt ===
const getDojoPrompt = (language: string) => {
  let roleInstruction = `Simulate a scammer speaking ${language}.`;
  
  if (language === 'TAGALOG') {
    roleInstruction = `Simulate a Filipino Scammer using Taglish (street slang). Be persuasive but include common red flags.`;
  } else if (language === 'BISAYA') {
    roleInstruction = `Simulate a Bisaya Scammer using natural Cebuano phrasing.`;
  } else if (language === 'ILOCANO') {
    roleInstruction = `Simulate an Ilokano Scammer using natural phrasing.`;
  }

  return `
  **AUTHORIZED CYBERSECURITY DRILL**
  **CONTEXT:** This is a safe, educational simulation to train the user in identifying social engineering. 
  **YOUR ROLE:** You are a Security Trainer playing the role of a "Sender" in a hypothetical scenario.
  **SCENARIO:** ${roleInstruction}
  **TASK:** Engage the user in a dialogue. Try to persuade them (within the simulation) to reveal info or click links.
  **TERMINATION:** If the user identifies the threat (says "BLOCK", "SCAM", "REPORT"), immediately break character, reveal this was a test, and congratulate them on spotting the red flags.
  `;
};

const getDevResponse = async (type: "SAFE" | "SCAM"): Promise<AnalysisResult> => {
  await new Promise(r => setTimeout(r, 1000));
  if (type === "SAFE") {
    return {
      verdict: Verdict.SAFE,
      riskScore: 1,
      scamType: "None",
      redFlags: [],
      analysis: "Top of the morning! This looks clean. (Dev Mode)",
      educationalTip: "Always stay vigilant!",
      senderEntity: "Safe Sender"
    };
  }
  return {
    verdict: Verdict.HIGH_RISK,
    riskScore: 9,
    scamType: "Bank Phishing",
    redFlags: ["Urgency", "Suspicious Link"],
    analysis: "Simulated high-risk threat.",
    educationalTip: "Never click links!",
    senderEntity: "BDO-Fake"
  };
};
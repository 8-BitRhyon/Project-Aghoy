import { GoogleGenAI, Type, Schema, Chat } from "@google/genai";
import { AnalysisResult, Verdict } from "../types";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

if (!API_KEY) {
  console.error("Missing VITE_GEMINI_API_KEY. Check your .env file.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    verdict: {
      type: Type.STRING,
      enum: [Verdict.SAFE, Verdict.SUSPICIOUS, Verdict.HIGH_RISK],
      description: "The safety classification of the text or image.",
    },
    riskScore: {
      type: Type.NUMBER,
      description: "A risk score from 0 (Safe) to 10 (Extremely Dangerous).",
    },
    scamType: {
      type: Type.STRING,
      description: "The specific category of scam detected (e.g., 'Task Scam', 'Phishing', 'Investment Scam', 'Love Scam'). If safe, use 'None'.",
    },
    senderEntity: {
      type: Type.STRING,
      description: "The specific phone number, email, or company name claiming to send the message. Extract from the input if available.",
    },
    redFlags: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of specific indicators found (e.g., 'Urgency', 'Bad Grammar', 'Fake Receipt').",
    },
    analysis: {
      type: Type.STRING,
      description: "A direct explanation of the findings. MUST match the language/dialect requested.",
    },
    educationalTip: {
      type: Type.STRING,
      description: "A 'Tutor-style' tip on how to avoid this specific scam. MUST match the language/dialect requested.",
    },
  },
  required: ["verdict", "riskScore", "redFlags", "analysis", "scamType", "educationalTip"],
};

export const analyzeContent = async (text: string, language: string, imageBase64?: string, imageMimeType?: string): Promise<AnalysisResult> => {
  
  if (text.includes("DEV_SAFE")) {
    await new Promise(r => setTimeout(r, 1000));
    return {
      verdict: Verdict.SAFE,
      riskScore: 1,
      scamType: "None",
      redFlags: [],
      analysis: "Top of the morning! This looks clean. (Dev Mode)",
      educationalTip: "Always stay vigilant, even when testing code!",
      senderEntity: "Safe Sender"
    };
  }

  if (text.includes("DEV_SCAM")) {
    await new Promise(r => setTimeout(r, 1500));
    return {
      verdict: Verdict.HIGH_RISK,
      riskScore: 9,
      scamType: "Bank Phishing",
      redFlags: ["Urgency", "Suspicious Link", "Grammar"],
      analysis: "This is a simulated high-risk threat for UI testing.",
      educationalTip: "Never click links from unknown numbers! (Dev Mode)",
      senderEntity: "BDO-Fake"
    };
  }

  const systemInstruction = `
    You are Project Aghoy, a friendly and helpful Filipino cybersecurity tutor and expert.

    **USER LANGUAGE SETTING: ${language}**

    **CORE INSTRUCTION:**
    - Your output fields 'analysis' and 'educationalTip' **MUST BE WRITTEN IN ${language}**.
    - If ${language} is 'TAGALOG', use natural Taglish/Tagalog (e.g. "Lods", "Ingat", "Modus 'yan").
    - If ${language} is 'BISAYA', use Cebuano/Bisaya.
    - If ${language} is 'ILOCANO', use Ilokano.
    - If ${language} is 'ENGLISH', use clear, simple English.

    **PERSONA:**
    - Acts as a 'Kuya/Ate' IT expert. Helpful, protective, but not overly formal.

    **ANALYSIS TASKS:**
    1. Identify the scam type (Task Scam, Phishing, Investment, etc.).
    2. **educationalTip**: This is your "Tutor Mode". Explain *specifically* how this scam works and how to catch it next time in the requested language.
    3. **Sender Entity**: Extract the name, number, or email. If none, use 'Unknown'.

    **OUTPUT RULES:**
    - If "HIGH_RISK", explicitly warn the user.
    - STRICTLY return JSON fitting the schema.
  `;

  try {
    const parts: any[] = [];
    
    if (imageBase64 && imageMimeType) {
      parts.push({
        inlineData: {
          data: imageBase64,
          mimeType: imageMimeType
        }
      });
    }

    if (text) {
      parts.push({
        text: text
      });
    }

    if (parts.length === 0) {
       throw new Error("Please provide text or an image to analyze.");
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{
        role: 'user',
        parts: parts
      }],
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.4,
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No response text received.");
    }

    const result = JSON.parse(jsonText) as AnalysisResult;
    return result;

  } catch (error: any) {
    console.error("Analysis Error:", error);

    const errString = error?.message || error?.toString() || JSON.stringify(error);
    if (errString.includes("429") || errString.includes("quota") || errString.includes("RESOURCE_EXHAUSTED")) {
      throw new Error("429: RESOURCE_EXHAUSTED");
    }

    throw new Error("Failed to analyze the content. Please try again or check if your input is valid.");
  }
};

export const createDojoChat = (language: string): Chat => {
  const systemInstruction = `
    You are the "Scam Simulator AI". Your goal is to test the user's ability to detect scams in a safe environment.

    **USER LANGUAGE SETTING: ${language}**
    **IMPORTANT:** You MUST speak and respond in **${language}**.

    **ROLE:**
    You act as a typical Filipino Scammer. You can be:
    1. A "Bank Representative" asking for OTP.
    2. A "Job Recruiter" offering easy money.
    3. A "Relative" in an emergency.

    **WIN/LOSS CONDITIONS:**
    1. **WIN:** If user says "Block", "Scam", "Report".
    2. **LOSS:** If user sends money or OTP.
  `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
};

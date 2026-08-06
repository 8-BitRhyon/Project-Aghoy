import { AnalysisResult, Verdict } from "../types";
import { redactPII } from "../src/rejects/rejects";
import { detectBrands, detectIntents, fallbackVerdict, BrandMatch } from "../src/brands/brands";
import { postReport, lookupIndicator, ReportPayload } from "../src/api/storageClient";

// vite/client types are not in tsconfig.json, so import.meta.env is declared
// locally.
declare global {
  interface ImportMeta {
    readonly env: { readonly DEV: boolean; readonly BASE_URL: string };
  }
}

const API_ENDPOINT = "/api/analyze";
const FETCH_TIMEOUT_MS = 30000;
const MAX_DOJO_HISTORY = 6;
const MAX_ASSISTANT_TEXT = 2000;

const WORKER_ORIGIN = "https://project-aghoy-dojo.rhyonfs.workers.dev";
const DOJO_SCENARIO = "A GCash OTP scammer trying to get you to share a verification code";

const VALID_FLAGS = [
  "TASK_SCAM",
  "OTP_SHARING",
  "PARCEL_FEE",
  "IMPERSONATION",
  "ADVANCE_FEE",
  "QUISHING",
  "PAYMENT_TO_UNLOCK",
  "FAKE_REWARD",
  "LOOKALIKE_SENDER",
  "LOOKALIKE_DOMAIN",
  "VISHING_CALL",
  "MONEY_MULE",
  "FAKE_SUPPORT",
  "ACCOUNT_HIJACK_EMERGENCY",
  "SIM_REGISTRATION_PRETEXT",
  "FAMILY_EMERGENCY",
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

type TesseractModule = typeof import("tesseract.js");
type OcrWorker = Awaited<ReturnType<TesseractModule["createWorker"]>>;

// All OCR assets are SELF-HOSTED under /ocr/ so nothing is fetched from a
// third-party CDN at runtime (CSP blocks the CDN importScripts anyway).
let ocrWorkerPromise: Promise<OcrWorker> | null = null;

const OCR_WORKER_PATH = `${import.meta.env.BASE_URL}ocr/worker.min.js`;
const OCR_CORE_PATH = `${import.meta.env.BASE_URL}ocr/`;
const OCR_LANG_PATH = `${import.meta.env.BASE_URL}ocr/`;

const getOcrWorker = (): Promise<OcrWorker> => {
  if (!ocrWorkerPromise) {
    ocrWorkerPromise = import("tesseract.js").then((Tesseract) =>
      Tesseract.createWorker("eng", 1, {
        workerPath: OCR_WORKER_PATH,
        corePath: OCR_CORE_PATH,
        langPath: OCR_LANG_PATH,
      })
    );
    ocrWorkerPromise.catch(() => {
      ocrWorkerPromise = null;
    });
  }
  return ocrWorkerPromise;
};

// Browsers reap workers on navigation; still try to release the worker early.
if (typeof window !== "undefined") {
  window.addEventListener("pagehide", () => {
    if (ocrWorkerPromise) {
      const workerPromise = ocrWorkerPromise;
      ocrWorkerPromise = null;
      workerPromise.then((worker) => worker.terminate()).catch(() => {});
    }
  });
}

const extractTextFromImage = async (base64Image: string, mime?: string): Promise<string> => {
  try {
    if (import.meta.env.DEV) {
      console.log("Reading image with Tesseract...");
    }
    const worker = await getOcrWorker();
    const result = await worker.recognize(
      `data:${mime || "image/png"};base64,${base64Image}`
    );

    const text = result.data.text.trim();
    const confidence = result.data.confidence;

    if (import.meta.env.DEV) {
      console.log(`OCR Confidence: ${confidence}%, Length: ${text.length}`);
    }

    if (confidence < 60) {
      throw new Error("BLURRY_IMAGE");
    }

    if (text.length < 10) {
      throw new Error("NO_TEXT_FOUND");
    }

    return text;

  } catch (error) {
    if (error instanceof Error && (error.message === "BLURRY_IMAGE" || error.message === "NO_TEXT_FOUND")) {
      throw error;
    }

    if (import.meta.env.DEV) {
      console.error("OCR Failed:", error instanceof Error ? error.message : "unknown error");
    }
    throw new Error("Could not read text from image. Please try a clearer screenshot.");
  }
};

// postReport is fire-and-forget; this second, dedupe-safe POST captures the
// Vectorize similarity hits from the /reports response.
const fetchSimilarScams = async (payload: ReportPayload): Promise<Array<{ id: string; score: number }>> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const res = await fetch(`${WORKER_ORIGIN}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!res.ok) return [];
      const data = (await res.json()) as { similar?: Array<{ id: string; score: number }> };
      // Only surface genuinely close hits so an unrelated SAFE scan does not read as a "known scam pattern".
      return Array.isArray(data.similar) ? data.similar.filter((m) => m.score >= 0.5) : [];
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return [];
  }
};

// Only pre-computed SHA-256 hashes are ever sent to the Worker, never raw numbers.
const reportedPhoneCount = async (phoneHashes: string[]): Promise<number> => {
  if (!phoneHashes.length) return 0;
  const status = await withTimeout(lookupIndicator("phone", phoneHashes[0]), 5000);
  if (!status || !status.found) return 0;
  return status.times_reported || 0;
};

// A hung storage lookup must never block the scan result indefinitely.
const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T | null> => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<null>((resolve) => { timer = setTimeout(() => resolve(null), ms); }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
};

// Best-effort: any storage failure degrades to the plain result, never to an error.
const withStorageSignals = async (
  base: AnalysisResult,
  payload: ReportPayload,
  phoneHashes: string[]
): Promise<AnalysisResult> => {
  const [similarScams, phoneCount] = await Promise.all([
    withTimeout(fetchSimilarScams(payload), 8000) ?? [],
    reportedPhoneCount(phoneHashes),
  ]);
  return {
    ...base,
    similarScams: (similarScams || []).length ? similarScams : undefined,
    reportedPhone: (phoneCount || 0) >= 2 ? { count: phoneCount || 0 } : undefined,
  };
};

export interface DojoSendResult {
  response: { text: () => string };
  health?: number;
  gameOver?: boolean;
}

// Fallback engine POSTs to /api/analyze with a simulated scammer prompt when the Worker engine is unreachable.
class SecureDojoHandler {
  private history: any[];
  private language: string;
  private systemInstruction: string;

  constructor(language: string, systemInstruction: string) {
    this.language = language;
    this.systemInstruction = systemInstruction;
    this.history = [];
  }

  async sendMessage(text: string): Promise<DojoSendResult> {
    // Redact PII before it leaves the browser; server-side is authoritative.
    const userMessage = { role: "user", content: redactPII(text).text };
    this.history.push(userMessage);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      // Keep only the 6 most recent messages so the request stays under the server's message cap.
      this.history = this.history.slice(-MAX_DOJO_HISTORY);

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
        }),
        signal: controller.signal
      });

      if (!response.ok) throw new Error("Dojo Connection Failed");

      const data = (await response.json()) as { text?: string };
      const aiText = (data.text || "...").slice(0, MAX_ASSISTANT_TEXT);

      this.history.push({ role: "assistant", content: aiText });
      return { response: { text: () => aiText } };

    } catch (error) {
      console.error("Dojo Error:", error);
      // Roll back the user message so a retry does not duplicate it.
      this.history = this.history.filter(m => m !== userMessage);
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

// Thrown when the Worker engine is unreachable or misconfigured (503, network,
// CORS); DojoChat catches it and degrades to /api/analyze.
class DojoUnavailableError extends Error {}

// Worker DojoSession engine: /dojo/session mints a signed token, /dojo/start
// boots the scenario, /dojo/chat advances it (see src/worker/dojo.ts).
class WorkerDojoHandler {
  private language: string;
  private sessionToken: string | null = null;
  private started = false;

  constructor(language: string) {
    this.language = language;
  }

  // Returns false when the Worker is unreachable or returns 503 (SESSION_SIGNING_KEY unset), so the caller picks the fallback.
  async init(): Promise<boolean> {
    try {
      const res = await fetch(`${WORKER_ORIGIN}/dojo/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) return false;
      const data = (await res.json()) as { sessionToken?: string };
      if (!data.sessionToken) return false;
      this.sessionToken = data.sessionToken;
      return true;
    } catch {
      return false;
    }
  }

  async sendMessage(text: string): Promise<DojoSendResult> {
    let token = this.sessionToken;
    if (!token) throw new DojoUnavailableError("Dojo session unavailable");

    const path = this.started ? "/dojo/chat" : "/dojo/start";
    const body: Record<string, string> = this.started
      ? { message: text, sessionToken: token }
      : { scenario: DOJO_SCENARIO, language: this.language, sessionToken: token };

    let res = await this.post(path, body, token);

    // 401: token expired or signing key rotated. Re-mint and retry once; the
    // fresh token owns a fresh Durable Object, so re-run /dojo/start then
    // replay the user's message.
    if (res.status === 401) {
      const reMinted = await this.init();
      token = this.sessionToken;
      if (!reMinted || !token) throw new DojoUnavailableError("Dojo session re-mint failed");
      res = await this.post("/dojo/start", {
        scenario: DOJO_SCENARIO,
        language: this.language,
        sessionToken: token,
      }, token);
      if (res.ok && path === "/dojo/chat") {
        res = await this.post(path, { message: text, sessionToken: token }, token);
      }
    }

    return this.toResult(res);
  }

  private async post(path: string, body: Record<string, string>, token: string): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      // The Worker reads the token from the X-Session-Token header or the sessionToken body field.
      return await fetch(`${WORKER_ORIGIN}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Session-Token": token },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    } catch (error) {
      // Network death/abort = engine unreachable; classify as DojoUnavailableError so the caller degrades to /api/analyze.
      throw new DojoUnavailableError("Dojo worker unreachable");
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async toResult(res: Response): Promise<DojoSendResult> {
    if (res.status === 503) {
      throw new DojoUnavailableError("Dojo unavailable (server misconfigured)");
    }
    if (res.status === 429) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      throw new Error(`429: Too many requests. ${data.error || "Please wait a moment before continuing."}`);
    }
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      throw new Error(`Dojo Connection Failed: ${data.error || res.statusText}`);
    }
    const data = (await res.json()) as { text?: string; health?: number; gameOver?: boolean };
    this.started = true;
    const text = (data.text || "...").slice(0, MAX_ASSISTANT_TEXT);
    return { response: { text: () => text }, health: data.health, gameOver: !!data.gameOver };
  }
}

// Uses the Worker engine when reachable, else /api/analyze; a fresh instance
// per game rotates the session token on reset.
class DojoChat {
  private language: string;
  private worker: WorkerDojoHandler | null = null;
  private fallback: SecureDojoHandler | null = null;

  constructor(language: string) {
    this.language = language;
  }

  async sendMessage(text: string): Promise<DojoSendResult> {
    if (this.fallback) return this.fallback.sendMessage(text);

    if (!this.worker) {
      const candidate = new WorkerDojoHandler(this.language);
      if (!(await candidate.init())) {
        this.fallback = new SecureDojoHandler(this.language, getDojoPrompt(this.language));
        return this.fallback.sendMessage(text);
      }
      this.worker = candidate;
    }

    try {
      return await this.worker.sendMessage(text);
    } catch (error) {
      if (error instanceof DojoUnavailableError) {
        // Worker died mid-game: hand the conversation to /api/analyze and replay this message.
        this.worker = null;
        this.fallback = new SecureDojoHandler(this.language, getDojoPrompt(this.language));
        return this.fallback.sendMessage(text);
      }
      throw error;
    }
  }
}

const sha256Hex = async (text: string): Promise<string> => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
};

// Hash PH mobiles in RAW text (before Rejects redaction) so the "reported N times" blacklist works without storing the number.
const PH_MOBILE_RE = /(?<!\d)(?:\+63|0)9\d{9}(?!\d)/g;
const phoneHashesFromText = async (text: string): Promise<string[]> => {
  const matches = (text || "").match(PH_MOBILE_RE) || [];
  const hashes = new Set<string>();
  for (const m of matches) {
    hashes.add(await sha256Hex(m.replace(/[\s-]/g, "")));
    if (hashes.size >= 10) break;
  }
  return Array.from(hashes);
};

// The brand layer is authoritative for victim-support routing: it can never
// fall through to the default PNP-ACG card when a real brand is mentioned.
const enrichResult = (result: AnalysisResult, contentToAnalyze: string): AnalysisResult => {
  const matchedBrands = detectBrands({
    text: contentToAnalyze,
    senderEntity: result.senderEntity,
    scamType: result.scamType,
    redFlags: result.redFlags,
    limit: 3,
  });
  const intents = detectIntents(contentToAnalyze);
  return { ...result, matchedBrands, intents };
};

export const analyzeContent = async (text: string, language: string, imageBase64?: string, imageMimeType?: string): Promise<AnalysisResult> => {
  if (import.meta.env.DEV) {
    if (text.includes("DEV_SAFE")) return getDevResponse("SAFE");
    if (text.includes("DEV_SCAM")) return getDevResponse("SCAM");
  }

  let contentToAnalyze = text;

  if (imageBase64) {
    try {
      const ocrText = await extractTextFromImage(imageBase64, imageMimeType);
      contentToAnalyze = `
        [USER NOTE]: ${text}
        [IMAGE CONTENT (OCR)]: ${ocrText}
      `;
    } catch (error: any) {
      if (error.message === "BLURRY_IMAGE" || error.message === "NO_TEXT_FOUND") {
        const fallback = fallbackVerdict(text);
        const verdict: Verdict = fallback?.verdict as Verdict || Verdict.SUSPICIOUS;
        return {
          verdict,
          riskScore: fallback ? fallback.riskScore : 5,
          scamType: fallback ? fallback.scamType : "Unreadable Image",
          senderEntity: fallback?.matchedBrands?.[0]?.key || "Unknown",
          redFlags: fallback ? fallback.redFlags : ["IMAGE TOO BLURRY", "TEXT NOT DETECTED"],
          analysis: fallback
            ? fallback.analysis
            : "I could not read the text in this image clearly. It might be blurry or low quality.",
          educationalTip: fallback
            ? fallback.educationalTip
            : "Please TYPE the message contents manually into the box above for an accurate analysis.",
          matchedBrands: fallback?.matchedBrands,
          intents: fallback?.intents,
        };
      }
      throw error; 
    }
  }

  if (!contentToAnalyze || contentToAnalyze.trim().length < 5) {
     throw new Error("Please provide text or an image to analyze.");
  }

  // Redact PII before it leaves the browser; server-side is authoritative.
  const rejectedContent = redactPII(contentToAnalyze);
  contentToAnalyze = rejectedContent.text;

  // Re-validate after redaction: if every token got replaced, nothing remains.
  if (contentToAnalyze.trim().length < 5) {
    throw new Error("Please provide text or an image to analyze.");
  }

  const systemInstruction = getScannerPrompt(language);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemInstruction + JSON_STRUCTURE_PROMPT },
          { role: "user", content: contentToAnalyze }
        ],
        jsonMode: true
      }),
      signal: controller.signal
    });

    // Throw instead of fabricating a verdict so App.tsx surfaces the cooldown and never counts it in stats/history.
    if (response.status === 429) {
      throw new Error("429: daily quota reached. Please wait 60 seconds before scanning another message.");
    }

    if (!response.ok) {
       const errData = await response.json().catch(() => ({})) as { error?: string };
       throw new Error(`Service Unavailable: ${errData.error || response.statusText}`);
    }

    const data = (await response.json()) as { text: string };
    const cleanText = cleanJson(data.text);

    let result: AnalysisResult;
    try {
      result = JSON.parse(cleanText) as AnalysisResult;
    } catch {
      // Minimal repair: extract the first {...} block from the raw model output.
      const firstOpen = data.text.indexOf("{");
      const lastClose = data.text.lastIndexOf("}");
      const repaired = firstOpen !== -1 && lastClose !== -1
        ? data.text.substring(firstOpen, lastClose + 1)
        : "";
      try {
        result = JSON.parse(repaired) as AnalysisResult;
      } catch {
        throw new Error("The analysis service returned an unreadable response. Please try again.");
      }
    }

    const enriched = enrichResult(result, contentToAnalyze);
    // Hash phones from both the user note and OCR text so the blacklist works for screenshot scans.
    const ocrText = imageBase64 ? contentToAnalyze.match(/\[IMAGE CONTENT \(OCR\)\]:\s*([\s\S]*?)\s*$/) : null;
    const phoneHashes = await phoneHashesFromText(`${text} ${ocrText ? ocrText[1] : ""}`);
    const reportPayload: ReportPayload = {
      verdict: enriched.verdict,
      riskScore: enriched.riskScore,
      scamType: enriched.scamType || "None",
      redFlags: enriched.redFlags || [],
      content: contentToAnalyze,
      provider: "cerebras/groq",
      source: "web",
      phoneHashes,
    };
    postReport(reportPayload);
    // Best-effort: storage failures degrade to the plain result, never to an error.
    return withStorageSignals(enriched, reportPayload, phoneHashes);

  } catch (error: any) {
    // Deterministic fallback when the AI provider is unavailable: never leave the user without a verdict.
    if (!error?.message || !/429|quota|exhausted/i.test(String(error.message))) {
      const fallback = fallbackVerdict(contentToAnalyze || text);
      if (fallback) {
        postReport({
          verdict: fallback.verdict,
          riskScore: fallback.riskScore,
          scamType: fallback.scamType,
          redFlags: fallback.redFlags,
          content: contentToAnalyze,
          provider: "brandIntel",
          source: "web",
        });
        return fallback as AnalysisResult;
      }
    }
    console.error("Analysis Error:", error);
    // Let rate-limit errors through so App.tsx renders the cooldown state.
    if (error?.message && /429|quota|exhausted/i.test(String(error.message))) {
      throw error;
    }
    throw new Error("Failed to analyze content. Please try again.");
  } finally {
    clearTimeout(timeoutId);
  }
};

export const createDojoChat = (language: string) => {
  return new DojoChat(language);
};

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
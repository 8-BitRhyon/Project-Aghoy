// On-device scam classifier (TinyBERT ONNX int8, transformers.js, fully offline): second opinion, escalates only, lazy-loaded.

import { pipeline, env } from "@huggingface/transformers";
import { Verdict } from "../types";

// Self-hosted model + ORT wasm (no third-party CDN at runtime; CSP script-src 'self').
env.allowLocalModels = true;
env.useBrowserCache = true;
// wasmPaths must be an OBJECT {wasm, mjs}: a directory string skips the pre-load and falls back to the CSP-blocked CDN.
const onnxWasm = env.backends?.onnx?.wasm as { wasmPaths?: unknown; proxy?: boolean } | undefined;
if (onnxWasm) {
  onnxWasm.wasmPaths = {
    wasm: "/ort-wasm/ort-wasm-simd-threaded.asyncify.wasm",
    mjs: "/ort-wasm/ort-wasm-simd-threaded.asyncify.mjs",
  };
} else {
  console.warn("[classifier] onnx wasm backend missing - wasmPaths not set; inference may be CSP-blocked");
}
export const ORT_WASM_DIR = "/ort-wasm";

export const MODEL_DIR = "/models/tinybert-v1";
export const MODEL_ID = `${MODEL_DIR}`;
// dtype suffix q8 => "_quantized": base "model" resolves to onnx/model_quantized.onnx.
export const MODEL_FILE_NAME = "model";
// Three-zone policy: p >= 0.28 flags+escalates, p <= 0.15 confident legit (never escalated), in between abstains.
export const MODEL_THRESHOLD = 0.28; // tuned on validation fold (tinybert-v1)
export const MODEL_CONFIDENT_LEGIT_FLOOR = 0.15;

export interface ClassifierVerdict {
  scamProb: number;
  flag: boolean; // scamProb >= MODEL_THRESHOLD
  confidentLegit: boolean; // scamProb <= MODEL_CONFIDENT_LEGIT_FLOOR
  loaded: boolean;
}

let classifierPromise: Promise<any> | null = null;

// Lazy singleton; resets on failure so a transient load error retries next scan. Never throws - returns null to fall through to the deterministic path.
export const getClassifier = (): Promise<any | null> => {
  if (!classifierPromise) {
    classifierPromise = (async () => {
      try {
        // The committed model_quantized.onnx is already int8; transformers.js
        // picks it up by filename. dtype: "q8" pins the runtime dtype so it is
        // never re-quantized to fp32 in memory on weak devices.
        const cls = await pipeline("text-classification", MODEL_ID, {
          dtype: "q8",
          model_file_name: MODEL_FILE_NAME,
        });
        return cls;
      } catch (err) {
        console.error("[classifier] load failed:", err);
        classifierPromise = null; // allow a retry on the next scan
        return null;
      }
    })();
  }
  return classifierPromise;
};

export const clearClassifier = (): void => {
  classifierPromise = null;
};

// Pure fusion: p >= threshold escalates to SUSPICIOUS, p <= floor never escalates, between = abstain.
export const fuseModelWithVerdict = (
  currentVerdict: Verdict,
  scamProb: number,
  opts: { threshold?: number; floor?: number } = {}
): Verdict => {
  const threshold = opts.threshold ?? MODEL_THRESHOLD;
  const floor = opts.floor ?? MODEL_CONFIDENT_LEGIT_FLOOR;
  // Never downgrade: HIGH_RISK stays.
  if (currentVerdict === Verdict.HIGH_RISK) return Verdict.HIGH_RISK;
  // A confident legit call is never escalated by the model.
  if (scamProb <= floor) return currentVerdict;
  // Model flag: escalate to SUSPICIOUS (never HIGH_RISK - the deterministic
  // engine or the server does that; this keeps the false-positive budget).
  if (scamProb >= threshold) return Verdict.SUSPICIOUS;
  // Uncertain mid-band: abstain.
  return currentVerdict;
};

export const classifyText = async (text: string): Promise<ClassifierVerdict | null> => {
  try {
    const cls = await getClassifier();
    if (!cls) return null;
    const result = await cls(text, { topk: 2 });
    const scam = (Array.isArray(result) ? result : [result]).find(
      (r: any) => r.label === "SCAM"
    );
    if (!scam) return null;
    const scamProb = Number(scam.score);
    return {
      scamProb,
      flag: scamProb >= MODEL_THRESHOLD,
      confidentLegit: scamProb <= MODEL_CONFIDENT_LEGIT_FLOOR,
      loaded: true,
    };
  } catch (err) {
    console.error("[classifier] inference failed:", err);
    return null;
  }
};

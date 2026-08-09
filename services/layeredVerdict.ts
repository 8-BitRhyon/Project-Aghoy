// Weighted multi-layer fusion: each layer adds evidence (no hard vetoes), verdict from the sum. Pure + testable.

import { Verdict } from "../types";

export const LAYER_WEIGHTS = {
  deterministicEngine: 1.0, // brand/intent engine - strongest positive signal
  model: 1.0, // on-device TinyBERT scam probability
  url: 0.8, // link grade (suspicious vs official)
  sender: 1.5, // trusted sender - strongest negative signal
  blacklist: 1.2, // community-reported phone/domain
} as const;

// Model layer uses a sigmoid centered on the F1-optimal holdout threshold (0.90): overconfident below, sharp above.
export const MODEL_SIGMOID_CENTER = 0.9;
export const MODEL_SIGMOID_STEEPNESS = 18;

export const modelContribution = (p: number): number => {
  // logistic(x) = 1/(1+e^-x) with x scaled so center -> 0.
  const x = (p - MODEL_SIGMOID_CENTER) * MODEL_SIGMOID_STEEPNESS;
  return 2 * (1 / (1 + Math.exp(-x)) - 0.5); // -1..+1
};

export interface LayerSignals {
  modelScamProb?: number; // 0..1 from TinyBERT
  engineScore?: number; // 0..10 from fallbackVerdict (null if abstained)
  suspiciousLink?: boolean; // URL grader says SUSPICIOUS_LINK
  officialLink?: boolean; // URL grader says verifiedOfficialDomain
  verifiedSender?: boolean; // sender allowlist matched
  reportedPhone?: boolean; // phone reported >= 2x
  reportedDomain?: boolean; // domain reported >= 1x
}

export interface LayeredVerdict {
  verdict: Verdict;
  riskScore: number; // 0..10
  signals: string[]; // human-readable contributing signals
}

const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));

// Score -> verdict: SAFE <= 3, HIGH_RISK >= 7, otherwise SUSPICIOUS.
export const scoreToVerdict = (score: number): Verdict => {
  if (score <= 3) return Verdict.SAFE;
  if (score >= 7) return Verdict.HIGH_RISK;
  return Verdict.SUSPICIOUS;
};

export const fuseLayers = (signals: LayerSignals): LayeredVerdict => {
  const signalsHit: string[] = [];
  // Neutral midpoint 5: no evidence => SUSPICIOUS (unverified, not guilty).
  // Evidence then moves the score; the verdict emerges from the sum.
  let score = 5.0;

  // Engine: risk only at >=7. Its 3-6 band is 94% FP on PH text (measured 2026-08-09); trusted sender discounts even HIGH_RISK.
  if (signals.engineScore != null && signals.engineScore >= 7) {
    const discount = signals.verifiedSender ? 0.4 : 1.0;
    const contrib = (signals.engineScore - 3) * 0.8;
    score += LAYER_WEIGHTS.deterministicEngine * contrib * discount;
    signalsHit.push(`engine:${signals.engineScore.toFixed(1)}${discount < 1 ? "(trusted-sender discount)" : ""}`);
  }

  // On-device model: calibrated sigmoid contribution (see modelContribution).
  if (signals.modelScamProb != null) {
    score += LAYER_WEIGHTS.model * modelContribution(signals.modelScamProb) * 2.5;
    signalsHit.push(`model:${signals.modelScamProb.toFixed(2)}`);
  }

  // URL layer: suspicious link adds, official link subtracts.
  if (signals.suspiciousLink) {
    score += LAYER_WEIGHTS.url * 2.0;
    signalsHit.push("suspicious-link");
  }
  if (signals.officialLink) {
    score -= LAYER_WEIGHTS.url * 2.0;
    signalsHit.push("official-link");
  }

  // Trusted sender: strongest negative evidence.
  if (signals.verifiedSender) {
    score -= LAYER_WEIGHTS.sender * 2.5;
    signalsHit.push("verified-sender");
  }

  // Community blacklist: strong positive evidence. Capped at SUSPICIOUS per the
  // documented policy - a reported indicator is strong but not conclusive
  // (operators can retract via /indicators/clear), so it must never force
  // HIGH_RISK by itself. The cap only binds when no HIGH_RISK layer (engine
  // >=7 or a confidently-flagged model) is already present - those layers can
  // legitimately produce HIGH_RISK on their own evidence.
  const blacklistHit = signals.reportedPhone || signals.reportedDomain;
  if (signals.reportedPhone) {
    score += LAYER_WEIGHTS.blacklist * 2.5;
    signalsHit.push("reported-phone");
  }
  if (signals.reportedDomain) {
    score += LAYER_WEIGHTS.blacklist * 2.0;
    signalsHit.push("reported-domain");
  }
  const engineHigh = (signals.engineScore ?? 0) >= 7;
  const modelHigh = (signals.modelScamProb ?? 0) >= 0.9;
  if (blacklistHit && !engineHigh && !modelHigh) score = Math.min(score, 6.9);

  const riskScore = clamp(Math.round(score * 10) / 10, 0, 10);
  return { verdict: scoreToVerdict(riskScore), riskScore, signals: signalsHit };
};

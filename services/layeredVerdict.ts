// services/layeredVerdict.ts - weighted multi-layer verdict fusion.
//
// The previous design used hard vetoes: the sender allowlist BLOCKED the model,
// the blacklist FORCED escalation, the URL grade shifted one threshold. Hard
// vetoes are brittle - one wrong allowlist entry or one false-positive report
// can flip a verdict. This refactor treats every signal as EVIDENCE: each layer
// contributes a signed delta to a 0-100 risk score, and the verdict emerges
// from the weighted sum. Layers can still be strong (a verified official
// sender is a large negative delta) but nothing is absolute.
//
// Pure + testable. The caller gathers the signals; this module computes the
// verdict.

import { Verdict } from "../types";

export const LAYER_WEIGHTS = {
  deterministicEngine: 1.0, // brand/intent engine - strongest positive signal
  model: 1.0, // on-device TinyBERT scam probability
  url: 0.8, // link grade (suspicious vs official)
  sender: 1.5, // trusted sender - strongest negative signal
  blacklist: 1.2, // community-reported phone/domain
} as const;

// The on-device model is overconfident in both directions (scams sit at
// p>=0.99, legit at p<=0.14 on the PH holdout). A raw linear transform of the
// probability over-flags legit text. The model layer uses a SIGMOID centered on
// the F1-optimal holdout threshold (0.90): below it the model contributes
// almost nothing, above it the contribution rises steeply. This makes the
// model a *sharp* evidence source instead of a noisy one.
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

// Convert the 0-10 risk score to a verdict. Thresholds are deliberately wide:
// SAFE <= 3, HIGH_RISK >= 7, otherwise SUSPICIOUS.
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

  // Deterministic engine: contributes risk ONLY at HIGH_RISK (>=7). Measured
  // on the PH holdout (2026-08-09 failure hunt): the engine's SUSPICIOUS band
  // (3-6) is 94% false-positive on real PH text (6.3% precision, 11.8% FPR) -
  // its brand-precision bias fires impersonation on ANY brand mention, scoring
  // legit BDO/Globe/TNT marketing as suspicious. Only the >=7 band carries a
  // real signal (clear brand-scams like GCash OTP phishing). Below 7 the
  // engine ABSTAINS (contributes nothing) rather than polluting the score.
  // When a trusted sender is present, even a HIGH_RISK engine call is
  // discounted - the real BDO is allowed to talk about OTP.
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

  // Community blacklist: strong positive evidence.
  if (signals.reportedPhone) {
    score += LAYER_WEIGHTS.blacklist * 2.5;
    signalsHit.push("reported-phone");
  }
  if (signals.reportedDomain) {
    score += LAYER_WEIGHTS.blacklist * 2.0;
    signalsHit.push("reported-domain");
  }

  const riskScore = clamp(Math.round(score * 10) / 10, 0, 10);
  return { verdict: scoreToVerdict(riskScore), riskScore, signals: signalsHit };
};

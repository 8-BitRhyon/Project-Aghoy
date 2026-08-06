// === REPORT QUALITY GATE ===
// Pure, testable validation layer for the public POST /reports endpoint.
// Answers the operator's question: "Is this even a real scam, or are they
// just feeding our database with bullshit?"
//
// Tier 1 (this module): synchronous content + behavior checks that block
// obvious garbage before it touches reputation. Tier 2 (consensus) and Tier 3
// (operator verify/clear) live in storage.ts / the routes.
//
// Rejections are quarantined (not dropped) and the API returns a neutral 200
// so attackers cannot probe the gate.

import { fallbackVerdict } from "../brands/brands";

export type GateAction = "reject" | "suspect" | "accept";

export interface GateInput {
  content: string; // Rejects-sanitized content
  indicators: string[]; // extracted indicator types (domain,url,keyword)
  phoneHashes: string[]; // pre-computed phone hashes
  submitterVerdict: string; // SAFE | SUSPICIOUS | HIGH_RISK
  reporterTrust: number; // 0..1
  isFirstForIndicator: boolean; // first report from this fingerprint on the target
  honeypotHit: boolean; // content contains a decoy indicator
  allowlistedOnly: boolean; // every extracted indicator is allowlisted
  flagMatch: boolean; // indicator matches a brand-lookalike flag pattern
  source: string; // 'web' | 'extension' | 'seed' ...
  maxContentLength: number;
}

export interface GateResult {
  action: GateAction;
  weight: number; // report weight toward reputation (0..1)
  reasons: string[];
}

const MIN_CONTENT_LENGTH = 40;

// Pure gate: no I/O, deterministic. Returns accept/suspect/reject + weight.
export const gateReport = (input: GateInput): GateResult => {
  const reasons: string[] = [];
  const contentLen = (input.content || "").length;

  // --- Hard rejects (Tier 1) ---
  if (contentLen < MIN_CONTENT_LENGTH) {
    return { action: "reject", weight: 0, reasons: ["content_too_short"] };
  }
  if (input.honeypotHit) {
    return { action: "reject", weight: 0, reasons: ["honeypot_hit"] };
  }
  if (input.reporterTrust <= 0) {
    return { action: "reject", weight: 0, reasons: ["reporter_untrusted"] };
  }

  // Verdict-agreement: a submitter claiming HIGH_RISK on content the
  // deterministic engine EXPLICITLY scores as SAFE is suspect. Abstention
  // (fallbackVerdict returns null when the rule engine lacks signal) is NOT a
  // contradiction - many real scams fall below the engine's scoring threshold.
  const deterministic = fallbackVerdict(input.content);
  if (input.submitterVerdict === "HIGH_RISK" && deterministic && deterministic.verdict === "SAFE") {
    return { action: "reject", weight: 0, reasons: ["verdict_contradiction"] };
  }
  if (input.indicators.length === 0 && input.phoneHashes.length === 0) {
    return { action: "reject", weight: 0, reasons: ["no_indicator"] };
  }

  // --- Suspect (accepted but low weight, not feed-visible) ---
  if (input.allowlistedOnly) {
    reasons.push("allowlisted_only");
    return { action: "suspect", weight: 0, reasons };
  }

  // --- Weight computation ---
  let weight = reportWeightFor(input);

  // Extension reports (URL reported from browser: <url>) are structurally
  // low-signal: cap at 0.15 unless corroborated by a flag match.
  if (input.source === "extension" && !input.flagMatch) {
    weight = Math.min(weight, 0.15);
    reasons.push("low_signal_extension");
  }

  // Flag-list (lookalike) matches are the legit-user case we want: boost.
  if (input.flagMatch) {
    weight = Math.min(1, weight * 1.5);
    reasons.push("lookalike_boost");
    return { action: "suspect", weight, reasons };
  }

  if (weight < 0.3) {
    reasons.push("low_weight");
    return { action: "suspect", weight, reasons };
  }
  reasons.push("accepted");
  return { action: "accept", weight, reasons };
};

// Internal: reporter-trust-scaled weight (first voice vs repeat).
const reportWeightFor = (input: GateInput): number => {
  const base = input.isFirstForIndicator
    ? Math.max(input.reporterTrust, 0.15)
    : 0.15 * input.reporterTrust;
  return Math.min(1, base);
};

// Deterministic checks for the risk register's monitoring signal: does the
// submitter's verdict contradict the engine badly enough to flag? Abstention
// (engine returns null) is NOT a contradiction.
export const verdictContradiction = (submitterVerdict: string, content: string): boolean => {
  if (submitterVerdict !== "HIGH_RISK") return false;
  const d = fallbackVerdict(content);
  return !!d && d.verdict === "SAFE";
};

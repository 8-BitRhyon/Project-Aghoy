// === DOMAIN REPUTATION SCORING ===
// Pure, testable scoring logic (no I/O). Fuses crowd evidence (reports),
// verdict mix, recency decay, reporter diversity, Vectorize similarity prior,
// seed weight, and operator status into a 0-10 score with a label.
//
// Inspirations: AbuseIPDB (distinct-user base, time decay, confidence floor),
// PhishTank (verified gate), URLhaus (activity freshness), Google Safe
// Browsing (typed reasons + TTL). Poisoning resistance: per-reporter weight
// cap and a distinct-reporter cap on effective count.

export type ReputationLabel = "NONE" | "LOW" | "SUSPICIOUS" | "HIGH_RISK" | "CRITICAL";

export interface ReputationInputs {
  // Recency-weighted effective report count (after per-reporter caps).
  nEff: number;
  // Estimated distinct reporters (subnet-discounted).
  distinctReporters: number;
  // Weighted shares of each verdict in the 90-day window (0..1).
  highRiskShare: number;
  suspiciousShare: number;
  safeShare: number;
  // Days since last report mentioning this domain (staleness penalty).
  daysSinceLastSeen: number;
  // Max Vectorize cosine similarity to the known-scam corpus (0..1).
  simPrior: number;
  // Seed lane weight (0..1); never counts as crowd evidence.
  seedWeight: number;
  // Operator status: 'reported' | 'verified' | 'cleared' | 'suspected' | 'honeypot'.
  status: string;
}

export interface ReputationResult {
  score: number; // 0..10, clamped
  label: ReputationLabel;
  reason: string; // verified | cleared | reported | semantic-similar | seeded
  nEff: number;
  distinctReporters: number;
  highRiskShare: number;
  suspiciousShare: number;
  simPrior: number;
  confidence: number; // 0..1, how much independent evidence backs the score
  feedVisible: boolean;
}

const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));

// Recency half-life in days: a report 30 days ago weighs 0.5.
const HALF_LIFE_DAYS = 30;
const LOOKBACK_DAYS = 90;

// Per-report weight: first voice from a fingerprint counts trust; repeats
// count a fraction (poisoning resistance).
export const reportWeight = (trust: number, isFirstForIndicator: boolean): number => {
  const repeat = 0.15 * trust;
  return clamp(isFirstForIndicator ? Math.max(repeat, trust) : repeat, 0, 1);
};

// Recency weight for a single report age in days.
export const recencyWeight = (ageDays: number): number => Math.pow(2, -ageDays / HALF_LIFE_DAYS);

// Reporter trust score (0..1). Decays after inactivity.
export const reporterTrust = (input: {
  corroborated: number; // indicators this fp reported that a 2nd fp also reported
  hardContradictions: number; // verdict contradicts the deterministic engine
  burstDuplicates: number; // same-indicator bursts in 24h
  clearedSupport: number; // indicators this fp supported that were cleared
  honeypotHit?: boolean;
  hardRejects?: number;
}): number => {
  if (input.honeypotHit || (input.hardRejects || 0) >= 3) return 0;
  const score =
    0.4 +
    0.1 * Math.min(4, input.corroborated) -
    0.2 * input.hardContradictions -
    0.1 * input.burstDuplicates -
    0.3 * input.clearedSupport;
  return clamp(score, 0, 1);
};

export const reputationScore = (input: ReputationInputs): ReputationResult => {
  // Operator overrides are absolute.
  if (input.status === "cleared") {
    return { score: 0, label: "NONE", reason: "cleared", nEff: 0, distinctReporters: 0, highRiskShare: 0, suspiciousShare: 0, simPrior: 0, confidence: 1, feedVisible: false };
  }
  if (input.status === "verified") {
    return {
      score: clamp(input.seedWeight > 0 ? 8 : Math.max(8, input.simPrior * 10), 8, 10),
      label: "HIGH_RISK",
      reason: "verified",
      nEff: input.nEff,
      distinctReporters: input.distinctReporters,
      highRiskShare: input.highRiskShare,
      suspiciousShare: input.suspiciousShare,
      simPrior: input.simPrior,
      confidence: 1,
      feedVisible: true,
    };
  }
  if (input.status === "honeypot") {
    return { score: 0, label: "NONE", reason: "honeypot", nEff: 0, distinctReporters: 0, highRiskShare: 0, suspiciousShare: 0, simPrior: 0, confidence: 1, feedVisible: false };
  }

  // Anti-poisoning: effective count capped at 2x distinct reporters.
  const nEffCapped = Math.min(input.nEff, 2 * Math.max(1, input.distinctReporters));

  // Volume term: saturates (5 effective reports -> ~0.71).
  const sV = 1 - Math.exp(-nEffCapped / 4);
  // Verdict-mix term.
  const sD = 0.7 * input.highRiskShare + 0.3 * input.suspiciousShare;
  // SAFE reports actively suppress.
  const raw = 10 * (0.55 * sV + 0.45 * sD) - 3.0 * input.safeShare;
  // Staleness penalty: untouched for 90 days loses up to 2 points.
  const decay = Math.min(1, input.daysSinceLastSeen / LOOKBACK_DAYS) * 2.0;
  let score = clamp(raw - decay, 0, 10);

  // Cold-start prior: blend Vectorize similarity when crowd evidence is thin.
  if (nEffCapped < 3 && input.simPrior > 0.5) {
    const prior = clamp((input.simPrior - 0.5) * 2 * 10, 0, 10);
    score = (nEffCapped * score + 2.0 * prior) / (nEffCapped + 2.0);
  }

  // Seed lane: a curated seed can lift a brand-new domain into SUSPICIOUS but
  // never to HIGH_RISK on its own. Cap the seed CONTRIBUTION, not the final
  // score, so strong crowd evidence is never pulled back down.
  if (input.seedWeight > 0 && input.distinctReporters === 0) {
    score = clamp(score + Math.min(2.99, input.seedWeight * 2), 0, 10);
  }

  const label: ReputationLabel =
    score >= 9 ? "CRITICAL" : score >= 7 ? "HIGH_RISK" : score >= 4 ? "SUSPICIOUS" : score >= 1 ? "LOW" : "NONE";

  // Confidence: more independent evidence = higher confidence. Clamped 0..1.
  const confidence = clamp(
    (nEffCapped / (nEffCapped + 5)) * (0.4 + 0.6 * (input.distinctReporters / Math.max(1, nEffCapped))),
    0,
    1
  );

  // Feed visibility: score >= 7 OR verified, AND at least 2 distinct reporters
  // OR verified (one reporter can never list a domain).
  const feedVisible =
    (score >= 7 || input.status === "verified") && (input.distinctReporters >= 2 || input.status === "verified");

  // Reason precedence: verified > cleared > reported > semantic-similar > seeded.
  let reason = "reported";
  if (input.status === "verified") reason = "verified";
  else if (input.status === "cleared") reason = "cleared";
  else if (input.distinctReporters === 0 && input.simPrior > 0.5) reason = "semantic-similar";
  else if (input.seedWeight > 0 && input.distinctReporters === 0) reason = "seeded";

  return { score, label, reason, nEff: nEffCapped, distinctReporters: input.distinctReporters, highRiskShare: input.highRiskShare, suspiciousShare: input.suspiciousShare, simPrior: input.simPrior, confidence, feedVisible };
};

// services/blacklistSignals.ts - the community-blacklist escalation layer.
//
// The reverse of the sender allowlist. Where a VERIFIED official sender means
// "trust the message regardless of body", a phone number or domain that the
// community has already reported as a scam means "this message has a
// reputation trail" - and the verdict should reflect it.
//
// Pure + testable: given the extracted indicators and their community
// reputation status, compute the escalated verdict and red flags. The caller
// (aiService) does the async storage lookups; this module is deterministic.

import { Verdict } from "../types";
import type { Indicator } from "../src/worker/indicators";

export interface CommunityReputation {
  indicator: Indicator;
  found: boolean;
  timesReported: number;
}

export interface BlacklistEscalation {
  verdict: Verdict;
  flags: string[];
  worstReportedCount: number;
}

export const REPORTED_PHONE_FLAG = "REPORTED_PHONE";
export const REPORTED_DOMAIN_FLAG = "REPORTED_DOMAIN";

// A phone reported >= 2 times (matching the existing >= 2 threshold) or a
// domain reported >= 1 time raises the message to SUSPICIOUS. The blacklist
// never forces HIGH_RISK (a reported indicator is strong but not conclusive -
// operators can retract via /indicators/clear) and never downgrades.
export const escalateFromReputation = (
  currentVerdict: Verdict,
  reputations: CommunityReputation[],
  minPhoneReports = 2,
  minDomainReports = 1
): BlacklistEscalation => {
  if (currentVerdict === Verdict.HIGH_RISK) {
    return { verdict: Verdict.HIGH_RISK, flags: [], worstReportedCount: 0 };
  }
  const flags: string[] = [];
  let worst = 0;
  for (const rep of reputations) {
    if (!rep.found) continue;
    if (rep.indicator.type === "phone" && rep.timesReported >= minPhoneReports) {
      flags.push(REPORTED_PHONE_FLAG);
      worst = Math.max(worst, rep.timesReported);
    }
    if (rep.indicator.type === "domain" && rep.timesReported >= minDomainReports) {
      flags.push(REPORTED_DOMAIN_FLAG);
      worst = Math.max(worst, rep.timesReported);
    }
  }
  if (flags.length === 0) {
    return { verdict: currentVerdict, flags: [], worstReportedCount: 0 };
  }
  // Escalate SAFE/SUSPICIOUS to SUSPICIOUS. Never HIGH_RISK, never downgrade.
  const verdict = currentVerdict === Verdict.SAFE ? Verdict.SUSPICIOUS : currentVerdict;
  return { verdict, flags, worstReportedCount: worst };
};

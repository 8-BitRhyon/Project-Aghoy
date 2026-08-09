// Community-blacklist escalation: a reported phone/domain adds risk. Pure + testable; caller does the async lookups.

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

// Phone >=2 or domain >=1 reported raises to SUSPICIOUS; never forces HIGH_RISK, never downgrades.
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

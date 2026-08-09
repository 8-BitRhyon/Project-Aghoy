// Community-blacklist reputation types + flags. Escalation policy lives in layeredVerdict (blacklist caps at SUSPICIOUS); caller does the async lookups.

import type { Indicator } from "../src/worker/indicators";

export interface CommunityReputation {
  indicator: Indicator;
  found: boolean;
  timesReported: number;
}

export const REPORTED_PHONE_FLAG = "REPORTED_PHONE";
export const REPORTED_DOMAIN_FLAG = "REPORTED_DOMAIN";

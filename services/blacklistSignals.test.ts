// services/blacklistSignals.test.ts - pure tests for community-blacklist
// escalation. No network, no storage: exercises the verdict policy only.

import { describe, expect, it } from "vitest";
import { Verdict } from "../types";
import { escalateFromReputation, REPORTED_DOMAIN_FLAG, REPORTED_PHONE_FLAG } from "./blacklistSignals";
import type { CommunityReputation } from "./blacklistSignals";

const phoneRep = (timesReported: number, found = true): CommunityReputation => ({
  indicator: { type: "phone", value: "hash" },
  found,
  timesReported,
});

const domainRep = (timesReported: number, found = true): CommunityReputation => ({
  indicator: { type: "domain", value: "evil.top" },
  found,
  timesReported,
});

describe("escalateFromReputation", () => {
  it("escalates SAFE to SUSPICIOUS when a phone was reported >= 2 times", () => {
    const r = escalateFromReputation(Verdict.SAFE, [phoneRep(3)]);
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
    expect(r.flags).toContain(REPORTED_PHONE_FLAG);
    expect(r.worstReportedCount).toBe(3);
  });

  it("does NOT escalate on a single phone report (below threshold)", () => {
    const r = escalateFromReputation(Verdict.SAFE, [phoneRep(1)]);
    expect(r.verdict).toBe(Verdict.SAFE);
    expect(r.flags).toEqual([]);
  });

  it("escalates on a domain reported >= 1 time", () => {
    const r = escalateFromReputation(Verdict.SAFE, [domainRep(1)]);
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
    expect(r.flags).toContain(REPORTED_DOMAIN_FLAG);
  });

  it("never forces HIGH_RISK from a reputation trail", () => {
    const r = escalateFromReputation(Verdict.SAFE, [phoneRep(99)]);
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
  });

  it("never downgrades an existing HIGH_RISK", () => {
    const r = escalateFromReputation(Verdict.HIGH_RISK, [phoneRep(0), domainRep(0)]);
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });

  it("keeps SUSPICIOUS as SUSPICIOUS", () => {
    const r = escalateFromReputation(Verdict.SUSPICIOUS, [phoneRep(5)]);
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
  });

  it("ignores not-found lookups", () => {
    const r = escalateFromReputation(Verdict.SAFE, [phoneRep(5, false), domainRep(2, false)]);
    expect(r.verdict).toBe(Verdict.SAFE);
  });

  it("handles an empty reputation list", () => {
    expect(escalateFromReputation(Verdict.SAFE, []).verdict).toBe(Verdict.SAFE);
  });
});

// services/layeredVerdict.test.ts - tests for the weighted multi-layer fusion.
// The key property being verified: NO single layer is absolute. A verified
// sender lowers risk but a strong scam body still gets caught; a reported
// phone raises risk but a clearly-legit context can survive. Layers are
// evidence, not vetoes.

import { describe, expect, it } from "vitest";
import { Verdict } from "../types";
import { fuseLayers, scoreToVerdict, LayerSignals } from "./layeredVerdict";

const HIGH_ENGINE = 9;

describe("scoreToVerdict", () => {
  it("maps score bands to verdicts", () => {
    expect(scoreToVerdict(1)).toBe(Verdict.SAFE);
    expect(scoreToVerdict(3)).toBe(Verdict.SAFE);
    expect(scoreToVerdict(5)).toBe(Verdict.SUSPICIOUS);
    expect(scoreToVerdict(8)).toBe(Verdict.HIGH_RISK);
  });
});

describe("fuseLayers - baseline", () => {
  it("neutral inputs produce SUSPICIOUS (not guilty, not clear)", () => {
    const r = fuseLayers({});
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
  });

  it("a strong deterministic engine verdict alone can reach HIGH_RISK", () => {
    const r = fuseLayers({ engineScore: HIGH_ENGINE });
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });

  it("an abstaining engine (undefined) + low model yields SAFE", () => {
    // The real fallbackVerdict returns null below score 3 (it never emits
    // scores 0-2). So an absent engine signal means "the engine found nothing
    // suspicious" - combined with a confident legit model, that is SAFE.
    const r = fuseLayers({ modelScamProb: 0.05 });
    expect(r.verdict).toBe(Verdict.SAFE);
  });

  it("the engine's SUSPICIOUS band (3-6) contributes nothing (measured 94% FP)", () => {
    // 2026-08-09 holdout measurement: engine scores 3-6 are 94% false-positive
    // on real PH text, so they must not pollute the score. Only >=7 counts.
    const r = fuseLayers({ engineScore: 5 });
    expect(r.riskScore).toBe(5); // neutral - engine abstained in effect
    expect(r.verdict).toBe(Verdict.SUSPICIOUS); // and stays neutral-suspicious
  });

  it("a HIGH_RISK engine call (>=7) contributes strongly", () => {
    const r = fuseLayers({ engineScore: 9 });
    expect(r.riskScore).toBeGreaterThanOrEqual(7);
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });
});

describe("fuseLayers - the evidence-not-veto property", () => {
  it("a verified sender does NOT guarantee SAFE against a strong scam body", () => {
    // Real case: a legit-looking message from a verified sender whose body
    // still reads as a strong scam. The sender evidence pulls risk DOWN but
    // does not make it absolute - the outcome is SUSPICIOUS (uncertain), not
    // SAFE, and not HIGH_RISK.
    const r = fuseLayers({ verifiedSender: true, engineScore: HIGH_ENGINE, modelScamProb: 0.95 });
    expect(r.verdict).not.toBe(Verdict.SAFE); // sender evidence alone not absolute
    expect(r.signals).toContain("verified-sender");
  });

  it("a reported phone does NOT force HIGH_RISK against overwhelming legit evidence", () => {
    // Abstaining engine + confident legit model + official link: the blacklist
    // raises risk but does not override the rest to HIGH_RISK.
    const r = fuseLayers({ reportedPhone: true, modelScamProb: 0.02, officialLink: true });
    expect(r.verdict).not.toBe(Verdict.HIGH_RISK); // blacklist evidence not absolute
    expect(r.signals).toContain("reported-phone");
  });

  it("a verified sender + neutral body yields SAFE", () => {
    const r = fuseLayers({ verifiedSender: true });
    expect(r.verdict).toBe(Verdict.SAFE);
  });

  it("suspicious link + neutral body yields SUSPICIOUS, not HIGH_RISK", () => {
    const r = fuseLayers({ suspiciousLink: true });
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
  });
});

describe("fuseLayers - realistic PH cases", () => {
  it("GCash scam: high engine + high model + suspicious link -> HIGH_RISK", () => {
    const r = fuseLayers({ engineScore: 9, modelScamProb: 0.97, suspiciousLink: true });
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });

  it("legit GCash OTP: verified sender + low engine + low model -> SAFE", () => {
    const r = fuseLayers({ verifiedSender: true, engineScore: 1, modelScamProb: 0.1 });
    expect(r.verdict).toBe(Verdict.SAFE);
  });

  it("LBC legit delivery: official link + high model but no engine -> not HIGH_RISK", () => {
    const r = fuseLayers({ officialLink: true, modelScamProb: 0.9 });
    expect(r.verdict).toBe(Verdict.SUSPICIOUS); // official link + no engine: not guilty
    expect(r.verdict).not.toBe(Verdict.HIGH_RISK);
  });

});

describe("fuseLayers - signal reporting", () => {
  it("lists contributing signals for transparency", () => {
    const r = fuseLayers({ verifiedSender: true, reportedDomain: true, modelScamProb: 0.8 });
    expect(r.signals).toContain("verified-sender");
    expect(r.signals).toContain("reported-domain");
    expect(r.signals.some((s) => s.startsWith("model:"))).toBe(true);
  });

  it("riskScore is clamped to 0..10", () => {
    expect(fuseLayers({ engineScore: 10, modelScamProb: 1, suspiciousLink: true, reportedPhone: true }).riskScore).toBeLessThanOrEqual(10);
    expect(fuseLayers({ verifiedSender: true, officialLink: true, modelScamProb: 0, engineScore: 0 }).riskScore).toBeGreaterThanOrEqual(0);
  });
});

describe("fuseLayers - blacklist policy (caps at SUSPICIOUS)", () => {
  it("a reported phone alone never forces HIGH_RISK (cap at 6.9)", () => {
    // Blacklist is the only risk layer; it must cap at SUSPICIOUS.
    const r = fuseLayers({ reportedPhone: true, reportedDomain: true });
    expect(r.verdict).toBe(Verdict.SUSPICIOUS);
    expect(r.riskScore).toBeLessThan(7);
  });

  it("a reported phone + a confidently-flagged model can reach HIGH_RISK", () => {
    // The cap only binds when blacklist is the sole risk source; a 0.99 model
    // already produces HIGH_RISK on its own evidence.
    const r = fuseLayers({ reportedPhone: true, modelScamProb: 0.99 });
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });

  it("a reported phone + engine HIGH_RISK can still reach HIGH_RISK", () => {
    // The cap applies to the blacklist's own contribution, not to other layers.
    const r = fuseLayers({ reportedPhone: true, engineScore: 9, modelScamProb: 0.97 });
    expect(r.verdict).toBe(Verdict.HIGH_RISK);
  });
});

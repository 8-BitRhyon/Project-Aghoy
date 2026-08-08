// services/classifier.test.ts - pure tests for the on-device classifier fusion
// policy. No model, no network: exercises the decision rules that gate whether
// a scan result can be escalated by the model.

import { describe, expect, it } from "vitest";
import { Verdict } from "../types";
import { fuseModelWithVerdict, MODEL_ESCALATION_FLOOR, MODEL_THRESHOLD } from "./classifier";

describe("fuseModelWithVerdict", () => {
  it("never downgrades a HIGH_RISK verdict", () => {
    expect(fuseModelWithVerdict(Verdict.HIGH_RISK, 0.01)).toBe(Verdict.HIGH_RISK);
    expect(fuseModelWithVerdict(Verdict.HIGH_RISK, 0.99)).toBe(Verdict.HIGH_RISK);
  });

  it("escalates SAFE/SUSPICIOUS to SUSPICIOUS when the model flags above threshold", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.95)).toBe(Verdict.SUSPICIOUS);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, 0.9)).toBe(Verdict.SUSPICIOUS);
  });

  it("never escalates a confident legit call (below the escalation floor)", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.05)).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, 0.05)).toBe(Verdict.SUSPICIOUS);
  });

  it("leaves the verdict unchanged for the mid band (floor <= p < threshold)", () => {
    const mid = (MODEL_ESCALATION_FLOOR + MODEL_THRESHOLD) / 2;
    expect(fuseModelWithVerdict(Verdict.SAFE, mid)).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, mid)).toBe(Verdict.SUSPICIOUS);
  });

  it("respects custom threshold/floor (used by tests + retrains)", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.6, { threshold: 0.7, floor: 0.3 })).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.85, { threshold: 0.7, floor: 0.3 })).toBe(Verdict.SUSPICIOUS);
  });

  it("uses the documented tinybert-v1 constants", () => {
    expect(MODEL_THRESHOLD).toBe(0.22);
    expect(MODEL_ESCALATION_FLOOR).toBe(0.3);
  });
});

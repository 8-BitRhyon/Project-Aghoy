// services/classifier.test.ts - pure tests for the on-device classifier fusion
// policy. No model, no network: exercises the decision rules that gate whether
// a scan result can be escalated by the model.

import { describe, expect, it } from "vitest";
import { Verdict } from "../types";
import { fuseModelWithVerdict, fuseWithLinkGrade, MODEL_CONFIDENT_LEGIT_FLOOR, MODEL_THRESHOLD } from "./classifier";
import { gradeUrl } from "../src/training/urlGrade";

describe("fuseModelWithVerdict", () => {
  it("never downgrades a HIGH_RISK verdict", () => {
    expect(fuseModelWithVerdict(Verdict.HIGH_RISK, 0.01)).toBe(Verdict.HIGH_RISK);
    expect(fuseModelWithVerdict(Verdict.HIGH_RISK, 0.99)).toBe(Verdict.HIGH_RISK);
  });

  it("escalates SAFE/SUSPICIOUS to SUSPICIOUS when the model flags above threshold", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.95)).toBe(Verdict.SUSPICIOUS);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, 0.9)).toBe(Verdict.SUSPICIOUS);
    // Just at the threshold: flags.
    expect(fuseModelWithVerdict(Verdict.SAFE, MODEL_THRESHOLD)).toBe(Verdict.SUSPICIOUS);
  });

  it("never escalates a confident legit call (at or below the floor)", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.05)).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, 0.05)).toBe(Verdict.SUSPICIOUS);
    // Exactly at the floor: still confident legit.
    expect(fuseModelWithVerdict(Verdict.SAFE, MODEL_CONFIDENT_LEGIT_FLOOR)).toBe(Verdict.SAFE);
  });

  it("abstains in the uncertain mid-band (floor < p < threshold)", () => {
    const mid = (MODEL_CONFIDENT_LEGIT_FLOOR + MODEL_THRESHOLD) / 2;
    expect(mid).toBeGreaterThan(MODEL_CONFIDENT_LEGIT_FLOOR);
    expect(mid).toBeLessThan(MODEL_THRESHOLD);
    expect(fuseModelWithVerdict(Verdict.SAFE, mid)).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SUSPICIOUS, mid)).toBe(Verdict.SUSPICIOUS);
  });

  it("respects custom threshold/floor (used by tests + retrains)", () => {
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.25, { threshold: 0.7, floor: 0.3 })).toBe(Verdict.SAFE);
    expect(fuseModelWithVerdict(Verdict.SAFE, 0.85, { threshold: 0.7, floor: 0.3 })).toBe(Verdict.SUSPICIOUS);
  });

  it("uses the documented tinybert-v1 constants with floor BELOW threshold", () => {
    expect(MODEL_THRESHOLD).toBe(0.28);
    expect(MODEL_CONFIDENT_LEGIT_FLOOR).toBe(0.15);
    expect(MODEL_CONFIDENT_LEGIT_FLOOR).toBeLessThan(MODEL_THRESHOLD);
  });
});

describe("fuseWithLinkGrade", () => {
  const suspicious = gradeUrl("https://gcash-verify.top/login");
  const official = gradeUrl("https://help.shopee.ph/article/1");
  const short = gradeUrl("https://bit.ly/abc");

  it("a suspicious link lowers the model's escalation bar", () => {
    // Model is below the normal threshold but above the boosted one -> escalates.
    const mid = MODEL_THRESHOLD - 0.1;
    expect(fuseModelWithVerdict(Verdict.SAFE, mid)).toBe(Verdict.SAFE);
    expect(fuseWithLinkGrade(Verdict.SAFE, mid, suspicious)).toBe(Verdict.SUSPICIOUS);
  });

  it("a verified official link raises the bar (no premature escalation)", () => {
    // Above the normal threshold (would escalate without the link) but below
    // the raised threshold (official-link boost keeps it SAFE).
    const boosted = MODEL_THRESHOLD + 0.1;
    expect(fuseModelWithVerdict(Verdict.SAFE, boosted)).toBe(Verdict.SUSPICIOUS);
    expect(fuseWithLinkGrade(Verdict.SAFE, boosted, official)).toBe(Verdict.SAFE);
  });

  it("a shortener changes nothing on its own", () => {
    expect(fuseWithLinkGrade(Verdict.SAFE, MODEL_THRESHOLD, short)).toBe(Verdict.SUSPICIOUS);
  });

  it("never downgrades HIGH_RISK regardless of the link grade", () => {
    expect(fuseWithLinkGrade(Verdict.HIGH_RISK, 0.01, official)).toBe(Verdict.HIGH_RISK);
  });

  it("returns the base verdict when no link grade is present", () => {
    // Below the (new) threshold: no escalation.
    expect(fuseWithLinkGrade(Verdict.SAFE, 0.2, null)).toBe(Verdict.SAFE);
  });
});

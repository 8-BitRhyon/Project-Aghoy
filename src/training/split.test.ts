// src/training/split.test.ts - pure tests for the anti-overfitting split logic.

import { describe, expect, it } from "vitest";
import { CorpusRow, dropLeakage, jaccard, provenanceStratifiedSplit, tokenSet } from "./split";

const mk = (id: string, text: string, label: "SCAM" | "LEGIT" = "SCAM", source = "src-a"): CorpusRow => ({
  id,
  text,
  label,
  source,
});

describe("provenanceStratifiedSplit", () => {
  it("splits ~80/10/10 and is deterministic", () => {
    const rows = Array.from({ length: 100 }, (_, i) => mk(`r-${i}`, `message number ${i}`, i % 2 ? "SCAM" : "LEGIT"));
    const a = provenanceStratifiedSplit(rows, { seed: 7 });
    const b = provenanceStratifiedSplit(rows, { seed: 7 });
    expect(a.train).toEqual(b.train);
    expect(a.val).toEqual(b.val);
    expect(a.test).toEqual(b.test);
    expect(a.train.length).toBeGreaterThanOrEqual(78);
    expect(a.train.length).toBeLessThanOrEqual(82);
    expect(a.val.length).toBeGreaterThanOrEqual(8);
    expect(a.val.length).toBeLessThanOrEqual(12);
    expect(a.test.length).toBeGreaterThanOrEqual(8);
    expect(a.test.length).toBeLessThanOrEqual(12);
  });

  it("preserves every label within every source in all folds", () => {
    const rows = [
      ...Array.from({ length: 60 }, (_, i) => mk(`s1-scam-${i}`, `text ${i}`, "SCAM", "src-a")),
      ...Array.from({ length: 60 }, (_, i) => mk(`s1-legit-${i}`, `text ${i}`, "LEGIT", "src-a")),
      ...Array.from({ length: 20 }, (_, i) => mk(`s2-scam-${i}`, `text ${i}`, "SCAM", "src-b")),
      ...Array.from({ length: 20 }, (_, i) => mk(`s2-legit-${i}`, `text ${i}`, "LEGIT", "src-b")),
    ];
    const s = provenanceStratifiedSplit(rows, { seed: 1 });
    const fold = (ids: string[]) => new Set(ids);
    const has = (set: Set<string>, prefix: string) => [...set].some((id) => id.startsWith(prefix));
    expect(has(fold(s.train), "s1-scam-")).toBe(true);
    expect(has(fold(s.train), "s1-legit-")).toBe(true);
    expect(has(fold(s.train), "s2-scam-")).toBe(true);
    expect(has(fold(s.test), "s1-scam-")).toBe(true);
    expect(has(fold(s.test), "s1-legit-")).toBe(true);
    expect(has(fold(s.test), "s2-scam-")).toBe(true);
    expect(has(fold(s.val), "s2-legit-")).toBe(true);
  });

  it("no id appears in two folds", () => {
    const rows = Array.from({ length: 50 }, (_, i) => mk(`r-${i}`, `text ${i}`, i % 2 ? "SCAM" : "LEGIT"));
    const s = provenanceStratifiedSplit(rows, { seed: 3 });
    const all = [...s.train, ...s.val, ...s.test];
    expect(new Set(all).size).toBe(all.length);
    expect(all.length).toBe(50);
  });

  it("fold membership is independent of corpus row order", () => {
    const rows = Array.from({ length: 200 }, (_, i) =>
      mk(`r-${i}`, `message about topic ${i}`, i % 3 === 0 ? "SCAM" : "LEGIT", i % 2 ? "src-a" : "src-b")
    );
    const shuffled = [...rows].sort(() => (Math.random() < 0.5 ? -1 : 1));
    const a = provenanceStratifiedSplit(rows, { seed: 42 });
    const b = provenanceStratifiedSplit(shuffled, { seed: 42 });
    const foldKey = (s: { train: string[]; val: string[]; test: string[] }) =>
      JSON.stringify([[...s.train].sort(), [...s.val].sort(), [...s.test].sort()]);
    expect(foldKey(a)).toBe(foldKey(b));
  });
});

describe("jaccard + tokenSet", () => {
  it("computes Jaccard similarity", () => {
    expect(jaccard(new Set(["a", "b"]), new Set(["b", "c"]))).toBe(1 / 3);
    expect(jaccard(new Set(["a"]), new Set(["a"]))).toBe(1);
    expect(jaccard(new Set([]), new Set([]))).toBe(0);
  });

  it("tokenSet normalizes punctuation and case", () => {
    const a = tokenSet("URGENT! Your GCash is LOCKED now.");
    const b = tokenSet("urgent your gcash is locked now");
    expect(a).toEqual(b);
  });
});

describe("dropLeakage", () => {
  it("drops near-duplicate val/test rows that overlap a train row", () => {
    const rows = [
      mk("train-1", "URGENT: Your GCash account is locked. Verify now via the link or your account will be suspended."),
      mk("test-near", "URGENT: Your GCash account is locked! Verify now via this link, otherwise your account gets suspended."),
      mk("test-diff", "Happy birthday! Enjoy 50% off on your next order at the mall."),
    ];
    const split = { train: ["train-1"], val: [], test: ["test-near", "test-diff"] };
    const out = dropLeakage(rows, split, 0.5);
    expect(out.test).not.toContain("test-near");
    expect(out.test).toContain("test-diff");
    expect(out.droppedLeakage.length).toBe(1);
    expect(out.droppedLeakage[0].id).toBe("test-near");
    expect(out.droppedLeakage[0].bestTrainId).toBe("train-1");
  });

  it("keeps val/test rows with no near-duplicate", () => {
    const rows = [
      mk("train-1", "completely unrelated training message about the weather today"),
      mk("val-1", "a wholly different validation message about food and cooking"),
    ];
    const split = { train: ["train-1"], val: ["val-1"], test: [] };
    const out = dropLeakage(rows, split, 0.9);
    expect(out.val).toContain("val-1");
    expect(out.droppedLeakage.length).toBe(0);
    expect(out.droppedLeakage.length).toBe(0);
  });

  it("is deterministic for a fixed corpus", () => {
    const rows = [
      mk("train-1", "GCash OTP phishing urgent verify now"),
      mk("t2", "GCash OTP phishing! Verify now urgent!!"),
      mk("t3", "Parcel held at customs pay fee to release"),
      mk("t4", "Parcel held at customs, pay the fee to release it now"),
    ];
    const split = { train: ["train-1"], val: [], test: ["t2", "t3", "t4"] };
    const a = dropLeakage(rows, split, 0.6);
    const b = dropLeakage(rows, split, 0.6);
    expect(a.test).toEqual(b.test);
    expect(a.droppedLeakage.map((d) => d.id)).toEqual(b.droppedLeakage.map((d) => d.id));
  });

  it("drops a test row that near-duplicates a RETAINED validation row", () => {
    const rows = [
      mk("train-1", "completely unrelated training message about the weather"),
      mk("val-keep", "Your GCash is locked due to suspicious activity please verify immediately"),
      mk("test-near-val", "Your GCash is locked! Due to suspicious activity, please verify immediately now"),
    ];
    // val-keep is NOT near train-1, so it is retained; test-near-val IS near
    // val-keep, so it must be dropped even though it never matched train.
    const split = { train: ["train-1"], val: ["val-keep"], test: ["test-near-val"] };
    const out = dropLeakage(rows, split, 0.5);
    expect(out.val).toContain("val-keep");
    expect(out.test).not.toContain("test-near-val");
    expect(out.droppedLeakage.map((d) => d.id)).toEqual(["test-near-val"]);
  });
});

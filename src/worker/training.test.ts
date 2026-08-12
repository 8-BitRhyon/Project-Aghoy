// src/worker/training.test.ts - the wrong-answer log must survive the save/
// load cycle (the audit found it hard-coded to [] on load and never written).
// sanitizeWrongAnswers guards the D1 invariant: only typed fields persist.

import { describe, expect, it } from "vitest";
import { sanitizeWrongAnswers } from "./training";

describe("sanitizeWrongAnswers", () => {
  it("keeps valid typed wrong-answer entries", () => {
    const log = [
      { scenarioId: "vishing-bank", stepIndex: 1, optionId: "a", answeredAt: "2026-08-01" },
      { scenarioId: "gcash-otp", stepIndex: 0, optionId: "b", answeredAt: "2026-08-02" },
    ];
    expect(JSON.parse(sanitizeWrongAnswers(log))).toEqual(log);
  });

  it("drops entries with wrong or missing fields", () => {
    const log = [
      { scenarioId: "ok", stepIndex: 0, optionId: "a", answeredAt: "2026-08-01" },
      { scenarioId: 42, stepIndex: 0, optionId: "a", answeredAt: "2026-08-01" }, // bad scenarioId
      { scenarioId: "no-index", optionId: "a", answeredAt: "2026-08-01" }, // missing stepIndex
      null,
      "junk",
    ];
    const parsed = JSON.parse(sanitizeWrongAnswers(log)) as unknown[];
    expect(parsed).toHaveLength(1);
    expect(parsed[0]).toEqual({ scenarioId: "ok", stepIndex: 0, optionId: "a", answeredAt: "2026-08-01" });
  });

  it("returns an empty array for non-arrays", () => {
    expect(sanitizeWrongAnswers(null)).toBe("[]");
    expect(sanitizeWrongAnswers({})).toBe("[]");
    expect(sanitizeWrongAnswers("x")).toBe("[]");
  });
});

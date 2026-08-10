// src/worker/outcomeReport.test.ts - pure tests for the transfer-outcome
// aggregation. This is the evidence layer: does the Dojo's training generalize
// to NOVEL scams? The report answers that across learners.

import { describe, expect, it } from "vitest";
import { buildOutcomeReport } from "./outcomeReport";
import type { LearnerRow } from "./outcomeReport";

const row = (learnerKey: string, log: { correct: boolean; firstTime: boolean; atDay: string }[]): LearnerRow => ({
  learnerKey,
  transferLog: log.map((l) => ({ scenarioId: "ewallet-x", ...l })),
});

describe("buildOutcomeReport", () => {
  it("aggregates overall first-time accuracy across learners", () => {
    const rows = [
      row("a", [
        { correct: true, firstTime: true, atDay: "2026-08-01" },
        { correct: true, firstTime: true, atDay: "2026-08-01" },
      ]),
      row("b", [
        { correct: false, firstTime: true, atDay: "2026-08-02" },
      ]),
    ];
    const report = buildOutcomeReport(rows, "2026-08-10");
    expect(report.learners).toBe(2);
    expect(report.overall.firstTime.total).toBe(3);
    expect(report.overall.firstTime.correct).toBe(2);
    expect(report.overall.firstTime.accuracy).toBeCloseTo(2 / 3);
  });

  it("groups answers into weekly buckets", () => {
    const rows = [
      row("a", [
        { correct: true, firstTime: true, atDay: "2026-07-28" }, // week of 07-27
        { correct: true, firstTime: true, atDay: "2026-08-04" }, // week of 08-03
      ]),
    ];
    const report = buildOutcomeReport(rows, "2026-08-10");
    expect(report.weekly.length).toBe(2);
    expect(report.weekly[0].week).toBe("2026-07-27");
    expect(report.weekly[1].week).toBe("2026-08-03");
    expect(report.weekly[1].firstTime.total).toBe(1);
  });

  it("reports decay: accuracy at 7/30/90 days since first seen", () => {
    const rows = [
      row("a", [
        { correct: true, firstTime: true, atDay: "2026-01-01" },
        { correct: true, firstTime: true, atDay: "2026-03-01" }, // 59 days later
        { correct: false, firstTime: true, atDay: "2026-04-10" }, // 99 days later
      ]),
    ];
    const report = buildOutcomeReport(rows, "2026-04-15");
    const d7 = report.decay.find((d) => d.sinceFirstSeenDays === 7);
    const d90 = report.decay.find((d) => d.sinceFirstSeenDays === 90);
    // Only the 99-day answer is beyond 90; the 59-day one is past 30 but not 90.
    expect(d7!.total).toBe(2); // both later answers >= 7 days
    expect(d90!.total).toBe(1); // only the 99-day one
    expect(d90!.accuracy).toBe(0);
  });

  it("reports active learners (answered within 30 days)", () => {
    const rows = [
      row("active", [{ correct: true, firstTime: true, atDay: "2026-08-09" }]),
      row("inactive", [{ correct: true, firstTime: true, atDay: "2026-06-01" }]),
    ];
    const report = buildOutcomeReport(rows, "2026-08-10");
    expect(report.activeLearners).toBe(1);
  });

  it("handles empty data without crashing", () => {
    const report = buildOutcomeReport([], "2026-08-10");
    expect(report.learners).toBe(0);
    expect(report.weekly).toEqual([]);
    expect(report.decay.map((d) => d.accuracy)).toEqual([null, null, null]);
    expect(report.perFamily).toEqual([]);
  });
});

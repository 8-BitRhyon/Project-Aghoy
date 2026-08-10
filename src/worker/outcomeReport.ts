// src/worker/outcomeReport.ts - aggregate the Dojo's transfer outcome across
// learners. This is the evidence the research review said no Philippine scam-
// education program has published: does training generalize to NOVEL scams?
//
// The transfer metric (accuracy on first-time scenarios) is the answer. This
// module aggregates per-learner transferLogs into weekly accuracy + decay,
// which the operator (and eventually the public) can point to as outcome data.
//
// Pure functions: given the raw rows, compute the report. No I/O here.

import { TransferAnswer, TransferSnapshot, transferFromLog } from "../dojo/progress";

export interface LearnerRow {
  learnerKey: string;
  transferLog: TransferAnswer[];
}

export interface WeeklyBucket {
  week: string; // ISO week start (YYYY-MM-DD)
  learners: number;
  firstTime: { correct: number; total: number; accuracy: number };
  repeated: { correct: number; total: number; accuracy: number };
  transferScore: number;
}

export interface DecayPoint {
  sinceFirstSeenDays: number; // 7 / 30 / 90
  total: number; // first-time answers at or beyond this horizon
  accuracy: number | null; // null when no learners reached that horizon
  learners: number;
}

export interface OutcomeReport {
  generatedAt: string;
  learners: number;
  activeLearners: number; // answered in the last 30 days
  overall: TransferSnapshot;
  weekly: WeeklyBucket[];
  decay: DecayPoint[];
  perFamily: { family: string; firstTime: { correct: number; total: number; accuracy: number } }[];
}

const isoWeekStart = (day: string): string => {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  const dayOfWeek = date.getUTCDay(); // 0=Sun
  const offset = (dayOfWeek + 6) % 7; // Monday start
  date.setUTCDate(date.getUTCDate() - offset);
  return date.toISOString().slice(0, 10);
};

// Public week-start helper for callers that persist weekly snapshots (the
// Worker cron). Same Monday-based rule as the weekly buckets, so snapshot keys
// align with the report's weeks.
export const isoWeekStartOf = (day: string): string => isoWeekStart(day);

const acc = (correct: number, total: number): number => (total > 0 ? correct / total : 0);

const bucketFor = (day: string): string => isoWeekStart(day);

// Aggregate a list of per-learner rows into the outcome report.
export const buildOutcomeReport = (rows: LearnerRow[], now: string): OutcomeReport => {
  // Defense-in-depth: a corrupted persisted row (e.g. an invalid atDay) must
  // not crash the whole route - filter to well-formed entries first. D1 data
  // is written via sanitizeTransferLog, but the read path never trusts it.
  const valid = (a: TransferAnswer): boolean =>
    typeof a.correct === "boolean" &&
    typeof a.firstTime === "boolean" &&
    typeof a.atDay === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(a.atDay) &&
    !isNaN(Date.parse(a.atDay));

  // Filter once, use everywhere (weekly, decay, per-family).
  const filteredRows: LearnerRow[] = rows
    .map((r) => ({ learnerKey: r.learnerKey, transferLog: r.transferLog.filter(valid) }))
    .filter((r) => r.transferLog.length > 0);

  const allLogs = filteredRows.flatMap((r) => r.transferLog);
  const overall = transferFromLog(allLogs);

  // Weekly buckets: group by the week the answer happened.
  const byWeek = new Map<string, { correct: number; total: number; repC: number; repT: number; learners: Set<string> }>();
  const learnersByWeek = new Map<string, Set<string>>();
  for (const row of filteredRows) {
    for (const a of row.transferLog) {
      const wk = bucketFor(a.atDay);
      if (!byWeek.has(wk)) byWeek.set(wk, { correct: 0, total: 0, repC: 0, repT: 0, learners: new Set() });
      const b = byWeek.get(wk)!;
      b.learners.add(row.learnerKey);
      if (a.firstTime) {
        b.total += 1;
        if (a.correct) b.correct += 1;
      } else {
        b.repT += 1;
        if (a.correct) b.repC += 1;
      }
      if (!learnersByWeek.has(wk)) learnersByWeek.set(wk, new Set());
      learnersByWeek.get(wk)!.add(row.learnerKey);
    }
  }
  const weekly: WeeklyBucket[] = [...byWeek.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([week, b]) => {
      const ft = acc(b.correct, b.total);
      const rep = acc(b.repC, b.repT);
      const hasFt = b.total > 0;
      const weight = b.total >= 5 ? 2 : b.total > 0 ? 1 : 0;
      const transferScore = hasFt ? (b.repT > 0 ? (weight * ft + rep) / (weight + 1) : ft) : 0;
      return {
        week,
        learners: b.learners.size,
        firstTime: { correct: b.correct, total: b.total, accuracy: ft },
        repeated: { correct: b.repC, total: b.repT, accuracy: rep },
        transferScore,
      };
    });

  // Decay: accuracy on first-time scams grouped by how many days since the
  // learner FIRST started (an imperfect but practical retention proxy).
  const decayHorizons = [7, 30, 90];
  const learnerStart = new Map<string, string>();
  const decayBuckets: { h: number; c: number; t: number; learners: Set<string> }[] = decayHorizons.map((h) => ({
    h, c: 0, t: 0, learners: new Set<string>(),
  }));
  for (const row of filteredRows) {
    let firstDay: string | null = null;
    for (const a of row.transferLog) {
      if (a.firstTime && (firstDay === null || a.atDay < firstDay)) firstDay = a.atDay;
    }
    if (firstDay !== null) learnerStart.set(row.learnerKey, firstDay);
  }
  for (const row of filteredRows) {
    const start = learnerStart.get(row.learnerKey);
    if (!start) continue;
    const startMs = Date.parse(start);
    for (const a of row.transferLog) {
      if (!a.firstTime) continue;
      const days = Math.round((Date.parse(a.atDay) - startMs) / 86400000);
      for (let i = 0; i < decayHorizons.length; i++) {
        // Strict boundary: an answer at exactly `horizon` days counts; one at
        // `horizon - 1` does not. Using `>= horizon` (not `>= horizon - 1`)
        // avoids over-counting near-misses into every bucket.
        if (days >= decayHorizons[i]) {
          decayBuckets[i].c += a.correct ? 1 : 0;
          decayBuckets[i].t += 1;
          decayBuckets[i].learners.add(row.learnerKey);
        }
      }
    }
  }
  const decay: DecayPoint[] = decayBuckets.map((b) => ({
    sinceFirstSeenDays: b.h,
    total: b.t,
    accuracy: b.t > 0 ? acc(b.c, b.t) : null,
    learners: b.learners.size,
  }));

  // Per-family first-time accuracy.
  const fam = new Map<string, { correct: number; total: number }>();
  for (const a of allLogs) {
    if (!a.firstTime) continue;
    const f = a.scenarioId.split("-")[0] || "unknown";
    if (!fam.has(f)) fam.set(f, { correct: 0, total: 0 });
    const b = fam.get(f)!;
    b.total += 1;
    if (a.correct) b.correct += 1;
  }
  const perFamily = [...fam.entries()]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .map(([family, b]) => ({ family, firstTime: { correct: b.correct, total: b.total, accuracy: acc(b.correct, b.total) } }));

  // Active learners: answered within the last 30 days.
  const cutoff = new Date(Date.parse(now) - 30 * 86400000).toISOString().slice(0, 10);
  const active = new Set<string>();
  for (const row of filteredRows) {
    for (const a of row.transferLog) {
      if (a.atDay >= cutoff) {
        active.add(row.learnerKey);
        break;
      }
    }
  }

  return {
    generatedAt: now,
    learners: rows.length,
    activeLearners: active.size,
    overall,
    weekly,
    decay,
    perFamily,
  };
};

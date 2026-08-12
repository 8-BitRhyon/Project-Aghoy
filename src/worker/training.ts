// === TRAINING STORAGE ===
// D1 persistence for Dojo learner progress. Pseudonymous: learner_key is the
// HMAC of a client-side learner_id under the consent signing key (same pattern
// as reporterFingerprint). Only aggregated/derived data; no raw identifiers.

import { redactPII } from "../rejects/rejects";
import { LearnerProgress, emptyProgress } from "../dojo/progress";

export interface TrainingEnv {
  DB: D1Database;
  CONSENT_SIGNING_KEY?: string;
}

// learner_key = HMAC("aghoy-learner:" + learnerId, consentKey). Never store the
// raw learner_id.
export const learnerKey = async (learnerId: string, consentKey: string): Promise<string> => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(`aghoy-learner:${consentKey}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(learnerId));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 40);
};

export const loadProgress = async (env: TrainingEnv, key: string): Promise<LearnerProgress> => {
  const row = await env.DB.prepare(
    `SELECT shield_level, xp, shield_coins, placement_score, placement_tier, streak_current, streak_best,
            last_active_day, srs_queue, completed, family_mastery, unlocked,
            exam_passed, exam_best_score, transfer_log, challenges, surprise_rewards, streak_agency, wrong_answers
     FROM training_progress WHERE learner_key = ?1`
  )
    .bind(key)
    .first();
  if (!row) return emptyProgress();
  const r = row as Record<string, unknown>;
  const safeJson = (v: unknown, fallback: unknown) => {
    if (typeof v !== "string") return fallback;
    try {
      return JSON.parse(v);
    } catch {
      return fallback;
    }
  };
  return {
    shieldLevel: (r.shield_level as number) ?? 1,
    xp: (r.xp as number) ?? 0,
    placementScore: (r.placement_score as number) ?? null,
    placementTier: (r.placement_tier as LearnerProgress["placementTier"]) ?? null,
    streakCurrent: (r.streak_current as number) ?? 0,
    streakBest: (r.streak_best as number) ?? 0,
    lastActiveDay: (r.last_active_day as string) ?? null,
    srsQueue: safeJson(r.srs_queue, []),
    completedScenarioIds: safeJson(r.completed, []),
    familyMastery: safeJson(r.family_mastery, {}),
    unlocked: safeJson(r.unlocked, {}),
    examPassed: !!r.exam_passed,
    examBestScore: (r.exam_best_score as number) ?? 0,
    wrongAnswers: safeJson(r.wrong_answers, []),
    transferLog: safeJson(r.transfer_log, []),
    shieldCoins: (r.shield_coins as number) ?? 0,
    challenges: safeJson(r.challenges, {}),
    surpriseRewards: safeJson(r.surprise_rewards, []),
    streakAgency: safeJson(r.streak_agency, { dailyGoal: 3, freezesLeft: 0, lastFrozenDay: null }),
    // studyPlan is derived (weakest families) and not persisted.
    studyPlan: [],
  };
};

// Validate each TransferAnswer before persisting: only known, typed fields are
// written to D1 (the D1 invariant is sanitized/validated data only). The
// transfer log never contains user content today, but this guards the column
// against a future change that adds arbitrary fields to LearnerProgress.
const sanitizeTransferLog = (log: unknown): string => {
  if (!Array.isArray(log)) return "[]";
  const clean = log
    .map((entry) => {
      const e = entry as Record<string, unknown> | null;
      if (!e || typeof e !== "object") return null;
      if (typeof e.scenarioId !== "string") return null;
      if (typeof e.correct !== "boolean") return null;
      if (typeof e.firstTime !== "boolean") return null;
      if (typeof e.atDay !== "string") return null;
      return { scenarioId: e.scenarioId, correct: e.correct, firstTime: e.firstTime, atDay: e.atDay };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);
  return JSON.stringify(clean);
};

// Validate each WrongAnswer before persisting: only typed fields reach D1.
export const sanitizeWrongAnswers = (log: unknown): string => {
  if (!Array.isArray(log)) return "[]";
  const clean = log
    .map((entry) => {
      const e = entry as Record<string, unknown> | null;
      if (!e || typeof e !== "object") return null;
      if (typeof e.scenarioId !== "string") return null;
      if (typeof e.stepIndex !== "number") return null;
      if (typeof e.optionId !== "string") return null;
      if (typeof e.answeredAt !== "string") return null;
      return { scenarioId: e.scenarioId, stepIndex: e.stepIndex, optionId: e.optionId, answeredAt: e.answeredAt };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);
  return JSON.stringify(clean);
};

export const saveProgress = async (env: TrainingEnv, key: string, p: LearnerProgress): Promise<void> => {  const n = (v: unknown) => (v === undefined || v === null ? null : v);
  await env.DB.prepare(
    `INSERT INTO training_progress (learner_key, shield_level, xp, shield_coins, placement_score, placement_tier,
       streak_current, streak_best, last_active_day, srs_queue, completed, family_mastery, unlocked,
       exam_passed, exam_best_score, transfer_log, challenges, surprise_rewards, streak_agency, wrong_answers, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17, ?18, ?19, ?20, datetime('now'))
     ON CONFLICT(learner_key) DO UPDATE SET
       shield_level = excluded.shield_level, xp = excluded.xp, shield_coins = excluded.shield_coins,
       placement_score = excluded.placement_score, placement_tier = excluded.placement_tier,
       streak_current = excluded.streak_current, streak_best = excluded.streak_best,
       last_active_day = excluded.last_active_day, srs_queue = excluded.srs_queue,
       completed = excluded.completed, family_mastery = excluded.family_mastery,
       unlocked = excluded.unlocked, exam_passed = excluded.exam_passed,
       exam_best_score = excluded.exam_best_score, transfer_log = excluded.transfer_log,
       challenges = excluded.challenges, surprise_rewards = excluded.surprise_rewards,
       streak_agency = excluded.streak_agency, wrong_answers = excluded.wrong_answers,
       updated_at = datetime('now')`
  )
    .bind(
      key,
      n(p.shieldLevel),
      n(p.xp),
      n(p.shieldCoins),
      n(p.placementScore),
      n(p.placementTier),
      n(p.streakCurrent),
      n(p.streakBest),
      n(p.lastActiveDay),
      JSON.stringify(p.srsQueue),
      JSON.stringify(p.completedScenarioIds),
      JSON.stringify(p.familyMastery),
      JSON.stringify(p.unlocked),
      p.examPassed ? 1 : 0,
      n(p.examBestScore),
      sanitizeTransferLog(p.transferLog),
      JSON.stringify(p.challenges),
      JSON.stringify(p.surpriseRewards),
      JSON.stringify(p.streakAgency),
      sanitizeWrongAnswers(p.wrongAnswers)
    )
    .run();
};

export const recordAnswer = async (
  env: TrainingEnv,
  key: string,
  answer: { scenarioId: string; stepIndex: number; optionId: string; correct: boolean; responseMs: number }
): Promise<void> => {
  await env.DB.prepare(
    `INSERT INTO training_answers (learner_key, scenario_id, step_index, option_id, correct, response_ms)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6)`
  )
    .bind(key, answer.scenarioId, answer.stepIndex, answer.optionId, answer.correct ? 1 : 0, answer.responseMs)
    .run();
};

export const recordPlacement = async (
  env: TrainingEnv,
  key: string,
  score: number,
  kind = "onboard"
): Promise<void> => {
  await env.DB.prepare(
    `INSERT INTO placement_scores (learner_key, score, kind) VALUES (?1, ?2, ?3)`
  )
    .bind(key, score, kind)
    .run();
};

// Self-report: narrative goes through the Rejects layer so no raw PII persists.
export const recordSelfReport = async (
  env: TrainingEnv,
  key: string,
  report: { vector: string; amountPesos?: number; narrative: string }
): Promise<void> => {
  const safe = redactPII(report.narrative || "").text.substring(0, 1000);
  await env.DB.prepare(
    `INSERT INTO self_reports (learner_key, vector, amount_pesos, narrative) VALUES (?1, ?2, ?3, ?4)`
  )
    .bind(key, report.vector || "", report.amountPesos ?? null, safe)
    .run();
};

// Aggregate the transfer-outcome report across ALL learners. Admin-gated route.
// The D1 invariant: only validated transfer logs are read (they were written
// via sanitizeTransferLog), so this is safe to surface as outcome data.
export const loadAllTransferLogs = async (env: TrainingEnv): Promise<{ learnerKey: string; transferLog: unknown[] }[]> => {
  const { results } = await env.DB.prepare(
    `SELECT learner_key, transfer_log FROM training_progress WHERE transfer_log IS NOT NULL AND transfer_log != '[]'`
  ).all();
  return (results as Array<{ learner_key: string; transfer_log: string }>).map((r) => ({
    learnerKey: r.learner_key,
    transferLog: safeJsonArray(r.transfer_log),
  }));
};

// Safe JSON array parse with shape validation (defense-in-depth on the read
// path too - never trust D1 blindly).
const safeJsonArray = (v: string): unknown[] => {
  try {
    const parsed = JSON.parse(v);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

// Persist a weekly outcome snapshot. The operator can then read the trend over
// weeks - the retention/decay evidence the research said PH scam-education
// programs never publish. Idempotent per (week_start): re-running the cron
// upserts, never duplicates.
export const saveOutcomeSnapshot = async (
  env: TrainingEnv,
  weekStart: string,
  report: unknown
): Promise<void> => {
  await env.DB.prepare(
    `INSERT INTO outcome_snapshots (week_start, report, created_at)
     VALUES (?1, ?2, datetime('now'))
     ON CONFLICT(week_start) DO UPDATE SET
       report = excluded.report, created_at = datetime('now')`
  )
    .bind(weekStart, JSON.stringify(report))
    .run();
};

export const loadOutcomeSnapshots = async (env: TrainingEnv, limit = 12): Promise<{ weekStart: string; report: unknown }[]> => {
  const { results } = await env.DB.prepare(
    `SELECT week_start, report FROM outcome_snapshots ORDER BY week_start DESC LIMIT ?1`
  )
    .bind(limit)
    .all();
  return (results as Array<{ week_start: string; report: string }>).map((r) => ({
    weekStart: r.week_start,
    report: safeJsonObject(r.report),
  }));
};

const safeJsonObject = (v: string): unknown => {
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
};

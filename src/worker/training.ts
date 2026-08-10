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
    `SELECT shield_level, xp, placement_score, placement_tier, streak_current, streak_best,
            last_active_day, srs_queue, completed, family_mastery, unlocked,
            exam_passed, exam_best_score
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
    wrongAnswers: [],
    transferLog: safeJson(r.transfer_log, []),
    // studyPlan is derived (weakest families) and not persisted.
    studyPlan: [],
  };
};

export const saveProgress = async (env: TrainingEnv, key: string, p: LearnerProgress): Promise<void> => {
  const n = (v: unknown) => (v === undefined || v === null ? null : v);
  await env.DB.prepare(
    `INSERT INTO training_progress (learner_key, shield_level, xp, placement_score, placement_tier,
       streak_current, streak_best, last_active_day, srs_queue, completed, family_mastery, unlocked,
       exam_passed, exam_best_score, transfer_log, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, datetime('now'))
     ON CONFLICT(learner_key) DO UPDATE SET
       shield_level = excluded.shield_level, xp = excluded.xp,
       placement_score = excluded.placement_score, placement_tier = excluded.placement_tier,
       streak_current = excluded.streak_current, streak_best = excluded.streak_best,
       last_active_day = excluded.last_active_day, srs_queue = excluded.srs_queue,
       completed = excluded.completed, family_mastery = excluded.family_mastery,
       unlocked = excluded.unlocked, exam_passed = excluded.exam_passed,
       exam_best_score = excluded.exam_best_score, transfer_log = excluded.transfer_log,
       updated_at = datetime('now')`
  )
    .bind(
      key,
      n(p.shieldLevel),
      n(p.xp),
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
      JSON.stringify(p.transferLog)
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

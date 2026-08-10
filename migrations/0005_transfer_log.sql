-- Project Aghoy - D1 schema (migration 0005)
-- Transfer metric: persist the per-answer transfer log (scenarioId, correct,
-- firstTime, atDay) so the Dojo can measure accuracy on NOVEL lures - the
-- research-backed signal that anti-phishing training actually generalizes
-- (training effects transfer poorly to new lure types, Rozema & Davis 2025).
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

ALTER TABLE training_progress ADD COLUMN transfer_log TEXT NOT NULL DEFAULT '[]';

-- Gamification columns: shield coins (in-app currency), active challenges,
-- and awarded surprise rewards. See src/dojo/progress.ts for the mechanics.
ALTER TABLE training_progress ADD COLUMN shield_coins INTEGER NOT NULL DEFAULT 0;
ALTER TABLE training_progress ADD COLUMN challenges TEXT NOT NULL DEFAULT '{}';
ALTER TABLE training_progress ADD COLUMN surprise_rewards TEXT NOT NULL DEFAULT '[]';

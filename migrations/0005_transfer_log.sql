-- Project Aghoy - D1 schema (migration 0005)
-- Transfer metric: persist the per-answer transfer log (scenarioId, correct,
-- firstTime, atDay) so the Dojo can measure accuracy on NOVEL lures - the
-- research-backed signal that anti-phishing training actually generalizes
-- (training effects transfer poorly to new lure types, Rozema & Davis 2025).
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

ALTER TABLE training_progress ADD COLUMN transfer_log TEXT NOT NULL DEFAULT '[]';

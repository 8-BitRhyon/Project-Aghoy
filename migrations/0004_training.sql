-- Project Aghoy - D1 schema (migration 0004)
-- Dojo training progress, answers ledger, and mastery. Only pseudonymous data
-- (learner_key = HMAC of a client-side learner_id under the consent signing
-- key). No raw identifiers; raw scenario text is authored content, never user
-- input. Applied via: npx wrangler d1 migrations apply project-aghoy-db

CREATE TABLE IF NOT EXISTS training_progress (
  learner_key      TEXT PRIMARY KEY,
  shield_level     INTEGER NOT NULL DEFAULT 1,
  xp               INTEGER NOT NULL DEFAULT 0,
  placement_score  INTEGER,
  placement_tier   TEXT,
  streak_current   INTEGER NOT NULL DEFAULT 0,
  streak_best      INTEGER NOT NULL DEFAULT 0,
  last_active_day  TEXT,
  srs_queue        TEXT NOT NULL DEFAULT '[]',
  completed        TEXT NOT NULL DEFAULT '[]',
  family_mastery   TEXT NOT NULL DEFAULT '{}',
  unlocked         TEXT NOT NULL DEFAULT '{}',
  exam_passed      INTEGER NOT NULL DEFAULT 0,
  exam_best_score  INTEGER NOT NULL DEFAULT 0,
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS training_answers (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  learner_key  TEXT NOT NULL,
  scenario_id  TEXT NOT NULL,
  step_index   INTEGER NOT NULL,
  option_id    TEXT NOT NULL,
  correct      INTEGER NOT NULL DEFAULT 0,
  response_ms  INTEGER NOT NULL DEFAULT 0,
  answered_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_tanswers_learner_time
  ON training_answers(learner_key, answered_at);

CREATE TABLE IF NOT EXISTS placement_scores (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  learner_key TEXT NOT NULL,
  score       INTEGER NOT NULL,
  kind        TEXT NOT NULL DEFAULT 'onboard',
  taken_at    TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_placement_learner
  ON placement_scores(learner_key, taken_at);

-- Self-reports: "I caught a real scam using what I learned". Narrative is
-- Rejects-layer sanitized before insert; never raw message content.
CREATE TABLE IF NOT EXISTS self_reports (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  learner_key  TEXT NOT NULL,
  caught       INTEGER NOT NULL DEFAULT 1,
  vector       TEXT NOT NULL DEFAULT '',
  amount_pesos INTEGER,
  narrative    TEXT NOT NULL DEFAULT '',
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_selfreports_learner
  ON self_reports(learner_key, created_at);

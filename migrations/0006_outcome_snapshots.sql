-- Project Aghoy - D1 schema (migration 0006)
-- Weekly outcome snapshots: the scheduled Worker cron persists the transfer-
-- outcome report each week so the operator can see retention/decay over time.
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

CREATE TABLE IF NOT EXISTS outcome_snapshots (
  week_start TEXT PRIMARY KEY,
  report     TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

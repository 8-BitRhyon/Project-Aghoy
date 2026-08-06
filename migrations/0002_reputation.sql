-- Project Aghoy - D1 schema (migration 0002)
-- Reputation + report-validation layer. Applied via:
--   npx wrangler d1 migrations apply project-aghoy-db

-- 1. Pseudonymous reporter fingerprint on reports (HMAC of IP / consent sub).
--    Never the raw IP. NULL for legacy rows (treated as one anonymous bucket).
ALTER TABLE reports ADD COLUMN reporter_fp TEXT;
CREATE INDEX IF NOT EXISTS idx_reports_reporter ON reports(reporter_fp);

-- 2. Report <-> indicator join. Enables per-domain verdict distribution and
--    recency per report. Mirrors content-hash dedup so duplicates never
--    double-count.
CREATE TABLE IF NOT EXISTS report_indicators (
  report_id    INTEGER NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  indicator_id INTEGER NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (report_id, indicator_id)
);
CREATE INDEX IF NOT EXISTS idx_repind_indicator_time
  ON report_indicators(indicator_id, created_at);

-- 3. Vote ledger: one row per report->indicator contribution, with the
--    reporter's weight. Enables retroactive weight revocation on honeypot hit
--    or operator clear (PhishTank archive-not-delete semantics).
CREATE TABLE IF NOT EXISTS report_votes (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  report_id    INTEGER NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  indicator_id INTEGER NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
  fingerprint  TEXT NOT NULL,
  weight       REAL NOT NULL DEFAULT 0,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_votes_indicator ON report_votes(indicator_id);

-- 4. Reporter trust table (AbuseIPDB-style tiering, decaying).
CREATE TABLE IF NOT EXISTS reporters (
  fingerprint     TEXT PRIMARY KEY,
  trust_score     REAL NOT NULL DEFAULT 0.4,
  status          TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','flagged','untrusted')),
  reports_total   INTEGER NOT NULL DEFAULT 0,
  reports_24h     INTEGER NOT NULL DEFAULT 0,
  honeypot_hits   INTEGER NOT NULL DEFAULT 0,
  hard_rejects    INTEGER NOT NULL DEFAULT 0,
  first_seen      TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen       TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 5. Materialized reputation cache (the "domain_reputation materialized view").
--    Recomputed on write because the dataset is small. Feed reads one row.
CREATE TABLE IF NOT EXISTS domain_reputation (
  domain             TEXT PRIMARY KEY,
  score              REAL NOT NULL DEFAULT 0,
  label              TEXT NOT NULL DEFAULT 'NONE',
  status             TEXT NOT NULL DEFAULT 'reported',
  reason             TEXT NOT NULL DEFAULT '',
  n_reports          INTEGER NOT NULL DEFAULT 0,
  n_eff              REAL NOT NULL DEFAULT 0,
  distinct_reporters INTEGER NOT NULL DEFAULT 0,
  n_high_risk        INTEGER NOT NULL DEFAULT 0,
  n_suspicious       INTEGER NOT NULL DEFAULT 0,
  n_safe             INTEGER NOT NULL DEFAULT 0,
  high_risk_share    REAL NOT NULL DEFAULT 0,
  suspicious_share   REAL NOT NULL DEFAULT 0,
  sim_prior          REAL NOT NULL DEFAULT 0,
  seed_weight        REAL NOT NULL DEFAULT 0,
  first_seen         TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen          TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at         TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_domrep_score ON domain_reputation(score DESC);

-- 6. Allowlist (never listed) and honeypot (decoy) tables.
CREATE TABLE IF NOT EXISTS allowlist (
  value    TEXT PRIMARY KEY,       -- normalized domain
  added_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS honeypots (
  value    TEXT PRIMARY KEY,       -- decoy domain / phone hash / phrase
  added_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 7. Indicator source lane: user (crowd) vs seed (third-party/curated).
--    Seeds never count toward the crowd 'times_reported' counter.
ALTER TABLE indicators ADD COLUMN source TEXT NOT NULL DEFAULT 'user'
  CHECK (source IN ('user','seed'));
ALTER TABLE indicators ADD COLUMN seed_weight REAL NOT NULL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN distinct_reporters INTEGER NOT NULL DEFAULT 0;
ALTER TABLE indicators ADD COLUMN weighted_score REAL NOT NULL DEFAULT 0;

-- 8. Quarantine for Tier-1 rejected reports (forensics; not exposed).
CREATE TABLE IF NOT EXISTS rejected_reports (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  fingerprint TEXT,
  reason      TEXT NOT NULL,
  verdict     TEXT NOT NULL DEFAULT '',
  content     TEXT NOT NULL DEFAULT '',
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

-- 9. Feed versioning for CDN cache invalidation.
CREATE TABLE IF NOT EXISTS feed_meta (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL
);

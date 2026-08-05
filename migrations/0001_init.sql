-- Project Aghoy - D1 schema (migration 0001)
-- Relational store for scam reports, extracted indicators, and blacklist status.
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

-- Reports: one row per analyzed message/scan that produced a finding.
-- content_hash: sha256 of the sanitized text, used for dedup.
CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_hash TEXT NOT NULL UNIQUE,
  verdict TEXT NOT NULL CHECK (verdict IN ('SAFE', 'SUSPICIOUS', 'HIGH_RISK')),
  risk_score INTEGER NOT NULL DEFAULT 0 CHECK (risk_score BETWEEN 0 AND 10),
  scam_type TEXT NOT NULL DEFAULT 'None',
  red_flags TEXT NOT NULL DEFAULT '[]',          -- JSON array of flags
  sanitized_content TEXT NOT NULL DEFAULT '',    -- Rejects-layer output only
  provider TEXT NOT NULL DEFAULT '',             -- Cerebras / Groq / Workers AI
  source TEXT NOT NULL DEFAULT 'web',            -- web | extension | bot
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_reports_hash ON reports(content_hash);
CREATE INDEX IF NOT EXISTS idx_reports_verdict ON reports(verdict);
CREATE INDEX IF NOT EXISTS idx_reports_created ON reports(created_at);

-- Indicators: normalized malicious signals extracted from reports.
-- type: domain | url | phone | email | keyword
-- value: normalized indicator (lowercased, stripped scheme/www for domains).
CREATE TABLE IF NOT EXISTS indicators (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL CHECK (type IN ('domain', 'url', 'phone', 'email', 'keyword')),
  value TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'reported'
    CHECK (status IN ('reported', 'verified', 'cleared')),
  times_reported INTEGER NOT NULL DEFAULT 1,
  first_seen TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (type, value)
);

CREATE INDEX IF NOT EXISTS idx_indicators_type_value ON indicators(type, value);
CREATE INDEX IF NOT EXISTS idx_indicators_status ON indicators(status);

-- Blacklist: manually/institutionally verified indicators ready for export
-- to the open STIX/TAXII feed and telecom blocklists.
CREATE TABLE IF NOT EXISTS blacklist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  indicator_id INTEGER NOT NULL REFERENCES indicators(id),
  verified_by TEXT NOT NULL DEFAULT 'aghoy',
  source TEXT NOT NULL DEFAULT 'manual',         -- manual | cicc | pnp-acg | feed
  notes TEXT NOT NULL DEFAULT '',
  verified_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (indicator_id)
);

CREATE INDEX IF NOT EXISTS idx_blacklist_indicator ON blacklist(indicator_id);

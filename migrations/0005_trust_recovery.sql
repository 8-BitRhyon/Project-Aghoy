-- Project Aghoy - D1 schema (migration 0005)
-- Reporter trust recovery: track the last hard-reject timestamp so a burned
-- reporter (3+ quality-gate rejects) can earn trust back after a cooldown
-- instead of being locked out of the community loop forever.
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

ALTER TABLE reporters ADD COLUMN last_reject_at TEXT;
ALTER TABLE reporters ADD COLUMN corroborated INTEGER NOT NULL DEFAULT 0;

-- Project Aghoy - D1 schema (migration 0003)
-- Review fixes: unique vote key, indexes for feed/consensus queries.
-- Applied via: npx wrangler d1 migrations apply project-aghoy-db

-- Deduplicate report_votes on (report_id, indicator_id, fingerprint) so a
-- re-run never double-counts a reporter's contribution. Existing duplicates
-- are kept; only future writes are constrained.
CREATE UNIQUE INDEX IF NOT EXISTS idx_votes_unique
  ON report_votes(report_id, indicator_id, fingerprint);

-- Indexes for the rejected_reports quarantine (reporter + time filtering).
CREATE INDEX IF NOT EXISTS idx_rejected_fp ON rejected_reports(fingerprint);
CREATE INDEX IF NOT EXISTS idx_rejected_created ON rejected_reports(created_at);

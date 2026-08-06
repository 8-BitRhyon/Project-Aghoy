// D1 + R2 + Vectorize access for Project Aghoy. Only sanitized content (the
// Rejects layer output) is ever written anywhere.

import { extractIndicators, Indicator } from "./indicators";
import { redactPII } from "../rejects/rejects";

export interface StorageEnv {
  DB: D1Database;
  EVIDENCE?: R2Bucket;
  VECTORIZE: VectorizeIndex;
  AI: any;
}

export interface ReportRecord {
  contentHash: string;
  verdict: string;
  riskScore: number;
  scamType: string;
  redFlags: string[];
  sanitizedContent: string;
  provider: string;
  source: string;
  indicators: Indicator[];
}

const sha256Hex = async (text: string): Promise<string> => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

// Rejects-layer redaction applied before ANY persistence. Server-authoritative.
const sanitizeForStorage = (text: string): string => {
  return redactPII(typeof text === "string" ? text : "").text;
};

export const storeReport = async (
  env: StorageEnv,
  input: {
    verdict: string;
    riskScore: number;
    scamType: string;
    redFlags: string[];
    content: string;
    provider: string;
    source?: string;
    phoneHashes?: string[];
  }
): Promise<{ id: number | null; duplicate: boolean; indicators: Indicator[] }> => {
  const sanitizedContent = sanitizeForStorage(input.content);
  const contentHash = await sha256Hex(sanitizedContent);
  const indicators = extractIndicators(sanitizedContent);
  // Sanitize every persisted field, not just content: structured metadata
  // (scamType, red flags, provider, source) may carry names, dates, phones,
  // or other PII and must go through the Rejects layer before storage.
  const scamType = sanitizeForStorage(input.scamType).substring(0, 100);
  const redFlags = (input.redFlags || []).map((flag) => sanitizeForStorage(flag).substring(0, 64));
  const provider = sanitizeForStorage(input.provider).substring(0, 100);
  const source = sanitizeForStorage(input.source || "web").substring(0, 100);
  // Phone numbers are only ever persisted as pre-computed SHA-256 hashes, so
  // the "this number was reported N times" signal works without storing PII.
  const phoneHashes = Array.from(
    new Set(Array.isArray(input.phoneHashes) ? input.phoneHashes.slice(0, 10) : [])
  );

  // Dedup is race-safe: INSERT ... ON CONFLICT DO NOTHING + follow-up SELECT so
  // two parallel posts of the same content (postReport + fetchSimilarScams)
  // cannot trip the UNIQUE(content_hash) constraint.
  const insertResult = await env.DB.prepare(
    `INSERT INTO reports (content_hash, verdict, risk_score, scam_type, red_flags, sanitized_content, provider, source)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)
     ON CONFLICT(content_hash) DO NOTHING`
  )
    .bind(
      contentHash,
      input.verdict,
      input.riskScore,
      scamType,
      JSON.stringify(redFlags),
      sanitizedContent,
      provider,
      source
    )
    .run();

  const row = await env.DB.prepare("SELECT id FROM reports WHERE content_hash = ?1")
    .bind(contentHash)
    .first();
  if (!row) {
    return { id: null, duplicate: false, indicators };
  }
  const id = (row as { id: number }).id;
  const duplicate = insertResult.meta?.changes === 0;

  // Indicators and phone-hash counts only increment on the first insert of a
  // given content hash. Duplicates (including parallel double-posts from the
  // client's postReport + fetchSimilarScams) return early so retries do not
  // inflate "reported N times" counters.
  if (duplicate) {
    return { id, duplicate: true, indicators };
  }

  for (const ind of indicators) {
    await env.DB.prepare(
      `INSERT INTO indicators (type, value, status, times_reported)
       VALUES (?1, ?2, 'reported', 1)
       ON CONFLICT(type, value) DO UPDATE SET
         times_reported = times_reported + 1,
         last_seen = datetime('now')`
    )
      .bind(ind.type, ind.value)
      .run();
  }

  for (const hash of phoneHashes) {
    await env.DB.prepare(
      `INSERT INTO indicators (type, value, status, times_reported)
       VALUES ('phone', ?1, 'reported', 1)
       ON CONFLICT(type, value) DO UPDATE SET
         times_reported = times_reported + 1,
         last_seen = datetime('now')`
    )
      .bind(hash)
      .run();
  }

  return { id, duplicate, indicators };
};

export const reportExists = async (env: StorageEnv, reportId: number): Promise<boolean> => {
  const row = await env.DB.prepare("SELECT id FROM reports WHERE id = ?1").bind(reportId).first();
  return !!row;
};

export const lookupIndicator = async (
  env: StorageEnv,
  type: string,
  value: string
): Promise<{ status: string; times_reported: number } | null> => {
  const row = await env.DB.prepare(
    `SELECT status, times_reported FROM indicators WHERE type = ?1 AND value = ?2`
  )
    .bind(type, value)
    .first();
  return row ? (row as { status: string; times_reported: number }) : null;
};

// Return recently reported indicators for the open blocklist feed.
// Phone rows are EXCLUDED: they are client-supplied SHA-256 hashes persisted
// without a server secret, so an attacker could reverse the PH mobile-number
// keyspace offline. Phone entries stay private and are only reachable via
// exact-match lookupIndicator("phone", hash).
export const listIndicators = async (
  env: StorageEnv,
  limit = 100
): Promise<Array<{ type: string; value: string; status: string; times_reported: number; last_seen: string }>> => {
  const { results } = await env.DB.prepare(
    `SELECT type, value, status, times_reported, last_seen
     FROM indicators
     WHERE type != 'phone'
     ORDER BY last_seen DESC
     LIMIT ?1`
  )
    .bind(limit)
    .all();
  return results as Array<{ type: string; value: string; status: string; times_reported: number; last_seen: string }>;
};

export const verifyIndicator = async (
  env: StorageEnv,
  type: string,
  value: string,
  verifiedBy = "aghoy",
  source = "manual",
  notes = ""
): Promise<boolean> => {
  const row = await env.DB.prepare("SELECT id FROM indicators WHERE type = ?1 AND value = ?2")
    .bind(type, value)
    .first();
  if (!row) return false;
  const indicatorId = (row as { id: number }).id;

  await env.DB.prepare("UPDATE indicators SET status = 'verified' WHERE id = ?1").bind(indicatorId).run();
  await env.DB.prepare(
    `INSERT INTO blacklist (indicator_id, verified_by, source, notes)
     VALUES (?1, ?2, ?3, ?4)
     ON CONFLICT(indicator_id) DO UPDATE SET
       verified_by = excluded.verified_by,
       source = excluded.source,
       notes = excluded.notes,
       verified_at = datetime('now')`
  )
    .bind(indicatorId, verifiedBy, source, notes)
    .run();
  return true;
};

// Only store sanitized artifacts. Returns null if R2 is not bound (R2 must be
// enabled on the account; see scripts/setup-storage.sh).
export const storeEvidence = async (
  env: StorageEnv,
  reportId: number,
  data: ArrayBuffer | string,
  contentType: string,
  keyPrefix = "evidence"
): Promise<string | null> => {
  if (!env.EVIDENCE) return null;
  const key = `${keyPrefix}/${reportId}-${Date.now()}`;
  const body = typeof data === "string" ? data : data;
  await env.EVIDENCE.put(key, body, {
    httpMetadata: { contentType },
  });
  return key;
};

export const getEvidence = async (
  env: StorageEnv,
  key: string
): Promise<{ data: ArrayBuffer; contentType: string } | null> => {
  if (!env.EVIDENCE) return null;
  const obj = await env.EVIDENCE.get(key);
  if (!obj) return null;
  return { data: await obj.arrayBuffer(), contentType: obj.httpMetadata?.contentType || "application/octet-stream" };
};

export const findSimilarScams = async (
  env: StorageEnv,
  text: string,
  topK = 3
): Promise<Array<{ id: string; score: number; metadata?: Record<string, unknown> }>> => {
  const sanitized = sanitizeForStorage(text);
  const embeddings = await env.AI.run("@cf/baai/bge-base-en-v1.5", { text: sanitized });
  const vectors = await env.VECTORIZE.query(embeddings.data[0], { topK });
  return (vectors.matches || []).map((m: any) => ({
    id: m.id,
    score: m.score,
    metadata: m.metadata,
  }));
};

export const seedVectorize = async (
  env: StorageEnv,
  entries: Array<{ id: string; text: string; metadata?: Record<string, unknown> }>
): Promise<{ inserted: number; error?: string }> => {
  if (!Array.isArray(entries) || entries.length === 0) {
    return { inserted: 0, error: "No entries to seed" };
  }
  const vectors = [];
  for (const entry of entries) {
    const sanitized = sanitizeForStorage(entry.text);
    const { data } = await env.AI.run("@cf/baai/bge-base-en-v1.5", { text: sanitized });
    vectors.push({
      id: entry.id,
      values: data[0],
      metadata: { ...(entry.metadata || {}), text: sanitized },
    });
  }
  const res = await env.VECTORIZE.upsert(vectors);
  return { inserted: vectors.length, error: (res as any)?.error };
};

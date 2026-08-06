// D1 + R2 + Vectorize access for Project Aghoy. Only sanitized content (the
// Rejects layer output) is ever written anywhere.

import { extractIndicators, Indicator } from "./indicators";
import { redactPII } from "../rejects/rejects";
import { gateReport, GateResult } from "./qualityGate";
import { reputationScore, ReputationInputs, ReputationResult, reporterTrust } from "./reputation";

const LOOKBACK_DAYS = 90;
const clamp01 = (v: number): number => Math.max(0, Math.min(1, v));

export interface StorageEnv {
  DB: D1Database;
  EVIDENCE?: R2Bucket;
  VECTORIZE: VectorizeIndex;
  AI: any;
}

// Pseudonymous reporter fingerprint: HMAC of CF-Connecting-IP under the
// consent signing key. Never store the raw IP.
export const reporterFingerprint = async (ip: string, consentKey: string): Promise<string> => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(`aghoy-reporter:${consentKey}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
};

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
  },
  opts?: { fingerprint?: string; consentKey?: string }
): Promise<{ id: number | null; duplicate: boolean; indicators: Indicator[]; gate?: GateResult }> => {
  const sanitizedContent = sanitizeForStorage(input.content);
  const contentHash = await sha256Hex(sanitizedContent);
  const indicators = extractIndicators(sanitizedContent);
  const scamType = sanitizeForStorage(input.scamType).substring(0, 100);
  const redFlags = (input.redFlags || []).map((flag) => sanitizeForStorage(flag).substring(0, 64));
  const provider = sanitizeForStorage(input.provider).substring(0, 100);
  const source = sanitizeForStorage(input.source || "web").substring(0, 100);
  const phoneHashes = Array.from(
    new Set(Array.isArray(input.phoneHashes) ? input.phoneHashes.slice(0, 10) : [])
  );

  // ===== QUALITY GATE (Tier 1): is this a real report or garbage? =====
  // Pure checks + reporter trust. Rejected reports are quarantined and the
  // caller returns a neutral 200 so attackers cannot probe the gate.
  const fingerprint = opts?.fingerprint || "legacy";
  let reporter = await getReporter(env, fingerprint);
  let gate: GateResult = {
    action: "accept",
    weight: 1,
    reasons: ["accepted"],
  };

  if (fingerprint !== "legacy") {
    // Compute gate inputs from the database, not hardcoded values: whether this
    // fingerprint has reported these indicators before (repeat discount),
    // whether every indicator is allowlisted, and whether any matches a
    // brand-lookalike flag pattern.
    const [firstForIndicator, allowlisted, flagMatched] = await Promise.all([
      hasReportedIndicator(env, fingerprint, indicators),
      areAllAllowlisted(env, indicators),
      matchesFlagList(env, indicators),
    ]);
    gate = gateReport({
      content: sanitizedContent,
      indicators: indicators.map((i) => i.type),
      phoneHashes,
      submitterVerdict: input.verdict,
      reporterTrust: reporter ? reporter.trust_score : 0.4,
      isFirstForIndicator: !firstForIndicator,
      honeypotHit: await hasHoneypot(env, indicators, phoneHashes),
      allowlistedOnly: allowlisted && indicators.length > 0,
      flagMatch: flagMatched,
      source,
    });
  }

  if (gate.action === "reject") {
    await env.DB.prepare(
      `INSERT INTO rejected_reports (fingerprint, reason, verdict, content) VALUES (?1, ?2, ?3, ?4)`
    )
      .bind(fingerprint, gate.reasons.join(","), input.verdict, sanitizedContent.substring(0, 1000))
      .run();
    await touchReporter(env, fingerprint, { hardReject: true });
    return { id: null, duplicate: false, indicators, gate };
  }

  // ===== PERSIST REPORT (dedup race-safe) =====
  const insertResult = await env.DB.prepare(
    `INSERT INTO reports (content_hash, verdict, risk_score, scam_type, red_flags, sanitized_content, provider, source, reporter_fp)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
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
      source,
      fingerprint
    )
    .run();

  const row = await env.DB.prepare("SELECT id FROM reports WHERE content_hash = ?1")
    .bind(contentHash)
    .first();
  if (!row) {
    return { id: null, duplicate: false, indicators, gate };
  }
  const id = (row as { id: number }).id;
  const duplicate = insertResult.meta?.changes === 0;
  if (duplicate) {
    return { id, duplicate: true, indicators, gate };
  }

  // ===== VOTES + INDICATOR UPDATES =====
  // Weighted contributions feed the reputation score; weight is reporter-trust
  // scaled and capped for repeats (poisoning resistance).
  await touchReporter(env, fingerprint, {});

  for (const ind of indicators) {
    const indicatorId = await upsertIndicator(env, ind.type, ind.value, source);
    const weight = gate.action === "suspect" ? gate.weight : Math.min(1, reporter?.trust_score ?? 0.4);
    if (weight > 0 && indicatorId) {
      await env.DB.prepare(
        `INSERT INTO report_votes (report_id, indicator_id, fingerprint, weight) VALUES (?1, ?2, ?3, ?4)`
      )
        .bind(id, indicatorId, fingerprint, weight)
        .run();
    }
  }

  for (const hash of phoneHashes) {
    const indicatorId = await upsertIndicator(env, "phone", hash, source);
    if (indicatorId) {
      await env.DB.prepare(
        `INSERT INTO report_votes (report_id, indicator_id, fingerprint, weight) VALUES (?1, ?2, ?3, ?4)`
      )
        .bind(id, indicatorId, fingerprint, 0.4)
        .run();
    }
  }

  // Recompute reputation for the touched domains (cheap at this scale).
  for (const ind of indicators) {
    if (ind.type === "domain") {
      await recomputeDomainReputation(env, ind.value);
    }
  }

  return { id, duplicate: false, indicators, gate };
};

export const reportExists = async (env: StorageEnv, reportId: number): Promise<boolean> => {
  const row = await env.DB.prepare("SELECT id FROM reports WHERE id = ?1").bind(reportId).first();
  return !!row;
};

const getReporter = async (
  env: StorageEnv,
  fingerprint: string
): Promise<{ trust_score: number; status: string; reports_total: number; reports_24h: number } | null> => {
  const row = await env.DB.prepare(
    `SELECT trust_score, status, reports_total, reports_24h FROM reporters WHERE fingerprint = ?1`
  )
    .bind(fingerprint)
    .first();
  return row ? (row as { trust_score: number; status: string; reports_total: number; reports_24h: number }) : null;
};

const touchReporter = async (
  env: StorageEnv,
  fingerprint: string,
  flags: { hardReject?: boolean }
): Promise<void> => {
  if (fingerprint === "legacy") return;
  await env.DB.prepare(
    `INSERT INTO reporters (fingerprint, reports_total, reports_24h, hard_rejects, last_seen)
     VALUES (?1, 1, 1, ?2, datetime('now'))
     ON CONFLICT(fingerprint) DO UPDATE SET
       reports_total = reports_total + 1,
       reports_24h = CASE WHEN julianday('now') - julianday(last_seen) < 1 THEN reports_24h + 1 ELSE 1 END,
       hard_rejects = reporters.hard_rejects + ?2,
       last_seen = datetime('now')`
  )
    .bind(fingerprint, flags.hardReject ? 1 : 0)
    .run();

  // Recompute trust from stored counters so penalties actually take effect.
  // Queries the reporters row just written, then persists the new trust.
  const row = await env.DB.prepare(
    `SELECT reports_total, reports_24h, honeypot_hits, hard_rejects FROM reporters WHERE fingerprint = ?1`
  )
    .bind(fingerprint)
    .first();
  if (row) {
    const r = row as { reports_total: number; reports_24h: number; honeypot_hits: number; hard_rejects: number };
    const trust = reporterTrust({
      corroborated: 0,
      hardContradictions: 0,
      burstDuplicates: 0,
      clearedSupport: 0,
      honeypotHit: r.honeypot_hits > 0,
      hardRejects: r.hard_rejects,
    });
    await env.DB.prepare(
      `UPDATE reporters SET trust_score = ?1,
        status = CASE WHEN ?1 <= 0 THEN 'untrusted' ELSE 'active' END
       WHERE fingerprint = ?2`
    )
      .bind(trust, fingerprint)
      .run();
  }
};

const hasHoneypot = async (
  env: StorageEnv,
  indicators: Indicator[],
  phoneHashes: string[]
): Promise<boolean> => {
  if (phoneHashes.length > 0) {
    const placeholders = phoneHashes.map(() => "?").join(",");
    const row = await env.DB.prepare(`SELECT value FROM honeypots WHERE value IN (${placeholders})`)
      .bind(...phoneHashes)
      .first();
    if (row) return true;
  }
  for (const ind of indicators) {
    if (ind.type !== "phone") {
      const row = await env.DB.prepare(`SELECT value FROM honeypots WHERE value = ?1`).bind(ind.value).first();
      if (row) return true;
    }
  }
  return false;
};

// Has this fingerprint already reported any of these indicators? (Repeat
// discount for poisoning resistance.)
const hasReportedIndicator = async (
  env: StorageEnv,
  fingerprint: string,
  indicators: Indicator[]
): Promise<boolean> => {
  for (const ind of indicators) {
    const row = await env.DB.prepare(
      `SELECT 1 FROM report_votes v
       JOIN indicators i ON i.id = v.indicator_id
       WHERE v.fingerprint = ?1 AND i.type = ?2 AND i.value = ?3
       LIMIT 1`
    )
      .bind(fingerprint, ind.type, ind.value)
      .first();
    if (row) return true;
  }
  return false;
};

// Are ALL non-phone indicators on the allowlist?
const areAllAllowlisted = async (env: StorageEnv, indicators: Indicator[]): Promise<boolean> => {
  const nonPhone = indicators.filter((i) => i.type !== "phone");
  if (nonPhone.length === 0) return false;
  for (const ind of nonPhone) {
    const row = await env.DB.prepare("SELECT value FROM allowlist WHERE value = ?1").bind(ind.value).first();
    if (!row) return false;
  }
  return true;
};

// Does any indicator match a brand-lookalike flag pattern?
const matchesFlagList = async (env: StorageEnv, indicators: Indicator[]): Promise<boolean> => {
  const patterns: RegExp[] = [
    /\b(gcash|maya|paymaya|bdo|bpi|landbank|metrobank|unionbank|rcbc|gotyme|seabank|pag[- ]?ibig|egov|pnb)-?verify/i,
    /\b(gcash|maya|bdo|bpi|landbank)[\s.-]*(alert|security|suspended|lock|update|login)/i,
    /\b(verify|confirm|suspended|locked|unlock)[\s.-]*(gcash|maya|bdo|bpi|landbank|pnp|nbi|cicc)\b/i,
  ];
  for (const ind of indicators) {
    for (const p of patterns) {
      if (p.test(ind.value)) return true;
    }
  }
  return false;
};

const upsertIndicator = async (
  env: StorageEnv,
  type: string,
  value: string,
  source: string
): Promise<number | null> => {
  // The indicators.source column is a lane, not the report origin: user reports
  // always land in the crowd lane ('user'); only the seed script writes 'seed'.
  const lane = source === "seed" ? "seed" : "user";
  const result = await env.DB.prepare(
    `INSERT INTO indicators (type, value, status, times_reported, source)
     VALUES (?1, ?2, 'reported', 1, ?3)
     ON CONFLICT(type, value) DO UPDATE SET
       times_reported = times_reported + 1,
       last_seen = datetime('now'),
       source = CASE WHEN indicators.source = 'seed' THEN 'user' ELSE indicators.source END`
  )
    .bind(type, value, lane)
    .run();
  const row = await env.DB.prepare("SELECT id FROM indicators WHERE type = ?1 AND value = ?2")
    .bind(type, value)
    .first();
  return row ? (row as { id: number }).id : null;
};

// Recompute the reputation cache row for one domain from the vote ledger.
export const recomputeDomainReputation = async (env: StorageEnv, domain: string): Promise<void> => {
  const { results } = await env.DB.prepare(
    `SELECT r.verdict, r.created_at, r.reporter_fp, v.weight
     FROM report_votes v
     JOIN reports r ON r.id = v.report_id
     JOIN indicators i ON i.id = v.indicator_id
     WHERE i.type = 'domain' AND i.value = ?1
       AND r.created_at >= datetime('now', '-90 days')`
  )
    .bind(domain)
    .all<{ verdict: string; created_at: string; reporter_fp: string | null; weight: number }>();
  const rows = results || [];

  const indicator = await env.DB.prepare(
    `SELECT status, times_reported, source, seed_weight FROM indicators WHERE type = 'domain' AND value = ?1`
  )
    .bind(domain)
    .first();
  const indicatorRow = indicator as { status: string; times_reported: number; source: string; seed_weight: number } | null;

  let nEff = 0;
  let nHigh = 0;
  let nSusp = 0;
  let nSafe = 0;
  const distinct = new Set<string>();
  let lastSeen = 0;
  for (const r of rows || []) {
    const ts = Date.parse((r.created_at || "").replace(" ", "T") + "Z");
    const ageDays = Number.isFinite(ts) ? (Date.now() - ts) / 86400000 : LOOKBACK_DAYS;
    nEff += r.weight * Math.pow(2, -ageDays / 30);
    if (r.verdict === "HIGH_RISK") nHigh++;
    else if (r.verdict === "SUSPICIOUS") nSusp++;
    else if (r.verdict === "SAFE") nSafe++;
    if (r.reporter_fp) distinct.add(r.reporter_fp);
    if (Number.isFinite(ts) && ts > lastSeen) lastSeen = ts;
  }
  const total = rows?.length || 0;
  // Vectorize semantic prior for cold start (best-effort; skips on failure).
  let simPrior = 0;
  try {
    const matches = await findSimilarScams(env, domain, 1);
    const top = matches[0];
    if (top && typeof top.score === "number") simPrior = Math.max(0, Math.min(1, top.score));
  } catch {
    simPrior = 0;
  }
  const daysSince = total ? (Date.now() - lastSeen) / 86400000 : LOOKBACK_DAYS;
  const seedWeight = indicatorRow?.source === "seed" ? indicatorRow.seed_weight : 0;

  const input: ReputationInputs = {
    nEff,
    distinctReporters: distinct.size,
    highRiskShare: total ? nHigh / total : 0,
    suspiciousShare: total ? nSusp / total : 0,
    safeShare: total ? nSafe / total : 0,
    daysSinceLastSeen: daysSince,
    simPrior,
    seedWeight,
    status: indicatorRow?.status || "reported",
  };
  const result: ReputationResult = reputationScore(input);

  await env.DB.prepare(
    `INSERT INTO domain_reputation (domain, score, label, status, reason, n_reports, n_eff, distinct_reporters, n_high_risk, n_suspicious, n_safe, high_risk_share, suspicious_share, sim_prior, seed_weight, first_seen, last_seen, updated_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, datetime('now'), datetime('now'), datetime('now'))
     ON CONFLICT(domain) DO UPDATE SET
       score = excluded.score, label = excluded.label, status = excluded.status,
       reason = excluded.reason, n_reports = excluded.n_reports, n_eff = excluded.n_eff,
       distinct_reporters = excluded.distinct_reporters, n_high_risk = excluded.n_high_risk,
       n_suspicious = excluded.n_suspicious, n_safe = excluded.n_safe,
       high_risk_share = excluded.high_risk_share, suspicious_share = excluded.suspicious_share,
       sim_prior = excluded.sim_prior, seed_weight = excluded.seed_weight,
       last_seen = excluded.last_seen, updated_at = datetime('now')`
  )
    .bind(
      domain,
      result.score,
      result.label,
      input.status,
      result.reason,
      total,
      result.nEff,
      result.distinctReporters,
      nHigh,
      nSusp,
      nSafe,
      result.highRiskShare,
      result.suspiciousShare,
      result.simPrior,
      seedWeight
    )
    .run();

  // Bump feed version for CDN cache invalidation.
  await env.DB.prepare(
    `INSERT INTO feed_meta (key, value) VALUES ('version', ?1)
     ON CONFLICT(key) DO UPDATE SET value = excluded.value`
  )
    .bind(String(Date.now()))
    .run();
};

export const getDomainReputation = async (
  env: StorageEnv,
  domain: string
): Promise<{
  domain: string;
  score: number;
  label: string;
  status: string;
  reason: string;
  nEff: number;
  distinctReporters: number;
  highRiskShare: number;
  suspiciousShare: number;
  simPrior: number;
  confidence: number;
  feedVisible: boolean;
  first_seen: string;
  last_seen: string;
} | null> => {
  const row = await env.DB.prepare(
    `SELECT score, label, status, reason, n_reports, n_eff, distinct_reporters,
            n_high_risk, n_suspicious, n_safe, high_risk_share, suspicious_share, sim_prior,
            first_seen, last_seen
     FROM domain_reputation WHERE domain = ?1`
  )
    .bind(domain)
    .first();
  if (!row) return null;
  const r = row as any;
  return {
    domain,
    score: r.score,
    label: r.label,
    status: r.status,
    reason: r.reason,
    nEff: r.n_eff,
    distinctReporters: r.distinct_reporters,
    highRiskShare: r.high_risk_share,
    suspiciousShare: r.suspicious_share,
    simPrior: r.sim_prior,
    confidence: clamp01((r.n_eff / (r.n_eff + 5)) * (0.4 + 0.6 * (r.distinct_reporters / Math.max(1, r.n_eff)))),
    feedVisible: (r.score >= 7 || r.status === "verified") && (r.distinct_reporters >= 2 || r.status === "verified"),
    first_seen: r.first_seen,
    last_seen: r.last_seen,
  };
};

// Feed-listed domains: score >= 7 OR verified, with at least 2 distinct
// reporters (or verified). Never phones, never honeypots, never cleared.
export const listFeedDomains = async (
  env: StorageEnv,
  limit = 500
): Promise<Array<{ domain: string; score: number; label: string; status: string; reason: string }>> => {
  const { results } = await env.DB.prepare(
    `SELECT domain, score, label, status, reason
     FROM domain_reputation
     WHERE status != 'cleared'
       AND ((score >= 7 AND distinct_reporters >= 2) OR status = 'verified')
     ORDER BY score DESC
     LIMIT ?1`
  )
    .bind(limit)
    .all();
  return (results || []) as Array<{ domain: string; score: number; label: string; status: string; reason: string }>;
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

// Aggregate observability over the reports table: verdict distribution,
// provider usage (including the deterministic "brandIntel" fallback rate), and
// scan volume. Feeds the ISO 42001 monitoring / model-drift narrative.
export const getMetrics = async (
  env: StorageEnv
): Promise<{
  totalReports: number;
  verdicts: Record<string, number>;
  providers: Record<string, number>;
  fallbackRate: number;
  highRiskRate: number;
}> => {
  const verdicts: Record<string, number> = { SAFE: 0, SUSPICIOUS: 0, HIGH_RISK: 0 };
  const providers: Record<string, number> = {};
  const { results } = await env.DB.prepare(
    `SELECT verdict, provider FROM reports`
  ).all<{ verdict: string; provider: string }>();

  for (const row of results || []) {
    verdicts[row.verdict] = (verdicts[row.verdict] || 0) + 1;
    const provider = row.provider || "unknown";
    providers[provider] = (providers[provider] || 0) + 1;
  }
  const total = results?.length || 0;
  const fallback = providers["brandIntel"] || 0;
  const highRisk = verdicts["HIGH_RISK"] || 0;
  return {
    totalReports: total,
    verdicts,
    providers,
    fallbackRate: total ? Number((fallback / total).toFixed(3)) : 0,
    highRiskRate: total ? Number((highRisk / total).toFixed(3)) : 0,
  };
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

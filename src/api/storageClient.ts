import { WORKER_ORIGIN } from "../config";
import { enqueueAndFlush, flushQueue, idbReportStore, ReportStore } from "../../utils/reportQueue";

const FETCH_TIMEOUT_MS = 5000;
const CONSENT_STORAGE_KEY = "aghoy_consent_token";
const CONSENT_VERSION_KEY = "aghoy_consent_version";
const LEARNER_ID_KEY = "aghoy_learner_id";

// Stable pseudonymous learner id for Dojo progress (server derives the HMAC
// key; the raw id is never stored server-side).
export const getLearnerId = (): string => {
  let id = localStorage.getItem(LEARNER_ID_KEY);
  if (!id) {
    id = `l_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(LEARNER_ID_KEY, id);
  }
  return id;
};

export interface ReportPayload {
  verdict: string;
  riskScore: number;
  scamType: string;
  redFlags: string[];
  content: string; // Rejects-layer output only
  provider?: string;
  source?: string;
  phoneHashes?: string[];
}

export interface IndicatorStatus {
  found: boolean;
  status?: string;
  times_reported?: number;
}

const fetchWithTimeout = async (url: string, init?: RequestInit, externalSignal?: AbortSignal): Promise<Response> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const onAbort = () => controller.abort();
  externalSignal?.addEventListener("abort", onAbort, { once: true });
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
    externalSignal?.removeEventListener("abort", onAbort);
  }
};

export interface ReportResult {
  ok: boolean;
  rejected?: boolean;
  id?: number | null;
}

// Content limit enforced server-side (dojo.ts MAX_CONTENT_LENGTH). The scanner
// and analyzer truncate already; this is defense-in-depth so a long pasted
// message can never poison the queue with a 400 that retries forever.
const MAX_REPORT_CONTENT_LENGTH = 4000;

const truncateContent = (payload: ReportPayload): ReportPayload =>
  payload.content && payload.content.length > MAX_REPORT_CONTENT_LENGTH
    ? { ...payload, content: payload.content.slice(0, MAX_REPORT_CONTENT_LENGTH) }
    : payload;

// Durable offline-first send. Every report is persisted to IndexedDB BEFORE
// the network attempt, then flushed. Offline reports queue and auto-flush on
// the next opportunity (see utils/reportQueue.ts).
//
// Return semantics drive the queue:
//   true                -> sent, record deleted
//   false               -> transient (offline/5xx), retry with backoff
//   "permanent"         -> server rejected (4xx), delete the record now -
//                          retrying a poisoned/expired payload 25x and parking
//                          it forever (old behavior) wastes storage for a
//                          report that can never succeed.
const sendReportOnce = async (payload: ReportPayload): Promise<boolean | "permanent"> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Consent-Token": getConsentToken() || "" },
      body: JSON.stringify({ ...truncateContent(payload), source: payload.source || "web" }),
    });
    if (!res.ok) {
      // 4xx = the Worker rejected this payload (bad shape, oversize, expired
      // consent). Never a transient condition - do not retry it.
      if (res.status >= 400 && res.status < 500) return "permanent";
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

let queueStore: ReportStore | null = null;
const getQueueStore = (): ReportStore => {
  if (!queueStore) queueStore = idbReportStore();
  return queueStore;
};

export const postReport = async (payload: ReportPayload): Promise<ReportResult> => {
  try {
    // Persist first, then flush. Offline => queued, not lost.
    await enqueueAndFlush(getQueueStore(), payload, sendReportOnce);
    return { ok: true };
  } catch {
    // IndexedDB unavailable (private mode / very old browser): fall back to a
    // best-effort direct send so reports are still attempted. A permanent 4xx
    // ("permanent") is a rejection, not a send.
    const result = await sendReportOnce(payload);
    if (result === true) return { ok: true };
    if (result === "permanent") return { ok: false, rejected: true };
    return { ok: false };
  }
};

// Flush any queued reports now (called on online event / app foreground).
export const flushQueuedReports = async (): Promise<void> => {
  try {
    await flushQueue(getQueueStore(), sendReportOnce);
  } catch {
    // best-effort
  }
};

export const lookupIndicator = async (type: string, value: string): Promise<IndicatorStatus | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/indicators?type=${encodeURIComponent(type)}&value=${encodeURIComponent(value)}`);
    if (res.status === 404) return { found: false };
    if (!res.ok) return null;
    const data = await res.json();
    return data as IndicatorStatus;
  } catch {
    return null;
  }
};

export interface DomainReputation {
  domain: string;
  score: number;
  label: string;
  status: string;
  reason: string;
  nEff?: number;
  distinctReporters?: number;
  confidence?: number;
  feedVisible?: boolean;
  first_seen?: string;
  last_seen?: string;
}

// Community reputation for a domain (public read, no consent token needed).
export const domainReputation = async (domain: string): Promise<DomainReputation | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/feed/reputation?domain=${encodeURIComponent(domain)}`);
    if (!res.ok) return null;
    return (await res.json()) as DomainReputation;
  } catch {
    return null;
  }
};

export interface InspectResult {
  ok: boolean;
  error?: string;
  url?: string;
  finalUrl?: string;
  finalDomain?: string;
  httpStatus?: number;
  contentType?: string;
  title?: string;
  truncated?: boolean;
  redirects?: string[];
}

// Server-side, SSRF-guarded inspection of a suspicious URL. Returns detection
// signals only (title, final domain, status, redirects); never persists content.
// Client-side validation is defense-in-depth only (the server is authoritative).
export const inspectUrl = async (target: string, signal?: AbortSignal): Promise<InspectResult | null> => {
  let parsed: URL;
  try {
    parsed = new URL(target.trim());
  } catch {
    return { ok: false, error: "Invalid URL" };
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return { ok: false, error: "Only http/https URLs can be inspected" };
  }
  try {
    const res = await fetchWithTimeout(
      `${WORKER_ORIGIN}/inspect`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Consent-Token": getConsentToken() || "" },
        body: JSON.stringify({ url: target }),
      },
      signal
    );
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as InspectResult | null;
      return data || { ok: false, error: "Inspection failed" };
    }
    return (await res.json()) as InspectResult;
  } catch {
    return null;
  }
};

// ============================================================
// Consent attestation (server-enforced)
// ============================================================

// Mint a consent token by calling the Worker. This is the only way to obtain a
// valid attestation; the server signs it, so a client cannot forge one.
export const mintConsentToken = async (): Promise<{ token: string; version: string } | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/consent/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { token?: string; version?: string };
    if (!data.token) return null;
    localStorage.setItem(CONSENT_STORAGE_KEY, data.token);
    localStorage.setItem(CONSENT_VERSION_KEY, data.version || "");
    return { token: data.token, version: data.version || "" };
  } catch {
    return null;
  }
};

// Return the stored consent token, or null if consent is not current.
export const getConsentToken = (): string | null => {
  const token = localStorage.getItem(CONSENT_STORAGE_KEY);
  return token || null;
};

// Clear stored consent (used on reset and on consent-version mismatch).
export const clearConsentToken = (): void => {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  localStorage.removeItem(CONSENT_VERSION_KEY);
};

// ============================================================
// Dojo progress persistence (consent-gated, pseudonymous)
// ============================================================

const learnerHeaders = async (): Promise<Record<string, string>> => ({
  "Content-Type": "application/json",
  "X-Consent-Token": getConsentToken() || "",
  "X-Learner-Id": getLearnerId(),
});

// Save progress + optional batch answers. Best-effort; never blocks training.
export const saveTrainingProgress = async (
  progress: unknown,
  answers?: Array<{ scenarioId: string; stepIndex: number; optionId: string; correct: boolean; responseMs: number }>
): Promise<void> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/training/progress`, {
      method: "POST",
      headers: await learnerHeaders(),
      body: JSON.stringify({ progress, answers: answers ?? [] }),
    });
    void res;
  } catch {
    // offline / transient: progress stays in component state until next save
  }
};

// Load resume state. Returns null if never saved or unreachable.
export const loadTrainingProgress = async <T,>(): Promise<T | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/training/progress`, {
      method: "GET",
      headers: await learnerHeaders(),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { progress?: T };
    return data.progress ?? null;
  } catch {
    return null;
  }
};

// Record a placement result (sets starting Shield level server-side).
export const savePlacement = async (score: number, max: number): Promise<number | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/training/placement`, {
      method: "POST",
      headers: await learnerHeaders(),
      body: JSON.stringify({ score, max }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { shieldLevel?: number };
    return data.shieldLevel ?? null;
  } catch {
    return null;
  }
};

// Record a "I caught a real scam" self-report (narrative Rejects-sanitized).
export const saveSelfReport = async (report: { vector: string; amountPesos?: number; narrative: string }): Promise<void> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/training/self-report`, {
      method: "POST",
      headers: await learnerHeaders(),
      body: JSON.stringify(report),
    });
    void res;
  } catch {
    // best-effort
  }
};

// utils/reportQueue.ts - durable offline-first report queue.
//
// A scan result is a community asset: if the user is offline when a scam is
// detected, the report must not be lost. This module enqueues every report to
// IndexedDB BEFORE any network attempt, flushes on connectivity, and retries
// with backoff. The Worker dedups on content_hash, so retries are idempotent.
//
// Design (write-once-then-delete):
//   1. persist the sanitized payload to IndexedDB first
//   2. try to flush immediately; on success delete the record
//   3. on failure keep it, back off (30s -> 15m, cap 25 attempts)
//   4. on app kill the record is still in IndexedDB -> next launch retries
//
// Pure-ish: the only browser APIs are IndexedDB + navigator.onLine. The state
// machine is testable via the injected store interface.

export interface QueuedReport {
  id: string;
  payload: unknown;
  attempts: number;
  nextAttemptAt: number;
  createdAt: number;
}

export interface ReportStore {
  getAll: () => Promise<QueuedReport[]>;
  put: (report: QueuedReport) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

const DB_NAME = "aghoy-report-queue";
const STORE = "reports";
const DB_VERSION = 1;
export const MAX_ATTEMPTS = 25;

let dbPromise: Promise<IDBDatabase> | null = null;

const openDb = (): Promise<IDBDatabase> => {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE)) {
          req.result.createObjectStore(STORE, { keyPath: "id" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
};

const tx = <T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> =>
  openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const req = fn(t.objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );

export const idbReportStore = (): ReportStore => ({
  getAll: () => tx("readonly", (s) => s.getAll() as IDBRequest<QueuedReport[]>),
  put: (report) => tx("readwrite", (s) => s.put(report) as IDBRequest<unknown>).then(() => undefined),
  delete: (id) => tx("readwrite", (s) => s.delete(id) as IDBRequest<unknown>).then(() => undefined),
});

// Exponential backoff with jitter: 30s, 60s, 2m, 5m, 15m (capped), jittered.
export const backoffDelayMs = (attempt: number): number => {
  const base = [30_000, 60_000, 120_000, 300_000, 900_000];
  const ms = base[Math.min(attempt, base.length - 1)];
  return Math.round(ms * (0.8 + Math.random() * 0.4));
};

export const nextAttemptAt = (attempt: number): number => Date.now() + backoffDelayMs(attempt);

export interface QueueResult {
  enqueued: number;
  flushed: number;
  failed: number;
  pending: number;
}

// Attempt to flush every due report. Returns per-state counts.
export const flushQueue = async (
  store: ReportStore,
  send: (payload: unknown) => Promise<boolean>,
  now = Date.now()
): Promise<QueueResult> => {
  const all = await store.getAll();
  const due = all.filter((r) => r.nextAttemptAt <= now);
  let flushed = 0;
  let failed = 0;
  for (const report of due) {
    const ok = await send(report.payload);
    if (ok) {
      await store.delete(report.id);
      flushed++;
    } else {
      const attempts = report.attempts + 1;
      if (attempts >= MAX_ATTEMPTS) {
        // Give up after the cap: keep the record so the user can retry manually,
        // but stop auto-retrying (a poisoned payload must not hammer the Worker).
        await store.put({ ...report, attempts, nextAttemptAt: Infinity });
      } else {
        await store.put({ ...report, attempts, nextAttemptAt: nextAttemptAt(attempts) });
      }
      failed++;
    }
  }
  return { enqueued: all.length, flushed, failed, pending: (await store.getAll()).length };
};

// Enqueue a report (always persists first), then attempt an immediate flush.
export const enqueueAndFlush = async (
  store: ReportStore,
  payload: unknown,
  send: (p: unknown) => Promise<boolean>
): Promise<QueueResult> => {
  const report: QueuedReport = {
    id: `r_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`,
    payload,
    attempts: 0,
    nextAttemptAt: 0,
    createdAt: Date.now(),
  };
  await store.put(report);
  return flushQueue(store, send);
};

// Wire the module to the actual network sender. The consent token is refreshed
// lazily if a flush gets a 401/403 (the Worker enforces X-Consent-Token).
export const createReportSender = (
  sendOne: (payload: unknown) => Promise<boolean>
): ((payload: unknown) => Promise<boolean>) => sendOne;

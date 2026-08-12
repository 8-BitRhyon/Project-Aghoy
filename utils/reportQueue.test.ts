// utils/reportQueue.test.ts - tests for the durable offline report queue.
// In-memory store (no IndexedDB in the test env); the state machine is what
// matters, and it must survive "kill and restart".

import { describe, expect, it } from "vitest";
import { QueuedReport, ReportStore, backoffDelayMs, enqueueAndFlush, flushQueue, MAX_ATTEMPTS, nextAttemptAt } from "./reportQueue";

const memStore = (initial: QueuedReport[] = []): ReportStore & { rows: QueuedReport[] } => {
  const rows: QueuedReport[] = [...initial];
  return {
    rows,
    getAll: async () => [...rows],
    put: async (r) => {
      const i = rows.findIndex((x) => x.id === r.id);
      if (i >= 0) rows[i] = r;
      else rows.push(r);
    },
    delete: async (id) => {
      const i = rows.findIndex((x) => x.id === id);
      if (i >= 0) rows.splice(i, 1);
    },
  };
};

describe("enqueueAndFlush", () => {
  it("persists before sending (no loss on failure)", async () => {
    const store = memStore();
    const send = async () => false; // network down
    const r = await enqueueAndFlush(store, { verdict: "HIGH_RISK" }, send);
    expect(r.flushed).toBe(0);
    expect(store.rows.length).toBe(1); // still queued, not lost
    expect(store.rows[0].attempts).toBe(1);
  });

  it("deletes after a successful send (write-once-then-delete)", async () => {
    const store = memStore();
    const r = await enqueueAndFlush(store, { verdict: "SAFE" }, async () => true);
    expect(r.flushed).toBe(1);
    expect(store.rows.length).toBe(0);
  });

  it("is idempotent when the server dedups content_hash", async () => {
    // A retry of the same payload succeeds and leaves no residue. The first
    // flush fails (offline), backoff schedules a future retry; advancing the
    // clock makes the retry due, and it flushes.
    const store = memStore();
    let failures = 1;
    const send = async () => (failures-- > 0 ? false : true);
    const r1 = await enqueueAndFlush(store, { content: "same" }, send);
    expect(r1.flushed).toBe(0);
    // Advance well past the max backoff so the retry is definitely due.
    const r2 = await flushQueue(store, send, Date.now() + 2_000_000);
    expect(r2.flushed).toBe(1);
    expect(store.rows.length).toBe(0);
  });
});

describe("backoff", () => {
  it("starts at ~30s and caps at 15m", () => {
    expect(backoffDelayMs(0)).toBeGreaterThanOrEqual(24000);
    expect(backoffDelayMs(0)).toBeLessThan(30000 * 1.2);
    expect(backoffDelayMs(20)).toBeGreaterThanOrEqual(900000 * 0.8);
    expect(backoffDelayMs(20)).toBeLessThan(900000 * 1.2);
  });

  it("nextAttemptAt is in the future", () => {
    expect(nextAttemptAt(0)).toBeGreaterThan(Date.now());
  });
});

describe("flushQueue - kill/restart survival", () => {
  it("a report survives app death and flushes on next launch", async () => {
    // Simulate: report enqueued offline, app killed (store is fresh = restart),
    // network returns, flush on boot delivers it.
    const store = memStore();
    await enqueueAndFlush(store, { verdict: "HIGH_RISK", content: "survives" }, async () => false);

    // Restart: the store is re-created but data came back from IndexedDB,
    // which in this test means passing the surviving rows in. Advance well
    // past the backoff (time passed while the app was dead).
    const restarted = memStore(store.rows);
    expect(restarted.rows.length).toBe(1);

    const r = await flushQueue(restarted, async () => true, Date.now() + 2_000_000);
    expect(r.flushed).toBe(1);
    expect(restarted.rows.length).toBe(0);
  });

  it("gives up after MAX_ATTEMPTS but keeps the record", async () => {
    const store = memStore();
    const poisoned: QueuedReport = {
      id: "poison",
      payload: { verdict: "HIGH_RISK" },
      attempts: MAX_ATTEMPTS - 1,
      nextAttemptAt: 0,
      createdAt: Date.now(),
    };
    await store.put(poisoned);
    const r = await flushQueue(store, async () => false, Date.now());
    expect(r.failed).toBe(1);
    expect(store.rows.length).toBe(1); // kept for manual retry
    expect(store.rows[0].nextAttemptAt).toBe(Infinity); // no more auto-retry
  });

  it("only flushes reports that are due", async () => {
    const store = memStore();
    await store.put({ id: "not-due", payload: {}, attempts: 0, nextAttemptAt: Date.now() + 60_000, createdAt: Date.now() });
    const r = await flushQueue(store, async () => true, Date.now());
    expect(r.flushed).toBe(0);
    expect(store.rows.length).toBe(1);
  });

  it("deletes a report the server permanently rejects (4xx) instead of retrying forever", async () => {
    const store = memStore();
    const sent = await enqueueAndFlush(store, { verdict: "HIGH_RISK", content: "x".repeat(5000) }, async () => "permanent" as const);
    expect(sent.failed).toBe(1);
    // No 25x backoff, no Infinity parking - the rejected record is dropped.
    expect(store.rows.length).toBe(0);
  });

  it("keeps transient failures (network/5xx) queued with backoff", async () => {
    const store = memStore();
    const r = await enqueueAndFlush(store, { verdict: "HIGH_RISK" }, async () => false);
    expect(r.flushed).toBe(0);
    expect(store.rows.length).toBe(1);
    expect(store.rows[0].attempts).toBe(1);
  });
});

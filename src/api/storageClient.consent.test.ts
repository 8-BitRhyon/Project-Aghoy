// src/api/storageClient.consent.test.ts - report sending is poison-proof:
//  1. content >4000 chars is truncated before the network call (the Worker
//     rejects anything over 4000 with a 400, which used to poison the queue)
//  2. a 4xx response is treated as permanent and never retried
// IndexedDB is not available in node, so postReport falls back to the direct
// send path - exactly the path we want to assert on.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const fetchMock = vi.fn();
vi.mock('../config', () => ({ WORKER_ORIGIN: 'https://worker.test' }));

// storageClient reads the consent token from localStorage (absent in node).
const storage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (k: string) => storage.get(k) ?? null,
    setItem: (k: string, v: string) => storage.set(k, v),
    removeItem: (k: string) => storage.delete(k),
  },
});

import { postReport } from './storageClient';

const fetchBody = (callIndex: number): Record<string, unknown> => {
  const init = fetchMock.mock.calls[callIndex][1] as RequestInit;
  return JSON.parse(String(init.body)) as Record<string, unknown>;
};

describe('postReport - poison-proof sending', () => {
  beforeEach(() => {
    // Patch global fetch directly; in node there is no IndexedDB so postReport
    // falls back to the direct-send path, which is what we are asserting.
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    fetchMock.mockReset();
  });

  it('truncates oversize content to the Worker limit before sending', async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const long = 'x'.repeat(9000);
    await postReport({ verdict: 'HIGH_RISK', riskScore: 8, scamType: 'Test', redFlags: [], content: long });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = fetchBody(0);
    expect(String(body.content).length).toBe(4000);
  });

  it('sends short content unchanged', async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    await postReport({ verdict: 'SAFE', riskScore: 1, scamType: 'None', redFlags: [], content: 'short' });
    expect(fetchBody(0).content).toBe('short');
  });

  it('returns ok:false on a permanent 4xx so the queue can drop the record', async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ error: 'content too long' }), { status: 400 }));
    const r = await postReport({ verdict: 'HIGH_RISK', riskScore: 8, scamType: 'Test', redFlags: [], content: 'x' });
    // Direct-send fallback: a 400 surfaces as not-ok.
    expect(r.ok).toBe(false);
  });
});

// services/withStorageSignals.test.ts - the stored report must match the shown
// verdict. Regression for the audit finding: fetchSimilarScams (similarity
// lookup) and postReport used to POST DIFFERENT verdicts with the same
// content_hash, so D1's ON CONFLICT kept whichever landed first (usually the
// pre-blacklist one). Both write paths must carry the identical FINAL verdict.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const postReportMock = vi.fn(async (_payload: unknown) => ({ ok: true }));
const lookupIndicatorMock = vi.fn(async (_type: unknown, _value: unknown) => null);
const domainReputationMock = vi.fn(async (_domain: unknown) => null);
const getConsentTokenMock = vi.fn(() => 'token');

vi.mock('../src/api/storageClient', () => ({
  getConsentToken: () => getConsentTokenMock(),
  postReport: (payload: unknown) => postReportMock(payload),
  lookupIndicator: (type: unknown, value: unknown) => lookupIndicatorMock(type, value),
  domainReputation: (domain: unknown) => domainReputationMock(domain),
}));
vi.mock('../src/config', () => ({ WORKER_ORIGIN: 'https://worker.test' }));
vi.mock('./classifier', () => ({ classifyText: vi.fn(async () => ({ scamProb: 0.05, flag: null })) }));
vi.mock('../src/training/urlGrade', () => ({ gradeMessageLinks: vi.fn(() => ({ worst: { grade: 'CLEAN', signals: [] }, grade: 'CLEAN' })) }));
vi.mock('../src/brands/senderAllowlist', () => ({ checkSender: vi.fn(() => null) }));
vi.mock('../src/brands/brands', () => ({
  detectBrands: vi.fn(() => ({ matched: [], intents: [] })),
  detectIntents: vi.fn(() => []),
  fallbackVerdict: vi.fn(() => null),
}));

import { analyzeContent } from './aiService';
import { Verdict } from '../types';

const POSTS: Array<{ url: string; body: Record<string, unknown> }> = [];

const mockAnalysisResponse = (verdict: string) => JSON.stringify({
  text: JSON.stringify({
    verdict,
    riskScore: 2,
    scamType: 'None',
    senderEntity: 'Unknown',
    redFlags: [],
    analysis: 'Safe',
    educationalTip: 'ok',
  }),
});

describe('withStorageSignals - single final verdict on both write paths', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    POSTS.length = 0;
    postReportMock.mockImplementation(async () => ({ ok: true }));
    lookupIndicatorMock.mockImplementation(async () => null);
    domainReputationMock.mockImplementation(async () => null);
    getConsentTokenMock.mockReturnValue('token');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('sends the same final verdict to /reports and postReport when the blacklist escalates', async () => {
    // Low model scam probability + an official-looking message => the fusion
    // would be SAFE on its own; the reported phone escalates it. This makes
    // pre-blacklist and post-blacklist verdicts genuinely DIFFERENT, so the
    // test proves both write paths carry the post-blacklist one.
    vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
      const body = JSON.parse(String(init?.body ?? '{}')) as Record<string, unknown>;
      POSTS.push({ url: String(url), body });
      if (String(url).includes('/api/analyze')) {
        return new Response(mockAnalysisResponse('SAFE'), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      // /reports: return no similar hits.
      return new Response(JSON.stringify({ ok: true, similar: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }));
    // A reported phone hash escalates the fusion (>=2 reports).
    lookupIndicatorMock.mockImplementation(async (_type: unknown) =>
      (_type as string) === 'phone' ? { found: true, times_reported: 5 } : null
    );
    domainReputationMock.mockImplementation(async () => null);

    const result = await analyzeContent(
      'URGENT: Your GCash account is locked. Call 09171234567 to verify or you lose your money.',
      'ENGLISH'
    );

    // The shown verdict is the fused (post-blacklist) one - and it DIFFERS
    // from the SAFE the provider returned, proving the escalation fired.
    const shown = result.verdict;
    expect(shown).not.toBe(Verdict.SAFE);

    // Every /reports POST carries that exact final verdict.
    const reportPosts = POSTS.filter((p) => p.url.includes('/reports'));
    expect(reportPosts.length).toBeGreaterThanOrEqual(1);
    for (const p of reportPosts) {
      expect(p.body.verdict).toBe(shown);
    }
    // postReport (the durable queue path) receives the identical payload.
    const queued = postReportMock.mock.calls.map((c) => (c[0] ?? {}) as Record<string, unknown>);    expect(queued.length).toBeGreaterThanOrEqual(1);
    for (const q of queued) {
      expect(q.verdict).toBe(shown);
    }
  });
});

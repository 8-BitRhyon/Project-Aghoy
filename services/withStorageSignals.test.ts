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
const checkSenderMock = vi.fn((_s: unknown) => null);
const fallbackVerdictMock = vi.fn((_t: unknown) => null);

vi.mock('../src/api/storageClient', () => ({
  getConsentToken: () => getConsentTokenMock(),
  postReport: (payload: unknown) => postReportMock(payload),
  lookupIndicator: (type: unknown, value: unknown) => lookupIndicatorMock(type, value),
  domainReputation: (domain: unknown) => domainReputationMock(domain),
}));
vi.mock('../src/config', () => ({ WORKER_ORIGIN: 'https://worker.test' }));
vi.mock('./classifier', () => ({ classifyText: vi.fn(async () => ({ scamProb: 0.05, flag: null })) }));
vi.mock('../src/training/urlGrade', () => ({ gradeMessageLinks: vi.fn(() => ({ worst: { grade: 'CLEAN', signals: [] }, grade: 'CLEAN' })) }));
vi.mock('../src/brands/senderAllowlist', () => ({ checkSender: (s: unknown) => checkSenderMock(s) }));
vi.mock('../src/brands/brands', () => ({
  detectBrands: vi.fn(() => ({ matched: [], intents: [] })),
  detectIntents: vi.fn(() => []),
  fallbackVerdict: (t: unknown) => fallbackVerdictMock(t),
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
    checkSenderMock.mockImplementation(() => null);
    fallbackVerdictMock.mockImplementation(() => null);
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
    const queued = postReportMock.mock.calls.map((c) => (c[0] ?? {}) as Record<string, unknown>);
    expect(queued.length).toBeGreaterThanOrEqual(1);
    for (const q of queued) {
      expect(q.verdict).toBe(shown);
    }
  });

  it('reported phone count reflects the MAX across multiple numbers in the message', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      if (String(url).includes('/api/analyze')) {
        return new Response(mockAnalysisResponse('SAFE'), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify({ ok: true, similar: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }));
    // Both numbers are reported: first has 2, second has 9. The UI count must
    // be 9 (the max), not the first hash's 2.
    let phoneLookups = 0;
    lookupIndicatorMock.mockImplementation(async () => {
      phoneLookups++;
      return phoneLookups === 1 ? { found: true, times_reported: 2 } : { found: true, times_reported: 9 };
    });
    domainReputationMock.mockImplementation(async () => null);

    const result = await analyzeContent(
      'Contact 09171234567 or 09179876543 for your GCash verification code.',
      'ENGLISH'
    );
    expect(result.reportedPhone?.count).toBe(9);
    expect(phoneLookups).toBeGreaterThanOrEqual(2);
  });

  it('a trusted sender is passed through and discounts the verdict', async () => {
    // The engine (fallbackVerdict) flags the message at risk 8. With NO sender
    // the verdict stays high-risk; with a TRUSTED official sender the fusion
    // must discount the engine contribution AND subtract the sender weight.
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      if (String(url).includes('/api/analyze')) {
        return new Response(mockAnalysisResponse('HIGH_RISK'), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify({ ok: true, similar: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }));
    fallbackVerdictMock.mockImplementation(() => ({
      verdict: 'HIGH_RISK', riskScore: 8, scamType: 'Bank Phishing', redFlags: [],
      analysis: 'x', educationalTip: 'y',
    }));
    lookupIndicatorMock.mockImplementation(async () => null);
    domainReputationMock.mockImplementation(async () => null);

    // 1) No sender: the engine's risk stands.
    const withoutSender = await analyzeContent(
      'Your account is locked, send your OTP now.', 'ENGLISH', undefined, undefined, undefined
    );

    // 2) Trusted official sender (GCASH shortcode): verdict is discounted.
    checkSenderMock.mockImplementation((s: unknown) =>
      (s as string) === 'GCASH' ? { trusted: true, brandKey: 'gcash', matchedOn: 'GCASH', isShortcode: false } : null
    );    const withSender = await analyzeContent(
      'Your account is locked, send your OTP now.', 'ENGLISH', undefined, undefined, 'GCASH'
    );

    // The trusted sender must materially lower the risk score (discount + weight).
    expect(withSender.riskScore).toBeLessThan(withoutSender.riskScore);
    // The sender arg actually reached checkSender (proves the plumbing).
    expect(checkSenderMock).toHaveBeenCalledWith('GCASH');
  });
});

// services/analyzeContent.consent.test.ts - a 403 consent rejection from the
// analysis endpoint must propagate to the caller (App.tsx resets consent +
// re-prompts). It must NOT be swallowed by the deterministic fallback, which
// would count a scan with an expired attestation.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const getConsentTokenMock = vi.fn(() => 'stale-token');
vi.mock('../src/api/storageClient', () => ({
  getConsentToken: () => getConsentTokenMock(),
  postReport: vi.fn(async () => ({ ok: true })),
  lookupIndicator: vi.fn(async () => null),
  domainReputation: vi.fn(async () => null),
}));
vi.mock('../src/config', () => ({ WORKER_ORIGIN: 'https://worker.test' }));
vi.mock('./classifier', () => ({ classifyText: vi.fn() }));
vi.mock('../src/training/urlGrade', () => ({ gradeMessageLinks: vi.fn(() => ({ worst: { grade: 'CLEAN', signals: [] }, grade: 'CLEAN' })) }));
vi.mock('../src/brands/senderAllowlist', () => ({ checkSender: vi.fn(() => null) }));
vi.mock('../src/brands/brands', () => ({
  detectBrands: vi.fn(() => ({ matched: [], intents: [] })),
  detectIntents: vi.fn(() => []),
  fallbackVerdict: vi.fn(() => null), // abstain: proves consent errors re-throw before the fallback
}));

import { analyzeContent } from './aiService';

describe('analyzeContent - consent 403 propagation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getConsentTokenMock.mockReturnValue('stale-token');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('re-throws a 403 consent rejection instead of producing a fallback verdict', async () => {
    vi.stubGlobal('fetch', vi.fn(async () =>
      new Response(JSON.stringify({ error: 'Consent attestation expired' }), { status: 403 })
    ));

    await expect(analyzeContent('Some text to analyze', 'ENGLISH')).rejects.toThrow(/Consent required/i);
  });

  it('still runs the deterministic fallback for a plain network failure', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => {
      throw new TypeError('Failed to fetch');
    }));
    // fallbackVerdict abstains (mock returns null) so analyzeContent throws
    // instead of returning a fallback - but the thrown error must be the
    // network-specific one App.tsx routes to CONNECTION ERROR.
    await expect(analyzeContent('Some text', 'ENGLISH')).rejects.toThrow(/Network error/i);
  });

  it('a network failure surfaces a message App.tsx routes to CONNECTION ERROR', async () => {
    // App.tsx renders "📶 CONNECTION ERROR" when the error message contains
    // 'network' or 'fetch' (App.tsx:404). A real offline failure is a
    // TypeError("Failed to fetch") from the fetch call - the message must
    // preserve that signal, not hide it behind the generic wrapper.
    vi.stubGlobal('fetch', vi.fn(async () => {
      throw new TypeError('Failed to fetch');
    }));
    // fallbackVerdict abstains so the raw error propagates.
    try {
      await analyzeContent('Some text', 'ENGLISH');
      expect.unreachable('should have thrown');
    } catch (error: any) {
      const message = String(error?.message || '');
      expect(message.toLowerCase().includes('network') || message.toLowerCase().includes('fetch')).toBe(true);
    }
  });
});

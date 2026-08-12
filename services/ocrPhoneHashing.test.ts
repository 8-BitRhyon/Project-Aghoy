// services/ocrPhoneHashing.test.ts - phone numbers that appear ONLY in an
// image (OCR) must still join the blacklist hash set. Regression for the
// audit finding: phoneHashesFromText ran on the REDACTED content, so an image-
// embedded number was replaced with [REDACTED:MOBILE] and never hashed.

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
vi.mock('./classifier', () => ({ classifyText: vi.fn(async () => ({ scamProb: 0.5, flag: null })) }));
vi.mock('../src/training/urlGrade', () => ({ gradeMessageLinks: vi.fn(() => ({ worst: { grade: 'CLEAN', signals: [] }, grade: 'CLEAN' })) }));
vi.mock('../src/brands/senderAllowlist', () => ({ checkSender: vi.fn(() => null) }));
vi.mock('../src/brands/brands', () => ({
  detectBrands: vi.fn(() => ({ matched: [], intents: [] })),
  detectIntents: vi.fn(() => []),
  fallbackVerdict: vi.fn(() => null),
}));

// Mock the dynamic tesseract.js import so extractTextFromImage returns a phone
// number that appears ONLY in the image, never in the user's typed text.
vi.mock('tesseract.js', () => ({
  createWorker: async () => ({
    recognize: async () => ({ data: { text: 'URGENT! Send payment to 09171234567 now.' } }),
    terminate: async () => {},
  }),
}));

import { analyzeContent } from './aiService';

const sha256Hex = async (text: string): Promise<string> => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
};

describe('OCR phone hashing (pre-redaction)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    postReportMock.mockImplementation(async () => ({ ok: true }));
    getConsentTokenMock.mockReturnValue('token');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('includes a phone that appears only in the OCR image text in the report phoneHashes', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
      if (String(url).includes('/api/analyze')) {
        return new Response(JSON.stringify({ text: JSON.stringify({
          verdict: 'HIGH_RISK', riskScore: 8, scamType: 'Scam', senderEntity: 'Unknown',
          redFlags: [], analysis: 'x', educationalTip: 'y',
        }) }), { status: 200 });
      }
      return new Response(JSON.stringify({ ok: true, similar: [] }), { status: 200 });
    }));

    // The user's typed note has NO phone; the phone is only in the image.
    const result = await analyzeContent('Please check this screenshot', 'ENGLISH', 'data:image/png;base64,AAAA', 'image/png');

    const expectedHash = await sha256Hex('09171234567');
    const queued = postReportMock.mock.calls.map((c) => (c[0] ?? {}) as { phoneHashes?: string[] });
    expect(queued.length).toBeGreaterThanOrEqual(1);
    const hashes = queued.flatMap((q) => q.phoneHashes ?? []);
    expect(hashes).toContain(expectedHash);
    expect(result).toBeTruthy();
  });
});

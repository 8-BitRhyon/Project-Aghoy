// services/dojoWorkerHandler.test.ts - Worker DojoSession init must carry the
// consent token; the Worker consent-gates /dojo/session, so without it every
// mint 403s and the Durable-Object engine silently degrades to /api/analyze.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const consentToken = 'test-consent-token';
const getConsentTokenMock = vi.fn(() => consentToken);

vi.mock('../src/api/storageClient', () => ({
  getConsentToken: () => getConsentTokenMock(),
}));
vi.mock('../src/config', () => ({
  WORKER_ORIGIN: 'https://worker.test',
}));
vi.mock('./classifier', () => ({ classifyText: vi.fn() }));
vi.mock('../src/training/urlGrade', () => ({ gradeMessageLinks: vi.fn() }));
vi.mock('../src/brands/senderAllowlist', () => ({ checkSender: vi.fn(() => null) }));

import { createDojoChat } from './aiService';

describe('DojoChat Worker engine - consent header on /dojo/session', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    getConsentTokenMock.mockReturnValue(consentToken);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('sends X-Consent-Token when minting the session token', async () => {
    const calls: Array<{ url: string; headers?: Record<string, string> }> = [];
    vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, headers: (init?.headers ?? {}) as Record<string, string> });
      if (String(url).includes('/dojo/session')) {
        return new Response(JSON.stringify({ sessionToken: 'tok-1' }), { status: 200 });
      }
      return new Response(JSON.stringify({ text: 'ok', health: 100, gameOver: false }), { status: 200 });
    }));

    const chat = createDojoChat('TAGALOG');
    await chat.sendMessage('hello');

    const sessionCall = calls.find((c) => c.url.includes('/dojo/session'));
    expect(sessionCall).toBeTruthy();
    expect(sessionCall!.headers!['X-Consent-Token']).toBe(consentToken);
  });

  it('degrades to /api/analyze when init is 403 (no valid consent)', async () => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      if (String(url).includes('/dojo/session')) {
        return new Response(JSON.stringify({ error: 'Consent required' }), { status: 403 });
      }
      // fallback hits API_ENDPOINT (/api/analyze)
      return new Response(JSON.stringify({ text: 'fallback response' }), { status: 200 });
    }));

    const chat = createDojoChat('ENGLISH');
    const result = await chat.sendMessage('hi');
    expect(result.response.text()).toContain('fallback response');
  });
});

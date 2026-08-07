import { describe, it, expect } from 'vitest';
import { mintConsentToken, verifyConsentToken, CONSENT_VERSION, extractConsentToken } from './consent';

const SECRET = 'test-consent-secret';

describe('consent attestation', () => {
  it('mints a token that verifies as valid', async () => {
    const token = await mintConsentToken(SECRET);
    const result = await verifyConsentToken(SECRET, token);
    expect(result.ok).toBe(true);
  });

  it('rejects a missing token', async () => {
    const result = await verifyConsentToken(SECRET, null);
    expect(result).toEqual({ ok: false, reason: 'missing' });
  });

  it('rejects a malformed token', async () => {
    expect(await verifyConsentToken(SECRET, 'not-a-token')).toEqual({ ok: false, reason: 'malformed' });
    expect(await verifyConsentToken(SECRET, 'a.b.c')).toEqual({ ok: false, reason: 'malformed' });
    // A token with a structurally invalid base64 signature must fail closed
    // with malformed (never throw / 500).
    expect(await verifyConsentToken(SECRET, 'fake.token')).toEqual({ ok: false, reason: 'malformed' });
    expect(await verifyConsentToken(SECRET, 'abc.defg.hij')).toEqual({ ok: false, reason: 'malformed' });
  });

  it('rejects a token signed with a different secret', async () => {
    const token = await mintConsentToken('other-secret');
    const result = await verifyConsentToken(SECRET, token);
    expect(result.ok).toBe(false);
    expect(result.ok === false ? result.reason : '').toBe('invalid');
  });

  it('rejects a token for an old consent version', async () => {
    // Build a token claiming an older version by re-encoding a crafted payload.
    const base64urlEncode = (data: Uint8Array): string =>
      btoa(String.fromCharCode(...data)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
    const payload = { v: '2025-01-01-v0', sub: 'x', exp: Date.now() + 60000 };
    const payloadB64 = base64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payloadB64));
    const sigB64 = base64urlEncode(new Uint8Array(sig));
    const forged = `${payloadB64}.${sigB64}`;
    const result = await verifyConsentToken(SECRET, forged);
    expect(result).toEqual({ ok: false, reason: 'version' });
    expect(CONSENT_VERSION).toMatch(/^\d{4}-\d{2}-\d{2}-v\d+$/);
  });

  it('extracts the token from the X-Consent-Token header', () => {
    const req = new Request('https://example.com', { headers: { 'X-Consent-Token': 'abc.def' } });
    expect(extractConsentToken(req)).toBe('abc.def');
    const empty = new Request('https://example.com');
    expect(extractConsentToken(empty)).toBeNull();
  });
});

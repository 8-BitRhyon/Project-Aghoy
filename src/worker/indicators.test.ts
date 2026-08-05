import { describe, it, expect } from 'vitest';
import { extractIndicators, indicatorFingerprint, Indicator } from './indicators';
import { redactPII } from '../rejects/rejects';

describe('extractIndicators', () => {
  it('extracts https URLs', () => {
    const inds = extractIndicators('Verify at https://g-cash-verify.com/login now');
    expect(inds.some(i => i.type === 'url' && i.value === 'https://g-cash-verify.com/login')).toBe(true);
  });

  it('normalizes bare domains (strips www and scheme)', () => {
    const inds = extractIndicators('Visit www.BDO-online-ph.com to unlock');
    const domain = inds.find(i => i.type === 'domain');
    expect(domain?.value).toBe('bdo-online-ph.com');
  });

  it('does not treat IP addresses as domains', () => {
    const inds = extractIndicators('Connect to 192.168.1.1 now');
    expect(inds.some(i => i.type === 'domain' && i.value === '192.168.1.1')).toBe(false);
  });

  it('does not treat localhost as a domain', () => {
    const inds = extractIndicators('Open http://localhost:3000');
    expect(inds.some(i => i.type === 'domain' && i.value === 'localhost')).toBe(false);
  });

  it('dedupes repeated indicators', () => {
    const inds = extractIndicators('https://evil.example https://evil.example EVIL.EXAMPLE');
    const urls = inds.filter(i => i.type === 'url');
    expect(urls.length).toBe(1);
  });

  it('extracts brand keywords for campaign detection', () => {
    const inds = extractIndicators('Your GCash account is locked, call 0917 via BDO');
    expect(inds.some(i => i.type === 'keyword' && i.value === 'gcash')).toBe(true);
    expect(inds.some(i => i.type === 'keyword' && i.value === 'bdo')).toBe(true);
  });

  it('ignores phone numbers that survived redaction', () => {
    // Phones are redacted by the Rejects layer before extraction; ensure a
    // bare number does not become a keyword or domain.
    const inds = extractIndicators('Call 09171234567');
    expect(inds.every(i => i.type !== 'phone')).toBe(true);
  });

  it('returns empty for empty input', () => {
    expect(extractIndicators('')).toEqual([]);
    expect(extractIndicators(undefined as unknown as string)).toEqual([]);
  });

  it('works on Rejects-layer output (no PII leakage)', () => {
    const raw = 'Card 4111111111111111 from https://scam.example email me@scam.example 09171234567';
    const sanitized = redactPII(raw).text;
    expect(sanitized).not.toContain('4111111111111111');
    expect(sanitized).not.toContain('me@scam.example');
    const inds = extractIndicators(sanitized);
    expect(inds.some(i => i.type === 'url' && i.value === 'https://scam.example')).toBe(true);
    expect(inds.some(i => i.type === 'email')).toBe(false);
  });
});

describe('indicatorFingerprint', () => {
  it('produces a stable type:value fingerprint', () => {
    const a: Indicator = { type: 'domain', value: 'evil.example' };
    const b: Indicator = { type: 'domain', value: 'evil.example' };
    expect(indicatorFingerprint(a)).toBe(indicatorFingerprint(b));
    expect(indicatorFingerprint(a)).toBe('domain:evil.example');
  });
});

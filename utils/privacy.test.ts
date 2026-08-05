import { describe, it, expect } from 'vitest';
import { sanitizeText, generateContentHash } from './privacy';

describe('sanitizeText', () => {
  it('redacts Philippine mobile numbers', () => {
    expect(sanitizeText('Call me at 09171234567 now')).toContain('[MOBILE_NUMBER]');
    expect(sanitizeText('Call me at 09171234567 now')).not.toContain('09171234567');
  });

  it('redacts +63 format numbers', () => {
    const out = sanitizeText('Contact +639171234567');
    expect(out).toContain('[MOBILE_NUMBER]');
    expect(out).not.toContain('+639171234567');
  });

  it('redacts email addresses', () => {
    const out = sanitizeText('Email support@scam.example');
    expect(out).toContain('[EMAIL_REDACTED]');
    expect(out).not.toContain('support@scam.example');
  });

  it('redacts 10-12 digit account numbers', () => {
    const out = sanitizeText('Deposit to 123456789012');
    expect(out).toContain('[ACCOUNT_NUMBER]');
    expect(out).not.toContain('123456789012');
  });

  it('redacts 13-digit GCash reference numbers', () => {
    const out = sanitizeText('GCash ref 1234567890123 confirmed');
    expect(out).toContain('[ACCOUNT_NUMBER]');
    expect(out).not.toContain('1234567890123');
  });

  it('does not leak trailing digits from a longer digit run', () => {
    const out = sanitizeText('order 2091712345678 complete');
    expect(out).not.toContain('[MOBILE_NUMBER]8');
    expect(out).not.toContain('09171234567');
  });

  it('does not partially redact longer digit runs starting like a mobile', () => {
    const out = sanitizeText('Account 091712345678');
    expect(out).not.toContain('[MOBILE_NUMBER]8');
    expect(out).toContain('[ACCOUNT_NUMBER]');
  });

  it('redacts 16-digit credit card numbers', () => {
    const out = sanitizeText('Card 4111111111111111 is locked');
    expect(out).toContain('[CARD_NUMBER]');
    expect(out).not.toContain('4111111111111111');
  });

  it('redacts spaced credit card numbers', () => {
    const out = sanitizeText('Verify 4111 1111 1111 1111 now');
    expect(out).toContain('[CARD_NUMBER]');
    expect(out).not.toContain('4111 1111 1111 1111');
  });

  it('redacts names in PH greeting patterns', () => {
    const out = sanitizeText('Hi Juan Dela Cruz, your account is locked');
    expect(out).toContain('[NAME_REDACTED]');
    expect(out).not.toContain('Juan Dela Cruz');
  });

  it('consumes the full greeting name without leaking the surname', () => {
    const out = sanitizeText('Hi Juan Dela Cruz');
    expect(out).toBe('Hi [NAME_REDACTED]');
    expect(out).not.toContain('Cruz');
  });

  it('returns empty string for empty input', () => {
    expect(sanitizeText('')).toBe('');
    expect(sanitizeText(null as unknown as string)).toBe('');
  });

  it('leaves ordinary text untouched', () => {
    expect(sanitizeText('Good morning, please verify')).toBe('Good morning, please verify');
  });
});

describe('generateContentHash', () => {
  it('produces a 64-char hex hash', async () => {
    const hash = await generateContentHash('URGENT: account suspended');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('produces different hashes for different sanitized content', async () => {
    // 09171234567 (11 digits) is redacted as a mobile; 091712345678 (12 digits)
    // is a longer run redacted as an account, so the hashed content differs.
    const a = await generateContentHash('Call 09171234567');
    const b = await generateContentHash('Call 091712345678');
    expect(a).not.toBe(b);
  });
});

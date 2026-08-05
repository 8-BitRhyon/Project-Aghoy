import { describe, it, expect } from 'vitest';
import { redactPII, redactMessages, REJECT_PLACEHOLDERS } from './rejects';

describe('redactPII card numbers', () => {
  it('redacts Luhn-valid 16-digit cards', () => {
    const out = redactPII('Card 4111111111111111 is locked');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.CARD);
    expect(out.text).not.toContain('4111111111111111');
    expect(out.categories).toContain('CARD');
  });

  it('redacts spaced and dashed card numbers', () => {
    const spaced = redactPII('Verify 4111 1111 1111 1111 now');
    expect(spaced.text).not.toContain('4111 1111 1111 1111');
    const dashed = redactPII('Verify 4111-1111-1111-1111 now');
    expect(dashed.text).not.toContain('4111-1111-1111-1111');
  });

  it('does not leak the last 4 digits of a dashed card', () => {
    const out = redactPII('Card 4111-1111-1111-1111 is locked');
    expect(out.text).not.toMatch(/\d{4}-\d{4}/);
    expect(out.text).not.toContain('1111-1111');
    expect(out.categories).toContain('CARD');
    expect(out.categories).not.toContain('PH_ID');
  });

  it('does not redact Luhn-invalid digit runs', () => {
    const out = redactPII('Ref 4111111111111112 not valid');
    expect(out.text).toContain('4111111111111112');
    expect(out.categories).not.toContain('CARD');
  });

  it('does not redact short numbers (timestamps, amounts)', () => {
    const out = redactPII('Earn 5000 per day at 2pm');
    expect(out.text).toBe('Earn 5000 per day at 2pm');
  });
});

describe('redactPII mobile numbers', () => {
  it('redacts 0917 format', () => {
    const out = redactPII('Call 09171234567 now');
    expect(out.text).not.toContain('09171234567');
    expect(out.categories).toContain('MOBILE');
  });

  it('redacts +63 format', () => {
    const out = redactPII('Contact +639171234567');
    expect(out.text).not.toContain('+639171234567');
  });

  it('does not leak trailing digits from longer runs', () => {
    // 2091712345678 is not a valid PH mobile (does not start with 0/9 or +639);
    // the anchored regex must leave it intact instead of partially redacting.
    const out = redactPII('order 2091712345678 complete');
    expect(out.text).toBe('order 2091712345678 complete');
    expect(out.categories).not.toContain('MOBILE');
  });
});

describe('redactPII international phones', () => {
  it('redacts +1 US numbers', () => {
    const out = redactPII('Call +14155550123');
    expect(out.text).not.toContain('+14155550123');
    expect(out.categories).toContain('MOBILE');
  });

  it('redacts spaced and dashed international numbers', () => {
    const spaced = redactPII('Contact +44 20 7946 0958');
    expect(spaced.text).not.toContain('7946 0958');
    const dashed = redactPII('Call +1-415-555-0123');
    expect(dashed.text).not.toContain('415-555-0123');
    expect(dashed.categories).toContain('MOBILE');
  });

  it('leaves bare digit runs without a plus sign alone', () => {
    const out = redactPII('Ref 482913 confirmed');
    expect(out.text).toBe('Ref 482913 confirmed');
  });
});

describe('redactPII names', () => {
  it('redacts honorific names', () => {
    const out = redactPII('This is Mr. Juan Dela Cruz');
    expect(out.text).not.toContain('Juan Dela Cruz');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.NAME);
    expect(out.categories).toContain('NAME');
  });

  it('redacts greeting + honorific names', () => {
    const out = redactPII('Hello Ms. Maria Santos, your account is locked');
    expect(out.text).not.toContain('Maria Santos');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.NAME);
  });

  it('redacts Dear Mr. multi-word names', () => {
    const out = redactPII('Dear Mr. Reyes, please confirm');
    expect(out.text).not.toContain('Reyes');
    expect(out.categories).toContain('NAME');
  });

  it('does not redact bare greetings without an honorific name', () => {
    const out = redactPII('Hi Juan Dela Cruz');
    expect(out.text).toBe('Hi Juan Dela Cruz');
  });
});

describe('redactPII dates (DOB)', () => {
  it('redacts slash dates', () => {
    const out = redactPII('Birthday is 09/15/1995');
    expect(out.text).not.toContain('09/15/1995');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.DOB);
    expect(out.categories).toContain('DOB');
  });

  it('redacts dashed short dates', () => {
    const out = redactPII('Expires 9-15-95');
    expect(out.text).not.toContain('9-15-95');
    expect(out.categories).toContain('DOB');
  });

  it('does not redact a single date-like separator pair', () => {
    const out = redactPII('Version 1.2.3');
    expect(out.text).toBe('Version 1.2.3');
  });
});

describe('redactPII emails and keys', () => {
  it('redacts email addresses', () => {
    const out = redactPII('Email support@scam.example');
    expect(out.text).not.toContain('support@scam.example');
    expect(out.categories).toContain('EMAIL');
  });

  it('redacts API keys (csk-, gsk_, sk-, ghp_)', () => {
    // Keys are assembled dynamically so secret-scanners never see a literal
    // key-shaped string in the test fixtures (they are fake, for redaction).
    const cskKey = 'csk-' + 'abcdefghijklmnop';
    const gskKey = 'gsk_' + 'abcdefghijklmnop';
    const ghpKey = 'ghp_' + '0123456789abcdef0123456789abcdef012345';
    const csk = redactPII('key ' + cskKey);
    expect(csk.text).not.toContain(cskKey);
    const gsk = redactPII('key ' + gskKey);
    expect(gsk.text).not.toContain(gskKey);
    const ghp = redactPII(ghpKey);
    expect(ghp.text).not.toContain(ghpKey);
  });
});

describe('redactPII PH IDs and OTP', () => {
  it('redacts SSS grouped format', () => {
    const out = redactPII('SSS 12-3456-7890 on file');
    expect(out.text).not.toContain('12-3456-7890');
    expect(out.categories).toContain('PH_ID');
  });

  it('redacts SSS 2-7-1 format', () => {
    const out = redactPII('SSS number 34-1234567-8');
    expect(out.text).not.toContain('34-1234567-8');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.PH_ID);
    expect(out.categories).toContain('PH_ID');
  });

  it('redacts SSS 2-6-1 format', () => {
    const out = redactPII('My SSS is 34-123456-8');
    expect(out.text).not.toContain('34-123456-8');
  });

  it('redacts PhilHealth 2-9-1 format', () => {
    const out = redactPII('PhilHealth ID 12-123456789-0');
    expect(out.text).not.toContain('12-123456789-0');
    expect(out.categories).toContain('PH_ID');
  });

  it('redacts TIN 3-3-3 format', () => {
    const out = redactPII('TIN 123-456-789');
    expect(out.text).not.toContain('123-456-789');
  });

  it('redacts TIN 3-3-3-4 format without partial leak', () => {
    const out = redactPII('TIN 123-456-789-000');
    expect(out.text).not.toContain('123-456-789-000');
    expect(out.text).not.toMatch(/\d{3}-\d{3}-\d{3}/);
    expect(out.text).toContain(REJECT_PLACEHOLDERS.PH_ID);
  });

  it('redacts TIN 3-3-3-3 branch format', () => {
    const out = redactPII('TIN 123-456-789-0001');
    expect(out.text).not.toContain('123-456-789-0001');
  });

  it('redacts LTO driver license format', () => {
    const out = redactPII('License no. A01-12-345678');
    expect(out.text).not.toContain('A01-12-345678');
    expect(out.categories).toContain('PH_ID');
  });

  it('redacts LTO D-format license', () => {
    const out = redactPII('LTO D03-22-123456');
    expect(out.text).not.toContain('D03-22-123456');
  });

  it('redacts Philippine passport format', () => {
    const out = redactPII('Passport P1234567X');
    expect(out.text).not.toContain('P1234567X');
    expect(out.categories).toContain('PH_ID');
  });

  it('redacts NBI clearance via context gate', () => {
    const out = redactPII('NBI clearance 123456789012');
    expect(out.text).not.toContain('123456789012');
  });

  it('redacts PRC license via context gate', () => {
    const out = redactPII('PRC license 0123456');
    expect(out.text).not.toContain('0123456');
  });

  it('redacts Pag-IBIG 4-4-4 format', () => {
    const out = redactPII('Pag-IBIG 1211-1234-5678');
    expect(out.text).not.toContain('1211-1234-5678');
  });

  it('redacts UMID/GSIS 12-digit numbers as account', () => {
    const out = redactPII('UMID 123456789012');
    expect(out.text).not.toContain('123456789012');
  });

  it('preserves ID keywords in context-gated redaction', () => {
    const out = redactPII('Please verify my SSS 34-1234567-8');
    expect(out.text).toContain('SSS');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.PH_ID);
  });

  it('does not treat dates as PH IDs', () => {
    const out = redactPII('Valid from 09/15/1995');
    expect(out.categories).not.toContain('PH_ID');
  });

  it('does not redact ordinary hyphenated reference numbers', () => {
    const out = redactPII('Invoice #INV-2024-0001');
    expect(out.text).toContain('INV-2024-0001');
  });

  it('redacts OTP near keyword', () => {
    const out = redactPII('Your OTP is 482913');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.OTP);
    expect(out.text).not.toContain('482913');
  });

  it('leaves bare 4-8 digit numbers alone (no context)', () => {
    const out = redactPII('Reference 482913 confirmed');
    expect(out.text).toContain('482913');
  });

  it('redacts CVV near keyword, preserving the label', () => {
    const out = redactPII('Card 4111111111111111, CVV 123, expires 09/28');
    expect(out.text).toContain('CVV');
    expect(out.text).toContain(REJECT_PLACEHOLDERS.CVV);
    expect(out.text).not.toContain('CVV 123');
    expect(out.categories).toContain('CVV');
  });

  it('does not redact a bare 3-digit number without CVV context', () => {
    const out = redactPII('Code 123 confirmed');
    expect(out.text).toContain('123');
  });
});

describe('redactPII idempotency', () => {
  it('re-running redaction is a no-op', () => {
    const once = redactPII('Card 4111111111111111 and 09171234567');
    const twice = redactPII(once.text);
    expect(twice.text).toBe(once.text);
    expect(twice.count).toBe(0);
  });

  it('is idempotent for name, date, and international number rules', () => {
    const once = redactPII('Dear Mr. Juan Dela Cruz, born 09/15/1995, call +44 20 7946 0958');
    const twice = redactPII(once.text);
    expect(twice.text).toBe(once.text);
    expect(twice.count).toBe(0);
    expect(once.text).not.toContain('Juan');
    expect(once.text).not.toContain('1995');
  });
});

describe('redactMessages', () => {
  it('redacts all messages in the array', () => {
    const result = redactMessages([
      { role: 'user', content: 'My card is 4111111111111111' },
      { role: 'user', content: 'Call 09171234567' },
    ]);
    expect(result.messages[0].content).not.toContain('4111111111111111');
    expect(result.messages[1].content).not.toContain('09171234567');
    expect(result.count).toBe(2);
  });

  it('tolerates non-string content', () => {
    const result = redactMessages([{ role: 'user', content: null as unknown as string }]);
    expect(result.messages[0].content).toBe('');
  });
});

import { describe, it, expect } from 'vitest';
import { gateReport, verdictContradiction } from './qualityGate';

const base = {
  content: 'URGENT: Your GCash account is locked. Verify at https://g-cash-verify-ph.com within 24 hours or it will be suspended. This is a genuine security alert from GCash, please call us immediately on this number 09171234567. Thank you for your cooperation with this matter.',
  indicators: ['url', 'domain'],
  phoneHashes: [] as string[],
  submitterVerdict: 'HIGH_RISK',
  reporterTrust: 0.4,
  isFirstForIndicator: true,
  honeypotHit: false,
  allowlistedOnly: false,
  flagMatch: false,
  source: 'web',
};

describe('gateReport - hard rejects', () => {
  it('rejects content shorter than 40 chars', () => {
    const r = gateReport({ ...base, content: 'URGENT GCash link https://x.ph' });
    expect(r.action).toBe('reject');
    expect(r.reasons).toContain('content_too_short');
  });

  it('rejects content with no extractable indicator or phone hash', () => {
    // Content the engine agrees is risky but that carries no extractable
    // indicator (no URL, domain, or phone hash) cannot corroborate a report.
    const r = gateReport({
      ...base,
      content: 'Deposit P500 now to unlock your VIP tasks and start earning P2000 a day. Guaranteed payout, sure kita. This is a legitimate offer from our platform, please proceed immediately.',
      indicators: [],
      phoneHashes: [],
    });
    expect(r.action).toBe('reject');
    expect(r.reasons).toContain('no_indicator');
  });

  it('rejects honeypot hits', () => {
    const r = gateReport({ ...base, honeypotHit: true });
    expect(r.action).toBe('reject');
    expect(r.reasons).toContain('honeypot_hit');
  });

  it('rejects untrusted reporters', () => {
    const r = gateReport({ ...base, reporterTrust: 0 });
    expect(r.action).toBe('reject');
    expect(r.reasons).toContain('reporter_untrusted');
  });

  it('rejects HIGH_RISK claims with no indicators (engine abstains or disagrees)', () => {
    // No extractable indicator (no URL, domain, or phone hash) means the report
    // cannot corroborate anything, so it is rejected regardless of the engine.
    const r = gateReport({
      ...base,
      submitterVerdict: 'HIGH_RISK',
      indicators: [],
      content: 'Good morning, your appointment is confirmed for Tuesday. Thank you for choosing our service. Please bring your ID and arrive ten minutes early. Have a wonderful day ahead.',
    });
    expect(r.action).toBe('reject');
    expect(r.reasons).toContain('no_indicator');
  });

  it('engine abstention is not a contradiction (many real scams score null)', () => {
    const r = gateReport({
      ...base,
      submitterVerdict: 'HIGH_RISK',
      indicators: ['url', 'domain'],
      content: 'URGENT GCash locked verify https://g-cash-verify-live.example now or suspended in 24 hours call 09171234567 reference 1234 thank you very much for your help',
    });
    expect(r.action).not.toBe('reject');
    expect(r.reasons).not.toContain('verdict_contradiction');
  });
});

describe('gateReport - weights and suspect', () => {
  it('caps extension reports at low weight (suspect, not feed-listed)', () => {
    const r = gateReport({ ...base, source: 'extension', flagMatch: false });
    expect(r.action).toBe('suspect');
    expect(r.weight).toBeLessThanOrEqual(0.15);
  });

  it('accepts and boosts lookalike flag matches', () => {
    const r = gateReport({ ...base, flagMatch: true, source: 'extension' });
    expect(r.action).toBe('accept');
    expect(r.weight).toBeGreaterThan(0.15);
    expect(r.reasons).toContain('lookalike_boost');
  });

  it('allowlisted-only indicators are suspect with zero weight', () => {
    const r = gateReport({ ...base, allowlistedOnly: true });
    expect(r.action).toBe('suspect');
    expect(r.weight).toBe(0);
  });

  it('a full web report from a trusted first-time reporter weighs 1.0', () => {
    const r = gateReport({ ...base, reporterTrust: 1, isFirstForIndicator: true, source: 'web' });
    expect(r.action).toBe('accept');
    expect(r.weight).toBe(1);
  });
});

describe('verdictContradiction', () => {
  it('engine abstention (null) is not a contradiction', () => {
    // The engine returns null on content it cannot score; that is not the same
    // as saying SAFE, so a HIGH_RISK claim is not contradicted.
    expect(verdictContradiction('HIGH_RISK', 'Good morning, thank you for your service.')).toBe(false);
  });
  it('does not flag a real scam claim', () => {
    expect(verdictContradiction('HIGH_RISK', base.content)).toBe(false);
  });
});

import { describe, it, expect } from 'vitest';
import { reputationScore, reporterTrust, reportWeight, recencyWeight, ReputationInputs } from './reputation';

const base: ReputationInputs = {
  nEff: 0,
  distinctReporters: 0,
  highRiskShare: 0,
  suspiciousShare: 0,
  safeShare: 0,
  daysSinceLastSeen: 0,
  simPrior: 0,
  seedWeight: 0,
  status: 'reported',
};

describe('reputationScore - operator overrides', () => {
  it('verified floors at HIGH_RISK and is feed-visible', () => {
    const r = reputationScore({ ...base, status: 'verified', distinctReporters: 1 });
    expect(r.score).toBeGreaterThanOrEqual(8);
    expect(r.label).toBe('HIGH_RISK');
    expect(r.feedVisible).toBe(true);
    expect(r.reason).toBe('verified');
  });

  it('cleared suppresses everything and is not feed-visible', () => {
    const r = reputationScore({ ...base, status: 'cleared', nEff: 100, distinctReporters: 10, highRiskShare: 1 });
    expect(r.score).toBe(0);
    expect(r.feedVisible).toBe(false);
    expect(r.reason).toBe('cleared');
  });
});

describe('reputationScore - poisoning resistance', () => {
  it('a single reporter flooding cannot reach HIGH_RISK or the feed', () => {
    // 100 reports from ONE fingerprint: nEff capped at 2x distinctReporters(1) = 2.
    const r = reputationScore({
      ...base,
      nEff: 15.85, // 1 + 99*0.15 uncapped
      distinctReporters: 1,
      highRiskShare: 1,
      suspiciousShare: 0,
      safeShare: 0,
    });
    expect(r.nEff).toBeLessThanOrEqual(2);
    expect(r.score).toBeLessThan(7);
    expect(r.feedVisible).toBe(false);
  });

  it('five distinct reporters on a real scam reach SUSPICIOUS/HIGH boundary', () => {
    const r = reputationScore({
      ...base,
      nEff: 5,
      distinctReporters: 5,
      highRiskShare: 0.8,
      suspiciousShare: 0.2,
      safeShare: 0,
      daysSinceLastSeen: 2,
    });
    expect(r.score).toBeGreaterThanOrEqual(6);
    expect(r.distinctReporters).toBe(5);
  });

  it('a single SAFE report scores 0', () => {
    const r = reputationScore({ ...base, nEff: 1, distinctReporters: 1, safeShare: 1, highRiskShare: 0 });
    expect(r.score).toBe(0);
  });
});

describe('reputationScore - cold start and seed', () => {
  it('semantic prior lifts an unreported domain to SUSPICIOUS with reason', () => {
    const r = reputationScore({ ...base, nEff: 0, distinctReporters: 0, simPrior: 0.82 });
    expect(r.score).toBeGreaterThanOrEqual(5);
    expect(r.reason).toBe('semantic-similar');
  });

  it('seed weight can lift to SUSPICIOUS but never HIGH_RISK', () => {
    const r = reputationScore({ ...base, seedWeight: 1, distinctReporters: 0, simPrior: 0 });
    expect(r.score).toBeGreaterThanOrEqual(1);
    expect(r.score).toBeLessThan(7);
    expect(r.reason).toBe('seeded');
  });

  it('staleness decays an old domain', () => {
    const fresh = reputationScore({ ...base, nEff: 5, distinctReporters: 5, highRiskShare: 0.8, daysSinceLastSeen: 1 });
    const stale = reputationScore({ ...base, nEff: 5, distinctReporters: 5, highRiskShare: 0.8, daysSinceLastSeen: 90 });
    expect(stale.score).toBeLessThan(fresh.score);
  });
});

describe('reporterTrust', () => {
  it('baseline is 0.4 and honeypot zeroes it', () => {
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0 })).toBeCloseTo(0.4);
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, honeypotHit: true })).toBe(0);
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, hardRejects: 3 })).toBe(0);
  });

  it('corroboration raises, contradictions and cleared-support lower', () => {
    const good = reporterTrust({ corroborated: 4, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0 });
    const bad = reporterTrust({ corroborated: 0, hardContradictions: 1, burstDuplicates: 2, clearedSupport: 1 });
    expect(good).toBeGreaterThan(bad);
    expect(good).toBeLessThanOrEqual(1);
    expect(bad).toBeGreaterThanOrEqual(0);
  });
});

describe('reportWeight and recencyWeight', () => {
  it('first voice from a trusted fp counts 1.0, repeats 0.15', () => {
    expect(reportWeight(1, true)).toBe(1);
    expect(reportWeight(1, false)).toBeCloseTo(0.15);
    expect(reportWeight(0, true)).toBe(0);
  });

  it('recency halves at the half-life', () => {
    expect(recencyWeight(0)).toBe(1);
    expect(recencyWeight(30)).toBeCloseTo(0.5);
    expect(recencyWeight(90)).toBeCloseTo(0.125);
  });
});

describe('reporterTrust - recovery (permanent-lockout fix)', () => {
  it('a burned reporter (3+ rejects) is locked out until the cooldown passes', () => {
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, hardRejects: 3, daysSinceLastReject: 5 })).toBe(0);
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, hardRejects: 3, daysSinceLastReject: 13 })).toBe(0);
  });

  it('recovers to a reduced baseline after 14 clean days', () => {
    const recovered = reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, hardRejects: 3, daysSinceLastReject: 15 });
    expect(recovered).toBeGreaterThan(0);
    expect(recovered).toBeLessThanOrEqual(0.15);
    // A recovered reporter corroborating others climbs back up.
    const climbing = reporterTrust({ corroborated: 2, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, hardRejects: 3, daysSinceLastReject: 20 });
    expect(climbing).toBeGreaterThan(recovered);
  });

  it('honeypot hits are never forgiven', () => {
    expect(reporterTrust({ corroborated: 4, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0, honeypotHit: true, daysSinceLastReject: 999 })).toBe(0);
  });

  it('no rejects means baseline without recovery logic', () => {
    expect(reporterTrust({ corroborated: 0, hardContradictions: 0, burstDuplicates: 0, clearedSupport: 0 })).toBeCloseTo(0.4);
  });
});

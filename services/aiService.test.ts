import { describe, it, expect } from 'vitest';
import { enrichResult } from './aiService';
import { AnalysisResult, Verdict } from '../types';

const baseResult: AnalysisResult = {
  verdict: Verdict.SAFE,
  riskScore: 0,
  scamType: 'None',
  senderEntity: 'Unknown',
  redFlags: [],
  analysis: 'This message appears safe.',
  educationalTip: 'No action needed.',
};

describe('enrichResult under-detection override', () => {
  it('escalates an LLM SAFE verdict to SUSPICIOUS on a deterministic HIGH_RISK input', () => {
    const content =
      'URGENT: Your GCash account will be suspended in 24 hours. Deposit P500 to unlock VIP tasks. Guaranteed payout, sure kita, call 09171234567 to start.';
    const result = enrichResult(baseResult, content);
    expect(result.verdict).toBe(Verdict.SUSPICIOUS);
    expect(result.redFlags).toContain('UNDERDETECTION_OVERRIDE');
  });

  it('replaces stale safe risk fields with the deterministic ones', () => {
    const content =
      'URGENT: Your GCash account will be suspended in 24 hours. Deposit P500 to unlock VIP tasks. Guaranteed payout, sure kita, call 09171234567 to start.';
    const result = enrichResult(baseResult, content);
    expect(result.riskScore).toBeGreaterThanOrEqual(7);
    expect(result.scamType).not.toBe('None');
    expect(result.analysis).not.toContain('appears safe');
  });

  it('keeps an LLM SAFE verdict when the deterministic detector is not HIGH_RISK', () => {
    const result = enrichResult(baseResult, 'Good morning, thank you for your service.');
    expect(result.verdict).toBe(Verdict.SAFE);
    expect(result.redFlags).not.toContain('UNDERDETECTION_OVERRIDE');
  });

  it('detects the brand on the override path for victim-support routing', () => {
    const content =
      'URGENT: Your GCash account will be suspended in 24 hours. Deposit P500 to unlock VIP tasks. Guaranteed payout, sure kita, call 09171234567 to start.';
    const result = enrichResult(baseResult, content);
    expect(result.matchedBrands?.some((b) => b.key === 'GCASH')).toBe(true);
  });
});

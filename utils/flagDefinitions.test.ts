import { describe, it, expect } from 'vitest';
import { getFlagDefinition, FLAG_DEFINITIONS } from './flagDefinitions';

describe('getFlagDefinition', () => {
  it('returns exact match definition', () => {
    expect(getFlagDefinition('URGENCY')).toBe(FLAG_DEFINITIONS['URGENCY']);
  });

  it('is case-insensitive', () => {
    expect(getFlagDefinition('urgency')).toBe(FLAG_DEFINITIONS['URGENCY']);
  });

  it('matches partial flag text', () => {
    expect(getFlagDefinition('SHORTENED URL DETECTED')).toContain('bit.ly');
  });

  it('returns fallback for unknown flags', () => {
    expect(getFlagDefinition('NOT_A_REAL_FLAG')).toContain('fraudulent activity');
  });

  it('covers every flag with a non-empty definition', () => {
    for (const flag of Object.keys(FLAG_DEFINITIONS)) {
      expect(FLAG_DEFINITIONS[flag].trim().length).toBeGreaterThan(0);
    }
  });

  it('returns the PAYMENT_TO_UNLOCK definition, not a partial match', () => {
    expect(getFlagDefinition('PAYMENT_TO_UNLOCK')).toBe(FLAG_DEFINITIONS['PAYMENT_TO_UNLOCK']);
    expect(getFlagDefinition('PAYMENT_TO_UNLOCK')).not.toBe(FLAG_DEFINITIONS['ASKING FOR PAYMENT TO WORK']);
  });

  it('prefers FAKE_REWARD over TOO GOOD TO BE TRUE when both appear', () => {
    expect(getFlagDefinition('FAKE_REWARD TOO GOOD TO BE TRUE OFFER')).toBe(FLAG_DEFINITIONS['FAKE_REWARD']);
  });

  it('prefers PAYMENT_TO_UNLOCK over ASKING FOR PAYMENT TO WORK when both appear', () => {
    expect(getFlagDefinition('PAYMENT_TO_UNLOCK ASKING FOR PAYMENT TO WORK')).toBe(FLAG_DEFINITIONS['PAYMENT_TO_UNLOCK']);
  });

  it('includes all new scam flags with definitions', () => {
    const newFlags = [
      'TASK_SCAM',
      'OTP_SHARING',
      'PARCEL_FEE',
      'IMPERSONATION',
      'ADVANCE_FEE',
      'QUISHING',
      'PAYMENT_TO_UNLOCK',
      'FAKE_REWARD',
      'LOOKALIKE_SENDER',
      'LOOKALIKE_DOMAIN',
      'VISHING_CALL',
      'MONEY_MULE',
      'FAKE_SUPPORT',
      'ACCOUNT_HIJACK_EMERGENCY',
      'SIM_REGISTRATION_PRETEXT',
      'FAMILY_EMERGENCY'
    ];
    for (const flag of newFlags) {
      expect(FLAG_DEFINITIONS[flag]).toBeDefined();
      expect(FLAG_DEFINITIONS[flag].trim().length).toBeGreaterThan(0);
    }
  });
});

import { describe, it, expect } from 'vitest';
import { getFlagDefinition, FLAG_DEFINITIONS } from './flagDefinitions';
import { VALID_FLAGS } from '../services/aiService';

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

  it('AGENTS.md contract: every VALID_FLAGS flag has a definition (no generic fallback)', () => {
    // Contract: "Keep every flag defined here AND in services/aiService.ts
    // VALID_FLAGS." A flag missing from FLAG_DEFINITIONS renders the generic
    // fallback string to the user - a silent taxonomy gap.
    for (const flag of VALID_FLAGS) {
      const def = getFlagDefinition(flag);
      expect(def, `flag ${flag} must not render the generic fallback`).not.toContain('fraudulent activity');
    }
  });

  it('AGENTS.md contract: every FLAG_DEFINITIONS key is in VALID_FLAGS (bidirectional)', () => {
    const valid = new Set(VALID_FLAGS.map((f) => f.toUpperCase()));
    for (const key of Object.keys(FLAG_DEFINITIONS)) {
      // UNKNOWN is the catch-all fallback definition, not a selectable flag.
      if (key === 'UNKNOWN') continue;
      expect(valid.has(key), `FLAG_DEFINITIONS key ${key} must be in VALID_FLAGS`).toBe(true);
    }
  });

  it('every flag the analysis pipeline actually pushes has a real definition', () => {
    // Runtime-pushed flags (not LLM-selectable VALID_FLAGS): UNDERDETECTION_OVERRIDE
    // (enrichResult), ON_DEVICE_MODEL + SUSPICIOUS_LINK (withStorageSignals layer
    // flags). These must NOT render the generic fallback either - the audit found
    // all three had no definition at all.
    const runtimeFlags = ['UNDERDETECTION_OVERRIDE', 'ON_DEVICE_MODEL', 'SUSPICIOUS_LINK'];
    for (const flag of runtimeFlags) {
      const def = getFlagDefinition(flag);
      expect(def, `flag ${flag} must not render the generic fallback`).not.toContain('fraudulent activity');
      expect(FLAG_DEFINITIONS[flag], `flag ${flag} must have its own definition key`).toBeDefined();
    }
  });
});

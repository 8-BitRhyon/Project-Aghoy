import { describe, it, expect } from 'vitest';
import { SUPPORT_DATABASE, SUPPORT_KEYS } from './supportDatabase';

describe('SUPPORT_DATABASE', () => {
  it('exposes SUPPORT_KEYS that match the database object keys', () => {
    expect(SUPPORT_KEYS).toEqual(Object.keys(SUPPORT_DATABASE));
    expect(new Set(SUPPORT_KEYS).size).toBe(SUPPORT_KEYS.length);
  });

  it('gives every entry a matching key and all required fields', () => {
    for (const key of SUPPORT_KEYS) {
      const entry = SUPPORT_DATABASE[key];
      expect(entry.key).toBe(key);
      expect(entry.name.trim().length).toBeGreaterThan(0);
      expect(entry.appGuide.trim().length).toBeGreaterThan(0);
      expect(entry.availability.trim().length).toBeGreaterThan(0);
      expect(entry.fraudFocus.trim().length).toBeGreaterThan(0);
      expect(entry.verifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(entry.source).toMatch(/^https?:\/\//);
      expect(typeof entry.active).toBe('boolean');
      expect(entry.imposterPriority).toBeGreaterThanOrEqual(0);
    }
  });

  it('gives every entry at least one channel with valid fields', () => {
    const channelTypes = ['voice', 'tollfree', 'email', 'chat', 'inapp', 'web'];
    for (const key of SUPPORT_KEYS) {
      const entry = SUPPORT_DATABASE[key];
      expect(entry.channels.length).toBeGreaterThan(0);
      for (const channel of entry.channels) {
        expect(channelTypes).toContain(channel.type);
        expect(channel.label.trim().length).toBeGreaterThan(0);
        expect(channel.value.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('marks ROBINSONS BANK as inactive (merged into BPI)', () => {
    expect(SUPPORT_DATABASE['ROBINSONS BANK'].active).toBe(false);
    expect(SUPPORT_DATABASE['ROBINSONS BANK'].fraudFocus).toContain('Merged into BPI');
  });

  it('keeps every brand key that maps to a support entry', () => {
    const brandKeys = [
      'GCASH', 'MAYA', 'SHOPEEPAY', 'LAZADAWALLET', 'BDO', 'BPI', 'METROBANK',
      'UNIONBANK', 'RCBC', 'EASTWEST', 'CHINA BANK', 'SECURITY BANK', 'PNB',
      'LANDBANK', 'GOTYME', 'SEABANK', 'CIMB', 'GLOBE', 'SMART', 'DITO',
      'J&T', 'LBC', 'PHILPOST', 'NBI', 'PNP', 'CICC', 'BIR', 'DTI', 'SSS',
      'GSIS', 'PAGIBIG'
    ];
    for (const key of brandKeys) {
      expect(SUPPORT_DATABASE[key]).toBeDefined();
    }
  });

  it('assigns the expected imposter priorities', () => {
    expect(SUPPORT_DATABASE['GCASH'].imposterPriority).toBe(10);
    expect(SUPPORT_DATABASE['MAYA'].imposterPriority).toBe(9);
    expect(SUPPORT_DATABASE['SHOPEEPAY'].imposterPriority).toBe(9);
    expect(SUPPORT_DATABASE['LAZADAWALLET'].imposterPriority).toBe(8);
    expect(SUPPORT_DATABASE['GLOBE'].imposterPriority).toBe(8);
    expect(SUPPORT_DATABASE['SMART'].imposterPriority).toBe(8);
    expect(SUPPORT_DATABASE['DITO'].imposterPriority).toBe(8);
    expect(SUPPORT_DATABASE['BDO'].imposterPriority).toBe(7);
    expect(SUPPORT_DATABASE['BPI'].imposterPriority).toBe(7);
    expect(SUPPORT_DATABASE['METROBANK'].imposterPriority).toBe(7);
    expect(SUPPORT_DATABASE['J&T'].imposterPriority).toBe(5);
    expect(SUPPORT_DATABASE['LBC'].imposterPriority).toBe(5);
    expect(SUPPORT_DATABASE['PHILPOST'].imposterPriority).toBe(5);
    expect(SUPPORT_DATABASE['NBI'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['PNP'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['CICC'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['BIR'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['DTI'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['SSS'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['GSIS'].imposterPriority).toBe(3);
    expect(SUPPORT_DATABASE['PAGIBIG'].imposterPriority).toBe(3);
  });
});

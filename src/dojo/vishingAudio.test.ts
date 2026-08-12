import { describe, it, expect } from 'vitest';
import { vishingAudioKey } from './vishingAudio';
import type { ScenarioStep } from './scenarios';

const step = (message: string, extra: Partial<ScenarioStep> = {}): ScenarioStep => ({
  id: 's1',
  channel: 'vishing',
  senderLabel: 'BDO',
  message,
  question: 'What do you do?',
  tip: 'Caller ID can be fake.',
  options: [{ id: 'a', text: 'A', correct: true, feedback: 'ok' }],
  ...extra,
});

describe('vishingAudioKey - content-based archetype matching', () => {
  it('returns null for non-vishing channels', () => {
    expect(vishingAudioKey(step('anything', { channel: 'sms' }))).toBeNull();
  });

  it('matches the bank fraud-card script (card number + code on back)', () => {
    expect(
      vishingAudioKey(step('This is BDO fraud department. Your card was used for P25,000. Say your card number and the code on the back.'))
    ).toBe('fraud-card');
    expect(vishingAudioKey(step('Ito ang BDO fraud department. Sabihin ang card number at code sa likod.'))).toBe('fraud-card');
  });

  it('matches the OTP read-back script', () => {
    expect(vishingAudioKey(step('We need to secure your account NOW. I will send you a code. Please read it back.'))).toBe('otp-readback');
    expect(vishingAudioKey(step('Kailangan nating i-secure ang account mo NGAYON. Magpapadala ako ng code. Pakibasa pabalik.'))).toBe('otp-readback');
  });

  it('matches the tech-support script', () => {
    expect(vishingAudioKey(step('This is GCash tech support. Your line was hacked. Give me the code on your phone.'))).toBe('tech-support');
    expect(vishingAudioKey(step('Ito ang GCash tech support. Na-hack ang line mo.'))).toBe('tech-support');
  });

  it('matches the account-access script', () => {
    expect(vishingAudioKey(step('I am calling from BDO. Someone tried to access your account. Confirm your details.'))).toBe('account-access');
    expect(vishingAudioKey(step('Tumatawag ako mula sa BDO. I-confirm ang details mo.'))).toBe('account-access');
  });

  it('matches the fraud-reverse script', () => {
    expect(vishingAudioKey(step('BDO agent here. To reverse a fraudulent transfer, I need your OTP.'))).toBe('fraud-reverse');
    expect(vishingAudioKey(step('Para ma-reverse ang fraudulent transfer, kailangan ko ang OTP mo.'))).toBe('fraud-reverse');
  });

  it('matches the family-emergency archetype', () => {
    expect(vishingAudioKey(step('Mom/Dad, it is me. I am in trouble, please send P8,000. Do not call.'))).toBe('family-emergency');
    expect(vishingAudioKey(step('Nay o Tay, nasa ospital po ako. Kailangan ko ng pera.'))).toBe('family-emergency');
  });

  it('matches the parcel-customs archetype', () => {
    expect(vishingAudioKey(step('Your parcel is being held by customs. Pay the clearance fee to release it.'))).toBe('parcel-customs');
  });

  it('matches the refund-error archetype', () => {
    expect(vishingAudioKey(step('Double refund error! Confirm your account to fix it.'))).toBe('refund-error');
  });

  it('returns null when no scam archetype signal is present', () => {
    expect(vishingAudioKey(step('ShopeePay: We detected a suspicious login. Verify now at gov-ph-tax.site.'))).toBeNull();
  });
});

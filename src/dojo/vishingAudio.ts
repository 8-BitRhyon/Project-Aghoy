// src/dojo/vishingAudio.ts - map a vishing drill step to a bundled audio
// archetype so the call screen can offer tap-to-play immersion.
//
// The vishing audio is pre-generated (scripts/generate-vishing-audio.py) and
// bundled under public/audio/ as vishing-<archetype>.mp3. It is NOT runtime
// TTS: no model, no network, works offline on the weakest phone.
//
// Matching is content-based, not family-based, because the generator can
// attach a vishing channel to any family. The Taglish vishing templates keep
// the English scam keywords ("fraud department", "tech support", "code",
// "OTP") in ALL four languages, so keyword signals survive localization.
// When no archetype matches, the renderer falls back to the visual call
// screen with no audio button - the drill still trains.

import type { ScenarioStep } from './scenarios';

export type VishingAudioKey =
  | 'fraud-card'
  | 'otp-readback'
  | 'tech-support'
  | 'account-access'
  | 'fraud-reverse'
  | 'family-emergency'
  | 'parcel-customs'
  | 'refund-error';

// Ordered most-specific first: each entry is a set of substrings (English
// scam keywords plus their Taglish spellings) that signal that archetype.
// Order matters: "card number" must win over generic "code", etc.
const SIGNALS: Array<{ key: VishingAudioKey; needles: string[] }> = [
  { key: 'fraud-card', needles: ['fraud department', 'card number', 'code on the back', 'code sa likod'] },
  { key: 'otp-readback', needles: ['read it back', 'pakibasa', 'read back', 'send you a code', 'magpapadala ako ng code'] },
  { key: 'tech-support', needles: ['tech support', 'was hacked', 'na-hack', 'line mo'] },
  { key: 'account-access', needles: ['access your account', 'i-access', 'confirm your details', 'i-confirm', 'details mo'] },
  { key: 'fraud-reverse', needles: ['reverse a fraudulent', 'fraudulent transfer', 'ma-reverse', 'need your otp', 'otp mo'] },
  { key: 'family-emergency', needles: ['mom', 'dad', 'nay', 'tay', 'broke my phone', 'ospital', 'hospital', 'in trouble'] },
  { key: 'parcel-customs', needles: ['customs', 'parcel', 'clearance fee'] },
  { key: 'refund-error', needles: ['refund'] },
];

export const vishingAudioKey = (step: ScenarioStep): VishingAudioKey | null => {
  if (step.channel !== 'vishing') return null;
  const text = `${step.senderLabel ?? ''} ${step.message ?? ''}`.toLowerCase();
  for (const { key, needles } of SIGNALS) {
    if (needles.some((n) => text.includes(n))) return key;
  }
  return null;
};

export const vishingAudioUrl = (key: VishingAudioKey): string => `/audio/vishing-${key}.mp3`;

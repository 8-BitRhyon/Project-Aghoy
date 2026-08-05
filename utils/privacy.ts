// utils/privacy.ts

import { redactPII, REJECT_PLACEHOLDERS } from '../src/rejects/rejects';

// The Rejects layer (src/rejects/rejects.ts) is the authoritative PII boundary
// and already covers cards (Luhn-validated), anchored PH mobiles, emails,
// API keys, PH IDs, OTPs, and 10-12 digit account runs. This module reuses
// those rules for defense-in-depth (localStorage history and displayed text)
// and maps the [REDACTED:*] markers to the user-facing tokens rendered in app.
const REJECT_TO_CLIENT_TOKEN: Record<string, string> = {
  [REJECT_PLACEHOLDERS.CARD]: '[CARD_NUMBER]',
  [REJECT_PLACEHOLDERS.MOBILE]: '[MOBILE_NUMBER]',
  [REJECT_PLACEHOLDERS.EMAIL]: '[EMAIL_REDACTED]',
  [REJECT_PLACEHOLDERS.ACCOUNT]: '[ACCOUNT_NUMBER]',
  [REJECT_PLACEHOLDERS.API_KEY]: '[API_KEY_REDACTED]',
  [REJECT_PLACEHOLDERS.PH_ID]: '[PH_ID_REDACTED]',
  [REJECT_PLACEHOLDERS.OTP]: '[OTP_REDACTED]',
  [REJECT_PLACEHOLDERS.CVV]: '[CVV_REDACTED]',
  [REJECT_PLACEHOLDERS.NAME]: '[NAME_REDACTED]',
  [REJECT_PLACEHOLDERS.DOB]: '[DOB_REDACTED]',
};

const mapRejectTokens = (text: string): string => {
  let out = text;
  for (const [rejectToken, clientToken] of Object.entries(REJECT_TO_CLIENT_TOKEN)) {
    out = out.split(rejectToken).join(clientToken);
  }
  return out;
};

// Standalone 10-16 digit runs. The Rejects layer covers 10-12 digit accounts;
// this extends the range so 13-16 digit GCash reference numbers are redacted
// too. Anchored so a longer digit run never partially leaks.
const EXTENDED_ACCOUNT_RE = /(?<!\d)\d{10,16}(?!\d)/g;

// Greeting-name patterns common in PH SMS. Consumes the full name (1-3
// capitalized words) so no surname fragment leaks after the token.
const greetingRegex = /\b(Hi|Hello|Dear|Good day|Mr\.|Ms\.|Mrs\.)\s+([A-Z][a-z]+(?:\s[A-Z][a-z]+){0,2})/g;

export const sanitizeText = (text: string): string => {
  if (!text) return "";

  let cleanText = text;

  // 1. Rejects-layer redaction (cards, PH mobiles, emails, API keys, PH IDs,
  //    accounts, OTPs). redactPII is synchronous.
  cleanText = mapRejectTokens(redactPII(cleanText).text);

  // 2. Extended 10-16 digit standalone runs (GCash refs beyond 10-12).
  cleanText = cleanText.replace(EXTENDED_ACCOUNT_RE, '[ACCOUNT_NUMBER]');

  // 3. Redact names in greeting patterns (not handled by the Rejects layer).
  cleanText = cleanText.replace(greetingRegex, '$1 [NAME_REDACTED]');

  return cleanText;
};

// Generate a safe, anonymous hash for tracking duplicates
// Uses the Web Crypto API available in all modern browsers
export const generateContentHash = async (text: string): Promise<string> => {
  const safeText = sanitizeText(text).toLowerCase().trim(); // Hash the CLEAN version only
  const encoder = new TextEncoder();
  const data = encoder.encode(safeText);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

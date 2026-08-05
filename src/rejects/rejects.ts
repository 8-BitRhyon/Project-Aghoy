// === REJECTS LAYER ===
// Server-authoritative PII filter. Runs in Cloudflare Pages Functions
// (functions/api/analyze.js) and the Worker (src/worker/dojo.ts) between
// structural validation and any request leaving for a third-party vendor,
// and again on provider responses. Client-side pre-send redaction is
// defense-in-depth only; this module is the source of truth.
//
// Rules are zero-dependency (RegExp + Luhn mod-10) and idempotent:
// re-running redaction over already-redacted text is a no-op.

export const REJECT_PLACEHOLDERS = {
  CARD: '[REDACTED:CARD]',
  MOBILE: '[REDACTED:MOBILE]',
  EMAIL: '[REDACTED:EMAIL]',
  ACCOUNT: '[REDACTED:ACCOUNT]',
  API_KEY: '[REDACTED:API_KEY]',
  PH_ID: '[REDACTED:PH_ID]',
  OTP: '[REDACTED:OTP]',
  CVV: '[REDACTED:CVV]',
  NAME: '[REDACTED:NAME]',
  DOB: '[REDACTED:DOB]',
} as const;

export type RejectCategory = keyof typeof REJECT_PLACEHOLDERS;

export interface RedactionResult {
  text: string;
  redacted: boolean;
  count: number;
  categories: RejectCategory[];
}

export interface ChatMessage {
  role: string;
  content: string;
}

const luhnValid = (digits: string): boolean => {
  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    const code = digits.charCodeAt(i) - 48;
    if (code < 0 || code > 9) return false;
    let d = code;
    if (double) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
};

const placeholder = (category: RejectCategory): string => REJECT_PLACEHOLDERS[category];

// API keys: csk-/gsk_ (this app's vendors), sk-/sk-ant- (OpenAI), ghp_ (GitHub), AIza (Google).
const API_KEY_RE = /\b(?:sk-ant-[A-Za-z0-9_-]{20,}|sk-[A-Za-z0-9]{16,}|csk-[A-Za-z0-9_-]{10,}|gsk_[A-Za-z0-9_-]{10,}|ghp_[A-Za-z0-9]{30,}|AIza[A-Za-z0-9_-]{30,})\b/g;

// PH mobile numbers, anchored so a longer digit run cannot leak trailing digits.
const MOBILE_RE = /(?<!\d)(?:\+63|0)9\d{9}(?!\d)/g;

// Conservative non-PH international phone numbers: an explicit plus sign, a
// 1-4 digit country code, then 6-11 subscriber digits (optional separators).
// Runs before ACCOUNT_RE so a +-prefixed number is never partially eaten by
// the generic account rule. Bare digit runs without the plus stay untouched.
const INTL_PHONE_RE = /(?<!\d)\+\d{1,4}(?:[ -]?\d){6,11}(?!\d)/g;

// Greeting-name patterns: an honorific (Mr./Ms./Mrs./Dr.) with an optional
// greeting prefix (Hi/Hello/Dear), followed by 1-3 capitalized words. Requiring
// an honorific keeps this rule conservative and idempotent; bare "Hi <Name>"
// stays with the client-side display layer (utils/privacy.ts), which renders
// its own [NAME_REDACTED] token.
const NAME_RE = /\b(?:(?:Hi|Hello|Dear)\s+)?(?:Mr\.|Ms\.|Mrs\.|Dr\.)\s+[A-Z][a-zA-Z'-]{0,40}(?:\s+[A-Z][a-zA-Z'-]{0,40}){0,2}/g;

// Birth-date patterns (day/month[/year]), the classic DOB-phishing payload.
const DOB_RE = /\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/g;

// Emails.
const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

// Standalone 10-12 digit account/number runs (GCash refs, bank accounts).
const ACCOUNT_RE = /(?<!\d)\d{10,12}(?!\d)/g;

// PH government-issued identifiers (SSS, TIN, Pag-IBIG/UMID-style groups).
const PH_ID_RE = /\b(?:\d{2}-\d{4}-\d{4}|\d{3}-\d{3}-\d{4}|\d{3}-\d{3}-\d{3}(?:-\d{4})?|\d{4}-\d{4}-\d{4})\b/g;

// === PH-specific ID formats (2025-2026) ===
// SSS: ##-#######-# (2-7-1) or ##-######-# (2-6-1). The two most common
// printed/pasted SSS formats; the generic PH_ID_RE above does NOT catch them.
const SSS_RE = /\b\d{2}-\d{6,7}-\d\b/g;

// PhilHealth: ##-#########-# (2-9-1) member number format.
const PHILHEALTH_RE = /\b\d{2}-\d{9}-\d\b/g;

// TIN: ###-###-###(-###)? - the optional last group is the branch/area code
// and may be 3 or 4 digits. Fixes a partial-leak where only 3-3-3 was matched.
const TIN_RE = /\b\d{3}-\d{3}-\d{3}(?:-\d{3,4})?\b/g;

// LTO driver's license: A##-##-###### (letter + 2-2-6 digit groups).
const LICENSE_RE = /\b[A-Z]\d{2}-\d{2}-\d{6}\b/g;

// Philippine passport: P + 7 digits + 1 letter (e.g. P1234567X).
const PASSPORT_RE = /\bP\d{7}[A-Z]\b/g;

// Context-gated government IDs: an ID keyword followed by an alphanumeric
// number (may include dashes/spaces). Preserves the keyword, redacts the number.
const ID_CONTEXT_RE = /\b(SSS|TIN|UMID|PhilHealth|Pag-?IBIG|GSIS|NBI|PRC|passport|driver['’]?s?\s+license|license|clearance)\b[\s:#]*((?:no\.?|number|ID|#)\s*)?([A-Z]?\d[\d -]{4,11}[A-Z\d])/gi;

// Context-gated OTP/PIN: only redact short digit groups near OTP/PIN keywords.
const OTP_RE = /\b(?:otp|pin|passcode|one-time(?:\s+password)?|verification(?:\s+code)?|security(?:\s+code)?)[\s:#-]*(?:is[\s:#-]*)?(\d{4,8})\b/gi;

// CVV/CVC: 3-4 digit card verification code near the CVV keyword. Only the
// number is replaced; the "CVV" label is preserved.
const CVV_RE = /\b(?:cvv|cvc|security\s+code)\b[\s:#-]*(\d{3,4})\b/gi;

// Card numbers: 13-19 digits, separators tolerated, Luhn-validated.
// Runs before ACCOUNT_RE so valid PANs never fall through to account redaction.
const CARD_RUN_RE = /\b(?:\d[ -]?){12,18}\d\b/g;

const redactCards = (text: string, out: RedactionResult): string => {
  return text.replace(CARD_RUN_RE, (match) => {
    const digits = match.replace(/[\s-]/g, "");
    if (digits.length >= 13 && digits.length <= 19 && /^\d+$/.test(digits) && luhnValid(digits)) {
      out.count += 1;
      out.categories.push("CARD");
      return placeholder("CARD");
    }
    return match;
  });
};

const redactMobile = (text: string, out: RedactionResult): string => {
  return text.replace(MOBILE_RE, (match) => {
    out.count += 1;
    out.categories.push("MOBILE");
    return placeholder("MOBILE");
  });
};

const redactIntlPhone = (text: string, out: RedactionResult): string => {
  return text.replace(INTL_PHONE_RE, (match) => {
    out.count += 1;
    out.categories.push("MOBILE");
    return placeholder("MOBILE");
  });
};

const redactName = (text: string, out: RedactionResult): string => {
  return text.replace(NAME_RE, (match) => {
    out.count += 1;
    out.categories.push("NAME");
    return placeholder("NAME");
  });
};

const redactDob = (text: string, out: RedactionResult): string => {
  return text.replace(DOB_RE, (match) => {
    out.count += 1;
    out.categories.push("DOB");
    return placeholder("DOB");
  });
};

const redactEmail = (text: string, out: RedactionResult): string => {
  return text.replace(EMAIL_RE, (match) => {
    out.count += 1;
    out.categories.push("EMAIL");
    return placeholder("EMAIL");
  });
};

const redactAccount = (text: string, out: RedactionResult): string => {
  return text.replace(ACCOUNT_RE, (match) => {
    out.count += 1;
    out.categories.push("ACCOUNT");
    return placeholder("ACCOUNT");
  });
};

const redactApiKey = (text: string, out: RedactionResult): string => {
  return text.replace(API_KEY_RE, (match) => {
    out.count += 1;
    out.categories.push("API_KEY");
    return placeholder("API_KEY");
  });
};

const redactPhId = (text: string, out: RedactionResult): string => {
  let t = text;
  // Pure-format patterns FIRST so long identifiers (TIN/PhilHealth/SSS) are
  // fully matched before the context gate can truncate them.
  for (const re of [SSS_RE, PHILHEALTH_RE, TIN_RE, LICENSE_RE, PASSPORT_RE, PH_ID_RE]) {
    t = t.replace(re, (match) => {
      out.count += 1;
      out.categories.push("PH_ID");
      return placeholder("PH_ID");
    });
  }
  // Context-gated LAST: catches keyword + number forms the pure patterns miss
  // (e.g. PRC 0123456, NBI clearance 123456789012, passport 9-digit).
  t = t.replace(ID_CONTEXT_RE, (match, _keyword, _connector, number) => {
    if (!number) return match;
    out.count += 1;
    out.categories.push("PH_ID");
    return match.replace(number, placeholder("PH_ID"));
  });
  return t;
};

const redactOtp = (text: string, out: RedactionResult): string => {
  return text.replace(OTP_RE, (match, digits) => {
    out.count += 1;
    out.categories.push("OTP");
    return match.replace(digits, placeholder("OTP"));
  });
};

const redactCvv = (text: string, out: RedactionResult): string => {
  return text.replace(CVV_RE, (match, digits) => {
    out.count += 1;
    out.categories.push("CVV");
    return match.replace(digits, placeholder("CVV"));
  });
};

// Order matters: CARD and MOBILE before ACCOUNT so valid cards and phones are
// never partially eaten by the generic account rule. API keys before emails.
// CARD before PH_ID so a 4-4-4-4-dashed PAN is fully consumed by the Luhn rule
// instead of only the first three groups (which would leak the last 4 digits).
// PH_ID before DOB so TIN/SSS formats keep their category. OTP last, after
// generic numbers, so 4-8 digit tokens near keywords win.
const redactText = (text: string, out: RedactionResult): string => {
  let t = text;
  t = redactApiKey(t, out);
  t = redactMobile(t, out);
  t = redactIntlPhone(t, out);
  t = redactEmail(t, out);
  t = redactCards(t, out);
  t = redactPhId(t, out);
  t = redactAccount(t, out);
  t = redactName(t, out);
  t = redactDob(t, out);
  t = redactOtp(t, out);
  t = redactCvv(t, out);
  return t;
};

export const redactPII = (text: string): RedactionResult => {
  const out: RedactionResult = { text: text ?? "", redacted: false, count: 0, categories: [] };
  if (!out.text) return out;
  out.text = redactText(out.text, out);
  out.redacted = out.count > 0;
  out.categories = Array.from(new Set(out.categories));
  return out;
};

export const redactMessages = (messages: ChatMessage[]): { messages: ChatMessage[]; count: number; categories: RejectCategory[] } => {
  let count = 0;
  const categories: RejectCategory[] = [];
  const redacted = messages.map((m) => {
    const result = redactPII(typeof m.content === "string" ? m.content : "");
    count += result.count;
    categories.push(...result.categories);
    return { ...m, content: result.text };
  });
  return { messages: redacted, count, categories: Array.from(new Set(categories)) };
};

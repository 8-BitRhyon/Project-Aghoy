// src/brands/senderAllowlist.ts - deterministic trusted-sender layer for
// Project Aghoy. Closes the identity gap the text model cannot: legitimate
// bank/wallet/delivery notifications are TEXTUALLY IDENTICAL to scams, so no
// text classifier can separate them. The differentiator is WHO sent it.
//
// A verified official sender (alphanumeric sender ID or registered shortcode)
// is strong evidence of legitimacy. Per the ScamShield pattern ("only scan
// unknown numbers"), a known sender overrides a text-flag: the message is
// trusted, and the body is never escalated. This is the highest-leverage
// false-positive reduction available - it neutralizes the ~79 bank-wallet FPs
// the model produces on legit notifications.
//
// Pure, deterministic, testable. No network, no state.

export interface SenderCheck {
  trusted: boolean;
  brandKey: string | null; // which brand's official channel this is
  matchedOn: string; // the sender id / shortcode that matched
  isShortcode: boolean; // numeric shortcode vs alphanumeric sender ID
}

// Official alphanumeric sender IDs used by PH institutions in 2026. These are
// the SMS "sender names" that appear as the FROM field. Sender IDs can be
// spoofed, but only when a telco fails to register the alphanumeric sender;
// treat a match as strong-but-not-absolute evidence (see verdict policy in
// the caller - it can veto a HIGH_RISK but should not force SAFE against a
// confirmed scam pattern).
const OFFICIAL_SENDER_IDS: Record<string, string> = {
  GCASH: "gcash",
  BDO: "bdo",
  BPIOFFICIAL: "bpi",
  BPI: "bpi",
  METROBANK: "metrobank",
  "Metrobank": "metrobank",
  MAYA: "maya",
  MAYA4EVER: "maya",
  PAYMAYA: "maya",
  UNIONBANK: "unionbank",
  RCBC: "rcbc",
  SECURITYBANK: "securitybank",
  EWB: "eastwest",
  EASTWEST: "eastwest",
  CHINABANK: "chinabank",
  PNBOFFICIAL: "pnb",
  LANDBANK: "landbank",
  GOTYME: "gotyme",
  SEABANK: "seabank",
  GLOBETEL: "globe",
  GLOBE: "globe",
  GLOBEATHOME: "globe",
  GIGALIFEAPP: "globe",
  GOMO: "globe",
  SMART: "smart",
  SMARTLOAD: "smart",
  TNT: "tnt",
  TNTLOAD: "tnt",
  SUN: "sun",
  DITO: "dito",
  PLDTHOME: "pldt",
  LBC: "lbc",
  "BDO ALERT": "bdo",
  "BDO-OTP": "bdo",
  "BDO DEALS": "bdo",
  COINS: "coinsph",
  "COINS.PH": "coinsph",
  JNT: "jtexpress",
  SHOPEE: "shopee",
  LAZADA: "lazada",
  PHILPOST: "philpost",
  NDRRMC: "ndrrmc",
  DOST: "dost",
  PAGASA: "pagasa",
  PHIVOLCS: "phivolcs",
  DOH: "doh",
  NTC: "ntc",
};

// Numeric shortcodes registered by PH institutions (the FROM field for SMS
// from a shortcode). Numeric shortcodes are harder to spoof than alphanumeric
// sender IDs because the telco must route them.
const OFFICIAL_SHORTCODES: Record<string, string> = {
  "2882": "gcash", // GCash hotline / official
  "28966": "gcash", // GCash official
  "8080": "gcash", // Globe/GCash service shortcode
  "2343": "maya", // Maya official
  "2255": "bdo", // BDO
  "8899": "smart",
  "3404": "smart", // Smart official alerts
  "7326": "smart", // SPAM reporting
  "2149": "smart",
  "4438": "globe",
  "8888": "globe", // GCash / Globe
};

// Normalize a sender field (sender ID or phone number) for matching.
export const normalizeSender = (sender: string | null | undefined): string => {
  if (!sender) return "";
  return sender.trim().toUpperCase().replace(/^\+/, "");
};

// Check whether a sender field is a known official PH channel.
export const checkSender = (sender: string | null | undefined): SenderCheck | null => {
  const raw = normalizeSender(sender);
  if (!raw) return null;

  // Numeric shortcode (all digits, typically 4-6).
  if (/^\d{3,6}$/.test(raw)) {
    const brandKey = OFFICIAL_SHORTCODES[raw];
    if (brandKey) {
      return { trusted: true, brandKey, matchedOn: raw, isShortcode: true };
    }
    return { trusted: false, brandKey: null, matchedOn: raw, isShortcode: true };
  }

  // Alphanumeric sender ID (e.g. "GCASH", "BDO", "MAYA4EVER").
  const brandKey = OFFICIAL_SENDER_IDS[raw];
  if (brandKey) {
    return { trusted: true, brandKey, matchedOn: raw, isShortcode: false };
  }
  return { trusted: false, brandKey: null, matchedOn: raw, isShortcode: false };
};

// Look up which brand owns a sender id (for display + routing).
export const senderBrand = (sender: string | null | undefined): string | null => {
  const check = checkSender(sender);
  return check?.trusted ? check.brandKey : null;
};

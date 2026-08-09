// Trusted-sender allowlist: official PH sender IDs/shortcodes are identity-verified. Pure, deterministic, testable.

export interface SenderCheck {
  trusted: boolean;
  brandKey: string | null; // which brand's official channel this is
  matchedOn: string; // the sender id / shortcode that matched
  isShortcode: boolean; // numeric shortcode vs alphanumeric sender ID
}

// Official alphanumeric sender IDs (the SMS FROM field). Spoofable only if a telco fails to register them; strong-but-not-absolute evidence.
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

// Numeric shortcodes (telco-routed, harder to spoof than alphanumeric IDs).
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

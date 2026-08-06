// Deterministic, zero-dependency brand and intent detection. Runs on
// Rejects-layer output only; powers victim-support routing (SmartSupport) and
// the no-LLM fallback verdict.

import { redactPII } from "../rejects/rejects";

export type BrandKey = string;
export type BrandConfidence = "high" | "medium" | "low";
export type BrandSource = "text" | "sender" | "scamtype" | "redflag";

export interface BrandMatch {
  key: string;
  confidence: BrandConfidence;
  sources: BrandSource[];
  mentions: number;
  matchedOn: string;
}

export type Intent =
  | "TASK_PAY_TO_WORK"
  | "ACCOUNT_LOCK_URGENCY"
  | "OTP_VERIFICATION"
  | "PARCEL_FEE_LINK"
  | "INVESTMENT_PAYOUT"
  | "FAKE_REWARD_CLAIM"
  | "MONEY_MULE"
  | "VISHING_CALL"
  | "QUISHING"
  | "SIM_PRETEXT"
  | "BRAND_IMPERSONATION";

const LEET_MAP: Record<string, string> = {
  "0": "o", "3": "e", "4": "a", "1": "i", "5": "s", "7": "t", "@": "a", "$": "s",
};

export const normalizeBrandText = (input: string): string => {
  if (!input) return "";
  const normalized = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[0-9@$!]/g, (c) => LEET_MAP[c] ?? c)
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  return normalized.replace(/\s+/g, " ");
};

const escapeRegExp = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const BRAND_ALIASES: Record<string, string[]> = {
  GCASH: ["gcash", "g-cash", "g cash", "gcsh", "gcashe", "gcashonline", "gcashph", "gcashapp", "g cash app"],
  MAYA: ["maya", "paymaya", "pay maya", "mayabank", "mayawallet", "maya wallet", "maya bank"],
  SHOPEEPAY: ["shopeepay", "shopee pay", "shopeepaywallet", "spaylater", "spay"],
  LAZADAWALLET: ["lazadawallet", "lazada wallet", "lazwallet", "lazadapay"],
  BDO: ["bdo", "bdoonline", "bdo online", "bdobank", "bdo unibank", "banco de oro"],
  BPI: ["bpi", "bpi online", "bpionline", "bpiexpressonline", "bank of the philippine islands"],
  METROBANK: ["metrobank", "metro bank", "metrobankonline", "metrobnk", "metropolitan bank"],
  UNIONBANK: ["unionbank", "union bank", "ubonline", "unionbankph"],
  RCBC: ["rcbc", "rcbcpulz", "rcbconline", "rcb"],
  EASTWEST: ["eastwest", "east west", "eastwestbank", "eastwestcard"],
  "CHINA BANK": ["chinabank", "china bank", "chinabanking", "cbcbank"],
  "SECURITY BANK": ["securitybank", "security bank", "sbonline", "sb online"],
  PNB: ["pnb", "pnb online", "pnbonline", "philippine national bank"],
  LANDBANK: ["landbank", "land bank", "lbp", "landbankonline"],
  GOTYME: ["gotyme", "go tyme", "gotymebank", "gotymepromo"],
  SEABANK: ["seabank", "sea bank", "seabankph"],
  CIMB: ["cimb", "cimb bank", "cimbph", "cimbbank"],
  PSBANK: ["psbank", "ps bank", "psbankonline"],
  MAYBANK: ["maybank", "may bank", "maybankph", "maybankonline"],
  "COINS.PH": ["coinsph", "coins.ph", "coins ph", "coinsapp"],
  BINANCE: ["binance", "binanceph", "binanace", "binancewallet", "binancep2p"],
  GLOBE: ["globe", "globetel", "globe at home", "globeph", "globe telecom"],
  SMART: ["smart", "smartcomm", "smartsim", "smart communications"],
  SUN: ["sun", "suncellular", "sun cellular"],
  DITO: ["dito", "ditotelecom", "ditoph"],
  PLDT: ["pldt", "pldthome", "pldt fiber", "pldtfibr"],
  SHOPEE: ["shopee", "shoppe", "shoppee", "shopeeph"],
  LAZADA: ["lazada", "lazada ph", "lazmall", "lazadaph"],
  TIKTOK: ["tiktok", "tik tok", "tick tock", "tiktokshop", "tiktokph"],
  FACEBOOK: ["facebook", "fb", "facebookpay", "metapay"],
  "J&T": ["j&t", "jnt", "j&texpress", "jtexpress", "j and t"],
  FLASH: ["flashexpress", "flash express", "flashx", "flashph"],
  "NINJA VAN": ["ninjavan", "ninja van", "ninjavanph"],
  JRS: ["jrsexpress", "jrs express", "jrscargo"],
  LBC: ["lbc", "lbcexpress", "lbcremit", "lbcph"],
  PHILPOST: ["philpost", "phlpost", "philippine postal", "post office"],
  LALAMOVE: ["lalamove", "lala move", "lalamoveph"],
  GRAB: ["grab", "grabpay", "grab pay", "grabph"],
  NBI: ["nbi", "nbiclearance", "nbiph"],
  PNP: ["pnp", "pnpp", "pnpacg", "anti cybercrime"],
  CICC: ["cicc", "cicc1326", "ciccgov", "cybercrime center"],
  BIR: ["bir", "birph", "bironline", "bureau of internal revenue"],
  DTI: ["dti", "dtiph", "dti registration", "department of trade"],
  SSS: ["sss", "sssonline", "mysss", "sssloan"],
  GSIS: ["gsis", "gsisonline", "gsisloan"],
  PAGIBIG: ["pagibig", "pag-ibig", "pag ibig", "hdmf", "pagibigfund"],
  PHILHEALTH: ["philhealth", "phil health", "phihealth"],
  EGOVPH: ["egovph", "egov ph", "egov", "egovapp", "e gov"],
};

// Impersonation priors: wallet/telco > bank > delivery > gov. Tiebreak only.
const IMPOSTER_PRIORITY: string[] = [
  "GCASH", "MAYA", "SHOPEEPAY", "LAZADAWALLET", "GLOBE", "SMART", "SUN", "DITO", "PLDT",
  "BDO", "BPI", "METROBANK", "UNIONBANK", "RCBC", "EASTWEST", "CHINA BANK", "SECURITY BANK",
  "PNB", "LANDBANK", "GOTYME", "SEABANK", "CIMB", "PSBANK", "MAYBANK", "COINS.PH", "BINANCE",
  "SHOPEE", "LAZADA", "TIKTOK", "FACEBOOK", "GRAB", "J&T", "FLASH", "NINJA VAN", "JRS",
  "LBC", "PHILPOST", "LALAMOVE", "NBI", "PNP", "CICC", "BIR", "DTI", "SSS", "GSIS",
  "PAGIBIG", "PHILHEALTH", "EGOVPH",
];

const priorityIndex = (key: string): number => {
  const idx = IMPOSTER_PRIORITY.indexOf(key);
  return idx === -1 ? IMPOSTER_PRIORITY.length : idx;
};

export const detectBrands = (input: {
  text?: string;
  senderEntity?: string;
  scamType?: string;
  redFlags?: string[];
  limit?: number;
}): BrandMatch[] => {
  const limit = input.limit ?? 3;
  const redFlagsText = Array.isArray(input.redFlags) ? input.redFlags.join(" ") : "";
  const candidate = [input.text, input.senderEntity, input.scamType, redFlagsText]
    .filter(Boolean)
    .join(" \n ");

  const matches = new Map<string, BrandMatch>();

  const countMatches = (haystack: string, re: RegExp): number => {
    re.lastIndex = 0;
    let n = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(haystack)) !== null) n += 1;
    return n;
  };

  const register = (key: string, alias: string, source: BrandSource, count: number) => {
    if (count <= 0) return;
    const existing = matches.get(key);
    if (existing) {
      existing.mentions += count;
      if (!existing.sources.includes(source)) existing.sources.push(source);
      return;
    }
    matches.set(key, {
      key,
      confidence: source === "sender" ? "high" : source === "text" ? "medium" : "low",
      sources: [source],
      mentions: count,
      matchedOn: alias,
    });
  };

  const lowerCandidate = candidate.toLowerCase();

  for (const [key, aliases] of Object.entries(BRAND_ALIASES)) {
    for (const alias of aliases) {
      if (!/\s/.test(alias) && !/[&@$-]/.test(alias)) {
        const re = new RegExp(`\\b${escapeRegExp(alias)}\\b`, "gi");
        const count = countMatches(lowerCandidate, re);
        if (count > 0) {
          register(key, alias, "text", count);
        }
      }
    }
  }

  // Pass 2: collapsed pass catches separators/leetspeak variants that the
  // boundary pass cannot see (e.g. "g-cash", "paymaya"). Only add keys the
  // boundary pass did NOT already match, so plain "gcash" is not double-counted.
  const collapsed = normalizeBrandText(lowerCandidate);
  for (const [key, aliases] of Object.entries(BRAND_ALIASES)) {
    if (matches.has(key)) continue;
    for (const alias of aliases) {
      const normAlias = normalizeBrandText(alias);
      if (!normAlias) continue;
      const re = new RegExp(`\\b${escapeRegExp(normAlias)}\\b`, "g");
      const count = countMatches(collapsed, re);
      if (count > 0) {
        register(key, alias, "text", count);
      }
    }
  }

  // Sender bonus: an explicit senderEntity match upgrades confidence to high
  // but never suppresses body matches.
  const sender = (input.senderEntity || "").toLowerCase();
  for (const [key, aliases] of Object.entries(BRAND_ALIASES)) {
    for (const alias of aliases) {
      const re = new RegExp(`\\b${escapeRegExp(alias)}\\b`, "gi");
      if (countMatches(sender, re) > 0) {
        const existing = matches.get(key);
        if (existing) {
          existing.confidence = "high";
          if (!existing.sources.includes("sender")) existing.sources.push("sender");
        } else {
          matches.set(key, {
            key,
            confidence: "high",
            sources: ["sender"],
            mentions: 1,
            matchedOn: alias,
          });
        }
      }
    }
  }

  const ranked = Array.from(matches.values()).sort((a, b) => {
    const conf = (c: BrandConfidence) => (c === "high" ? 3 : c === "medium" ? 2 : 1);
    const scoreDiff = conf(b.confidence) * b.mentions - conf(a.confidence) * a.mentions;
    if (scoreDiff !== 0) return scoreDiff;
    return priorityIndex(a.key) - priorityIndex(b.key);
  });

  return ranked.slice(0, limit);
};

const INTENT_PATTERNS: Array<[Intent, RegExp]> = [
  ["TASK_PAY_TO_WORK", /\b(like|likes|liking|subscribe|subscription|follow|following|rating|review|recharge|top[\s-]?up)\b.*\b(unlock|withdraw|deposit|fee|task|earn|commission)\b|\b(processing|training|refundable)\s*fee\b/],
  ["ACCOUNT_LOCK_URGENCY", /(account|card|wallet|sim).*(lock|restrict|suspend|block|deactivat|expir)\w*|within\s*(24\s*hours|24hrs|today)|(avoid|prevent)\s+(suspension|block|deactivation)/],
  ["OTP_VERIFICATION", /(otp|mpin|one[\s-]?time\s*(pin|password)|verification\s*code|security\s*code|passcode|pin\s*code)|(share|send|confirm|verify).*(code|otp|pin)/],
  ["PARCEL_FEE_LINK", /(parcel|package|delivery|shipment|rider).*(fee|payment|hold|customs|clearance|redeliver|reschedule)|(j&t|jnt|flash|ninjavan|lbc|jrs|philpost|lalamove).*(fee|pay|hold|customs)/],
  ["INVESTMENT_PAYOUT", /(invest|investor|trader|trading|signal|capital).*(guaranteed|profit|return|roi|double|daily|withdraw)|sure\s*kita|pasok/],
  ["FAKE_REWARD_CLAIM", /(you\s*won|winner|congratulations|claim|prize|raffle|cashback|rebate|free\s*load|reward)/],
  ["MONEY_MULE", /(receive|keep|forward|send).*(for\s*me|another\s*account)|(pasabuy|padala|paikot)|keep\s*\d+\s*(%|percent)/],
  ["VISHING_CALL", /(call\s*(this|our|us)|dial|hotline|toll[\s-]?free|tumawag|tawagan|agent\s*will\s*call)/],
  ["QUISHING", /(scan\s*(the\s*)?(qr|code)|qr\s*code|parking\s*(fee|payment)|epayment|cashless)/],
  ["SIM_PRETEXT", /(sim|number).*(deactivat|expir|re-register|registration)|(egovph|e-gov|national\s*id).*(verif|updat|expir)/],
];

export const detectIntents = (text: string): Intent[] => {
  if (!text) return [];
  const t = text.toLowerCase().replace(/\s+/g, " ");
  const found: Intent[] = [];
  for (const [intent, re] of INTENT_PATTERNS) {
    if (re.test(t) && !found.includes(intent)) found.push(intent);
  }
  const brands = detectBrands({ text, limit: 1 });
  if (brands.length > 0 && !found.includes("BRAND_IMPERSONATION")) found.push("BRAND_IMPERSONATION");
  return found.slice(0, 3);
};

const INTENT_TO_FLAGS: Record<Intent, string[]> = {
  TASK_PAY_TO_WORK: ["TASK_SCAM", "ADVANCE_FEE", "ASKING FOR PAYMENT TO WORK"],
  ACCOUNT_LOCK_URGENCY: ["URGENCY", "IMPERSONATION"],
  OTP_VERIFICATION: ["OTP_SHARING", "REQUEST FOR PERSONAL INFO"],
  PARCEL_FEE_LINK: ["PARCEL_FEE"],
  INVESTMENT_PAYOUT: ["TOO GOOD TO BE TRUE OFFER"],
  FAKE_REWARD_CLAIM: ["FAKE_REWARD", "TOO GOOD TO BE TRUE OFFER"],
  MONEY_MULE: ["MONEY_MULE"],
  VISHING_CALL: ["VISHING_CALL"],
  QUISHING: ["QUISHING"],
  SIM_PRETEXT: ["SIM_REGISTRATION_PRETEXT", "IMPERSONATION"],
  BRAND_IMPERSONATION: ["IMPERSONATION"],
};

const INTENT_SCORE: Record<Intent, number> = {
  TASK_PAY_TO_WORK: 4,
  OTP_VERIFICATION: 4,
  MONEY_MULE: 4,
  ACCOUNT_LOCK_URGENCY: 3,
  PARCEL_FEE_LINK: 3,
  INVESTMENT_PAYOUT: 3,
  FAKE_REWARD_CLAIM: 3,
  VISHING_CALL: 2,
  QUISHING: 2,
  SIM_PRETEXT: 2,
  BRAND_IMPERSONATION: 1,
};

const INTENT_TO_TYPE: Record<Intent, string> = {
  TASK_PAY_TO_WORK: "Task Scam",
  OTP_VERIFICATION: "OTP Phishing",
  MONEY_MULE: "Money Mule",
  ACCOUNT_LOCK_URGENCY: "Account Impersonation",
  PARCEL_FEE_LINK: "Parcel Fee Scam",
  INVESTMENT_PAYOUT: "Fake Investment",
  FAKE_REWARD_CLAIM: "Fake Reward",
  VISHING_CALL: "Vishing",
  QUISHING: "QR Phishing",
  SIM_PRETEXT: "SIM Registration Pretext",
  BRAND_IMPERSONATION: "Brand Impersonation",
};

export interface FallbackVerdict {
  verdict: "SAFE" | "SUSPICIOUS" | "HIGH_RISK";
  riskScore: number;
  scamType: string;
  redFlags: string[];
  analysis: string;
  educationalTip: string;
  matchedBrands?: BrandMatch[];
  intents?: Intent[];
}

export const fallbackVerdict = (rawText: string): FallbackVerdict | null => {
  const { text } = redactPII(rawText || "");
  // Redaction placeholders carry words ("card", "account", "otp") that would
  // otherwise be scored as content signals, inflating the risk on inputs that
  // only contained a number. Strip them before intent/brand detection.
  const t = text
    .replace(/\[REDACTED:[A-Z_]+\]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ");
  const intents = detectIntents(t);
  const brands = detectBrands({ text: t, limit: 2 });

  let score = 0;
  const flags = new Set<string>();
  for (const intent of intents) {
    score += INTENT_SCORE[intent] ?? 0;
    for (const flag of INTENT_TO_FLAGS[intent] ?? []) flags.add(flag);
  }

  if (/https?:\/\//.test(t)) score += 1;
  if (/\b(bit\.ly|tinyurl|t\.co|goo\.gl|rb\.gy|cutt\.ly|is\.gd)\b/.test(t)) {
    score += 1;
    flags.add("SHORTENED URL");
  }
  if (/^dear (customer|client|user)|\b^lods\b|^good day/.test(t)) flags.add("GENERIC GREETING");
  if (/\b(suspend|deactivat|block|lock)\w*/.test(t)) flags.add("URGENCY");
  if (brands.length > 0) flags.add("UNUSUAL SENDER");

  if (score >= 7) {
    const strongest = intents.find((i) => i !== "BRAND_IMPERSONATION") || "BRAND_IMPERSONATION";
    const brandName = brands[0]?.key || "";
    return {
      verdict: "HIGH_RISK",
      riskScore: Math.min(10, score),
      scamType: INTENT_TO_TYPE[strongest] || "Scam",
      redFlags: Array.from(flags).slice(0, 6),
      analysis: `This message shows strong signs of a ${brandName ? `${brandName} ` : ""}${INTENT_TO_TYPE[strongest] || "scam"}. Do not click links, share codes, or send money.`,
      educationalTip: "Contact the official hotline to verify. Never share OTPs or MPINs - real companies do not ask for them.",
      matchedBrands: brands,
      intents,
    };
  }

  if (score >= 3) {
    const strongest = intents.find((i) => i !== "BRAND_IMPERSONATION") || "BRAND_IMPERSONATION";
    const brandName = brands[0]?.key || "";
    return {
      verdict: "SUSPICIOUS",
      riskScore: Math.min(10, score),
      scamType: INTENT_TO_TYPE[strongest] || "Suspicious",
      redFlags: Array.from(flags).slice(0, 5),
      analysis: `This message has signs of a possible ${brandName ? `${brandName} ` : ""}scam. Verify with the official channel before taking any action.`,
      educationalTip: "Confirm the sender through official channels before responding or clicking anything.",
      matchedBrands: brands,
      intents,
    };
  }

  return null;
};

// src/training/urlGrade.ts - deterministic on-device URL grader for the
// Aghoy classifier. Pure, offline, testable. Grades a link found in a message
// as LEGIT_LINK / AMBIGUOUS_LINK / SUSPICIOUS_LINK using lexical features only
// (no network, no WHOIS, no DNS - a 2GB phone must not depend on those).
//
// Feature basis: the phishing-URL literature (URLNet arXiv:1802.03162,
// Hannousse & Yahiouche EAAI 2021 arXiv:2010.12847, PhishStorm IEEE TNSM 2014)
// plus PH-specific brand-imposter detection. The strongest two predictors in
// the literature (domain age, web traffic) are NETWORK features and are
// deliberately absent - the grader returns "cannot verify" rather than a false
// "safe".
//
// The grader's output is a THIRD OPINION, consistent with the model: it can
// raise suspicion but must never override a message-level verdict, and an
// allowlist hit only LOWERS risk. It never classifies URL shorteners (both
// legit and scam use them).

export type LinkGrade = "LEGIT_LINK" | "AMBIGUOUS_LINK" | "SUSPICIOUS_LINK";

export interface LinkGradeResult {
  grade: LinkGrade;
  score: number; // higher = more suspicious; 0..100
  reasons: string[];
  verifiedOfficialDomain: boolean; // hostname matches a curated PH allowlist
  isShortener: boolean;
}

// Curated PH official domains (registrable-level). Source: the verified
// supportDatabase source domains + PH institutional brands. These are just
// domain names - no copyright issue. Matching is on the registrable domain so
// help.shopee.ph and secure.gcash.com both hit, but shopee.ph.evil.com does not.
const PH_OFFICIAL_DOMAINS = new Set([
  "gcash.com", "maya.ph", "bdo.com.ph", "bpi.com.ph", "metrobank.com.ph",
  "unionbankph.com", "rcbc.com", "chinabank.ph", "securitybank.com",
  "eastwestbanker.com", "bankcom.com.ph", "veteransbank.com.ph", "aub.com.ph",
  "pbcom.com.ph", "gotyme.com.ph", "seabank.ph", "cimbbank.com.ph", "landbank.com",
  "pnb.com.ph", "shopee.ph", "lazada.com.ph", "globe.com.ph", "smart.com.ph",
  "dito.ph", "jtexpress.ph", "lbcexpress.com", "phlpost.gov.ph", "nbi.gov.ph",
  "acg.pnp.gov.ph", "cicc.gov.ph", "bir.gov.ph", "dti.gov.ph", "sss.gov.ph",
  "gsis.gov.ph", "pagibigfund.gov.ph",
]);

// Cheap TLDs that dominate scam registrations (registry-abuse-heavy). Weak
// evidence only: allowlist overrides.
const SUSPICIOUS_TLDS = new Set([
  "top", "xyz", "icu", "cc", "click", "link", "buzz", "tk", "ml", "ga",
  "cf", "gq", "zip", "mov", "rest", "sbs", "lol", "mom", "uno", "sale",
  "stream", "download", "racing", "loan",
]);

// Free-hosting / dynamic-DNS / abuse-friendly domains. Escalate-to-verify,
// never decisive alone.
const FREE_HOSTING = new Set([
  "blogspot.com", "wordpress.com", "weebly.com", "wix.com", "github.io",
  "web.app", "firebaseapp.com", "repl.co", "duckdns.org", "nip.io",
  "crabdance.com", "pages.dev", "netlify.app", "vercel.app", "000webhostapp.com",
  "wixsite.com", "yolasite.com", "tripod.com", "angelfire.com", "freehostia.com",
]);

// URL shorteners / redirectors - AMBIGUOUS by design (brands use them too).
export const SHORTENERS = new Set([
  "bit.ly", "tinyurl.com", "t.co", "goo.gl", "rb.gy", "cutt.ly", "is.gd",
  "tiny.cc", "lnk.to", "ow.ly", "buff.ly", "shorturl.at", "t.ly", "s.id",
]);

const PH_BRAND_NAMES = [
  "gcash", "maya", "paymaya", "bdo", "bpi", "metrobank", "unionbank", "rcbc",
  "eastwest", "chinabank", "securitybank", "pnb", "landbank", "gotyme",
  "seabank", "cimb", "psbank", "shopee", "lazada", "globe", "smart", "sun",
  "dito", "pldt", "jrs", "lbc", "lalamove", "grab", "philpost",
];

const URL_RE = /https?:\/\/[^\s<>"']+/g;

interface ParsedUrl {
  raw: string;
  hostname: string; // lowercase, no port
  registrableDomain: string; // last two labels (best effort)
  tld: string;
  hasScheme: boolean;
}

const parseUrl = (raw: string): ParsedUrl | null => {
  const m = raw.match(/^https?:\/\/([^/?#\s]+)/i);
  if (!m) return null;
  let host = m[1].toLowerCase();
  if (host.includes("@")) host = host.slice(host.lastIndexOf("@") + 1); // userinfo trick
  host = host.replace(/:\d+$/, ""); // strip port
  const labels = host.split(".").filter(Boolean);
  if (labels.length < 2) return null;
  const tld = labels[labels.length - 1];
  const registrableDomain = labels.slice(-2).join(".");
  return { raw, hostname: host, registrableDomain, tld, hasScheme: true };
};

// Is the registrable domain (or any parent) in the PH allowlist?
const isOfficialDomain = (hostname: string): boolean => {
  const labels = hostname.split(".");
  for (let i = 1; i < labels.length; i++) {
    const candidate = labels.slice(i).join(".");
    if (PH_OFFICIAL_DOMAINS.has(candidate)) return true;
  }
  return false;
};

// Does a PH brand string appear in the hostname? Returns the matched brand.
const brandInHostname = (hostname: string): string | null => {
  for (const b of PH_BRAND_NAMES) {
    if (hostname.includes(b)) return b;
  }
  return null;
};

export const extractUrls = (text: string): string[] => [...(text.match(URL_RE) || [])];

export const gradeUrl = (rawUrl: string): LinkGradeResult | null => {
  const parsed = parseUrl(rawUrl);
  if (!parsed) return null;

  const reasons: string[] = [];
  let score = 0;
  const isShortener = SHORTENERS.has(parsed.registrableDomain);
  const verifiedOfficialDomain = isOfficialDomain(parsed.hostname);

  // 1. Brand in hostname but not an official domain - the strongest PH signal.
  const brand = brandInHostname(parsed.hostname);
  if (brand && !verifiedOfficialDomain) {
    score += 45;
    reasons.push(`Brand "${brand}" appears in a non-official domain`);
  }

  // 2. IP-as-host.
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(parsed.hostname)) {
    score += 35;
    reasons.push("Host is a raw IP address");
  }

  // 3. @ in the authority (userinfo trick).
  const authority = rawUrl.match(/^https?:\/\/([^/?#\s]+)/i)?.[1] ?? "";
  if (authority.includes("@")) {
    score += 40;
    reasons.push("URL contains an @ redirect trick");
  }

  // 4. Punycode / IDN host (homograph risk).
  if (parsed.hostname.includes("xn--")) {
    score += 30;
    reasons.push("Punycode (internationalized) hostname");
  }

  // 5. Free-hosting / dynamic-DNS domain.
  if (FREE_HOSTING.has(parsed.registrableDomain)) {
    score += 20;
    reasons.push(`Hosted on free/abuse-friendly service (${parsed.registrableDomain})`);
  }

  // 6. Suspicious TLD (weak evidence).
  if (SUSPICIOUS_TLDS.has(parsed.tld)) {
    score += 12;
    reasons.push(`Suspicious top-level domain (.${parsed.tld})`);
  }

  // 7. Long hostname / many labels (weak evidence).
  if (parsed.hostname.length > 30) {
    score += 8;
    reasons.push("Unusually long hostname");
  }
  if (parsed.hostname.split(".").length > 4) {
    score += 6;
    reasons.push("Many subdomain labels");
  }

  // 8. Digit density in hostname.
  const digits = (parsed.hostname.match(/\d/g) || []).length;
  if (digits >= 4) {
    score += 8;
    reasons.push("Hostname contains many digits");
  }

  // 9. Official-domain / allowlist: LOWERS risk but never overrides other
  //    message signals (the caller decides escalation).
  if (verifiedOfficialDomain) {
    score = Math.max(0, score - 25);
    reasons.push("Host is a verified official Philippine domain");
  }

  // Shorteners are AMBIGUOUS by design: never graded either way.
  if (isShortener) {
    return {
      grade: "AMBIGUOUS_LINK",
      score,
      reasons: ["URL shortener - destination cannot be verified offline"],
      verifiedOfficialDomain,
      isShortener: true,
    };
  }

  const grade: LinkGrade =
    score >= 30 ? "SUSPICIOUS_LINK" : score >= 10 ? "AMBIGUOUS_LINK" : "LEGIT_LINK";
  return { grade, score, reasons, verifiedOfficialDomain, isShortener };
};

// Grade every URL in a message and return the worst overall signal (used by
// the classifier fusion). Never returns null.
export const gradeMessageLinks = (text: string): { worst: LinkGradeResult; urlCount: number } => {
  const urls = extractUrls(text);
  if (urls.length === 0) {
    return {
      worst: { grade: "AMBIGUOUS_LINK", score: 0, reasons: [], verifiedOfficialDomain: false, isShortener: false },
      urlCount: 0,
    };
  }
  let worst: LinkGradeResult | null = null;
  for (const u of urls) {
    const g = gradeUrl(u);
    if (!g) continue;
    if (!worst || g.score > worst.score) worst = g;
  }
  return { worst: worst ?? { grade: "AMBIGUOUS_LINK", score: 0, reasons: [], verifiedOfficialDomain: false, isShortener: false }, urlCount: urls.length };
};

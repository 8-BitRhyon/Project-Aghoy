// Runs on sanitized content only (Rejects output), so it never leaks PII.

export type IndicatorType = "domain" | "url" | "phone" | "email" | "keyword";

export interface Indicator {
  type: IndicatorType;
  value: string;
}

// The Rejects layer redacts emails/phones/cards, so URLs are the primary feed signal.
const URL_RE = /\bhttps?:\/\/[^\s<>"']+/gi;

// Bare domains (no scheme). Requires at least one dot and a real TLD so
// localhost / IPs / file names are not treated as domains.
const DOMAIN_RE = /\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}\b/gi;

const normalizeDomain = (raw: string): string => {
  return raw
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[\/?#].*$/, "")
    .trim();
};

const extractUrls = (text: string): Indicator[] => {
  const seen = new Set<string>();
  const out: Indicator[] = [];
  for (const match of text.match(URL_RE) || []) {
    const value = match.toLowerCase().trim();
    if (value.length > 500 || seen.has(value)) continue;
    seen.add(value);
    out.push({ type: "url", value });
  }
  return out;
};

const extractDomains = (text: string): Indicator[] => {
  const seen = new Set<string>();
  const out: Indicator[] = [];
  for (const match of text.match(DOMAIN_RE) || []) {
    const value = normalizeDomain(match);
    // Skip IP-looking hosts, raw localhost, and file extensions standing alone
    // (screenshot.png, report.pdf must not pollute the blocklist).
    if (!value || value.length < 4 || value.length > 253) continue;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(value)) continue;
    if (value === "localhost" || value.endsWith(".local")) continue;
    // A well-known file extension standing alone is a filename, not a
    // registrable domain worth blocking.
    if (/\.(png|jpe?g|gif|svg|webp|bmp|pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz|mp[34]|wav|mov|avi|webm|txt|csv|json|xml|html?|js|css|ts|tsx|py|java|cpp|c|h|go|rs|rb|php|sql|lock|yaml|yml|md|sh|exe|msi|dmg|apk|ipa|wasm|map)$/i.test(value)) continue;
    if (seen.has(value)) continue;
    seen.add(value);
    out.push({ type: "domain", value });
  }
  return out;
};

// PH mobiles are redacted by Rejects before this runs, but a keyword heuristic
// still matters for the feed (e.g. scam campaign names).
const SCAM_KEYWORD_RE = /\b(gcash|bdo|landbank|dti|pnpp|nbi|ccb|cicc|philpost|lazada|shopee|tiktok|netflix|globe|smart|sun|maybank)\b/gi;

const extractKeywords = (text: string): Indicator[] => {
  const seen = new Set<string>();
  const out: Indicator[] = [];
  for (const match of text.match(SCAM_KEYWORD_RE) || []) {
    const value = match.toLowerCase();
    if (seen.has(value)) continue;
    seen.add(value);
    out.push({ type: "keyword", value });
  }
  return out;
};

// Cap indicators so one report cannot fan out into unbounded sequential D1 INSERTs (each indicator is one awaited write).
const MAX_INDICATORS = 20;

export const extractIndicators = (content: string): Indicator[] => {
  if (!content) return [];
  const all = [...extractUrls(content), ...extractDomains(content), ...extractKeywords(content)];
  return all.slice(0, MAX_INDICATORS);
};

export const indicatorFingerprint = (indicator: Indicator): string => {
  return `${indicator.type}:${indicator.value}`;
};

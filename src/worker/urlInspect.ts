// Server-side inspection of suspicious URLs in scam messages. Every request is
// SSRF-guarded: protocol allowlist, host blocklist, DNS private-IP rejection
// (DNS-rebinding guard), redirect re-validation on every hop, size + timeouts.
// Fetched content is never persisted or sent to third parties.

export interface InspectResult {
  url: string;
  finalUrl: string;
  finalDomain: string;
  httpStatus: number;
  contentType: string;
  title: string;
  truncated: boolean;
  redirects: string[];
}

const MAX_RESPONSE_BYTES = 512 * 1024;
const MAX_REDIRECTS = 5;
const INSPECT_TIMEOUT_MS = 8000;

const PRIVATE_IP_RE =
  /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|0\.0\.0\.0|::1$|fe80:|fc00:|fd)/;

// Hostnames that can never be inspected: internal/reserved/machine-specific.
const BLOCKED_HOST_RE =
  /(^|\.)(localhost|local|internal|home\.arpa|lan|localdomain|corp|intranet)(\.|$)|^127\.|metadata\.google\.internal$|^169\.254\.169\.254$|^100\.100\.100\.200$/i;

export const isPrivateIp = (ip: string): boolean => {
  const normalized = ip.trim().replace(/^\[|\]$/g, "").toLowerCase();
  return PRIVATE_IP_RE.test(normalized);
};

// Resolve a hostname via Cloudflare's DoH endpoint; returns [] on failure (an unresolvable host is not inspectable).
export const resolveHostIps = async (hostname: string): Promise<string[]> => {
  try {
    const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(hostname)}&type=A`;
    const res = await fetch(url, {
      headers: { Accept: "application/dns-json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { Answer?: Array<{ type: number; data: string }> };
    // type 1 = A, 5 = CNAME (skip), 28 = AAAA (use separate query)
    return (data.Answer || []).filter((a) => a.type === 1).map((a) => a.data);
  } catch {
    return [];
  }
};

export const validateInspectUrl = async (rawUrl: string): Promise<URL> => {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    throw new Error("Invalid URL");
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Only http/https URLs can be inspected");
  }
  if (parsed.username || parsed.password) {
    throw new Error("URLs with credentials are not allowed");
  }
  const host = parsed.hostname.toLowerCase();
  if (BLOCKED_HOST_RE.test(host)) {
    throw new Error("Host is blocked");
  }
  // Hostname must resolve to at least one public IP; reject if ANY resolved
  // address is private (DNS-rebinding defense-in-depth).
  const ips = await resolveHostIps(host);
  if (ips.length === 0) {
    throw new Error("Host could not be resolved");
  }
  if (ips.some(isPrivateIp)) {
    throw new Error("Host resolves to a private address");
  }
  return parsed;
};

export const extractTitle = (html: string): string => {
  const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 200);
};

const readBounded = async (res: Response): Promise<{ text: string; truncated: boolean }> => {
  const reader = res.body?.getReader();
  if (!reader) return { text: "", truncated: false };
  const chunks: string[] = [];
  let total = 0;
  let truncated = false;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_RESPONSE_BYTES) {
        truncated = true;
        const keep = MAX_RESPONSE_BYTES - (total - value.byteLength);
        if (keep > 0) chunks.push(decoder.decode(value.slice(0, keep), { stream: true }));
        break;
      }
      chunks.push(decoder.decode(value, { stream: true }));
    }
  } finally {
    try { await reader.cancel(); } catch { /* ignore */ }
  }
  return { text: chunks.join(""), truncated };
};

// SSRF-validates the initial request AND every redirect hop; throws on blocked hops.
export const inspectUrl = async (rawUrl: string): Promise<InspectResult> => {
  const start = await validateInspectUrl(rawUrl);

  let currentUrl = start;
  const redirects: string[] = [];
  let response: Response | null = null;
  let finalUrl = start;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), INSPECT_TIMEOUT_MS);
    try {
      response = await fetch(currentUrl.toString(), {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "User-Agent": "ProjectAghoyInspector/1.0 (+https://project-aghoy.pages.dev)",
          Accept: "text/html,application/xhtml+xml",
        },
      });
    } finally {
      clearTimeout(timer);
    }

    finalUrl = currentUrl;

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) break;
      const next = new URL(location, currentUrl);
      // Re-validate every hop (a redirect can point to an internal address).
      try {
        await validateInspectUrl(next.toString());
      } catch {
        throw new Error("Blocked redirect");
      }
      redirects.push(next.toString());
      currentUrl = next;
      continue;
    }
    break;
  }

  if (!response) throw new Error("No response");

  const contentType = response.headers.get("content-type") || "";
  const { text, truncated } = await readBounded(response);
  const title = /^text\/html/i.test(contentType) ? extractTitle(text) : "";

  return {
    url: start.toString(),
    finalUrl: finalUrl.toString(),
    finalDomain: finalUrl.hostname.toLowerCase(),
    httpStatus: response.status,
    contentType,
    title,
    truncated,
    redirects,
  };
};

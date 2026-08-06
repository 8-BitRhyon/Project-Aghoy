import { WORKER_ORIGIN } from "../config";

const FETCH_TIMEOUT_MS = 5000;

export interface ReportPayload {
  verdict: string;
  riskScore: number;
  scamType: string;
  redFlags: string[];
  content: string; // Rejects-layer output only
  provider?: string;
  source?: string;
  phoneHashes?: string[];
}

export interface IndicatorStatus {
  found: boolean;
  status?: string;
  times_reported?: number;
}

const fetchWithTimeout = async (url: string, init?: RequestInit, externalSignal?: AbortSignal): Promise<Response> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const onAbort = () => controller.abort();
  externalSignal?.addEventListener("abort", onAbort, { once: true });
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
    externalSignal?.removeEventListener("abort", onAbort);
  }
};

export const postReport = async (payload: ReportPayload): Promise<void> => {
  try {
    await fetchWithTimeout(`${WORKER_ORIGIN}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: payload.source || "web" }),
    });
  } catch {
    // Best-effort reporting; never block the scan on storage failure.
  }
};

export const lookupIndicator = async (type: string, value: string): Promise<IndicatorStatus | null> => {
  try {
    const res = await fetchWithTimeout(`${WORKER_ORIGIN}/indicators?type=${encodeURIComponent(type)}&value=${encodeURIComponent(value)}`);
    if (res.status === 404) return { found: false };
    if (!res.ok) return null;
    const data = await res.json();
    return data as IndicatorStatus;
  } catch {
    return null;
  }
};

export interface InspectResult {
  ok: boolean;
  error?: string;
  url?: string;
  finalUrl?: string;
  finalDomain?: string;
  httpStatus?: number;
  contentType?: string;
  title?: string;
  truncated?: boolean;
  redirects?: string[];
}

// Server-side, SSRF-guarded inspection of a suspicious URL. Returns detection
// signals only (title, final domain, status, redirects); never persists content.
// Client-side validation is defense-in-depth only (the server is authoritative).
export const inspectUrl = async (target: string, signal?: AbortSignal): Promise<InspectResult | null> => {
  let parsed: URL;
  try {
    parsed = new URL(target.trim());
  } catch {
    return { ok: false, error: "Invalid URL" };
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return { ok: false, error: "Only http/https URLs can be inspected" };
  }
  try {
    const res = await fetchWithTimeout(
      `${WORKER_ORIGIN}/inspect`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: target }),
      },
      signal
    );
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as InspectResult | null;
      return data || { ok: false, error: "Inspection failed" };
    }
    return (await res.json()) as InspectResult;
  } catch {
    return null;
  }
};

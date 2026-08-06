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

const fetchWithTimeout = async (url: string, init?: RequestInit): Promise<Response> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
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

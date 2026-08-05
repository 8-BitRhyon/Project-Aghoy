// === STORAGE CLIENT (browser) ===
// Fire-and-forget reporting to the Worker storage layer + indicator lookups.
// Only Rejects-layer output is ever sent. The Worker is CORS-allowlisted for
// the Pages origin (see ALLOWED_ORIGINS in src/worker/dojo.ts).

const WORKER_ORIGIN = "https://project-aghoy-dojo.rhyonfs.workers.dev";

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

export const postReport = async (payload: ReportPayload): Promise<void> => {
  try {
    await fetch(`${WORKER_ORIGIN}/reports`, {
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
    const res = await fetch(`${WORKER_ORIGIN}/indicators?type=${encodeURIComponent(type)}&value=${encodeURIComponent(value)}`);
    if (res.status === 404) return { found: false };
    if (!res.ok) return null;
    const data = await res.json();
    return data as IndicatorStatus;
  } catch {
    return null;
  }
};

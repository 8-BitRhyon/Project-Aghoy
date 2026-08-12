// Project Aghoy extension - API client.
// Mirrors the web client (src/api/storageClient.ts) but stores the consent
// token in chrome.storage.local instead of localStorage, and uses chrome.tabs
// for active-page context. Only talks to the project Worker origin (the sole
// host_permission), so it can never read arbitrary websites.

const WORKER_ORIGIN = "https://project-aghoy-dojo.rhyonfs.workers.dev";
const CONSENT_STORAGE_KEY = "aghoy_consent_token";
const CONSENT_VERSION_KEY = "aghoy_consent_version";

const storageGet = (key) =>
  new Promise((resolve) => chrome.storage.local.get(key, (r) => resolve(r[key])));

const storageSet = (obj) => new Promise((resolve) => chrome.storage.local.set(obj, resolve));

const storageRemove = (keys) => new Promise((resolve) => chrome.storage.local.remove(keys, resolve));

const fetchTimeout = async (url, init, ms = 8000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
};

export const getConsentToken = async () => {
  const token = await storageGet(CONSENT_STORAGE_KEY);
  return token || null;
};

export const clearConsentToken = async () => {
  await storageRemove([CONSENT_STORAGE_KEY, CONSENT_VERSION_KEY]);
};

// Mint a consent attestation from the Worker (server-signed). The extension
// only talks to the Worker, so consent is enforced exactly as on the web.
export const mintConsentToken = async () => {
  try {
    const res = await fetchTimeout(`${WORKER_ORIGIN}/consent/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.token) return null;
    await storageSet({
      [CONSENT_STORAGE_KEY]: data.token,
      [CONSENT_VERSION_KEY]: data.version || "",
    });
    return { token: data.token, version: data.version || "" };
  } catch {
    return null;
  }
};

const authHeaders = async () => {
  const token = await getConsentToken();
  return { "Content-Type": "application/json", "X-Consent-Token": token || "" };
};

// POST /reports - a sanitized scam report. Content is Rejects-redacted
// server-side before it is persisted; phone hashes only, never raw numbers.
export const postReport = async (payload) => {
  const res = await fetchTimeout(
    `${WORKER_ORIGIN}/reports`,
    {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({ ...payload, source: "extension" }),
    },
    10000
  );
  if (!res.ok) return { ok: false };
  const data = await res.json();
  // Honest result: a rejected report returns ok:true but rejected:true, so the
  // caller can tell the user their report was not counted (community integrity).
  return { ok: true, rejected: !!data.rejected, id: data.id ?? null };
};

// POST /inspect - SSRF-guarded server-side check of a suspicious URL.
export const inspectUrl = async (url) => {
  const res = await fetchTimeout(
    `${WORKER_ORIGIN}/inspect`,
    {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({ url }),
    },
    12000
  );
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return data || { ok: false, error: `Inspection failed (${res.status})` };
  }
  return res.json();
};

// GET /feed/reputation - reputation signal for a domain (public read, no token).
export const domainReputation = async (domain) => {
  const res = await fetchTimeout(
    `${WORKER_ORIGIN}/feed/reputation?domain=${encodeURIComponent(domain)}`,
    { method: "GET" },
    8000
  );
  if (!res.ok) return null;
  return res.json();
};

// Full analyze via the Worker's /analyze route (same pipeline as the web app,
// consent-gated, Rejects-redacted). One host_permission only.
export const analyzeContent = async (content) => {
  const res = await fetchTimeout(
    `${WORKER_ORIGIN}/analyze`,
    {
      method: "POST",
      headers: await authHeaders(),
      body: JSON.stringify({
        messages: [{ role: "user", content }],
        jsonMode: true,
      }),
    },
    25000
  );
  if (res.status === 403) {
    throw new Error("Consent required: re-accept the privacy protocols");
  }
  if (res.status === 503) {
    throw new Error("Scanner unavailable (AI providers not configured)");
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Analyze failed (${res.status})`);
  }
  const data = await res.json();
  // The model can fence its JSON in markdown; the web client cleans it before
  // parsing (aiService cleanJson). Mirror that here or the popup breaks on the
  // same response that works on web.
  const cleaned = (data.text || "")
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  const firstOpen = cleaned.indexOf("{");
  const lastClose = cleaned.lastIndexOf("}");
  const target = firstOpen !== -1 && lastClose !== -1 ? cleaned.slice(firstOpen, lastClose + 1) : cleaned;
  return JSON.parse(target);
};

// Project Aghoy popup logic: consent gate -> paste text/link -> verdict.
import { getConsentToken, clearConsentToken, analyzeContent, domainReputation, postReport } from "./api.js";

const consentEl = document.getElementById("consent");
const acceptBtn = document.getElementById("accept");
const declineBtn = document.getElementById("decline");
const inputEl = document.getElementById("input");
const checkBtn = document.getElementById("check");
const resultEl = document.getElementById("result");
const statusEl = document.getElementById("status");

const CONSENT_VERSION_KEY = "aghoy_consent_version";

const storageGet = (key) =>
  new Promise((resolve) => chrome.storage.local.get(key, (r) => resolve(r[key])));

const setResult = (title, detail, kind) => {
  resultEl.hidden = false;
  resultEl.className = `result ${kind}`;
  resultEl.innerHTML = `<h3>${title}</h3><p>${detail}</p>`;
};

const reportVerdict = async (text) => {
  await postReport({
    verdict: "SUSPICIOUS",
    riskScore: 4,
    scamType: "Reported by extension user",
    redFlags: [],
    content: `Message reported from extension: ${text.slice(0, 4000)}`,
    provider: "extension",
  }).catch(() => null);
};

const check = async () => {
  const raw = inputEl.value.trim();
  if (raw.length < 5) return;
  checkBtn.disabled = true;
  checkBtn.textContent = "Checking...";
  statusEl.textContent = "Checking with Project Aghoy...";
  resultEl.hidden = true;
  try {
    const result = await analyzeContent(raw);
    // Reputation for any domain mentioned.
    const domainMatch = result.analysis ? result.analysis.match(/https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/i) : null;
    const rep = domainMatch ? await domainReputation(domainMatch[1].replace(/^www\./, "")) : null;
    const repLine = rep && rep.score >= 4 ? `<br/>Community: ${rep.label} (${rep.score}/10, ${rep.evidence?.n_reports || 0} reports)` : "";
    setResult(
      `Verdict: ${result.verdict} (${result.riskScore}/10)`,
      `${result.analysis || ""}${repLine}<br/>${result.educationalTip || ""}`,
      result.verdict === "HIGH_RISK" ? "high" : result.verdict === "SUSPICIOUS" ? "suspicious" : "safe"
    );
    statusEl.textContent = "Scam or not? Check another message, or right-click a link to report it.";
    // Optional: user can report it.
  } catch (err) {
    setResult("Could not check", String(err?.message || "Please try again."), "suspicious");
    statusEl.textContent = "Checking failed. Your connection or the service may be down.";
  } finally {
    checkBtn.disabled = false;
    checkBtn.textContent = "Check";
  }
};

// Consent gate: if no stored token, require acceptance first.
const init = async () => {
  const token = await getConsentToken();
  if (token) {
    consentEl.hidden = true;
    checkBtn.disabled = false;
    return;
  }
  consentEl.hidden = false;
  checkBtn.disabled = true;
};

acceptBtn.addEventListener("click", async () => {
  chrome.runtime.sendMessage({ type: "AGHOY_CONSENT" }, async (res) => {
    if (res?.ok) {
      consentEl.hidden = true;
      checkBtn.disabled = false;
      statusEl.textContent = "Consent recorded. Paste a message and check, or right-click a link.";
    } else {
      statusEl.textContent = "Could not record consent. Please check your connection and try again.";
    }
  });
});

declineBtn.addEventListener("click", async () => {
  await clearConsentToken();
  consentEl.hidden = true;
  statusEl.textContent = "You declined. Checking is disabled without consent.";
});

inputEl.addEventListener("input", () => {
  checkBtn.disabled = inputEl.value.trim().length < 5;
});

checkBtn.addEventListener("click", check);

init();

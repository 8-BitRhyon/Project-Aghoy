// Project Aghoy - background service worker.
// Minimal permissions: contextMenus + activeTab only. It never reads arbitrary
// page content; it inspects/reports the link or page URL the user chose.

import { inspectUrl, postReport, getConsentToken, mintConsentToken, domainReputation } from "./api.js";

const ensureConsent = async () => {
  if (await getConsentToken()) return true;
  // Mint requires the user to have accepted the privacy protocols. The popup
  // handles the consent gate; from the context menu we mint directly only if
  // a token already exists. Otherwise open the popup for consent.
  return false;
};

const notify = (title, message) => {
  try {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon128.png",
      title,
      message,
    });
  } catch {
    /* notifications optional */
  }
};

const extractDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

// "Check this link" - server-side SSRF-guarded inspection + reputation.
const handleCheckLink = async (url, tabId) => {
  if (!(await ensureConsent())) {
    notify("Consent required", "Open the Project Aghoy extension and accept the privacy protocols first.");
    return;
  }
  const [inspection, reputation] = await Promise.all([
    inspectUrl(url).catch(() => null),
    domainReputation(extractDomain(url)),
  ]);
  let verdict = "Could not inspect this link (blocked or unreachable).";
  if (inspection && inspection.ok) {
    const domain = inspection.finalDomain || extractDomain(url);
    const repLabel = reputation ? ` | Community: ${reputation.label} (${reputation.score}/10)` : "";
    verdict = `${domain} - HTTP ${inspection.httpStatus}${repLabel}`;
    if (inspection.title) verdict += ` | "${inspection.title.slice(0, 50)}"`;
    if (inspection.redirects && inspection.redirects.length) verdict += ` | ${inspection.redirects.length} redirect(s)`;
  } else if (inspection) {
    verdict = `Blocked: ${inspection.error || "unreachable"}`;
  }
  chrome.tabs.sendMessage(tabId, { type: "AGHOY_VERDICT", verdict });
};

// "Report as scam" - posts a sanitized report into the shared database so the
// next victim sees "reported N times" and the reputation feed updates.
const handleReportLink = async (url, tabId) => {
  if (!(await ensureConsent())) {
    notify("Consent required", "Open the Project Aghoy extension and accept the privacy protocols first.");
    return;
  }
  const report = await postReport({
    verdict: "HIGH_RISK",
    riskScore: 7,
    scamType: "Reported by extension user",
    redFlags: ["UNUSUAL SENDER", "UNOFFICIAL DOMAIN"],
    content: `URL reported from browser: ${url}`,
    provider: "extension",
  });
  chrome.tabs.sendMessage(tabId, {
    type: "AGHOY_REPORTED",
    message: report
      ? `Report recorded. Thank you - this protects other users.`
      : "Report could not be recorded. Please try again.",
  });
};

// Right-click a link, selection, or page.
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "aghoy-check-link",
      title: "Check this link with Project Aghoy",
      contexts: ["link"],
    });
    chrome.contextMenus.create({
      id: "aghoy-report-link",
      title: "Report this link as a scam",
      contexts: ["link"],
    });
    chrome.contextMenus.create({
      id: "aghoy-check-page",
      title: "Check this page with Project Aghoy",
      contexts: ["page"],
    });
    chrome.contextMenus.create({
      id: "aghoy-report-page",
      title: "Report this page as a scam",
      contexts: ["page"],
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const url = info.linkUrl || info.pageUrl;
  if (!url || !tab || tab.id === undefined) return;
  if (info.menuItemId === "aghoy-check-link" || info.menuItemId === "aghoy-check-page") {
    handleCheckLink(url, tab.id);
  } else if (info.menuItemId === "aghoy-report-link" || info.menuItemId === "aghoy-report-page") {
    handleReportLink(url, tab.id);
  }
});

// The popup can also request a fresh consent token.
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "AGHOY_CONSENT") {
    mintConsentToken()
      .then((r) => sendResponse({ ok: !!r, version: r?.version }))
      .catch(() => sendResponse({ ok: false }));
    return true;
  }
});

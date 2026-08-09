// utils/reportRouting.ts - one-tap evidence packages for official PH channels.
//
// When a scam is flagged, the user should not have to re-type the details into
// 1326, the eGov app, and a telco Stop Spam form. This builds a formatted,
// copy-ready evidence package (Rejects-sanitized only - never raw PII) for
// each channel, plus a share-card text that works everywhere.
//
// Pure + testable: no browser APIs, just string formatting.

export interface EvidenceInput {
  sender: string; // sender ID/number or "Unknown"
  message: string; // Rejects-sanitized message text
  scamType: string;
  redFlags: string[];
  riskScore: number;
  timestamp: string; // ISO string
}

const fmtTimestamp = (iso: string): string => {
  const d = new Date(iso);
  return isNaN(d.getTime()) ? iso : d.toLocaleString("en-PH", { timeZone: "Asia/Manila" });
};

// CICC 1326 expects a concise text report: sender, message, when.
export const cicc1326Text = (e: EvidenceInput): string =>
  [
    "REPORT TO CICC HOTLINE 1326",
    `Sender: ${e.sender || "Unknown"}`,
    `When: ${fmtTimestamp(e.timestamp)}`,
    `Message: ${e.message}`,
    "",
    "Contact 1326 (toll-free) or report via the eGov PH app: More > Report > Scam > Text Scam.",
    "Keep the original message and any screenshots for PNP-ACG.",
  ].join("\n");

// Telco Stop Spam: Globe users forward the original SMS to 7726; Smart users
// forward to 2920. This text works as the message body for the app/web forms.
export const telcoStopSpamText = (e: EvidenceInput): string =>
  [
    `SPAM REPORT (${e.scamType})`,
    `From: ${e.sender || "Unknown"} at ${fmtTimestamp(e.timestamp)}`,
    e.message,
    "",
    "Globe/TM: forward the original SMS to 7726.",
    "Smart/Sun/TNT: forward the original SMS to 2920.",
  ].join("\n");

// eGov app eReport accepts up to 5 screenshots; this is the description text
// that accompanies them.
export const eGovAppText = (e: EvidenceInput): string =>
  [
    `Scam report - ${e.scamType} (risk ${e.riskScore}/10)`,
    `Sender: ${e.sender || "Unknown"} (${fmtTimestamp(e.timestamp)})`,
    e.redFlags.length ? `Flags: ${e.redFlags.join(", ")}` : "",
    "",
    `Message: ${e.message}`,
  ]
    .filter((line) => line !== "")
    .join("\n");

// One generic share-card text for messaging apps / email / clipboard.
export const shareCardText = (e: EvidenceInput): string =>
  [
    `🚨 SCAM ALERT from Project Aghoy (risk ${e.riskScore}/10)`,
    `Type: ${e.scamType}`,
    `Sender: ${e.sender || "Unknown"}`,
    "",
    e.message,
    "",
    "Report to: CICC 1326 | eGov PH app | Globe 7726 / Smart 2920",
    "Verify with the real bank/wallet before doing anything.",
  ].join("\n");

// The complete routing bundle: every channel's text, keyed by channel name.
export const buildReportBundle = (e: EvidenceInput): Record<string, string> => ({
  cicc1326: cicc1326Text(e),
  telco: telcoStopSpamText(e),
  eGov: eGovAppText(e),
  shareCard: shareCardText(e),
});

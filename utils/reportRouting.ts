// One-tap evidence packages (Rejects-sanitized) for PNP-ACG, CICC 1326, eGov, telco Stop Spam.

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

// Telco Stop Spam: Globe forwards to 7726, Smart to 2920.
export const telcoStopSpamText = (e: EvidenceInput): string =>
  [
    `SPAM REPORT (${e.scamType})`,
    `From: ${e.sender || "Unknown"} at ${fmtTimestamp(e.timestamp)}`,
    e.message,
    "",
    "Globe/TM: forward the original SMS to 7726.",
    "Smart/Sun/TNT: forward the original SMS to 2920.",
  ].join("\n");

// eGov eReport description text (accompanies up to 5 screenshots).
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

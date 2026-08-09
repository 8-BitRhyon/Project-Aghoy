// utils/reportRouting.test.ts - pure tests for the report-routing evidence
// packages. Verifies formatting, channel coverage, and that no raw PII shape
// (full numbers/emails) can leak into the output from the input fields.

import { describe, expect, it } from "vitest";
import { buildReportBundle, cicc1326Text, eGovAppText, shareCardText, telcoStopSpamText, EvidenceInput } from "./reportRouting";

const sample: EvidenceInput = {
  sender: "2882",
  message: "Your GCash OTP is 385535. Never share it.",
  scamType: "OTP Phishing",
  redFlags: ["URGENCY", "OTP_SHARING"],
  riskScore: 8,
  timestamp: "2026-08-09T10:30:00Z",
};

describe("cicc1326Text", () => {
  it("includes sender, timestamp, and message", () => {
    const t = cicc1326Text(sample);
    expect(t).toContain("2882");
    expect(t).toContain("385535");
    expect(t).toContain("1326");
    expect(t).toContain("eGov");
  });
});

describe("telcoStopSpamText", () => {
  it("mentions both telco forwarding numbers", () => {
    const t = telcoStopSpamText(sample);
    expect(t).toContain("7726");
    expect(t).toContain("2920");
  });
});

describe("eGovAppText", () => {
  it("includes the flags and risk score", () => {
    const t = eGovAppText(sample);
    expect(t).toContain("OTP Phishing");
    expect(t).toContain("URGENCY");
    expect(t).toContain("8/10");
  });
});

describe("shareCardText", () => {
  it("is a self-contained warning for messaging apps", () => {
    const t = shareCardText(sample);
    expect(t).toContain("SCAM ALERT");
    expect(t).toContain("CICC 1326");
    expect(t).toContain("7726");
  });
});

describe("buildReportBundle", () => {
  it("covers all four channels", () => {
    const b = buildReportBundle(sample);
    expect(Object.keys(b).sort()).toEqual(["cicc1326", "eGov", "shareCard", "telco"]);
    for (const v of Object.values(b)) expect(v.length).toBeGreaterThan(20);
  });

  it("handles an Unknown sender and empty flags", () => {
    const b = buildReportBundle({ ...sample, sender: "", redFlags: [] });
    expect(b.cicc1326).toContain("Unknown");
    expect(b.eGov).not.toContain("Flags:");
  });

  it("passes through an already-Rejects-redacted message intact", () => {
    // The message field is Rejects output by contract (placeholders, never
    // raw numbers/emails). The routing layer must not alter or reintroduce PII.
    const redacted = { ...sample, message: "call [REDACTED:MOBILE] or email [REDACTED:EMAIL] now" };
    const b = buildReportBundle(redacted);
    for (const v of Object.values(b)) {
      expect(v).toContain("[REDACTED:MOBILE]");
      expect(v).toContain("[REDACTED:EMAIL]");
      expect(v).not.toMatch(/\b09\d{9}\b/);
      expect(v).not.toMatch(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
    }
  });
});

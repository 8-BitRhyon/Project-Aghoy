// src/brands/senderAllowlist.test.ts - pure tests for the trusted-sender layer.

import { describe, expect, it } from "vitest";
import { checkSender, normalizeSender, senderBrand } from "./senderAllowlist";

describe("normalizeSender", () => {
  it("uppercases and trims", () => {
    expect(normalizeSender("  gcash ")).toBe("GCASH");
    expect(normalizeSender("BDO")).toBe("BDO");
    expect(normalizeSender(null)).toBe("");
    expect(normalizeSender(undefined)).toBe("");
  });

  it("strips a leading +", () => {
    expect(normalizeSender("+63917...")).toBe("63917...");
  });
});

describe("checkSender - official shortcodes", () => {
  it("trusts the GCash shortcode 2882", () => {
    const c = checkSender("2882");
    expect(c?.trusted).toBe(true);
    expect(c?.brandKey).toBe("gcash");
    expect(c?.isShortcode).toBe(true);
  });

  it("trusts the Maya shortcode 2343", () => {
    const c = checkSender("2343");
    expect(c?.trusted).toBe(true);
    expect(c?.brandKey).toBe("maya");
  });

  it("does NOT trust an unknown shortcode", () => {
    const c = checkSender("12345");
    expect(c?.trusted).toBe(false);
  });
});

describe("checkSender - official alphanumeric sender IDs", () => {
  it("trusts GCASH", () => {
    const c = checkSender("GCASH");
    expect(c?.trusted).toBe(true);
    expect(c?.brandKey).toBe("gcash");
    expect(c?.isShortcode).toBe(false);
  });

  it("trusts case-insensitively (bdo input)", () => {
    expect(checkSender("bdo")?.trusted).toBe(true);
    expect(checkSender("BDO")?.trusted).toBe(true);
  });

  it("trusts BPI", () => {
    expect(checkSender("BPIOFFICIAL")?.brandKey).toBe("bpi");
  });

  it("does NOT trust a lookalike", () => {
    expect(checkSender("GCASHDEO").trusted).toBe(false);
    expect(checkSender("BDO-ALERTS").trusted).toBe(false);
    expect(checkSender("M-A-Y-A").trusted).toBe(false);
  });
});

describe("senderBrand", () => {
  it("returns the brand for a trusted sender", () => {
    expect(senderBrand("2882")).toBe("gcash");
    expect(senderBrand("SMART")).toBe("smart");
  });
  it("returns null for unknown senders", () => {
    expect(senderBrand("SPAMMER99")).toBeNull();
    expect(senderBrand(null)).toBeNull();
  });
});

describe("lookalike resistance", () => {
  it("does not trust phone-number senders that are not shortcodes", () => {
    // A 10-11 digit mobile number is NOT a shortcode and NOT in the allowlist.
    const c = checkSender("09171234567");
    expect(c?.trusted).toBe(false);
  });
});

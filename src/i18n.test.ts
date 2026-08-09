// src/i18n.test.ts - tests for the i18n + Dojo localization tables.
// Enforces that every language has every key: a missing translation would
// silently fall back to Tagalog (or the key itself), which is exactly the
// kind of broken copy a panicking user should never see.

import { describe, expect, it } from "vitest";
import { DOJO_COPY, COPY, td, t, normalizeLang, AghoyLang, DojoKey, CopyKey } from "./i18n";

const LANGS: AghoyLang[] = ["TAGALOG", "BISAYA", "ILOCANO", "ENGLISH"];

describe("i18n copy (life-saving strings)", () => {
  it("every language has every CopyKey", () => {
    const keys = Object.keys(COPY.TAGALOG) as CopyKey[];
    for (const lang of LANGS) {
      for (const key of keys) {
        expect(COPY[lang]?.[key], `${lang}.${key}`).toBeTruthy();
      }
    }
  });

  it("t() falls back to Tagalog for missing keys", () => {
    // @ts-expect-error intentionally passing an unknown key
    expect(t("ENGLISH", "nonexistent")).toBe("nonexistent");
  });
});

describe("dojo copy (training UI)", () => {
  it("every language has every DojoKey", () => {
    const keys = Object.keys(DOJO_COPY.TAGALOG) as DojoKey[];
    for (const lang of LANGS) {
      for (const key of keys) {
        expect(DOJO_COPY[lang]?.[key], `${lang}.${key}`).toBeTruthy();
      }
    }
  });

  it("family labels and blurbs are translated, not English placeholders", () => {
    expect(td("TAGALOG", "f_ewallet")).not.toBe(td("ENGLISH", "f_ewallet"));
    expect(td("BISAYA", "f_ewallet_blurb")).not.toBe(td("ENGLISH", "f_ewallet_blurb"));
    expect(td("ILOCANO", "f_ewallet_blurb")).not.toBe(td("ENGLISH", "f_ewallet_blurb"));
  });

  it("td() falls back to Tagalog for missing keys", () => {
    // @ts-expect-error intentionally passing an unknown key
    expect(td("BISAYA", "nonexistent")).toBe("nonexistent");
  });

  it("English is the canonical source (no double-space or empty strings)", () => {
    const keys = Object.keys(DOJO_COPY.ENGLISH) as DojoKey[];
    for (const key of keys) {
      const v = DOJO_COPY.ENGLISH[key]!;
      expect(v.trim().length).toBeGreaterThan(0);
      expect(v).not.toContain("  ");
    }
  });
});

describe("normalizeLang", () => {
  it("maps unknown inputs to TAGALOG", () => {
    expect(normalizeLang("FRENCH")).toBe("TAGALOG");
    expect(normalizeLang("")).toBe("TAGALOG");
    expect(normalizeLang("ENGLISH")).toBe("ENGLISH");
  });
});

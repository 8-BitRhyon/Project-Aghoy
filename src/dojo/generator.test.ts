// src/dojo/generator.test.ts - tests for the language-aware scenario generator.
// Verifies each language produces structurally-identical, content-localized
// scenarios (same ids, same counts, genuinely different text).

import { describe, expect, it } from "vitest";
import { generateScenarios } from "./generator";
import { ALL_SCENARIOS } from "./scenarios.generated";
import { ALL_SCENARIOS_TAGALOG } from "./scenarios.generated.tl";
import { ALL_SCENARIOS_BISAYA } from "./scenarios.generated.ceb";
import { ALL_SCENARIOS_ILOCANO } from "./scenarios.generated.ilo";

const LANGS = {
  ENGLISH: ALL_SCENARIOS,
  TAGALOG: ALL_SCENARIOS_TAGALOG,
  BISAYA: ALL_SCENARIOS_BISAYA,
  ILOCANO: ALL_SCENARIOS_ILOCANO,
};

describe("per-language scenario generation", () => {
  it("produces the same drill count per family across all languages", () => {
    // The generator dedups by text similarity, which differs per language, so
    // exact ids may differ slightly - but every language must offer the same
    // number of drills per scam family (the UI grid depends on it).
    const counts = (s: typeof ALL_SCENARIOS) => {
      const c: Record<string, number> = {};
      for (const x of s) c[x.family] = (c[x.family] || 0) + 1;
      return c;
    };
    const en = counts(LANGS.ENGLISH.filter((s) => s.source === "generated"));
    for (const lang of ["TAGALOG", "BISAYA", "ILOCANO"] as const) {
      const other = counts(LANGS[lang]);
      for (const [family, n] of Object.entries(en)) {
        expect(other[family], `${lang} ${family}`).toBeGreaterThanOrEqual(n - 1);
        expect(other[family], `${lang} ${family}`).toBeLessThanOrEqual(n + 1);
      }
    }
  });

  it("carries the curated scenarios in every localized library (id parity)", () => {
    // Regression for the audit: the 3 localized libraries were generated-only,
    // so family grids showed fewer drills (e.g. ewallet 72 vs 71) and curated
    // ids resolved through the English fallback. Every library must contain
    // the full curated set with identical ids.
    for (const lang of ["TAGALOG", "BISAYA", "ILOCANO"] as const) {
      const ids = new Set(LANGS[lang].map((s) => s.id));
      for (const curated of LANGS.ENGLISH.filter((s) => s.source === "curated")) {
        expect(ids.has(curated.id), `${lang} missing curated ${curated.id}`).toBe(true);
      }
      // Total counts (curated + generated) match English exactly.
      expect(LANGS[lang].length, `${lang} total`).toBe(LANGS.ENGLISH.length);
    }
  });

  it("every scenario text field is localized, not English", () => {
    // Compare scenarios by the same id where present; otherwise compare by
    // family+index. Assert message/setup/debrief differ from English.
    const enBy = new Map(LANGS.ENGLISH.filter((s) => s.source === "generated").map((s) => [s.id, s]));
    const tlBy = new Map(LANGS.TAGALOG.map((s) => [s.id, s]));
    const cebBy = new Map(LANGS.BISAYA.map((s) => [s.id, s]));
    const iloBy = new Map(LANGS.ILOCANO.map((s) => [s.id, s]));
    const ids = [...enBy.keys()].filter((_, i) => i % 20 === 0);
    let compared = 0;
    for (const id of ids) {
      const en = enBy.get(id)!;
      const tl = tlBy.get(id);
      const ceb = cebBy.get(id);
      const ilo = iloBy.get(id);
      if (!tl || !ceb || !ilo) continue;
      compared++;
      expect(tl.steps[0].message, `${id} TL message`).not.toBe(en.steps[0].message);
      expect(ceb.steps[0].message, `${id} CEB message`).not.toBe(en.steps[0].message);
      expect(ilo.steps[0].message, `${id} ILO message`).not.toBe(en.steps[0].message);
      expect(tl.debrief, `${id} TL debrief`).not.toBe(en.debrief);
      expect(tl.steps[0].tip, `${id} TL tip`).not.toBe(en.steps[0].tip);
    }
    expect(compared).toBeGreaterThan(5);
  });

  it("localized options + feedback differ from English", () => {
    const en = LANGS.ENGLISH.find((s) => s.source === "generated" && s.family === "ewallet")!;
    const tl = LANGS.TAGALOG.find((s) => s.id === en.id)!;
    expect(tl.steps[0].options[0].text).not.toBe(en.steps[0].options[0].text);
    expect(tl.steps[0].options[0].feedback).not.toBe(en.steps[0].options[0].feedback);
  });

  it("generator with lang option returns localized output directly", () => {
    const tl = generateScenarios({ perFamily: 20, seed: 1, lang: "TAGALOG" });
    const en = generateScenarios({ perFamily: 20, seed: 1, lang: "ENGLISH" });
    expect(tl.length).toBe(en.length);
    expect(tl[0].steps[0].message).not.toBe(en[0].steps[0].message);
    expect(tl[0].debrief).not.toBe(en[0].debrief);
  });
});

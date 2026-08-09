// === DOJO SCENARIO GENERATOR ===
// Deterministic, seeded generation of the 500-scenario library from template
// families + curated slot pools. No AI, no I/O: everything is computed at build
// time and shipped on-device. Same seed + same templates => identical output.
//
// Pedagogy contract (validateScenario) is enforced for EVERY generated
// scenario; the CLI fails the build on any violation.

import {
  Scenario,
  ScenarioFamily,
  ScenarioDifficulty,
  ScenarioChannel,
  ScenarioOption,
} from "./scenarios";
import { TEMPLATE_FAMILIES, POOLS, TemplateFamily } from "./dojo-templates";
import { TEMPLATE_FAMILIES_TAGALOG, POOLS_TAGALOG } from "./dojo-templates-tagalog";
import { TEMPLATE_FAMILIES_BISAYA, POOLS_BISAYA } from "./dojo-templates-bisaya";
import { TEMPLATE_FAMILIES_ILOCANO, POOLS_ILOCANO } from "./dojo-templates-ilocano";

// ===== Seeded PRNG (mulberry32) =====
export const mulberry32 = (seed: number): (() => number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const pick = <T,>(rng: () => number, arr: T[]): T => {
  const r = rng();
  if (r >= 1) return arr[arr.length - 1];
  return arr[Math.floor(r * arr.length)];
};
const pickN = <T,>(rng: () => number, arr: T[], n: number): T[] => {
  const copy = [...arr];
  const out: T[] = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const r = rng();
    const idx = r >= 1 ? copy.length - 1 : Math.floor(r * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
};

const fill = (template: string, slots: Record<string, string>): string => {
  return template.replace(/\{(\w+)\}/g, (_m, k) => slots[k] ?? `{${k}}`);
};

// Official channel lookup for feedback (from the support database brand names).
const OFFICIAL_HINT: Record<string, string> = {
  GCASH: "GCash hotline 2882",
  MAYA: "Maya hotline *788",
  BDO: "number on the back of your BDO card",
  BPI: "number on the back of your BPI card",
  METROBANK: "number on the back of your Metrobank card",
  UNIONBANK: "number on the back of your UnionBank card",
  GLOBE: "Globe official app",
  SMART: "Smart official app",
  LBC: "LBC official hotline",
  JNT: "J&T official app",
  NINJAVAN: "Ninja Van official app",
  SSS: "SSS official hotline",
  PAGIBIG: "Pag-IBIG official hotline",
  BIR: "BIR official hotline",
  CICC: "CICC hotline 1326",
};

const DEFAULTS: Record<string, string> = {
  official: "the official hotline",
};

// Debrief + title text per language (user-facing generated strings).
const DEBRIEF_BY_LANG: Record<string, string> = {
  ENGLISH: "You practiced the rule: {rule}. Tell your family this rule today.",
  TAGALOG: "Na-practice mo ang patakaran: {rule}. Sabihin ang patakarang ito sa pamilya mo ngayong araw.",
  BISAYA: "Na-practice nimo ang lagda: {rule}. Isulti kini nga lagda sa imong pamilya karon.",
  ILOCANO: "Na-practice mo ti pagannurotan: {rule}. Ibaga daytoy a pagannurotan iti pamilyam ita nga aldaw.",
};
const DRILL_BY_LANG: Record<string, string> = {
  ENGLISH: "drill",
  TAGALOG: "drill",
  BISAYA: "drill",
  ILOCANO: "drill",
};

// ===== Difficulty rubric =====
// easy: loud red flags, low plausibility. medium: mixed signals. hard: high
// plausibility, tell only via context mismatch.
const difficultyFor = (family: TemplateFamily, idx: number): ScenarioDifficulty => {
  const diffs = family.difficulties;
  return diffs[Math.min(idx, diffs.length - 1)] ?? "medium";
};

// ===== Scenario assembly =====
const buildScenario = (
  family: TemplateFamily,
  difficulty: ScenarioDifficulty,
  index: number,
  rng: () => number,
  lang: "ENGLISH" | "TAGALOG" | "BISAYA" | "ILOCANO" = "ENGLISH"
): Scenario => {
  const pools = POOLS_BY_LANG[lang];
  const brand = pick(rng, family.brands);
  const amount = pick(rng, pools.amounts);
  const domain = pick(rng, pools.fakeDomains);
  const urgency = pick(rng, pools.urgencyTriggers);
  const profile = pick(rng, pools.victimProfiles);
  const sender = pools.senderLabels[brand] ?? brand;
  const channel = pick(rng, family.channels);
  const official = OFFICIAL_HINT[brand] ?? DEFAULTS.official;

  const slots: Record<string, string> = {
    brand,
    sender,
    amount,
    domain,
    urg: urgency,
    profile,
    official,
    action: "act",
  };

  // One step per scenario for most; two steps (hybrid) occasionally.
  const steps: Scenario["steps"] = [];
  const message = fill(pick(rng, family.messageTemplates), slots);
  const question = fill(pick(rng, family.questionTemplates), slots);
  const correctText = fill(pick(rng, family.optionTemplates.correct), slots);
  const wrongTexts = pickN(rng, family.optionTemplates.wrong, 2).map((t) => fill(t, slots));
  const correctFeedback = fill(pick(rng, family.correctFeedback), slots);
  const wrongFeedback = fill(pick(rng, family.wrongFeedback), slots);

  const options: ScenarioOption[] = [
    { id: "a", text: correctText, correct: true, feedback: correctFeedback },
    { id: "b", text: wrongTexts[0], correct: false, feedback: wrongFeedback },
    { id: "c", text: wrongTexts[1] ?? wrongTexts[0], correct: false, feedback: wrongFeedback },
  ];

  steps.push({
    id: "s1",
    channel,
    senderLabel: sender,
    message,
    question,
    options,
    tip: family.rule,
  });

  const archetype = pick(rng, family.archetypes);
  const id = `${family.family}-${difficulty}-${String(index).padStart(3, "0")}`;

  return {
    id,
    title: `${family.family} ${DRILL_BY_LANG[lang]} ${index}`,
    icon: "ShieldCheck",
    difficulty,
    family: family.family,
    archetype,
    category: family.family,
    setup: `${profile}. ${question}`,
    steps,
    debrief: DEBRIEF_BY_LANG[lang].replace("{rule}", family.rule),
    source: "generated",
  };
};

// ===== Public API =====
export interface GenerateOptions {
  perFamily?: number; // total budget distributed across families
  seed?: number;
  lang?: "ENGLISH" | "TAGALOG" | "BISAYA" | "ILOCANO"; // template language for generated scenario content
}

// Template set per language. ENGLISH is the canonical authoring source;
// localized sets mirror it exactly (same count, same slot order).
const TEMPLATES_BY_LANG = {
  ENGLISH: TEMPLATE_FAMILIES,
  TAGALOG: TEMPLATE_FAMILIES_TAGALOG,
  BISAYA: TEMPLATE_FAMILIES_BISAYA,
  ILOCANO: TEMPLATE_FAMILIES_ILOCANO,
};
const POOLS_BY_LANG = {
  ENGLISH: POOLS,
  TAGALOG: POOLS_TAGALOG,
  BISAYA: POOLS_BISAYA,
  ILOCANO: POOLS_ILOCANO,
};

// Target distribution across families (research-derived victim weighting).
const FAMILY_BUDGET: Partial<Record<ScenarioFamily, number>> = {
  ewallet: 72,
  bank: 60,
  job: 45,
  investment: 40,
  government: 40,
  telco: 30,
  delivery: 28,
  romance: 25,
  vishing: 25,
  quishing: 20,
  remittance: 20,
  "fake-reward": 20,
  "family-emergency": 18,
  customs: 15,
  "sim-pretext": 15,
  "loan-app": 15,
  charity: 12,
  "good-message": 10,
};

export const generateScenarios = (opts: GenerateOptions = {}): Scenario[] => {
  const seed = opts.seed ?? 20260806;
  const rng = mulberry32(seed);
  const out: Scenario[] = [];
  const perFamily = opts.perFamily ?? 500;
  const templates = TEMPLATES_BY_LANG[opts.lang ?? "ENGLISH"];

  const budgetEntries = Object.entries(FAMILY_BUDGET) as [ScenarioFamily, number][];
  // Scale budgets so the total ~= perFamily. Duplicate rejection shrinks the
  // actual output, so over-produce and keep generating until each family meets
  // its scaled budget (capped to avoid infinite loops on low-variety families).
  const rawTotal = budgetEntries.reduce((a, [, n]) => a + n, 0);
  const scale = perFamily / rawTotal;

  for (const [familyId, base] of budgetEntries) {
    const template = templates.find((t) => t.family === familyId);
    if (!template) continue;
    const count = Math.max(2, Math.round(base * scale));
    const familyScenarios: Scenario[] = [];
    // Dedup is ID-based (family + difficulty + index) so every language
    // produces the SAME ids and counts. Text-similarity dedup is language-
    // sensitive (localized text overlaps differently), which made per-language
    // drill counts diverge and broke the family grid parity requirement.
    for (let i = 0; i < count * 3 + 10; i++) {
      if (familyScenarios.length >= count) break;
      const difficulty = difficultyFor(template, i % 3);
      const s = buildScenario(template, difficulty, i, rng, opts.lang ?? "ENGLISH");
      const idExists = familyScenarios.some((existing) => existing.id === s.id);
      if (!idExists) familyScenarios.push(s);
    }
    out.push(...familyScenarios);
  }

  return out;
};

// ===== Pedagogy contract =====
export const validateScenario = (s: Scenario): string[] => {
  const violations: string[] = [];
  if (!s.id) violations.push(`${s.id || "?"}: missing id`);
  if (!["easy", "medium", "hard"].includes(s.difficulty)) violations.push(`${s.id}: bad difficulty`);
  if (!s.family) violations.push(`${s.id}: missing family`);
  if (!["trap", "redirect", "good-message", "hybrid"].includes(s.archetype)) violations.push(`${s.id}: bad archetype`);
  if (!s.setup || s.setup.length < 5) violations.push(`${s.id}: empty setup`);
  if (s.steps.length === 0) violations.push(`${s.id}: no steps`);
  for (const step of s.steps) {
    if (!step.message) violations.push(`${s.id}: empty message`);
    if (!step.question) violations.push(`${s.id}: empty question`);
    const correct = step.options.filter((o) => o.correct);
    if (correct.length !== 1) violations.push(`${s.id}: expected exactly 1 correct, got ${correct.length}`);
    if (step.options.length < 2) violations.push(`${s.id}: need at least 2 options`);
    for (const o of step.options) {
      if (!o.feedback || o.feedback.length < 5) violations.push(`${s.id}: option ${o.id} missing feedback`);
    }
    if (!step.tip || step.tip.length < 8) violations.push(`${s.id}: missing tip`);
    const blob = step.message + step.question + step.tip + step.options.map((o) => o.feedback).join(" ");
    if (blob.includes("\u2014")) violations.push(`${s.id}: em dash present`);
    // Fake-domain rule: any domain-like token in a generated message must use
    // an approved clearly-fake TLD (.top/.site/.xyz or a bit.ly shortener).
    // Brand-name words (GCash, BDO) are not domains and are fine. Curated
    // scenarios are hand-reviewed, so they are exempt from this safety net.
    if (s.source === "generated") {
      const bareDomains = step.message.match(/\b(?:[a-z0-9-]+\.)+[a-z]{2,}\b/gi) ?? [];
      const approvedFake = /(?:[a-z0-9-]+\.)+(?:top|site|xyz)\b|bit\.ly\/\w+/i.test(step.message);
      const legitBrandWords = /(?:gcash|maya|bdo|bpi|shopee|lazada|globe|smart)\b/i.test(step.message);
      if (bareDomains.length > 0 && !approvedFake && !legitBrandWords) {
        violations.push(`${s.id}: message contains a bare domain not using a fake TLD`);
      }
    }
  }
  if (!s.debrief || s.debrief.length < 5) violations.push(`${s.id}: missing debrief`);
  return violations;
};

export const validateLibrary = (scenarios: Scenario[]): string[] => {
  const violations: string[] = [];
  const seen = new Set<string>();
  for (const s of scenarios) {
    if (seen.has(s.id)) violations.push(`duplicate id ${s.id}`);
    seen.add(s.id);
    violations.push(...validateScenario(s));
  }
  return violations;
};

export { TEMPLATE_FAMILIES, POOLS };

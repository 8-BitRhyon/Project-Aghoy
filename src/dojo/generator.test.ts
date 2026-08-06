import { describe, it, expect } from 'vitest';
import { generateScenarios, validateLibrary, validateScenario, mulberry32 } from './generator';
import { ALL_SCENARIOS } from './scenarios.generated';
import { SCENARIOS } from './scenarios';

describe('generator determinism', () => {
  it('same seed produces identical content', () => {
    const a = generateScenarios({ perFamily: 50, seed: 123 });
    const b = generateScenarios({ perFamily: 50, seed: 123 });
    expect(a.map((s) => ({ id: s.id, message: s.steps[0].message, options: s.steps[0].options.map((o) => o.text) })))
      .toEqual(b.map((s) => ({ id: s.id, message: s.steps[0].message, options: s.steps[0].options.map((o) => o.text) })));
  });

  it('different seeds produce different output', () => {
    const a = generateScenarios({ perFamily: 50, seed: 1 });
    const b = generateScenarios({ perFamily: 50, seed: 2 });
    expect(a.map((s) => s.id)).not.toEqual(b.map((s) => s.id));
  });

  it('mulberry32 returns values in [0,1)', () => {
    const rng = mulberry32(42);
    for (let i = 0; i < 100; i++) {
      const v = rng();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('generated library', () => {
  it('is large (>= 300) and every family is represented', () => {
    expect(ALL_SCENARIOS.length).toBeGreaterThanOrEqual(300);
    const families = new Set(ALL_SCENARIOS.map((s) => s.family as string));
    for (const f of [
      'ewallet', 'bank', 'telco', 'delivery', 'job', 'romance', 'investment',
      'government', 'quishing', 'vishing', 'family-emergency', 'fake-reward',
    ]) {
      expect(families.has(f), f).toBe(true);
    }
  });

  it('has all three difficulties', () => {
    const diffs = new Set(ALL_SCENARIOS.map((s) => s.difficulty as string));
    for (const d of ['easy', 'medium', 'hard']) expect(diffs.has(d), d).toBe(true);
  });

  it('every scenario passes the pedagogy contract', () => {
    const violations = validateLibrary(ALL_SCENARIOS);
    expect(violations).toEqual([]);
  });

  it('every scenario has exactly one correct option per step', () => {
    for (const s of ALL_SCENARIOS) {
      for (const step of s.steps) {
        expect(step.options.filter((o) => o.correct).length, `${s.id}:${step.id}`).toBe(1);
      }
    }
  });

  it('no em dashes anywhere in the library', () => {
    for (const s of ALL_SCENARIOS) {
      const blob = s.setup + s.debrief + s.steps.map((x) => x.message + x.question + x.tip + x.options.map((o) => o.feedback).join('')).join(' ');
      expect(blob.includes('\u2014'), s.id).toBe(false);
    }
  });

  it('ids are unique', () => {
    const ids = new Set(ALL_SCENARIOS.map((s) => s.id));
    expect(ids.size).toBe(ALL_SCENARIOS.length);
  });

  it('every generated scenario has source generated and curated ones are curated', () => {
    for (const s of SCENARIOS) expect(s.source).toBe('curated');
  });

  it('generated scenarios carry source: generated', () => {
    const generated = generateScenarios({ perFamily: 40, seed: 7 });
    for (const s of generated) expect(s.source, s.id).toBe('generated');
  });
});

describe('validateScenario', () => {
  it('rejects a scenario with two correct options', () => {
    const bad = { ...ALL_SCENARIOS[0] };
    bad.steps = [{ ...bad.steps[0], options: [
      { id: 'a', text: 'x', correct: true, feedback: 'f' },
      { id: 'b', text: 'y', correct: true, feedback: 'f' },
    ] }];
    expect(validateScenario(bad).some((v) => v.includes('exactly 1 correct'))).toBe(true);
  });
});

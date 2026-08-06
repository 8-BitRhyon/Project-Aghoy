import { describe, it, expect } from 'vitest';
import { Scenario, ScenarioStep, getScenario, SCENARIOS } from './scenarios';
import {
  startScenario,
  answerStep,
  advanceFromFeedback,
  rankFor,
  MAX_HP,
  HP_PER_WRONG,
  POINTS_PER_CORRECT,
  loadScenario,
} from './engine';

describe('scenario library integrity', () => {
  it('has 8 scenarios covering distinct scam vectors', () => {
    expect(SCENARIOS.length).toBeGreaterThanOrEqual(8);
    const ids = new Set(SCENARIOS.map((s) => s.id));
    expect(ids.size).toBe(SCENARIOS.length);
  });

  it('every scenario has at least 1 step, each with 1 correct option', () => {
    for (const s of SCENARIOS) {
      expect(s.steps.length).toBeGreaterThanOrEqual(1);
      for (const step of s.steps) {
        expect(step.options.some((o) => o.correct)).toBe(true);
        expect(step.tip.length).toBeGreaterThan(10);
      }
      expect(s.debrief.length).toBeGreaterThan(10);
    }
  });

  it('covers the key vectors: e-wallet, parcel, job, vishing, email, QR, task, family', () => {
    const ids = new Set(SCENARIOS.map((s) => s.id));
    for (const expected of ['gcash-otp', 'parcel-fee', 'linkedin-job', 'vishing-bank', 'email-phishing', 'quishing-qr', 'task-scam', 'family-emergency']) {
      expect(ids.has(expected), expected).toBe(true);
    }
  });

  it('has no em dashes', () => {
    for (const s of SCENARIOS) {
      for (const step of s.steps) {
        expect(s.setup + step.message + step.question + step.tip).not.toContain('\u2014');
        for (const o of step.options) expect(o.feedback).not.toContain('\u2014');
      }
    }
  });
});

describe('game engine', () => {
  const scenario = getScenario('gcash-otp')!;

  it('starts at step 0 with full HP', () => {
    const { state, step } = startScenario(scenario);
    expect(state.phase).toBe('step');
    expect(state.stepIndex).toBe(0);
    expect(state.hp).toBe(MAX_HP);
    expect(step?.id).toBe('s1');
  });

  it('a correct answer adds points and shows feedback, then advances', () => {
    let { state, step } = startScenario(scenario);
    let correctChoice = step!.options.find((o) => o.correct)!;
    const r = answerStep(scenario, state, correctChoice.id);
    expect(r.correct).toBe(true);
    expect(r.state.score).toBe(POINTS_PER_CORRECT);
    expect(r.state.correctCount).toBe(1);
    expect(r.state.phase).toBe('feedback');
    expect(r.state.lastCorrect).toBe(true);
    // advance
    const advanced = advanceFromFeedback(scenario, r.state);
    expect(advanced.phase).toBe('step');
    expect(advanced.stepIndex).toBe(1);
  });

  it('a wrong answer costs HP and shows the reason', () => {
    let { state, step } = startScenario(scenario);
    let wrongChoice = step!.options.find((o) => !o.correct)!;
    const r = answerStep(scenario, state, wrongChoice.id);
    expect(r.correct).toBe(false);
    expect(r.state.hp).toBe(MAX_HP - HP_PER_WRONG);
    expect(r.state.score).toBe(0);
    expect(r.state.lastFeedback!.length).toBeGreaterThan(10);
  });

  it('loses when the correct-answer threshold is not met by the end', () => {
    // gcash-otp has 3 steps; answering all 3 wrong (0/3, threshold 2) is a loss.
    let { state, step } = startScenario(scenario);
    let guard = 0;
    while (step && guard < 20) {
      const wrong = step.options.find((o) => !o.correct)!;
      const r = answerStep(scenario, state, wrong.id);
      state = r.state;
      step = r.step;
      guard += 1;
    }
    expect(state.phase).toBe('lost');
    expect(state.hp).toBe(MAX_HP - 3 * HP_PER_WRONG);
  });

  it('loses when HP reaches 0 on a longer scenario', () => {
    // Force a loss via HP floor: enough wrong answers across the library.
    let lost = false;
    for (const s of SCENARIOS) {
      let st = startScenario(s).state;
      let stp = startScenario(s).step;
      let guard = 0;
      while (stp && guard < 20) {
        const wrong = stp.options.find((o) => !o.correct)!;
        const r = answerStep(s, st, wrong.id);
        st = r.state;
        stp = r.step;
        guard += 1;
      }
      if (st.phase === 'lost') { lost = true; break; }
    }
    expect(lost).toBe(true);
  });

  it('wins with enough correct answers through all steps', () => {
    let { state, step } = startScenario(scenario);
    let won = false;
    while (step) {
      const correct = step.options.find((o) => o.correct)!;
      const r = answerStep(scenario, state, correct.id);
      state = r.state;
      step = r.step;
      won = r.won;
    }
    expect(state.phase).toBe('won');
    expect(state.correctCount).toBe(scenario.steps.length);
    expect(won).toBe(true);
  });

  it('rankFor labels by accuracy', () => {
    expect(rankFor(3, 3)).toBe('Grandmaster');
    expect(rankFor(2, 3)).toBe('Shield');
    expect(rankFor(1, 3)).toBe('Apprentice');
  });

  it('loadScenario returns null for unknown id', () => {
    expect(loadScenario('nope')).toBeNull();
    expect(getScenario('nope')).toBeUndefined();
  });

  it('2-step scenarios require only 1 correct answer to pass', () => {
    const s = getScenario('parcel-fee')!;
    expect(s.steps.length).toBe(2);
    let { state, step } = startScenario(s);
    // Answer step 1 correct, step 2 wrong: 1/2 correct should still win.
    const correct = step!.options.find((o) => o.correct)!;
    const r1 = answerStep(s, state, correct.id);
    state = r1.state;
    step = r1.step;
    const wrong = step!.options.find((o) => !o.correct)!;
    const r2 = answerStep(s, state, wrong.id);
    expect(r2.won).toBe(true);
    expect(r2.state.phase).toBe('won');
  });
});

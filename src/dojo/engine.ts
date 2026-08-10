// === DOJO GAME ENGINE ===
// Pure, deterministic state machine for scenario-based training. No AI, no I/O.
// Runs entirely on-device: instant, offline, free, and identical for every
// user. Tests in src/dojo/engine.test.ts.

import { Scenario, ScenarioStep, getScenario } from "./scenarios";

export type GamePhase = "started" | "step" | "feedback" | "won" | "lost";

export interface GameState {
  scenarioId: string;
  phase: GamePhase;
  stepIndex: number;
  hp: number; // 100 - 25 per wrong answer, floor 0
  score: number; // earned points
  correctCount: number;
  totalSteps: number;
  lastChoiceId: string | null;
  lastCorrect: boolean | null;
  lastFeedback: string | null;
  retriedWrong: boolean; // true after an errorless-loop retry of the same step
}

export const MAX_HP = 100;
export const HP_PER_WRONG = 25;
export const POINTS_PER_CORRECT = 10;

export interface StartResult {
  state: GameState;
  step: ScenarioStep | null;
}

export interface AnswerResult {
  state: GameState;
  step: ScenarioStep | null; // next step, or null if the scenario is over
  correct: boolean;
  won: boolean;
  lost: boolean;
}

export const startScenario = (scenario: Scenario): StartResult => {
  const state: GameState = {
    scenarioId: scenario.id,
    phase: scenario.steps.length > 0 ? "step" : "won",
    stepIndex: 0,
    hp: MAX_HP,
    score: 0,
    correctCount: 0,
    totalSteps: scenario.steps.length,
    lastChoiceId: null,
    lastCorrect: null,
    lastFeedback: null,
    retriedWrong: false,
  };
  return { state, step: scenario.steps[0] ?? null };
};

// Answer the current step. Returns the updated state and the next step.
// Errorless-loop: a first wrong answer re-presents the SAME step (no advance,
// no double HP/score penalty) so the learner immediately practices the correct
// action. Evidence: wrong responses get encoded and compete with the right one
// (Baddeley & Wilson 1994); older adults learn less from negative outcomes and
// benefit from error prevention (Frank & Kong 2008). Retrying the same step
// turns a mistake into an immediate successful retrieval.
export const answerStep = (scenario: Scenario, state: GameState, choiceId: string): AnswerResult => {
  const step = scenario.steps[state.stepIndex];
  if (!step) {
    return { state: { ...state, phase: "won" }, step: null, correct: false, won: true, lost: false };
  }
  const choice = step.options.find((o) => o.id === choiceId);
  const correct = choice?.correct ?? false;

  let hp = state.hp;
  if (!correct) hp = Math.max(0, hp - HP_PER_WRONG);
  const score = state.score + (correct ? POINTS_PER_CORRECT : 0);
  const correctCount = state.correctCount + (correct ? 1 : 0);
  const feedback = choice?.feedback ?? "No feedback for this choice.";

  // Errorless-loop: wrong + not yet retried -> stay on the same step.
  if (!correct && !state.retriedWrong) {
    const next: GameState = {
      ...state,
      phase: "feedback",
      hp,
      lastChoiceId: choiceId,
      lastCorrect: correct,
      lastFeedback: feedback,
      retriedWrong: true,
    };
    return { state: next, step, correct, won: false, lost: false };
  }

  const stepIndex = state.stepIndex + 1;
  const isLastStep = stepIndex >= scenario.steps.length;
  // Win threshold: >= 60% correct. For 2-step scenarios that is 1.2 -> floor to
  // 1 correct (50%+ feels fair on short drills); for 3+ steps it is ceil(60%).
  const required = scenario.steps.length >= 3 ? Math.ceil(scenario.steps.length * 0.6) : 1;
  const lost = hp <= 0 || (isLastStep && correctCount < required);
  const won = !lost && isLastStep;

  const next: GameState = {
    ...state,
    phase: won ? "won" : lost ? "lost" : "feedback",
    stepIndex,
    hp,
    score,
    correctCount,
    lastChoiceId: choiceId,
    lastCorrect: correct,
    lastFeedback: feedback,
    retriedWrong: false,
  };

  const nextStep = !won && !lost && !isLastStep ? scenario.steps[stepIndex] : null;
  return { state: next, step: nextStep, correct, won, lost };
};

// Advance from the feedback phase to the next step.
export const advanceFromFeedback = (scenario: Scenario, state: GameState): GameState => {
  if (state.phase !== "feedback") return state;
  return { ...state, phase: "step" };
};

// A rank label based on correctness rate, for the debrief screen.
export const rankFor = (correctCount: number, totalSteps: number): "Grandmaster" | "Shield" | "Apprentice" => {
  const rate = totalSteps > 0 ? correctCount / totalSteps : 0;
  if (rate >= 0.9) return "Grandmaster";
  if (rate >= 0.6) return "Shield";
  return "Apprentice";
};

export const loadScenario = (id: string): Scenario | null => getScenario(id) ?? null;
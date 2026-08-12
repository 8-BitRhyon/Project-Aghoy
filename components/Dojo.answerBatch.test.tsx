// components/Dojo.answerBatch.test.tsx - the Dojo must send its per-answer
// analytics batch to the worker (training_answers rows). The audit found
// saveTrainingProgress was called with no answers argument, so the worker's
// batch-answer handling (dojo.ts:883) was dead and the analytics table never
// populated.

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

let loadedProgress: unknown = null;
const saveTrainingProgressMock = vi.fn(async (_progress: unknown, _answers?: unknown[]) => {});
vi.mock('../src/api/storageClient', () => ({
  saveTrainingProgress: (progress: unknown, answers?: unknown[]) => saveTrainingProgressMock(progress, answers),
  loadTrainingProgress: async () => loadedProgress,
  saveSelfReport: async () => {},
}));
vi.mock('../services/aiService', () => ({
  createDojoChat: () => ({ sendMessage: async () => ({ response: { text: () => 'ok' }, health: 100 }) }),
}));
vi.mock('../utils/sound', () => ({ playSound: () => {} }));

// A minimal ewallet scenario so the answer flow is reachable.
const { scenario } = vi.hoisted(() => ({
  scenario: {
    id: 'ewallet-easy-000',
    title: 'ewallet drill',
    icon: 'ShieldCheck',
    difficulty: 'easy',
    family: 'ewallet',
    archetype: 'phishing',
    category: 'otp',
    setup: 'Setup',
    steps: [
      {
        id: 's1',
        channel: 'sms',
        senderLabel: 'GCash',
        message: 'Message',
        question: 'What do you do?',
        tip: 'Never share your OTP.',
        options: [
          { id: 'a', text: 'Open the link', correct: false, feedback: 'no' },
          { id: 'b', text: 'Ignore it', correct: true, feedback: 'yes' },
        ],
      },
    ],
    debrief: 'Debrief',
    source: 'curated',
  },
}));

vi.mock('../src/dojo/scenarios.generated', () => ({
  ALL_SCENARIOS: [scenario],
}));
vi.mock('../src/dojo/scenarios.generated.tl', () => ({ ALL_SCENARIOS_TAGALOG: [scenario] }));
vi.mock('../src/dojo/scenarios.generated.ceb', () => ({ ALL_SCENARIOS_BISAYA: [scenario] }));
vi.mock('../src/dojo/scenarios.generated.ilo', () => ({ ALL_SCENARIOS_ILOCANO: [scenario] }));
vi.mock('../src/dojo/scenarios', () => ({
  getScenario: () => scenario,
}));

import Dojo from './Dojo';

const startDrill = async () => {
  await act(async () => {
    render(<Dojo selectedLanguage="ENGLISH" />);
  });
  // The select screen shows family buttons ("E-wallet Scams" etc). Click the
  // ewallet family, then the drill in the family view.
  const familyBtn = screen.getAllByRole('button').find((b) => /E-wallet Scams/i.test(b.textContent || ''));
  expect(familyBtn).toBeTruthy();
  fireEvent.click(familyBtn!);
  const drill = screen.getAllByRole('button').find((b) => !b.hasAttribute('disabled') && (b.textContent || '').includes('ewallet drill'));
  expect(drill).toBeTruthy();
  fireEvent.click(drill!);
};

describe('Dojo - answer analytics batch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    loadedProgress = null;
    saveTrainingProgressMock.mockImplementation(async () => {});
  });

  it('sends the answered step + option in the training progress batch', async () => {
    await startDrill();
    // Answer correctly (option b).
    fireEvent.click(screen.getByText('Ignore it'));
    expect(saveTrainingProgressMock).toHaveBeenCalled();
    const lastCall = saveTrainingProgressMock.mock.calls.at(-1) as [unknown, unknown[]] | undefined;
    const progressArg = lastCall?.[0];
    const answersArg = lastCall?.[1];
    expect(answersArg).toBeDefined();
    expect(Array.isArray(answersArg)).toBe(true);
    expect(answersArg.length).toBeGreaterThanOrEqual(1);
    const a = answersArg[0] as { scenarioId: string; stepIndex: number; optionId: string; correct: boolean };
    expect(a.scenarioId).toBe('ewallet-easy-000');
    expect(a.stepIndex).toBe(0);
    expect(a.optionId).toBe('b');
    expect(a.correct).toBe(true);
    expect(progressArg).toBeTruthy();
  });
});

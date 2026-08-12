// components/Dojo.navigation.test.tsx - navigation regressions found in the
// comprehensive audit:
//   1. A locked family must show the lock banner + back button (not a blank
//      screen), and its drills must not open.
//   2. A completed-but-unclaimed challenge must render the claim button (the
//      chip used to vanish the moment progress reached target).

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { emptyProgress } from '../src/dojo/progress';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

let loadedProgress: unknown = null;
vi.mock('../src/api/storageClient', () => ({
  saveTrainingProgress: async () => {},
  loadTrainingProgress: async () => loadedProgress,
}));
vi.mock('../services/aiService', () => ({
  createDojoChat: () => ({ sendMessage: async () => ({ response: { text: () => 'ok' }, health: 100 }) }),
}));
vi.mock('../utils/sound', () => ({ playSound: () => {} }));
vi.mock('../src/dojo/scenarios.generated', () => ({
  ALL_SCENARIOS: [],
}));
vi.mock('../src/dojo/scenarios.generated.tl', () => ({ ALL_SCENARIOS_TAGALOG: [] }));
vi.mock('../src/dojo/scenarios.generated.ceb', () => ({ ALL_SCENARIOS_BISAYA: [] }));
vi.mock('../src/dojo/scenarios.generated.ilo', () => ({ ALL_SCENARIOS_ILOCANO: [] }));
vi.mock('../src/dojo/scenarios', () => ({
  getScenario: () => undefined,
}));

import Dojo from './Dojo';

describe('Dojo - navigation regressions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    loadedProgress = null;
  });

  it('shows the lock banner and a way back (no blank screen) for a locked family', async () => {
    await act(async () => {
      render(<Dojo selectedLanguage="ENGLISH" />);
    });
    // All families except ewallet/fake-reward are locked at shield level 1.
    fireEvent.click(screen.getByText(/Phone Call Scams/));
    // The banner (locked family copy) renders.
    expect(screen.getByText(/locked|Naka-lock|na-lock|na-lock/i)).toBeTruthy();
    // The back button exists (would be absent on a blank screen).
    expect(screen.getAllByRole('button').some((b) => b.textContent?.match(/FAMILIES|FAMILIA|PAMILYA/i))).toBe(true);
    // Drills are disabled, not clickable.
    const drillButtons = screen.getAllByRole('button').filter((b) => b.hasAttribute('disabled'));
    expect(drillButtons.length).toBeGreaterThan(0);
  });

  it('renders the claim button for a completed-but-unclaimed challenge', async () => {
    const p = emptyProgress();
    p.challenges['daily-goal'] = { id: 'daily-goal', progress: 3, target: 3, claimedAt: null, startedAt: "2026-08-01" };
    loadedProgress = p;
    await act(async () => {
      render(<Dojo selectedLanguage="ENGLISH" />);
    });
    // Claim button renders for a complete, unclaimed challenge ("I-CLAIM +N").
    expect(screen.getByText(/I-CLAIM|CLAIM\s*\+/i)).toBeTruthy();
  });

  it('hides the claim button once the challenge is claimed', async () => {
    const p = emptyProgress();
    p.challenges['daily-goal'] = { id: 'daily-goal', progress: 3, target: 3, claimedAt: '2026-08-01', startedAt: "2026-08-01" };
    loadedProgress = p;
    await act(async () => {
      render(<Dojo selectedLanguage="ENGLISH" />);
    });
    expect(screen.queryByText(/I-CLAIM|CLAIM\s*\+/i)).toBeNull();
  });
});

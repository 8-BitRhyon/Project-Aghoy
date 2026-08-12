// App.sender.test.tsx - the optional sender field must flow into
// analyzeContent so the trusted-sender discount can fire. Regression for the
// audit finding: analyzeContent accepts a sender but the UI never passed one,
// so VERIFIED_SENDER / trusted-sender discount were dead.

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

const analyzeMock = vi.fn(async (_text: string, _lang: string, _img?: string, _mime?: string, _sender?: string) => ({
  verdict: 'SAFE',
  riskScore: 1,
  scamType: 'None',
  senderEntity: 'GCash',
  redFlags: [],
  analysis: 'ok',
  educationalTip: 't',
}));
vi.mock('./services/aiService', () => ({ analyzeContent: (t: string, l: string, i?: string, m?: string, s?: string) => analyzeMock(t, l, i, m, s) }));

// LocalStorage for consent gate + mute.
const storage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (k: string) => storage.get(k) ?? null,
    setItem: (k: string, v: string) => storage.set(k, v),
    removeItem: (k: string) => storage.delete(k),
  },
});
vi.mock('./src/api/storageClient', () => ({
  clearConsentToken: () => {},
  flushQueuedReports: async () => {},
}));
vi.mock('./utils/sound', () => ({ playSound: () => {}, toggleMute: () => {}, getMuteStatus: () => false }));
vi.mock('./hooks/useOfflineReportFlush', () => ({ default: () => {} }));
vi.mock('./utils/shareTarget', () => ({ parseShareQuery: () => ({ text: '', file: null }), fetchSharedFile: async () => null }));
vi.mock('./utils/privacy', () => ({ sanitizeText: (s: string) => s }));

import App from './App';

describe('App - optional sender field', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    storage.clear();
    storage.set('aghoy_privacy_consent', 'granted');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const renderScanner = async () => {
    await act(async () => {
      render(<App />);
    });
    // App opens on the DOJO tab; switch to the scanner.
    const scannerTab = screen.getAllByRole('button').find((b) => /SCANNER/i.test(b.textContent || ''));
    expect(scannerTab).toBeTruthy();
    fireEvent.click(scannerTab!);
  };

  it('passes the entered sender to analyzeContent', async () => {
    await renderScanner();
    // Type the message.
    const textarea = screen.getByPlaceholderText(/Paste text message/i);
    fireEvent.change(textarea, { target: { value: 'Your GCash account is locked. Verify now.' } });
    // Enter a sender.
    fireEvent.change(screen.getByLabelText('Sender (optional)'), { target: { value: 'GCASH' } });
    // Trigger analyze.
    fireEvent.click(screen.getByText('ANALYZE_THREAT'));
    await waitFor(() => expect(analyzeMock).toHaveBeenCalled());
    const args = analyzeMock.mock.calls.at(-1) as [string, string, string | undefined, string | undefined, string | undefined] | undefined;
    expect(args?.[4]).toBe('GCASH');
  });

  it('passes undefined sender when the field is empty', async () => {
    await renderScanner();
    fireEvent.change(screen.getByPlaceholderText(/Paste text message/i), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByText('ANALYZE_THREAT'));
    await waitFor(() => expect(analyzeMock).toHaveBeenCalled());
    const args = analyzeMock.mock.calls.at(-1) as [string, string, string | undefined, string | undefined, string | undefined] | undefined;
    expect(args?.[4]).toBeUndefined();
  });
});

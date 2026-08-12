// hooks/useOfflineReportFlush.test.tsx - the report queue only works if
// something calls flushQueuedReports when the network comes back, the app
// returns to the foreground, or time passes. This hook wires those triggers.

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import useOfflineReportFlush from './useOfflineReportFlush';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

const flushMock = vi.fn().mockResolvedValue(undefined);
vi.mock('../src/api/storageClient', () => ({
  flushQueuedReports: (...args: unknown[]) => flushMock(...args),
}));

const Harness = () => {
  useOfflineReportFlush();
  return null;
};

// Consent gate: the hook only flushes when consent is currently granted.
const storage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (k: string) => storage.get(k) ?? null,
    setItem: (k: string, v: string) => storage.set(k, v),
    removeItem: (k: string) => storage.delete(k),
  },
});

describe('useOfflineReportFlush', () => {
  beforeEach(() => {
    flushMock.mockClear();
    storage.clear();
    storage.set('aghoy_privacy_consent', 'granted');
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('flushes when the browser comes back online', () => {
    render(<Harness />);
    expect(flushMock).not.toHaveBeenCalled();
    window.dispatchEvent(new Event('online'));
    expect(flushMock).toHaveBeenCalledTimes(1);
  });

  it('flushes when the app returns to the foreground', () => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
    render(<Harness />);
    document.dispatchEvent(new Event('visibilitychange'));
    expect(flushMock).toHaveBeenCalledTimes(1);
  });

  it('flushes on a 5-minute timer while the app is open', () => {
    render(<Harness />);
    expect(flushMock).not.toHaveBeenCalled();
    vi.advanceTimersByTime(5 * 60 * 1000);
    expect(flushMock).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(5 * 60 * 1000);
    expect(flushMock).toHaveBeenCalledTimes(2);
  });

  it('cleans up listeners and the timer on unmount', () => {
    const { unmount } = render(<Harness />);
    unmount();
    window.dispatchEvent(new Event('online'));
    vi.advanceTimersByTime(5 * 60 * 1000);
    expect(flushMock).not.toHaveBeenCalled();
  });

  it('does NOT flush when consent has been reset', () => {
    storage.set('aghoy_privacy_consent', 'denied');
    render(<Harness />);
    window.dispatchEvent(new Event('online'));
    vi.advanceTimersByTime(5 * 60 * 1000);
    expect(flushMock).not.toHaveBeenCalled();
  });

  it('flushes again once consent is re-granted', () => {
    storage.set('aghoy_privacy_consent', 'denied');
    render(<Harness />);
    storage.set('aghoy_privacy_consent', 'granted');
    window.dispatchEvent(new Event('online'));
    expect(flushMock).toHaveBeenCalledTimes(1);
  });
});

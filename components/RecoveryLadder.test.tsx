// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecoveryLadder from './RecoveryLadder';

// React 19 requires this flag for act() to flush updates.
(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

describe('RecoveryLadder', () => {
  it('leads with FREEZE FUNDS for a HIGH_RISK verdict', () => {
    render(
      <RecoveryLadder
        verdict="HIGH_RISK"
        entities={['GCASH', 'MAYA']}
        scamType="OTP Phishing"
        redFlags={['OTP_SHARING', 'URGENCY']}
      />
    );
    expect(screen.getByText('FREEZE FUNDS')).toBeTruthy();
    expect(screen.getByText('SAVE EVIDENCE')).toBeTruthy();
    expect(screen.getByText('REPORT IT')).toBeTruthy();
    // The CICC 1326 hand-off line is present on the high-risk path.
    expect(screen.getAllByText(/CICC 1326/).length).toBeGreaterThan(0);
  });

  it('renders the matched brand hotlines for freeze funds', () => {
    render(<RecoveryLadder verdict="HIGH_RISK" entities={['GCASH', 'MAYA']} />);
    expect(screen.getAllByText(/GCash/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Maya/).length).toBeGreaterThan(0);
  });

  it('falls back to common wallets when no brand matched', () => {
    render(<RecoveryLadder verdict="HIGH_RISK" entities={[]} />);
    expect(screen.getAllByText(/GCash/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Maya/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/BDO/).length).toBeGreaterThan(0);
  });

  it('uses a verify-first tone for SUSPICIOUS, not the panic ladder', () => {
    render(<RecoveryLadder verdict="SUSPICIOUS" />);
    expect(screen.getByText(/verify through the official channel/i)).toBeTruthy();
    // The high-risk banner ('this is what to do now') is absent; the
    // government hand-off line still appears because reporting helps either way.
    expect(screen.queryByText(/this is what to do now/i)).toBeFalsy();
  });

  it('shows COPY REPORT and fires the callback on click', () => {
    const onCopy = vi.fn();
    render(<RecoveryLadder verdict="HIGH_RISK" onCopyReport={onCopy} copied={false} />);
    const btn = screen.getByText('COPY REPORT');
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(onCopy).toHaveBeenCalledTimes(1);
  });

  it('falls back to the four wallets even when matched brands are all inactive', () => {
    // Entities that do not exist in the support database must not produce an
    // empty freeze list.
    render(<RecoveryLadder verdict="HIGH_RISK" entities={['NOT_A_BRAND', 'ALSO_FAKE']} />);
    expect(screen.getAllByText(/GCash/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Maya/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/BDO/).length).toBeGreaterThan(0);
  });
});

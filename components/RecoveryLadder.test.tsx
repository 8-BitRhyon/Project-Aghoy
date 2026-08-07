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
    // Default language is Tagalog, so the ladder renders the localized copy.
    expect(screen.getByText('I-LOCK ANG ACCOUNT KO')).toBeTruthy();
    expect(screen.getByText('MAG-SAVE NG EVIDENCE')).toBeTruthy();
    expect(screen.getByText('ISUMBONG')).toBeTruthy();
    // The definitive one-rule (not a hedge) is the banner.
    expect(screen.getByText(/SCAM 'YAN\. WAG MAG-REPLY/)).toBeTruthy();
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

  it('uses a calm dontReply tone for SUSPICIOUS, not the panic ladder', () => {
    render(<RecoveryLadder verdict="SUSPICIOUS" />);
    expect(screen.getByText(/WAG KA MAG-REPLY/)).toBeTruthy();
    // The high-risk banner ('SCAM YAN') is absent for SUSPICIOUS.
    expect(screen.queryByText(/SCAM 'YAN\. WAG MAG-REPLY/)).toBeFalsy();
  });

  it('shows the report button and fires the callback on click', () => {
    const onCopy = vi.fn();
    render(<RecoveryLadder verdict="HIGH_RISK" onCopyReport={onCopy} copied={false} />);
    const btn = screen.getByText('COPY REPORT');
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(onCopy).toHaveBeenCalledTimes(1);
  });

  it('falls back to the four wallets even when matched brands are all inactive', () => {
    render(<RecoveryLadder verdict="HIGH_RISK" entities={['NOT_A_BRAND', 'ALSO_FAKE']} />);
    expect(screen.getAllByText(/GCash/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Maya/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/BDO/).length).toBeGreaterThan(0);
  });

  it('shows the reassuring deleted-evidence message when alreadyScammed', () => {
    render(<RecoveryLadder verdict="HIGH_RISK" alreadyScammed language="TAGALOG" />);
    expect(screen.getByText(/Na-delete mo na ang text\? OK lang/)).toBeTruthy();
  });
});

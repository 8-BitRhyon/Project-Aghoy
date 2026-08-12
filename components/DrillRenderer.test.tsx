// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import DrillRenderer from './DrillRenderer';
import type { ScenarioStep } from '../src/dojo/scenarios';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

const step = (channel: ScenarioStep['channel'], extra: Partial<ScenarioStep> = {}): ScenarioStep => ({
  id: 's1',
  channel,
  senderLabel: 'GCash',
  message: 'Your account is locked. Click gcash-verify.example.ph and enter your OTP now.',
  question: 'What do you do?',
  tip: 'Never share your OTP.',
  options: [{ id: 'a', text: 'A', correct: true, feedback: 'ok' }],
  ...extra,
});

describe('DrillRenderer - channel-faithful immersion', () => {
  it('renders an SMS thread with sender + now timestamp', () => {
    render(<DrillRenderer step={step('sms')} />);
    expect(screen.getByText('GCash')).toBeTruthy();
    expect(screen.getByText('now')).toBeTruthy();
  });

  it('renders a chat with Messenger framing', () => {
    render(<DrillRenderer step={step('chat')} />);
    expect(screen.getByText(/Messenger/)).toBeTruthy();
  });

  it('renders an email with the sender label only (no fabricated address)', () => {
    render(<DrillRenderer step={step('email')} />);
    expect(screen.getByText('GCash')).toBeTruthy();
    expect(screen.queryByText(/support@/)).toBeNull();
  });

  it('renders red-flag segments in the vishing and qr branches too', () => {
    const seg = { text: 'gcash-verify.example.ph', flag: 'FAKE_DOMAIN' };
    const { unmount } = render(<DrillRenderer step={step('vishing', { segments: [seg] })} />);
    expect(document.querySelector('[title*="FAKE_DOMAIN"]')).not.toBeNull();
    unmount();
    render(<DrillRenderer step={step('qr', { segments: [seg] })} />);
    expect(document.querySelector('[title*="FAKE_DOMAIN"]')).not.toBeNull();
  });

  it('renders a vishing call screen with answer/decline', () => {
    render(<DrillRenderer step={step('vishing')} />);
    expect(screen.getByText(/Incoming call/)).toBeTruthy();
    expect(screen.getByText('Decline')).toBeTruthy();
  });

  it('offers tap-to-play audio for a vishing call with a matched archetype', () => {
    const { unmount } = render(
      <DrillRenderer step={step('vishing', {
        message: 'This is BDO fraud department. Your card was used for P25,000. Say your card number and the code on the back.',
        senderLabel: 'BDO',
      })} />
    );
    expect(screen.getByText('Listen to the caller')).toBeTruthy();
    unmount();
  });

  it('does NOT offer tap-to-play when no archetype matches (visual fallback)', () => {
    const { unmount } = render(
      <DrillRenderer step={step('vishing', {
        message: 'ShopeePay: We detected a suspicious login. Verify now at gov-ph-tax.site.',
        senderLabel: 'ShopeePay',
      })} />
    );
    expect(screen.queryByText('Listen to the caller')).toBeNull();
    unmount();
  });

  it('renders a QR scanner viewfinder', () => {
    render(<DrillRenderer step={step('qr')} />);
    // The QR branch renders the message below the viewfinder.
    expect(screen.getByText(/account is locked/)).toBeTruthy();
  });

  it('renders a LinkedIn inmail framing', () => {
    render(<DrillRenderer step={step('linkedin')} />);
    expect(screen.getByText(/LinkedIn/)).toBeTruthy();
  });

  it('highlights red-flag segments (spotflag format)', () => {
    render(<DrillRenderer step={step('sms', {
      segments: [
        { text: 'Click ' },
        { text: 'gcash-verify.example.ph', flag: 'FAKE_DOMAIN' },
        { text: ' and enter your OTP' },
      ],
    })} />);
    const flag = document.querySelector('[title*="FAKE_DOMAIN"]');
    expect(flag).not.toBeNull();
  });
});

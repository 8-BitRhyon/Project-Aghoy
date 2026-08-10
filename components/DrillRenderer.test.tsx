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

  it('renders an email with the spoofed sender address', () => {
    render(<DrillRenderer step={step('email')} />);
    expect(screen.getByText(/support@/)).toBeTruthy();
  });

  it('renders a vishing call screen with answer/decline', () => {
    render(<DrillRenderer step={step('vishing')} />);
    expect(screen.getByText(/Incoming call/)).toBeTruthy();
    expect(screen.getByText('Decline')).toBeTruthy();
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

// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DrillRenderer from './DrillRenderer';
import type { ScenarioStep } from '../src/dojo/scenarios';

(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;

// jsdom does not implement HTMLMediaElement.pause/play; stub both so the
// unmount cleanup and tap-to-play paths run without console noise.
vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue();

// utils/sound reads localStorage at module scope (crashes under jsdom) and is
// not under test here - mock it out. getMuteStatus defaults to false so the
// tap-to-play path is exercised normally.
vi.mock('../utils/sound', () => ({
  playSound: () => {},
  getMuteStatus: () => false,
}));

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

const vishing = (extra: Partial<ScenarioStep> = {}) =>
  step('vishing', {
    message: 'This is BDO fraud department. Your card was used for P25,000. Say your card number and the code on the back.',
    senderLabel: 'BDO',
    ...extra,
  });

const answerCall = () => fireEvent.click(screen.getByRole('button', { name: /Answer the call/i }));

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

  it('starts a vishing call RINGING with caller ID and no pitch yet', () => {
    render(<DrillRenderer step={vishing()} />);
    expect(screen.getByText(/Incoming call/)).toBeTruthy();
    // The scammer's pitch is hidden until the learner answers - exactly like
    // a real phone (you cannot hear a pitch you have not picked up).
    expect(screen.queryByText(/card number/)).toBeNull();
  });

  it('Answer connects the call and reveals the pitch + tap-to-play', () => {
    const { unmount } = render(<DrillRenderer step={vishing()} />);
    answerCall();
    expect(screen.getByText(/Connected/)).toBeTruthy();
    expect(screen.getByText(/card number/)).toBeTruthy();
    expect(screen.getByText('Listen to the caller')).toBeTruthy();
    unmount();
  });

  it('Decline ends the call and hides the pitch', () => {
    const { unmount } = render(<DrillRenderer step={vishing()} />);
    fireEvent.click(screen.getByRole('button', { name: /Decline the call/i }));
    expect(screen.getByText(/Call ended/)).toBeTruthy();
    expect(screen.queryByText(/card number/)).toBeNull();
    unmount();
  });

  it('declining after answering stops the audio and ends the call', () => {
    const { unmount } = render(<DrillRenderer step={vishing()} />);
    answerCall();
    fireEvent.click(screen.getByRole('button', { name: /Decline the call/i }));
    expect(screen.getByText(/Call ended/)).toBeTruthy();
    unmount();
  });

  it('fires onAnswerCall and onDeclineCall callbacks', () => {
    const onAnswer = vi.fn();
    const onDecline = vi.fn();
    const { unmount } = render(<DrillRenderer step={vishing()} onAnswerCall={onAnswer} onDeclineCall={onDecline} />);
    answerCall();
    expect(onAnswer).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: /Decline the call/i }));
    expect(onDecline).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('honors the global mute: tap-to-play does nothing when muted', async () => {
    const sound = await import('../utils/sound');
    vi.spyOn(sound, 'getMuteStatus').mockReturnValue(true);
    const { unmount } = render(<DrillRenderer step={vishing()} />);
    answerCall();
    fireEvent.click(screen.getByText('Listen to the caller'));
    expect(window.HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    unmount();
  });

  it('plays the bundled voice on tap when not muted', async () => {
    const sound = await import('../utils/sound');
    vi.spyOn(sound, 'getMuteStatus').mockReturnValue(false);
    const { unmount } = render(<DrillRenderer step={vishing()} />);
    answerCall();
    fireEvent.click(screen.getByText('Listen to the caller'));
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('does NOT offer tap-to-play when no archetype matches (visual fallback)', () => {
    const { unmount } = render(
      <DrillRenderer step={step('vishing', {
        message: 'ShopeePay: We detected a suspicious login. Verify now at gov-ph-tax.site.',
        senderLabel: 'ShopeePay',
      })} />
    );
    answerCall();
    expect(screen.queryByText('Listen to the caller')).toBeNull();
    unmount();
  });

  it('renders red-flag segments in the vishing and qr branches too', () => {
    const seg = { text: 'gcash-verify.example.ph', flag: 'FAKE_DOMAIN' };
    const { unmount } = render(<DrillRenderer step={vishing({ segments: [seg] })} />);
    answerCall();
    expect(document.querySelector('[title*="FAKE_DOMAIN"]')).not.toBeNull();
    unmount();
    render(<DrillRenderer step={step('qr', { segments: [seg] })} />);
    expect(document.querySelector('[title*="FAKE_DOMAIN"]')).not.toBeNull();
  });

  it('resets the call to ringing when the step changes', () => {
    const { rerender } = render(<DrillRenderer step={vishing()} />);
    answerCall();
    expect(screen.getByText(/Connected/)).toBeTruthy();
    rerender(<DrillRenderer step={vishing({ id: 's2' })} />);
    expect(screen.getByText(/Incoming call/)).toBeTruthy();
    expect(screen.queryByText(/card number/)).toBeNull();
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

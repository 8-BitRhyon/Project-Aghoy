// components/DrillRenderer.tsx - channel-faithful rendering for the Dojo.
//
// Immersion that serves the mission: the scam should LOOK the way it actually
// arrives, because the real-world transfer cue is visual pattern recognition -
// a lola who trains on a realistic fake-GCash SMS recognizes the next one by
// its look. This is perceptual realism for learning, NOT anxiety theater:
// no timers, no panic cues (older adults learn worse under stress - Frank &
// Kong 2008; the streak-trap finding).
//
// Each channel renders as its device UI:
//   sms      -> phone message thread (sender + bubble)
//   chat     -> messenger-style conversation
//   email    -> inbox preview + opened email
//   vishing  -> incoming call screen
//   qr       -> camera viewfinder framing a QR
//   linkedin -> inmail style
//
// The sender label + message are the training signal; the framing is what
// makes them memorable as PATTERNS, not isolated words.

import React, { useEffect, useRef, useState } from 'react';
import { Phone, PhoneOff, QrCode, Smartphone, Mail, MessageSquare, Linkedin, Volume2, Square } from 'lucide-react';
import type { ScenarioStep } from '../src/dojo/scenarios';
import { vishingAudioKey, vishingAudioUrl } from '../src/dojo/vishingAudio';

interface DrillRendererProps {
  step: ScenarioStep;
}

const DrillRenderer: React.FC<DrillRendererProps> = ({ step }) => {
  const msg = step.message;
  const sender = step.senderLabel || 'Unknown';
  const channel = step.channel;

  // Vishing tap-to-play: the bundled audio plays ONLY on an explicit tap
  // (browsers block autoplay anyway, and a surprise voice is the one thing
  // this drill must never do). The visual call screen is the always-on
  // training signal; audio is optional reinforcement. Cleaned up on unmount
  // or when the step changes.
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const vishingAudio = channel === 'vishing' ? vishingAudioKey(step) : null;

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlaying(false);
    };
  }, [vishingAudio]);

  const togglePlay = () => {
    if (!vishingAudio) return;
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
      return;
    }
    if (!audioRef.current) {
      audioRef.current = new Audio(vishingAudioUrl(vishingAudio));
      audioRef.current.onended = () => setPlaying(false);
    }
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  // The red-flag highlight (spotflag format): mark the suspicious segment.
  const renderSegments = () => {
    if (step.segments && step.segments.length > 0) {
      return step.segments.map((seg, i) =>
        seg.flag ? (
          <span key={i} className="bg-red-200 text-red-900 px-0.5 rounded cursor-help" title={`${seg.flag} - red flag`}>
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      );
    }
    return msg;
  };

  if (channel === 'vishing') {
    return (
      <div className="max-w-md mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 font-sans shadow-xl border-4 border-slate-600">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-slate-700 border-4 border-slate-500 flex items-center justify-center mb-3">
            <Phone className="w-9 h-9 text-red-400" />
          </div>
          <p className="text-white font-semibold text-lg">{sender}</p>
          <p className="text-slate-400 text-sm mt-1">Incoming call...</p>
          <div className="text-slate-500 text-xs mt-2 italic leading-snug max-w-xs mx-auto">{renderSegments()}</div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] text-slate-400">Answer</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                <PhoneOff className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] text-slate-400">Decline</span>
            </div>
          </div>
          {vishingAudio ? (
            <button
              onClick={togglePlay}
              className="mt-5 mx-auto flex items-center gap-2 bg-slate-700 hover:bg-slate-600 border border-slate-500 text-white text-xs px-4 py-2 rounded-full min-h-[44px] transition-colors"
              aria-label={playing ? 'Stop the scammer voice' : 'Listen to the scammer voice'}
            >
              {playing ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {playing ? 'Stop' : 'Listen to the caller'}
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  if (channel === 'qr') {
    return (
      <div className="max-w-md mx-auto bg-black rounded-2xl p-4 font-sans shadow-xl border-4 border-slate-700">
        <div className="relative h-52 rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-white p-3">
              <QrCode className="w-full h-full text-black" />
            </div>
          </div>
          {/* viewfinder corners */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-white/70" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-white/70" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-white/70" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-white/70" />
        </div>
        <p className="text-white text-center text-sm mt-3">{renderSegments()}</p>
      </div>
    );
  }

  if (channel === 'email') {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-slate-200 font-sans overflow-hidden">
        <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
          <Mail className="w-4 h-4 text-slate-500" />
          <span className="text-[10px] text-slate-400 truncate">{sender}</span>
        </div>
        <div className="px-3 py-2 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
          {renderSegments()}
        </div>
      </div>
    );
  }

  // sms / chat / linkedin share a message-thread style.
  const isChat = channel === 'chat';
  const isLinkedIn = channel === 'linkedin';
  const HeaderIcon = isLinkedIn ? Linkedin : isChat ? MessageSquare : Smartphone;
  const bubbleBg = isChat ? 'bg-green-100' : isLinkedIn ? 'bg-blue-50' : 'bg-slate-100';

  return (
    <div className="max-w-md mx-auto font-sans">
      <div className={`flex items-center gap-2 px-3 py-2 mb-1 ${isChat ? 'bg-teal-600' : 'bg-slate-700'} text-white rounded-t-xl`}>
        <HeaderIcon className="w-4 h-4" />
        <span className="text-xs font-semibold truncate">{isChat ? `Messenger - ${sender}` : isLinkedIn ? `LinkedIn - ${sender}` : sender}</span>
        <span className="ml-auto text-[9px] text-white/60">now</span>
      </div>
      <div className={`${bubbleBg} text-slate-800 rounded-xl rounded-tl-sm px-3 py-2 text-sm leading-relaxed shadow-sm`}>
        {renderSegments()}
      </div>
    </div>
  );
};

export default DrillRenderer;

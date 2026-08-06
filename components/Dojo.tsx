import React, { useState, useEffect, useRef } from 'react';
import {
  Send, RefreshCw, Trophy, HelpCircle, ShieldCheck, ShieldAlert, Smartphone,
  Mail, Briefcase, Phone, QrCode, Package, Zap, Users, ChevronRight, Bot, ArrowLeft,
  Landmark, Truck, FileSearch, Heart, TrendingUp, Scale, ScanLine, PhoneCall,
  Fingerprint, Banknote, HandCoins, HeartHandshake, Gift, CheckCheck, ChevronDown, Flame,
  type LucideIcon,
} from 'lucide-react';
import { playSound } from '../utils/sound';
import { setDocumentLang } from '../src/utils/lang';
import { type Scenario, type ScenarioStep, type ScenarioDifficulty, type ScenarioFamily } from '../src/dojo/scenarios';
import { ALL_SCENARIOS } from '../src/dojo/scenarios.generated';
import { type LearnerProgress, emptyProgress, applyAnswer, sessionPlan, recordDailyGoal, streakStatus, familyMasteryState, isFamilyUnlocked, isTierUnlocked } from '../src/dojo/progress';
import { saveTrainingProgress, loadTrainingProgress } from '../src/api/storageClient';
import { type GameState, startScenario, answerStep, advanceFromFeedback, rankFor } from '../src/dojo/engine';
import { createDojoChat } from '../services/aiService';

interface DojoProps {
  selectedLanguage: string;
}

type View = 'select' | 'family' | 'scenario' | 'ai';

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  sms: <Smartphone className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
  chat: <Send className="w-5 h-5" />,
  linkedin: <Briefcase className="w-5 h-5" />,
  vishing: <Phone className="w-5 h-5" />,
  qr: <QrCode className="w-5 h-5" />,
};

const DIFF_COLOR: Record<Scenario['difficulty'], string> = {
  easy: 'text-green-400 border-green-700',
  medium: 'text-yellow-400 border-yellow-700',
  hard: 'text-red-400 border-red-700',
};

// Curated display order for the family-select screen.
const FAMILY_ORDER: ScenarioFamily[] = [
  'ewallet', 'bank', 'telco', 'delivery', 'customs', 'job', 'romance', 'investment',
  'government', 'quishing', 'vishing', 'sim-pretext', 'family-emergency', 'remittance',
  'loan-app', 'charity', 'fake-reward', 'good-message',
];

interface FamilyMeta {
  label: string;
  icon: LucideIcon;
  blurb: string;
}

const FAMILY_META: Record<ScenarioFamily, FamilyMeta> = {
  ewallet: { label: 'E-wallet Scams', icon: Smartphone, blurb: 'GCash, Maya, GoTyme and wallet app tricks.' },
  bank: { label: 'Bank Scams', icon: Landmark, blurb: 'Banking calls, emails, and OTP traps.' },
  telco: { label: 'Telco Scams', icon: Phone, blurb: 'SIM and telco account takeover tricks.' },
  delivery: { label: 'Delivery Scams', icon: Truck, blurb: 'Fake parcel fees and delivery links.' },
  customs: { label: 'Customs & Parcel', icon: FileSearch, blurb: 'Parcel clearance fee demands.' },
  job: { label: 'Job Scams', icon: Briefcase, blurb: 'Fake jobs that ask you to pay to work.' },
  romance: { label: 'Romance Scams', icon: Heart, blurb: 'Catfishers who ask you for money.' },
  investment: { label: 'Investment Scams', icon: TrendingUp, blurb: 'Too-good crypto and stock offers.' },
  government: { label: 'Government Impersonation', icon: Scale, blurb: 'Fake officials, fines, and threats.' },
  quishing: { label: 'QR Code Scams', icon: ScanLine, blurb: 'Fake QR codes stuck over real ones.' },
  vishing: { label: 'Phone Call Scams', icon: PhoneCall, blurb: 'Scam calls that fake your bank.' },
  'sim-pretext': { label: 'SIM Swap Scams', icon: Fingerprint, blurb: 'Thieves who take over your SIM.' },
  'family-emergency': { label: 'Family Emergency', icon: Users, blurb: 'Fake relatives claiming to be in trouble.' },
  remittance: { label: 'Remittance Scams', icon: Banknote, blurb: 'Money transfer and payout tricks.' },
  'loan-app': { label: 'Loan App Scams', icon: HandCoins, blurb: 'Predatory loan apps and fake lenders.' },
  charity: { label: 'Charity Scams', icon: HeartHandshake, blurb: 'Fake donation pleas after disasters.' },
  'fake-reward': { label: 'Fake Rewards', icon: Gift, blurb: 'Prizes you never entered.' },
  'good-message': { label: 'Real or Fake?', icon: CheckCheck, blurb: 'Learn what real alerts look like.' },
};

const scenariosForFamily = (family: ScenarioFamily): Scenario[] => ALL_SCENARIOS.filter((s) => s.family === family);

const countByFamily = (family: ScenarioFamily, difficulty?: ScenarioDifficulty): number =>
  ALL_SCENARIOS.filter((s) => s.family === family && (!difficulty || s.difficulty === difficulty)).length;

// One pool per family, fed to the progression engine's sessionPlan.
const POOL_BY_FAMILY: Record<ScenarioFamily, string[]> = FAMILY_ORDER.reduce((acc, family) => {
  acc[family] = scenariosForFamily(family).map((s) => s.id);
  return acc;
}, {} as Record<ScenarioFamily, string[]>);

// Local calendar day (YYYY-MM-DD), not UTC: the streak resets at the user's
// midnight, not Greenwich.
const dayKey = (): string => {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
};

const DIFFICULTIES: ScenarioDifficulty[] = ['easy', 'medium', 'hard'];
const DAILY_GOAL = 3;

const Dojo: React.FC<DojoProps> = ({ selectedLanguage }) => {
  const [view, setView] = useState<View>('select');
  const [familyView, setFamilyView] = useState<ScenarioFamily | null>(null);
  const [lockedFamily, setLockedFamily] = useState<ScenarioFamily | null>(null);
  const [expanded, setExpanded] = useState<Record<ScenarioDifficulty, boolean>>({ easy: false, medium: false, hard: false });
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [game, setGame] = useState<GameState | null>(null);
  const [step, setStep] = useState<ScenarioStep | null>(null);
  const [feedbackTip, setFeedbackTip] = useState<string | null>(null);

  // Progression engine state, persisted server-side (pseudonymous learner_key).
  const [progress, setProgress] = useState<LearnerProgress>(emptyProgress);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [sessionIds, setSessionIds] = useState<string[]>([]);
  const [today, setToday] = useState<string>(dayKey);
  const [todayCorrect, setTodayCorrect] = useState(0);

  // AI live-simulator mode (optional advanced tab).
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [aiBusy, setAiBusy] = useState(false);
  const [aiHealth, setAiHealth] = useState(100);
  const [aiStatus, setAiStatus] = useState<'active' | 'won' | 'lost' | 'error'>('active');
  const [aiError, setAiError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    setDocumentLang(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, aiBusy]);

  // Reset the daily counter when the calendar day rolls over.
  useEffect(() => {
    const key = dayKey();
    if (key !== today) {
      setToday(key);
      setTodayCorrect(0);
    }
  }, [today]);

  // Load persisted progress once on mount (best-effort; offline stays local).
  useEffect(() => {
    let cancelled = false;
    loadTrainingProgress<LearnerProgress>().then((loaded) => {
      if (cancelled || !loaded) return;
      setProgress(loaded);
      setTodayCorrect(0);
    }).finally(() => { if (!cancelled) setProgressLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  // ---- Scenario mode ----
  const openScenario = (id: string) => {
    playSound('click');
    const s = ALL_SCENARIOS.find((x) => x.id === id);
    if (!s) return;
    const started = startScenario(s);
    setScenario(s);
    setGame(started.state);
    setStep(started.step);
    setFeedbackTip(null);
    setView('scenario');
  };

  // Manual pick from a family list: ignore any queued session plan.
  const openFromFamily = (id: string) => {
    setSessionIds([]);
    openScenario(id);
  };

  // Progression-aware session: mix 2-3 drills across unlocked families.
  const startSession = () => {
    playSound('click');
    const plan = sessionPlan(progress, today, POOL_BY_FAMILY);
    if (plan.length === 0) {
      openFamily('ewallet');
      return;
    }
    setSessionIds(plan.slice(1));
    openScenario(plan[0]);
  };

  const nextDrill = () => {
    playSound('click');
    if (sessionIds.length === 0) return;
    const [nextId, ...rest] = sessionIds;
    setSessionIds(rest);
    openScenario(nextId);
  };

  const openFamily = (family: ScenarioFamily) => {
    playSound('click');
    // Gate manual selection too: a locked family shows its lock state instead
    // of opening drills the learner is not ready for (consistent with
    // sessionPlan, which only picks unlocked families).
    const unlocked = isFamilyUnlocked(progress, family);
    const tierUnlocked = isTierUnlocked(progress, 'hard') || family === 'ewallet' || family === 'fake-reward';
    if (!unlocked) {
      setLockedFamily(family);
      setView('family');
      return;
    }
    setFamilyView(family);
    setExpanded({ easy: false, medium: false, hard: false });
    setView('family');
  };

  const toggleExpand = (difficulty: ScenarioDifficulty) => {
    playSound('click');
    setExpanded((prev) => ({ ...prev, [difficulty]: !prev[difficulty] }));
  };

  const choose = (choiceId: string) => {
    if (!scenario || !game || !step) return;
    playSound('click');
    // Capture the CURRENT step's tip before the engine advances, so the
    // feedback panel shows the rule for the step just answered.
    setFeedbackTip(step.tip);
    const result = answerStep(scenario, game, choiceId);
    setGame(result.state);
    setStep(result.step);
    // Functional updates avoid stale closures; persist the updated progress so
    // mastery/streaks survive reloads and devices.
    setTodayCorrect((prev) => {
      const next = prev + (result.correct ? 1 : 0);
      setProgress((p) => {
        const withAnswer = applyAnswer(p, { scenario, correct: result.correct, atDay: today });
        const saved = recordDailyGoal(withAnswer, next, DAILY_GOAL, today);
        saveTrainingProgress(saved);
        return saved;
      });
      return next;
    });
    if (result.state.phase === 'feedback') playSound('hover');
    if (result.won) playSound('success');
    if (result.lost) playSound('alert');
  };

  const nextStep = () => {
    if (!scenario || !game) return;
    playSound('click');
    const advanced = advanceFromFeedback(scenario, game);
    setGame(advanced);
    if (advanced.phase === 'step') {
      setStep(scenario.steps[advanced.stepIndex] ?? null);
    } else {
      setStep(null);
    }
  };

  const backToSelect = () => {
    playSound('click');
    setView('select');
    setFamilyView(null);
    setScenario(null);
    setGame(null);
    setStep(null);
  };

  // ---- AI live mode ----
  const startAi = async () => {
    playSound('click');
    setAiStatus('active');
    setMessages([]);
    setAiHealth(100);
    setAiError('');
    setView('ai');
    try {
      const chat = createDojoChat(selectedLanguage);
      chatRef.current = chat;
      const result = await chat.sendMessage('Start simulation.');
      const text = result.response.text();
      if (typeof result.health === 'number') setAiHealth(result.health);
      setMessages([{ role: 'model', text: text || 'Hello!' }]);
      playSound('scan');
    } catch (error: any) {
      handleAiError(error);
    }
  };

  const sendAi = async () => {
    if (!input.trim() || aiBusy || aiStatus !== 'active') return;
    playSound('typing');
    const msg = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setAiBusy(true);
    try {
      const result = await chatRef.current.sendMessage(msg);
      const text = result.response.text() || '...';
      if (typeof result.health === 'number') setAiHealth(result.health);
      setMessages((prev) => [...prev, { role: 'model', text }]);
      if (result.gameOver || /GAME OVER|Nahuli mo/i.test(text)) {
        playSound('success');
        setAiStatus('won');
      } else if (/FAILURE|Huli ka|Naloko/i.test(text)) {
        playSound('alert');
        setAiStatus('lost');
      } else {
        playSound('hover');
      }
    } catch (error: any) {
      handleAiError(error);
    } finally {
      setAiBusy(false);
    }
  };

  const handleAiError = (error: any) => {
    const s = String(error?.message || error || '');
    setAiStatus('error');
    setAiError(
      /429/.test(s) ? 'Too many requests. Wait a moment.'
      : /quota|exhausted/i.test(s) ? 'AI quota reached for today.'
      : /network|fetch/i.test(s) ? 'Connection error. Check your internet.'
      : 'The AI simulator could not start right now.'
    );
    playSound('alert');
  };

  const masteryLabel = (family: ScenarioFamily): string => familyMasteryState(progress, family).toUpperCase();

  const renderStreakBar = () => {
    const streak = streakStatus(progress);
    return (
      <div className="mb-4 border-2 border-slate-700 bg-slate-900/80 p-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-400" />
          <span className="font-['Press_Start_2P'] text-[10px] text-orange-300">STREAK {streak.current} {streak.current === 1 ? 'DAY' : 'DAYS'}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <span className="font-['Press_Start_2P'] text-[10px] text-cyan-300">TODAY {todayCorrect}/{DAILY_GOAL}</span>
        </div>
        <p className="w-full md:w-auto text-cyan-200/80 font-['VT323'] text-lg leading-none">3 drills a day keeps the scammer away.</p>
      </div>
    );
  };

  const renderSelect = () => (
    <div className="w-full max-w-3xl mx-auto">
      {renderStreakBar()}

      <div className="mb-6 border-4 border-cyan-600 bg-cyan-900/20 p-4 animate-fade-in font-['VT323']">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-cyan-600 text-black shrink-0 border-2 border-cyan-400 hidden md:block">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold text-lg md:text-xl font-['Press_Start_2P'] mb-2 uppercase">Train Your Scam Radar</h3>
            <p className="text-cyan-100/90 text-lg md:text-xl">
              Pick a scam family below, or let the Dojo build your daily session.
              You will see real-looking scam messages and choose what to do.
              No tech experience needed - this is for everyone, including your grandparents.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={startSession}
        className="w-full mb-6 px-5 py-4 bg-cyan-700 hover:bg-cyan-600 text-white font-['Press_Start_2P'] text-xs md:text-sm border-b-4 border-cyan-900 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 min-h-[44px]"
      >
        <Zap className="w-4 h-4" /> START TODAY'S DRILLS
      </button>

      <h4 className="text-slate-300 font-['Press_Start_2P'] text-xs mb-3 uppercase">Pick a scam family</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FAMILY_ORDER.map((family) => {
          const meta = FAMILY_META[family];
          const Icon = meta.icon;
          const total = countByFamily(family);
          return (
            <button
              key={family}
              onClick={() => openFamily(family)}
              className="text-left bg-slate-900 border-4 border-slate-700 hover:border-cyan-500 p-4 min-h-[44px] transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5 group"
            >
              <div className="flex items-start justify-between mb-2 gap-3">
                <span className="p-2 bg-slate-800 border-2 border-slate-600 text-cyan-400 group-hover:border-cyan-500 transition-colors">
                  <Icon className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-['Press_Start_2P'] px-2 py-1 border border-cyan-700 text-cyan-300 whitespace-nowrap">{total} DRILLS</span>
              </div>
              <h4 className="text-white font-['Press_Start_2P'] text-xs mb-1">{meta.label}</h4>
              <p className="text-slate-400 font-['VT323'] text-lg leading-tight">{meta.blurb}</p>
              <p className="mt-2 text-[10px] font-['Press_Start_2P'] text-slate-400">
                STATUS: <span className="text-cyan-300">{masteryLabel(family)}</span>
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={startAi}
          className="px-5 py-3 bg-indigo-700 hover:bg-indigo-600 text-white font-['Press_Start_2P'] text-xs border-b-4 border-indigo-900 active:border-b-0 active:translate-y-1 transition-all inline-flex items-center gap-2 min-h-[44px]"
        >
          <Bot className="w-4 h-4" /> ADVANCED: PRACTICE VS LIVE AI SCAMMER
        </button>
      </div>
    </div>
  );

  const renderFamily = () => {
    if (!familyView) return null;
    const meta = FAMILY_META[familyView];
    const Icon = meta.icon;
    const familyScenarios = scenariosForFamily(familyView);
    const total = familyScenarios.length;

    return (
      <div className="w-full max-w-3xl mx-auto">
        {renderStreakBar()}

        <div className="mb-4 flex items-center justify-between">
          <button onClick={backToSelect} className="flex items-center gap-1 text-slate-400 hover:text-white font-['VT323'] text-lg min-h-[44px]">
            <ArrowLeft className="w-4 h-4" /> FAMILIES
          </button>
          <span className="text-[10px] text-slate-400 font-['Press_Start_2P']">{total} DRILLS</span>
        </div>

        {lockedFamily === familyView && !isFamilyUnlocked(progress, familyView) && (
          <div className="mb-4 border-2 border-amber-700 bg-amber-950/40 px-3 py-2 font-['VT323'] text-lg text-amber-200">
            This family is locked. Master the earlier families first (vishing
            unlocks after you master bank; hard drills unlock after 4 mastered
            families). Your progress is what opens the door.
          </div>
        )}

        <div className="mb-6 border-4 border-cyan-600 bg-cyan-900/20 p-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-cyan-600 text-black shrink-0 border-2 border-cyan-400">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg md:text-xl font-['Press_Start_2P'] mb-2 uppercase">{meta.label}</h3>
              <p className="text-cyan-100/90 text-lg md:text-xl">{meta.blurb}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {DIFFICULTIES.map((d) => {
              const n = familyScenarios.filter((s) => s.difficulty === d).length;
              if (n === 0) return null;
              return (
                <span key={d} className={`text-[10px] font-['Press_Start_2P'] px-2 py-1 border ${DIFF_COLOR[d]}`}>
                  {d.toUpperCase()} {n}
                </span>
              );
            })}
            <span className="text-[10px] font-['Press_Start_2P'] px-2 py-1 border border-cyan-700 text-cyan-300">
              STATUS: {masteryLabel(familyView)}
            </span>
          </div>
        </div>

        {DIFFICULTIES.map((d) => {
          const items = familyScenarios.filter((s) => s.difficulty === d);
          if (items.length === 0) return null;
          const visible = expanded[d] ? items : items.slice(0, 6);
          return (
            <div key={d} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-['Press_Start_2P'] px-2 py-1 border ${DIFF_COLOR[d]}`}>{d.toUpperCase()}</span>
                <span className="text-slate-400 font-['VT323'] text-lg">{items.length} drills</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {visible.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => openFromFamily(s.id)}
                    className="text-left bg-slate-900 border-4 border-slate-700 hover:border-cyan-500 p-4 min-h-[44px] transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-white font-['Press_Start_2P'] text-xs">{s.title}</h4>
                      <span className={`text-[10px] font-['Press_Start_2P'] px-2 py-1 border shrink-0 ${DIFF_COLOR[s.difficulty]}`}>
                        {s.difficulty.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-slate-400 font-['VT323'] text-lg leading-tight">{s.category}</p>
                    <p className="text-slate-300 text-base font-['VT323'] leading-tight mt-1 line-clamp-2">{s.setup}</p>
                  </button>
                ))}
              </div>
              {items.length > 6 && (
                <button
                  onClick={() => toggleExpand(d)}
                  className="mt-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-['Press_Start_2P'] text-[10px] border-2 border-slate-600 min-h-[44px] flex items-center justify-center gap-2"
                >
                  {expanded[d] ? (
                    <><ChevronDown className="w-4 h-4 rotate-180" /> SHOW LESS</>
                  ) : (
                    <><ChevronDown className="w-4 h-4" /> SHOW {items.length - 6} MORE</>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderScenario = () => {
    if (!scenario || !game) return null;
    const inFeedback = game.phase === 'feedback';
    const finished = game.phase === 'won' || game.phase === 'lost';
    const rank = rankFor(game.correctCount, game.totalSteps);

    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={backToSelect} className="flex items-center gap-1 text-slate-400 hover:text-white font-['VT323'] text-lg min-h-[44px]">
            <ArrowLeft className="w-4 h-4" /> FAMILIES
          </button>
          <div className="flex items-center gap-3">
            {sessionIds.length > 0 && (
              <span className="text-[10px] text-slate-400 font-['Press_Start_2P']">SESSION {sessionIds.length + 1}</span>
            )}
            <span className="text-[10px] text-slate-400 font-['Press_Start_2P']">HP</span>
            <div className="w-24 h-3 bg-slate-950 border border-slate-600">
              <div className={`h-full transition-all duration-500 ${game.hp > 60 ? 'bg-green-500' : game.hp > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                   style={{ width: `${game.hp}%` }} />
            </div>
            <span className="text-slate-300 font-['VT323'] text-sm">{game.hp}/100</span>
          </div>
        </div>

        <div className={`bg-slate-900 border-4 ${finished ? (game.phase === 'won' ? 'border-green-600' : 'border-red-600') : 'border-slate-700'} transition-all shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]`}>
          <div className="p-4 border-b-4 border-slate-700 bg-slate-800/50">
            <h2 className="text-white font-['Press_Start_2P'] text-sm md:text-base mb-1">{scenario.title}</h2>
            <p className="text-slate-300 font-['VT323'] text-lg">{scenario.setup}</p>
            <div className="mt-1 text-[10px] text-slate-400 font-['Press_Start_2P']">
              SCORE {game.score} &middot; {game.correctCount}/{game.totalSteps} CORRECT
            </div>
          </div>

          <div className="p-4 space-y-4">
            {finished ? (
              <div className={`text-center py-6 animate-fade-in ${game.phase === 'won' ? 'text-green-300' : 'text-red-300'}`}>
                {game.phase === 'won' ? <Trophy className="w-14 h-14 mx-auto mb-3 text-yellow-400" /> : <ShieldAlert className="w-14 h-14 mx-auto mb-3 text-red-400 animate-pulse" />}
                <h3 className="text-xl md:text-2xl font-['Press_Start_2P'] mb-3 text-white">
                  {game.phase === 'won' ? `SHIELD UP! (${rank})` : 'TRY AGAIN'}
                </h3>
                <p className="font-['VT323'] text-lg md:text-xl max-w-lg mx-auto leading-tight">
                  {scenario.debrief}
                </p>
                <p className="mt-3 font-['VT323'] text-lg text-slate-300">
                  You answered {game.correctCount} of {game.totalSteps} correctly. Rank: <span className="text-white">{rank}</span>
                </p>
                <p className="mt-2 font-['VT323'] text-lg text-slate-300">
                  Family practiced: <span className="text-white">{FAMILY_META[scenario.family].label}</span> - Status: <span className="text-cyan-300">{masteryLabel(scenario.family)}</span>
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {sessionIds.length > 0 && (
                    <button onClick={nextDrill} className="px-4 py-2 bg-yellow-700 hover:bg-yellow-600 text-white font-['Press_Start_2P'] text-[10px] border-b-4 border-yellow-900 active:border-b-0 active:translate-y-1 min-h-[44px]">
                      NEXT DRILL ({sessionIds.length} LEFT)
                    </button>
                  )}
                  <button onClick={backToSelect} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-['Press_Start_2P'] text-[10px] border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 min-h-[44px]">
                    MORE SCENARIOS
                  </button>
                  <button onClick={() => openScenario(scenario.id)} className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white font-['Press_Start_2P'] text-[10px] border-b-4 border-cyan-900 active:border-b-0 active:translate-y-1 min-h-[44px]">
                    RETRY
                  </button>
                </div>
              </div>
            ) : inFeedback ? (
              <div className="animate-fade-in">
                <div className={`border-4 p-4 ${game.lastCorrect ? 'border-green-600 bg-green-950/30' : 'border-red-600 bg-red-950/30'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {game.lastCorrect ? <ShieldCheck className="w-6 h-6 text-green-400" /> : <ShieldAlert className="w-6 h-6 text-red-400" />}
                    <span className={`font-['Press_Start_2P'] text-xs ${game.lastCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {game.lastCorrect ? 'CORRECT' : 'NOT QUITE'}
                    </span>
                  </div>
                  <p className="font-['VT323'] text-xl text-slate-100 leading-tight">{game.lastFeedback}</p>
                  <p className="mt-3 font-['VT323'] text-lg text-cyan-300 leading-tight border-t-2 border-slate-700 pt-2">
                    <span className="text-white font-bold">REMEMBER: </span>{feedbackTip ?? ''}
                  </p>
                </div>
                <button onClick={nextStep} className="mt-4 w-full py-3 bg-cyan-700 hover:bg-cyan-600 text-white font-['Press_Start_2P'] text-xs border-b-4 border-cyan-900 active:border-b-0 active:translate-y-1 flex items-center justify-center gap-2 min-h-[44px]">
                  NEXT SITUATION <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : step ? (
              <div className="animate-fade-in">
                {/* The incoming message */}
                <div className="max-w-md mx-auto bg-white text-black rounded-xl p-3 font-sans shadow-lg">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-300">
                    <span className="p-1.5 bg-slate-200 rounded-full text-slate-700">
                      {CHANNEL_ICONS[step.channel]}
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-slate-800">{step.senderLabel}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wide">{step.channel} message</div>
                    </div>
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed">{step.message}</p>
                </div>

                <p className="mt-4 font-['Press_Start_2P'] text-xs text-cyan-300 mb-3">{step.question}</p>
                <div className="space-y-3">
                  {step.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => choose(opt.id)}
                      className="w-full text-left bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-cyan-500 text-slate-100 p-3 min-h-[44px] font-sans text-sm md:text-base transition-colors"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  const renderAi = () => (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <button onClick={backToSelect} className="flex items-center gap-1 text-slate-400 hover:text-white font-['VT323'] text-lg min-h-[44px]">
          <ArrowLeft className="w-4 h-4" /> FAMILIES
        </button>
      </div>
      <div className={`bg-slate-900 border-4 ${aiStatus === 'won' ? 'border-green-600' : aiStatus === 'lost' ? 'border-red-600' : aiStatus === 'error' ? 'border-orange-500' : 'border-indigo-600'}`}>
        <div className="p-4 border-b-4 border-slate-700 bg-indigo-900/50 flex justify-between items-center">
          <div>
            <h2 className="text-white font-['Press_Start_2P'] text-sm">LIVE AI SCAMMER</h2>
            <p className="text-slate-300 font-['VT323'] text-lg">The AI pretends to be a scammer. Reply and spot their lies. Type BLOCK or SCAM when you catch them.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-['Press_Start_2P']">HP</span>
            <div className="w-20 h-3 bg-slate-950 border border-slate-600">
              <div className={`h-full ${aiHealth > 60 ? 'bg-green-500' : aiHealth > 30 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${aiHealth}%` }} />
            </div>
          </div>
        </div>
        <div className="h-[480px] bg-slate-950 overflow-y-auto p-4 space-y-4 font-sans">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {aiBusy && (
            <div className="flex justify-start">
              <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          {aiStatus === 'won' && (
            <div className="text-center text-green-300 font-['VT323'] text-xl border-2 border-green-600 bg-green-950/40 p-4">
              <Trophy className="w-10 h-10 mx-auto mb-2 text-yellow-400" />
              YOU CAUGHT THE SCAMMER! Good instinct.
            </div>
          )}
          {aiStatus === 'lost' && (
            <div className="text-center text-red-300 font-['VT323'] text-xl border-2 border-red-600 bg-red-950/40 p-4">
              The scammer got info from you. Learn the red flags and try again.
            </div>
          )}
          {aiStatus === 'error' && (
            <div className="text-center text-orange-300 font-['VT323'] text-lg border-2 border-orange-500 bg-orange-950/40 p-4">
              {aiError}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 border-t-4 border-slate-700 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendAi()}
            disabled={aiStatus !== 'active'}
            placeholder="Reply to the scammer..."
            className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-full px-4 py-2 font-sans text-sm focus:outline-none focus:border-indigo-500 disabled:opacity-40"
          />
          <button onClick={sendAi} disabled={aiStatus !== 'active' || !input.trim()} aria-label="Send"
            className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full disabled:opacity-40 transition-all min-h-[44px] min-w-[44px]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  if (view === 'scenario') return renderScenario();
  if (view === 'ai') return renderAi();
  if (view === 'family') return renderFamily();
  return renderSelect();
};

export default Dojo;

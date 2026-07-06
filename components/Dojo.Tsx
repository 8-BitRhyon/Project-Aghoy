import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { createDojoChat, DOJO_SCENARIOS } from '../services/aiService';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Heart, Skull, Zap, Terminal, ChevronRight, Trophy, Activity } from 'lucide-react';
import { playSound } from '../utils/sound';

const DojoMessage = React.memo(({ msg, isLast }: { msg: { role: string; text: string }; isLast: boolean }) => {
  const isModel = msg.role === 'model';
  const { displayedText } = useTypingEffect(msg.text, isModel && isLast);
  return (
    <div className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-4 max-w-[85%] border-2 ${msg.role === 'user' ? 'bg-indigo-900/40 border-indigo-500 shadow-[4px_4px_0_0_#4338ca]' : 'bg-slate-900/60 border-green-500 shadow-[4px_4px_0_0_#15803d]'}`}>
        <div className={`text-[10px] mb-1 uppercase font-bold tracking-widest opacity-50 ${msg.role === 'user' ? 'text-indigo-400 text-right' : 'text-green-400'}`}>
          {msg.role === 'user' ? 'AUTH_USER: DEFENDER' : 'TRACED_ID: ADVERSARY'}
        </div>
        <div className="prose prose-invert max-w-none text-lg leading-tight text-green-400 font-mono">
          <ReactMarkdown>{isLast && isModel ? displayedText : msg.text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
});

const Dojo: React.FC<{ selectedLanguage: string }> = ({ selectedLanguage }) => {
  const [health, setHealth] = useState(100);
  const [xp, setXp] = useState(0);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gameStatus, setGameStatus] = useState<'active' | 'won' | 'lost' | 'error'>('active');
  const [feedback, setFeedback] = useState('');
  
  // Use keys from DOJO_SCENARIOS
  const scenarios = Object.keys(DOJO_SCENARIOS) as Array<keyof typeof DOJO_SCENARIOS>;
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const currentScenarioKey = scenarios[scenarioIdx];

  const chatSessionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startNewGame = async () => {
    setIsLoading(true);
    setMessages([]);
    setHealth(100);
    setGameStatus('active');
    setFeedback('');
    try {
      // Passes both language and scenario to the updated service
      const chat = createDojoChat(selectedLanguage, currentScenarioKey); 
      chatSessionRef.current = chat;
      
      // Triggers the /start endpoint via the service logic
      const result = await chat.sendMessage("INITIALIZE_SIMULATION");
      
      processResponse(result.response.text());
      playSound('scan');
    } catch (e) { 
      console.error(e);
      setGameStatus('error'); 
    } finally { 
      setIsLoading(false); 
    }
  };

  const processResponse = (rawText: string) => {
    // WIN CONDITION: Simulation End marker
    if (rawText.includes("[Simulation End]") || rawText.includes('"missionComplete": true')) {
      setGameStatus('won');
      setXp(p => p + 500);
      playSound('success');
    }

    // Filter Judgment/Feedback logic
    const judgmentMatch = rawText.match(/---JUDGMENT---\n?([\s\S]*?)\n?---RESPONSE---/);
    let cleanText = rawText;

    if (judgmentMatch) {
      try {
        const jsonStr = judgmentMatch[1].trim();
        const judgment = JSON.parse(jsonStr.startsWith('{') ? jsonStr : `{${jsonStr}}`);
        
        if (judgment.damage > 0) {
          setHealth(prev => {
            const nh = Math.max(0, prev - judgment.damage);
            if (nh <= 0) setGameStatus('lost');
            return nh;
          });
          setFeedback(judgment.feedback);
          playSound('alert');
        }

        if (judgment.missionComplete && gameStatus !== 'won') {
            setGameStatus('won');
            setXp(p => p + 500);
            playSound('success');
        }
      } catch (e) {
          console.error("Judgment Metadata Error");
      }
    }

    // Clean up text
    if (rawText.includes('---RESPONSE---')) {
        cleanText = rawText.split('---RESPONSE---')[1]?.trim() || "";
    } else {
        cleanText = rawText.replace(/---JUDGMENT---[\s\S]*?(---RESPONSE---|$)/, '').trim();
    }

    const sanitizedText = cleanText.replace(/_{3,}/g, '').replace(/-{3,}/g, '');

    if (sanitizedText) {
      setMessages(prev => [...prev, { role: 'model', text: sanitizedText }]);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || gameStatus !== 'active') return;
    const msg = input; setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setIsLoading(true);
    try {
      const res = await chatSessionRef.current.sendMessage(msg);
      // Update health if the backend returns it
      if (res.health !== undefined) {
         setHealth(res.health);
         if (res.health <= 0) setGameStatus('lost');
      }
      processResponse(res.response.text());
    } catch (error) { setGameStatus('error'); } finally { setIsLoading(false); }
  };

  const nextMission = () => {
    setScenarioIdx((prev) => (prev + 1) % scenarios.length);
  };

  useEffect(() => { startNewGame(); }, [selectedLanguage, scenarioIdx]);
  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  return (
    <div className="w-full max-w-4xl mx-auto font-['VT323'] text-green-400 relative">
      <div className="flex justify-between items-center bg-black border-4 border-slate-700 p-4 mb-4 shadow-[8px_8px_0_0_#000]">
        <div className="flex items-center gap-6">
          <div className="bg-slate-900 px-3 py-1 border-2 border-green-500 shadow-[inset_0_0_10px_#22c55e]">
            {/* Force string rendering to avoid symbol error */}
            <span className="text-xl tracking-widest uppercase">{String(currentScenarioKey)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Heart className={`w-6 h-6 ${health < 30 ? 'text-red-500 animate-pulse' : 'text-green-500'}`} />
            <div className="w-64 h-5 bg-slate-900 border-2 border-slate-700 relative overflow-hidden">
               <div className={`h-full transition-all duration-700 ${health < 30 ? 'bg-red-600' : 'bg-green-600'}`} style={{ width: `${health}%` }} />
               <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold tracking-widest uppercase">SANITY_LEVEL: {health}%</div>
            </div>
          </div>
        </div>
        <div className="text-xl text-yellow-500 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            XP: {xp}
        </div>
      </div>

      <div className="bg-black border-4 border-slate-800 p-1 relative shadow-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-20 opacity-20 bg-[repeating-linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        
        <div className="h-[500px] bg-[#050505] overflow-y-auto p-6 custom-scrollbar relative">
          <div className="mb-6 border-b border-green-900/50 pb-2 flex items-center gap-2 text-xs opacity-50 uppercase tracking-widest font-mono">
            <Terminal className="w-3 h-3" />
            <span>AGHOY_PROTOCOL_v4.2_CONNECTED</span>
          </div>
          {messages.map((msg, i) => (
            <DojoMessage key={i} msg={msg} isLast={i === messages.length - 1} />
          ))}
          {isLoading && <div className="text-green-800 animate-pulse mb-6 uppercase text-xs font-mono tracking-[0.2em]">...RECONSTRUCTING_PACKETS</div>}
          {feedback && health > 0 && (
            <div className="p-4 bg-red-950/40 border-2 border-red-500 text-red-400 mb-6 flex gap-3 items-center shadow-[4px_4px_0_0_#000]">
              <Zap className="w-5 h-5 shrink-0" />
              <span className="text-sm uppercase font-bold tracking-wide">THREAT_ALERT: {feedback}</span>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <div className="p-4 bg-slate-900/50 border-t-4 border-slate-800 flex gap-3">
          <div className="bg-black border-2 border-green-900 flex-1 flex items-center px-4">
            <span className="text-green-500 font-bold mr-2">&gt;</span>
            <input 
              value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="bg-transparent text-indigo-100 p-3 text-xl focus:outline-none w-full font-mono placeholder:opacity-20" 
              placeholder="AWAITING DEFENDER INPUT..." disabled={gameStatus !== 'active' || isLoading}
            />
          </div>
          <button onClick={handleSend} disabled={isLoading} className="bg-green-700 hover:bg-green-600 text-black px-8 font-bold border-b-4 border-r-4 border-black active:border-0 active:translate-y-1 transition-all uppercase tracking-tighter">
            EXECUTE
          </button>
        </div>
      </div>

      {gameStatus !== 'active' && (
        <div className="fixed inset-0 bg-[#050505]/95 flex flex-col items-center justify-center z-50 p-6 text-center backdrop-blur-lg">
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
           
           <div className="relative mb-8 z-10">
                {gameStatus === 'won' ? (
                    <div className="p-10 border-8 border-yellow-500 bg-slate-900 shadow-[12px_12px_0_0_#ca8a04]">
                        <Trophy className="w-32 h-32 text-yellow-500 mx-auto" />
                    </div>
                ) : (
                    <div className="p-10 border-8 border-red-600 bg-slate-900 shadow-[12px_12px_0_0_#991b1b]">
                        <Skull className="w-32 h-32 text-red-600 mx-auto" />
                    </div>
                )}
           </div>
           
           <h1 className={`text-6xl mb-4 font-['Press_Start_2P'] tracking-tighter uppercase z-10 ${gameStatus === 'won' ? 'text-yellow-500 shadow-yellow-500/50' : 'text-red-600 shadow-red-500/50'} drop-shadow-lg`}>
                {gameStatus === 'won' ? 'MISSION_CLEARED' : 'NEURAL_CRITICAL'}
           </h1>
           
           <div className="text-xl mb-12 max-w-2xl font-mono text-white bg-slate-900/80 p-8 border-4 border-slate-700 shadow-[8px_8px_0_0_#000] z-10 text-left">
                <p className="border-b border-slate-700 pb-2 mb-4 opacity-50 uppercase text-xs tracking-widest">Post-Mission Debrief:</p>
                {gameStatus === 'won' 
                    ? `INTEL_VERIFIED: Defender successfully countered the ${currentScenarioKey} protocol. Red flags identified and neutralized. Technical competence confirmed.` 
                    : 'BREACH_LOG: Psychological defenses were circumvented. Adversary gained access to PII. System integrity lost. Immediate retraining mandated.'}
           </div>

           <div className="flex gap-10 z-10">
             <button onClick={startNewGame} className="bg-slate-800 text-white px-10 py-6 text-2xl border-4 border-slate-600 hover:bg-slate-700 shadow-[6px_6px_0_0_#000] uppercase font-bold tracking-widest transition-transform active:translate-y-1">
                RETRY_SCAN
             </button>
             {gameStatus === 'won' && (
               <button onClick={nextMission} className="bg-yellow-500 text-black px-14 py-6 text-4xl font-bold border-b-8 border-r-8 border-yellow-800 active:border-0 active:translate-y-2 transition-all flex items-center gap-4 uppercase tracking-tighter">
                 NEXT_PHASE <ChevronRight className="w-10 h-10" />
               </button>
             )}
           </div>
        </div>
      )}
    </div>
  );
};

export default Dojo;
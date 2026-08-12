import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { Loader2, Search, Info, Lock, AlertOctagon, Image as ImageIcon, X, Bot, Coffee, History, Shield, Volume2, VolumeX } from 'lucide-react';
import { analyzeContent } from './services/aiService';
import { AnalysisResult, Verdict, UserStats } from './types';
import { t, normalizeLang } from './src/i18n';
import RecoveryLadder from './components/RecoveryLadder';
import ResultCard from './components/ResultCard';
import PixelLogo from './components/PixelLogo';
import StatsPanel from './components/StatsPanel';
import PrivacyConsent from './components/PrivacyConsent';
import { playSound, toggleMute, getMuteStatus } from './utils/sound';
import { sanitizeText } from './utils/privacy';
import { clearConsentToken } from './src/api/storageClient';
import useOfflineReportFlush from './hooks/useOfflineReportFlush';

const Dojo = lazy(() => import('./components/Dojo'));
const AboutModal = lazy(() => import('./components/AboutModal'));
const HistoryLog = lazy(() => import('./components/HistoryLog'));
const PrivacyPolicyModal = lazy(() => import('./components/PrivacyPolicyModal'));

const SCAM_EXAMPLES = [
  { 
    label: 'Task Scam', 
    text: 'Good day! We are hiring part-time employees. Earn ₱500-₱2000/day by just liking YouTube videos. No fees collected. Contact wa.me/12345678' 
  },
  { 
    label: 'Fake GCash', 
    text: 'GCash Warning: Your account has been restricted due to suspicious activity. Verify now at https://g-cash-verify.com to avoid suspension.' 
  },
  { 
    label: 'Love Scam', 
    text: 'Hello dear, I am Engineer James from US. I have a package for you with $50,000 inside but it is stuck at customs. Please send fee to release it.' 
  },
  { 
    label: 'Investment', 
    text: 'Invest 500 pesos and get 5000 pesos return in just 3 days! Proven and tested. PM me how.' 
  }
];

const MAX_IMAGE_SIZE_BYTES = 8 * 1024 * 1024;

const DEFAULT_STATS: UserStats = { totalScans: 0, highRiskCount: 0, scamsBlocked: 0 };

const isAllowedRasterImage = (type: string): boolean =>
  type.startsWith('image/') && type !== 'image/svg+xml';

const isValidStats = (value: unknown): value is UserStats => {
  if (!value || typeof value !== 'object') return false;
  const s = value as Record<string, unknown>;
  return (
    typeof s.totalScans === 'number' &&
    typeof s.highRiskCount === 'number' &&
    typeof s.scamsBlocked === 'number'
  );
};

const isValidHistoryEntry = (value: unknown): value is AnalysisResult => {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Record<string, unknown>;
  return (
    (entry.verdict === 'SAFE' || entry.verdict === 'SUSPICIOUS' || entry.verdict === 'HIGH_RISK') &&
    typeof entry.riskScore === 'number' &&
    Array.isArray(entry.redFlags) &&
    typeof entry.analysis === 'string' &&
    typeof entry.scamType === 'string' &&
    typeof entry.educationalTip === 'string'
  );
};

const ScanningOverlay = () => (
  <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center font-['Press_Start_2P'] backdrop-blur-sm">
    <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-600 mb-4">
      <div className="h-full bg-cyan-500 animate-[loading_2s_ease-in-out_infinite]"></div>
    </div>
    <div className="text-cyan-400 animate-pulse text-sm">ENCRYPTING UPLINK...</div>
    <div className="text-slate-500 text-[10px] mt-2 font-mono">ANALYZING THREAT VECTORS</div>
  </div>
);

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [honeypot, setHoneypot] = useState('');
  
  const [language, setLanguage] = useState('TAGALOG');
  const [showTriage, setShowTriage] = useState(false);
  const [triageState, setTriageState] = useState<'asked' | 'victim'>('asked');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [analysisId, setAnalysisId] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'SCANNER' | 'DOJO'>('DOJO');
  
  const [showAbout, setShowAbout] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const [hasConsent, setHasConsent] = useState(false);
  const [privacyResetKey, setPrivacyResetKey] = useState(0);
  const [isMuted, setIsMuted] = useState(getMuteStatus());
  
  const [stats, setStats] = useState<UserStats>({ totalScans: 0, highRiskCount: 0, scamsBlocked: 0 });
  const [scanHistory, setScanHistory] = useState<AnalysisResult[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isAnalyzingRef = useRef(false);

  // Flush the offline report queue on reconnect / foreground / 5-min timer.
  useOfflineReportFlush();

  const handleToggleMute = () => {
   const newStatus = toggleMute();
   setIsMuted(newStatus);
   if (!newStatus) playSound('click'); 
  };

  useEffect(() => {
    const consent = localStorage.getItem('aghoy_privacy_consent');
    setHasConsent(consent === 'granted');

    const checkConsent = () => {
       const updatedConsent = localStorage.getItem('aghoy_privacy_consent');
       setHasConsent(updatedConsent === 'granted');
    };
    window.addEventListener('storage', checkConsent);
    return () => window.removeEventListener('storage', checkConsent);
  }, []);

  useEffect(() => {
    try {
      const savedStats = localStorage.getItem('aghoy_stats');
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        if (isValidStats(parsed)) {
          setStats(parsed);
        } else {
          setStats(DEFAULT_STATS);
          localStorage.removeItem('aghoy_stats');
        }
      }
    } catch {
      setStats(DEFAULT_STATS);
      localStorage.removeItem('aghoy_stats');
    }

    try {
      const savedHistory = localStorage.getItem('aghoy_history');
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter(isValidHistoryEntry);
          setScanHistory(valid);
          if (valid.length !== parsed.length) {
            localStorage.setItem('aghoy_history', JSON.stringify(valid));
          }
        } else {
          setScanHistory([]);
        }
      }
    } catch {
      setScanHistory([]);
      localStorage.removeItem('aghoy_history');
    }
  }, []);

  useEffect(() => {
    const syncFromStorage = (e: StorageEvent) => {
      if (e.key === 'aghoy_stats') {
        if (e.newValue) {
          try {
            const parsed = JSON.parse(e.newValue);
            if (isValidStats(parsed)) setStats(parsed);
          } catch {}
        } else {
          setStats(DEFAULT_STATS);
        }
      }
      if (e.key === 'aghoy_history') {
        if (e.newValue) {
          try {
            const parsed = JSON.parse(e.newValue);
            if (Array.isArray(parsed)) setScanHistory(parsed.filter(isValidHistoryEntry));
          } catch {}
        } else {
          setScanHistory([]);
        }
      }
    };
    window.addEventListener('storage', syncFromStorage);
    return () => window.removeEventListener('storage', syncFromStorage);
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(160, textarea.scrollHeight)}px`;
    }
  }, [input]);

  useEffect(() => {
    const handleGlobalPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            if (!isAllowedRasterImage(blob.type)) {
              setError("IMAGE REJECTED: Only raster image files (PNG/JPG) are supported.");
              playSound('alert');
              return;
            }
            if (blob.size > MAX_IMAGE_SIZE_BYTES) {
              setError("IMAGE REJECTED: File exceeds 8MB limit.");
              playSound('alert');
              return;
            }
            playSound('click');
            const reader = new FileReader();
            reader.onloadend = () => {
              const result = typeof reader.result === 'string' ? reader.result : '';
              const commaIndex = result.indexOf(',');
              if (!result || commaIndex === -1) {
                setError("IMAGE READ FAILED: The pasted image could not be decoded. Try uploading the file instead.");
                playSound('alert');
                return;
              }
              setError(null);
              setSelectedImage(result.slice(commaIndex + 1));
              setImageMimeType(blob.type);
              setActiveTab('SCANNER');
            };
            reader.onerror = () => {
              setError("IMAGE READ FAILED: The browser could not read the pasted image. Try uploading the file.");
              playSound('alert');
            };
            reader.onabort = () => {
              setError("IMAGE READ CANCELLED: The image read was interrupted. Try again.");
            };
            reader.readAsDataURL(blob);
            return;
          }
        }
      }
    };

    window.addEventListener('paste', handleGlobalPaste);
    return () => window.removeEventListener('paste', handleGlobalPaste);
  }, []);

  const updateStatsAndHistory = (analysis: AnalysisResult) => {
    // Compute the next values from the committed state, then set state AND
    // persist together. Side effects are kept out of updater callbacks because
    // React may replay them (Strict Mode), which would double-write storage.
    setStats(prev => {
      const nextStats = { ...prev };
      nextStats.totalScans += 1;
      if (analysis.verdict === 'HIGH_RISK') {
        nextStats.highRiskCount += 1;
        nextStats.scamsBlocked += 1;
      } else if (analysis.verdict === 'SUSPICIOUS') {
        nextStats.scamsBlocked += 1;
      }
      return nextStats;
    });

    const safeAnalysis = {
      ...analysis,
      analysis: sanitizeText(analysis.analysis),
      scamType: analysis.scamType ? sanitizeText(analysis.scamType) : undefined,
      educationalTip: analysis.educationalTip ? sanitizeText(analysis.educationalTip) : undefined,
      senderEntity: analysis.senderEntity ? sanitizeText(analysis.senderEntity) : undefined,
      redFlags: Array.isArray(analysis.redFlags) ? analysis.redFlags.map((f) => sanitizeText(f)) : analysis.redFlags,
    };

    setScanHistory(prev => {
      const nextHistory = [safeAnalysis, ...prev].slice(0, 20);
      return nextHistory;
    });
  };

  // Persist committed state to localStorage from effects so writes happen once
  // per committed render, not inside updaters.
  useEffect(() => {
    if (stats.totalScans > 0 || stats.highRiskCount > 0 || stats.scamsBlocked > 0) {
      localStorage.setItem('aghoy_stats', JSON.stringify(stats));
    }
  }, [stats]);

  useEffect(() => {
    if (scanHistory.length > 0) {
      localStorage.setItem('aghoy_history', JSON.stringify(scanHistory));
    }
  }, [scanHistory]);

  const clearHistory = () => {
    setScanHistory([]);
    localStorage.removeItem('aghoy_history');
    setShowHistory(false);
  };

  const handlePrivacyReset = () => {
    playSound('click');
    localStorage.removeItem('aghoy_privacy_consent');
    clearConsentToken();
    setHasConsent(false);
    setPrivacyResetKey(prev => prev + 1);
  };

  const handleAnalyze = async () => {
    if (isAnalyzingRef.current) return;
    isAnalyzingRef.current = true;

    try {
      if (!hasConsent) {
          setError("SYSTEM LOCKED: Please accept Privacy Protocols below (or in Footer) to activate AI Scanner.");
          playSound('alert');
          return;
      }

      if (honeypot) {
          console.warn("🤖 BOT DETECTED. Honeypot filled.");
          setIsLoading(true);
          setTimeout(() => {
              setIsLoading(false);
              setAnalysisId(prev => prev + 1);
              setResult({
                  verdict: Verdict.SAFE,
                  riskScore: 0,
                  scamType: "None",
                  redFlags: [],
                  analysis: "Analysis complete.",
                  educationalTip: "Have a nice day, robot.",
                  senderEntity: "System"
              });
          }, 2000);
          return;
      }

      if (!input && !selectedImage) return;

      playSound('click');
      setIsLoading(true);
      setError(null);
      setResult(null);

      try {
        playSound('scan');
        const analysis = await analyzeContent(input, language, selectedImage || undefined, imageMimeType || undefined);
        setAnalysisId(prev => prev + 1);
        setResult(analysis);
        updateStatsAndHistory(analysis);

        if (analysis.verdict === 'SAFE') {
          playSound('success');
        } else {
          playSound('alert');
        }
      } catch (err: any) {
        const errorMessage = err.message || "";
        
        if (errorMessage.includes('403') || errorMessage.toLowerCase().includes('consent required')) {
           // Server rejected the consent attestation (expired, wrong version, or
           // forged). Reset consent and re-prompt the gate; nothing was processed.
           localStorage.removeItem('aghoy_privacy_consent');
           clearConsentToken();
           setHasConsent(false);
           setPrivacyResetKey(prev => prev + 1);
           setError("🔒 CONSENT EXPIRED: Please re-accept the privacy protocols.");
        } else if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('exhausted') || errorMessage.toLowerCase().includes('quota')) {
           setError("⚠️ SYSTEM OVERLOAD: Daily AI Quota Exceeded. Please try again tomorrow.");
        } else if (errorMessage.toLowerCase().includes('network') || errorMessage.toLowerCase().includes('fetch')) {
           setError("📶 CONNECTION ERROR: Please check your internet connection.");
        } else {
           setError(`❌ ANALYSIS FAILED: ${errorMessage}`);
        }
        playSound('alert');
      } finally {
        setIsLoading(false);
      }
    } finally {
      isAnalyzingRef.current = false;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isAllowedRasterImage(file.type)) {
      setError("IMAGE REJECTED: Only raster image files (PNG/JPG) are supported.");
      playSound('alert');
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setError("IMAGE REJECTED: File exceeds 8MB limit.");
      playSound('alert');
      return;
    }

    playSound('click');
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      const commaIndex = result.indexOf(',');
      if (!result || commaIndex === -1) {
        setError("IMAGE READ FAILED: The image could not be decoded. Try another screenshot.");
        playSound('alert');
        return;
      }
      setError(null);
      setSelectedImage(result.slice(commaIndex + 1));
      setImageMimeType(file.type);
    };
    reader.onerror = () => {
      setError("IMAGE READ FAILED: The browser could not read this file. Try another screenshot.");
      playSound('alert');
    };
    reader.onabort = () => {
      setError("IMAGE READ CANCELLED: The image read was interrupted. Try again.");
    };
    reader.readAsDataURL(file);
  };

  const handleTabChange = (tab: 'SCANNER' | 'DOJO') => {
    playSound('click');
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen pb-20 relative flex flex-col">
       {isLoading && <ScanningOverlay />}
       <Suspense fallback={null}>
          <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
       </Suspense>

       {/* Victim triage modal: for someone who already lost money. No scan
           needed - a fixed recovery ladder with real hotlines and script. */}
       {showTriage && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-in fade-in">
           <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border-4 border-red-700 shadow-[0_0_40px_rgba(220,38,38,0.3)] p-4 md:p-6 font-['VT323'] relative">
             <button onClick={() => setShowTriage(false)} aria-label="Close"
               className="absolute top-2 right-2 p-2 text-slate-400 hover:text-white transition-colors min-w-[44px] min-h-[44px]">
               <X className="w-5 h-5" />
             </button>

             {triageState === 'asked' ? (
               <div>
                 <h3 className="text-red-400 font-['Press_Start_2P'] text-sm md:text-base mb-2 uppercase">
                   {t(normalizeLang(language), 'iLostMoney')}
                 </h3>
                 <p className="text-white text-lg md:text-xl mb-4 leading-tight">
                   {t(normalizeLang(language), 'didYouSendMoney')}
                 </p>
                 <div className="flex flex-col gap-3">
                   <button onClick={() => setTriageState('victim')} className="w-full py-3 bg-red-700 hover:bg-red-600 text-white font-['Press_Start_2P'] text-sm border-b-4 border-r-4 border-red-900 active:border-0 active:translate-y-1 transition-all min-h-[48px]">
                     {t(normalizeLang(language), 'yesSent')}
                   </button>
                   <button onClick={() => { setShowTriage(false); handleTabChange('SCANNER'); }} className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white font-['Press_Start_2P'] text-sm border-b-4 border-r-4 border-slate-900 active:border-0 active:translate-y-1 transition-all min-h-[48px]">
                     {t(normalizeLang(language), 'noNotYet')} - {t(normalizeLang(language), 'scanButton')}
                   </button>
                 </div>
               </div>
             ) : (
               <div>
                 <h3 className="text-red-400 font-['Press_Start_2P'] text-sm md:text-base mb-3 uppercase">
                   {t(normalizeLang(language), 'iLostMoney')}
                 </h3>
                 <RecoveryLadder
                   verdict={Verdict.HIGH_RISK}
                   alreadyScammed
                   language={normalizeLang(language)}
                 />
                 <button onClick={() => setShowTriage(false)} className="w-full mt-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-['Press_Start_2P'] text-xs border-b-4 border-r-4 border-slate-900 active:border-0 active:translate-y-1 transition-all">
                   OK
                 </button>
               </div>
             )}
           </div>
         </div>
       )}
       
       <Suspense fallback={null}>
          <PrivacyPolicyModal isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
       </Suspense>
       
       <Suspense fallback={null}>
          <HistoryLog 
             isOpen={showHistory} 
             onClose={() => setShowHistory(false)} 
             history={scanHistory} 
             onClear={clearHistory}
          />
       </Suspense>

      {!hasConsent && (
          <PrivacyConsent 
            key={privacyResetKey} 
            onConsentChange={setHasConsent} 
          /> 
      )}

      <div className="bg-slate-900 border-b-4 border-slate-700 p-4 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <div className="flex items-center gap-3 md:gap-4">
               <div className="border-2 border-white bg-slate-800 p-1">
                  <PixelLogo width={48} height={48} />
               </div>
               <div>
                  <h1 className="text-lg md:text-2xl font-bold text-white font-['Press_Start_2P'] tracking-tighter leading-none">
                    PROJECT <span className="text-cyan-400">AGHOY</span>
                  </h1>
                  <p className="text-[10px] md:text-xs text-slate-400 font-mono tracking-widest mt-1">PROTECT YOUR FAMILY FROM SCAMS</p>
               </div>
           </div>
           
           <div className="flex gap-2">
             <button 
               onClick={handleToggleMute}
               className="p-2 hover:bg-slate-800 border-2 border-transparent hover:border-slate-500 transition-colors text-slate-300 flex flex-col items-center"
               title={isMuted ? "Unmute Sound" : "Mute Sound"}
             >
               {isMuted ? <VolumeX className="w-6 h-6 text-red-400" /> : <Volume2 className="w-6 h-6" />}
               <span className="text-[8px] font-['Press_Start_2P'] mt-1 hidden md:block">
                 {isMuted ? 'OFF' : 'SFX'}
               </span>
             </button>

             <button 
               onClick={() => { playSound('click'); setShowAbout(true); }}
               className="p-2 hover:bg-slate-800 border-2 border-transparent hover:border-slate-500 transition-colors text-slate-300 flex flex-col items-center"
             >
               <Info className="w-6 h-6" />
               <span className="text-[8px] font-['Press_Start_2P'] mt-1 hidden md:block">ABOUT</span>
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 px-4 w-full">
        <div className="flex border-b-4 border-slate-700">
           <button 
             onClick={() => handleTabChange('SCANNER')}
             className={`flex-1 py-3 md:py-4 font-['Press_Start_2P'] text-xs md:text-sm flex items-center justify-center gap-2 transition-all relative ${
               activeTab === 'SCANNER' 
                 ? 'bg-slate-800 text-cyan-400 border-t-4 border-l-4 border-r-4 border-slate-600 -mb-1 z-10' 
                 : 'bg-slate-900 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
             }`}
           >
             <Search className="w-4 h-4 md:w-5 md:h-5" />
             SCANNER
           </button>
           <button 
             onClick={() => handleTabChange('DOJO')}
             className={`flex-1 py-3 md:py-4 font-['Press_Start_2P'] text-xs md:text-sm flex items-center justify-center gap-2 transition-all relative ${
               activeTab === 'DOJO' 
                 ? 'bg-slate-800 text-yellow-400 border-t-4 border-l-4 border-r-4 border-slate-600 -mb-1 z-10' 
                 : 'bg-slate-900 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
             }`}
           >
             <Bot className="w-4 h-4 md:w-5 md:h-5" />
             TRAINING_DOJO
           </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8 w-full flex-grow">
        <div className="p-4 md:p-6 bg-slate-800 min-h-[60vh] border-x-4 border-b-4 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            <div className="mb-6 flex justify-end">
                <div className="grid grid-cols-4 md:inline-flex bg-black border-2 border-slate-600 p-1 gap-1 md:gap-0 w-full md:w-auto">
                    {['TAGALOG', 'BISAYA', 'ILOCANO', 'ENGLISH'].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => { playSound('click'); setLanguage(lang); }}
                        className={`px-3 py-2 md:py-1 text-[10px] md:text-sm font-['Press_Start_2P'] transition-colors w-full text-center ${
                        language === lang ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300'
                        }`}
                    >
                        {lang.substring(0,3)}
                    </button>
                    ))}
                </div>
            </div>

            {activeTab === 'SCANNER' ? (
            <div className="animate-fade-in">
                {stats.totalScans > 0 && !result && (
                   <div className="relative">
                       <StatsPanel stats={stats} />
                       <div className="flex justify-end mt-2 mb-4">
                           <button 
                               onClick={() => { playSound('click'); setShowHistory(true); }}
                               className="text-cyan-400 hover:text-cyan-300 text-xs font-['Press_Start_2P'] flex items-center gap-2 border-b border-cyan-500/50 pb-1 hover:border-cyan-400 transition-all"
                           >
                               <History className="w-4 h-4" />
                               VIEW_LOGS [{scanHistory.length}]
                           </button>
                       </div>
                   </div>
                )}

                <div className="flex flex-col items-center justify-center my-4 md:my-8">
                    <div className={`transition-all duration-500 ${
                        result?.verdict === Verdict.HIGH_RISK ? 'animate-pulse' : 
                        result?.verdict === Verdict.SAFE ? '' : 'animate-float'
                    }`}>
                        <div className="relative">
                             <PixelLogo 
                                width={96} 
                                height={96} 
                                className={
                                    result?.verdict === Verdict.HIGH_RISK ? 'filter drop-shadow-[0_0_10px_red]' : 
                                    result?.verdict === Verdict.SAFE ? 'filter drop-shadow-[0_0_10px_green]' :
                                    'filter drop-shadow-[0_0_15px_cyan]'
                                } 
                             />
                        </div>
                    </div>
                    <p className={`font-['Press_Start_2P'] text-[10px] md:text-xs mt-4 tracking-widest ${
                         result?.verdict === Verdict.HIGH_RISK ? 'text-red-500 animate-pulse' : 
                         result?.verdict === Verdict.SAFE ? 'text-green-400' :
                         'text-cyan-300'
                    }`}>
                        {result ? 'ANALYSIS_COMPLETE' : 'AGHOY_SYSTEM_ACTIVE'}
                    </p>
                </div>

                {!result && (
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {/* Triage entry: the just-scammed victim path. Highest
                            priority - this is someone who needs rescue, not a scan. */}
                        <button
                          onClick={() => { playSound('alert'); setTriageState('asked'); setShowTriage(true); }}
                          className="w-full border-4 border-red-800 bg-red-950/40 px-4 py-3 md:py-4 flex items-center justify-center gap-3 hover:bg-red-900/40 transition-colors font-['Press_Start_2P'] text-xs md:text-sm text-red-300 min-h-[48px]"
                        >
                          <AlertOctagon className="w-5 h-5 md:w-6 md:h-6 shrink-0 animate-pulse" />
                          {t(normalizeLang(language), 'iLostMoney')}
                        </button>

                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-2 border-cyan-700 bg-cyan-950/20 px-3 py-2 font-['VT323'] text-lg">
                          <span className="text-cyan-100">
                            {t(normalizeLang(language), 'pasteHere')}
                          </span>
                          <button
                            onClick={() => handleTabChange('DOJO')}
                            className="text-cyan-300 hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
                          >
                            Or train your family first (3 min/day) &gt;
                          </button>
                        </div>
                        <div className="mb-4">
                          <p className="text-slate-400 text-xs font-['Press_Start_2P'] mb-2 uppercase">Quick Try:</p>
                          <div className="grid grid-cols-2 md:flex gap-2">
                            {SCAM_EXAMPLES.map((ex, idx) => (
                              <button
                                key={idx}
                                onClick={() => { playSound('click'); setInput(ex.text); }}
                                className="px-3 py-2 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400 text-slate-300 text-xs font-mono text-left transition-all truncate"
                              >
                                &gt; {ex.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-black p-1 border-2 border-slate-600 relative group flex flex-col">
                            {/* HONEYPOT */}
                            <input 
                                type="text" 
                                name="fax_number"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ opacity: 0, position: 'absolute', top: 0, left: 0, height: 0, width: 0, zIndex: -1 }}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                            
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Paste text message, email, job offer details, or paste an image (Ctrl+V)..."
                                className="w-full min-h-[160px] max-h-[60vh] bg-slate-900 text-green-400 p-4 pb-20 font-mono text-lg focus:outline-none placeholder:text-slate-600 resize-none block overflow-y-auto"
                            />
                            {input && (
                                <button 
                                    onClick={() => { setInput(''); playSound('click'); }}
                                    className="absolute top-2 right-2 text-slate-600 hover:text-red-500 transition-colors z-10"
                                    title="Clear Text"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                            <div className="absolute bottom-2 right-2 flex gap-2">
                                <input 
                                    type="file" 
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <button 
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`p-2 border-2 ${selectedImage ? 'border-green-500 text-green-500' : 'border-slate-600 text-slate-500'} bg-black hover:bg-slate-800 transition-colors`}
                                    title="Upload Screenshot"
                                >
                                    <ImageIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        
                        {selectedImage && (
                            <div className="flex items-center gap-3 p-2 bg-slate-900 border border-green-900 text-green-400 text-sm">
                                <ImageIcon className="w-4 h-4" />
                                <span>Image attached</span>
                                <button onClick={() => setSelectedImage(null)} className="ml-auto text-red-500 hover:text-red-400"><X className="w-4 h-4"/></button>
                            </div>
                        )}

                        <button
                            onClick={handleAnalyze}
                            disabled={isLoading || (!input && !selectedImage)}
                            className="w-full py-4 bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-['Press_Start_2P'] border-b-4 border-cyan-900 active:border-b-0 active:translate-y-1 transition-all shadow-lg flex items-center justify-center gap-3"
                        >
                            {isLoading ? (
                                <><Loader2 className="animate-spin" /> SCANNING...</>
                            ) : (
                                <><Search /> ANALYZE_THREAT</>
                            )}
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 opacity-60">
                          <Lock className="w-3 h-3" />
                          <p className="text-[10px] font-mono uppercase">
                            Secure Analysis. Your data is processed privately.
                          </p>
                        </div>
                        
                        {error && (
                            <div className="p-4 bg-red-900/50 border-2 border-red-500 text-red-200 flex items-center gap-3 font-mono">
                                <AlertOctagon className="w-6 h-6 shrink-0" />
                                {error}
                            </div>
                        )}
                    </div>
                )}

                {result && (
                    <ResultCard 
                        key={analysisId}
                        analysisId={analysisId}
                        result={result} 
                        language={language}
                        onReset={() => {
                            playSound('click');
                            setResult(null);
                            setInput('');
                            setSelectedImage(null);
                        }} 
                    />
                )}
            </div>
            ) : (
            <div className="animate-fade-in">
                {hasConsent ? (
                    <Suspense fallback={
                      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 border-4 border-slate-700 border-dashed bg-slate-900/50">
                        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-600 mb-4">
                          <div className="h-full bg-yellow-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                        </div>
                        <p className="font-['Press_Start_2P'] text-yellow-400 text-xs animate-pulse">LOADING_DOJO...</p>
                      </div>
                    }>
                      <Dojo selectedLanguage={language} />
                    </Suspense>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 border-4 border-slate-700 border-dashed bg-slate-900/50">
                        <Lock className="w-16 h-16 text-slate-600 mb-6" />
                        <h3 className="font-['Press_Start_2P'] text-slate-400 text-sm md:text-base mb-4">DOJO_ACCESS_DENIED</h3>
                        <p className="font-mono text-slate-500 text-sm max-w-md leading-relaxed mb-6">
                            Security Protocols Active. The Training Dojo requires AI data processing to generate scenarios.
                            <br/><br/>
                            Please accept the Privacy Protocols to proceed.
                        </p>
                        <button 
                            onClick={handlePrivacyReset}
                            className="px-6 py-3 bg-cyan-900/30 hover:bg-cyan-900/50 border-2 border-cyan-700 text-cyan-400 font-['Press_Start_2P'] text-xs transition-all"
                        >
                            REVIEW PROTOCOLS
                        </button>
                    </div>
                )}
            </div>
            )}

        </div>
      </div>

      <div className="text-center py-6 text-slate-600 font-['VT323'] text-lg mt-auto">
         <p>SECURE THE PHILIPPINES • ONE SCAN AT A TIME</p>
         
         <div className="flex justify-center flex-wrap gap-4 mt-4 px-4">
             <button 
                onClick={() => setShowAbout(true)}
                className="text-slate-500 hover:text-cyan-400 text-sm font-['Press_Start_2P'] flex items-center gap-2"
             >
                [?] OPERATOR
             </button>
             
             <button 
                onClick={() => { playSound('click'); setShowPrivacyPolicy(true); }}
                className="text-slate-500 hover:text-green-400 text-sm font-['Press_Start_2P'] flex items-center gap-2"
             >
                <Shield className="w-4 h-4" />
                PROTOCOL
             </button>

             <button 
                onClick={handlePrivacyReset}
                className="text-slate-600 hover:text-red-400 text-[10px] font-mono flex items-center gap-1 border border-slate-700 px-2 rounded"
                title="Reset Consent Decision"
             >
                RESET_CONSENT
             </button>

             <a 
                href="https://github.com/8-BitRhyon/project-aghoy" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="text-slate-500 hover:text-cyan-400 text-sm font-['Press_Start_2P'] flex items-center gap-2"
                title="View the open-source code (MIT)"
             >
                <Shield className="w-4 h-4" />
                SOURCE
             </a>

             <a 
                href="https://github.com/8-BitRhyon/project-aghoy/blob/main/docs/compliance/README.md" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click')}
                className="text-slate-500 hover:text-yellow-400 text-sm font-['Press_Start_2P'] flex items-center gap-2"
                title="Non-profit, free forever. See how the project stays running."
             >
                <Coffee className="w-4 h-4" />
                SUPPORT
             </a>
         </div>
      </div>

    </div>
  );
}

export default App;
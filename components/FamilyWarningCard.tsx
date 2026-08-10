import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { AnalysisResult, Verdict } from '../types';
import { Download, Share2, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/sound';
import PixelLogo from './PixelLogo';
import { useModal } from '../src/hooks/useModal';

interface FamilyWarningCardProps {
  result: AnalysisResult;
  isOpen: boolean;
  onClose: () => void;
  language?: string;
}

// localStorage key for the family-check confirmation receipt. The check is the
// single most protective action for a vulnerable elder (EuroUSEC 2023: older
// adults prefer social support over self-serve trust cues), so confirming it
// is recorded and persists.
const CONFIRM_KEY = (hash: string): string => `aghoy_family_confirmed_${hash}`;
const contentHash = (s: string): string => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h).toString(36);
};

const FamilyWarningCard: React.FC<FamilyWarningCardProps> = ({ result, isOpen, onClose, language = 'TAGALOG' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const dialogRef = useModal(isOpen, onClose, 'family-warning-title');

  const confirmKey = contentHash(result.educationalTip || result.scamType || '');
  const [confirmed, setConfirmed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(CONFIRM_KEY(confirmKey)) === '1';
    } catch {
      return false;
    }
  });

  // Localized family-check copy. The protective action is universal: send it
  // to a trusted family member and wait before acting (older adults prefer
  // social support - EuroUSEC 2023). Text follows the app's selected language.
  const familyCopy = (() => {
    if (language === 'BISAYA') {
      return {
        prompt: 'Pinakamaayo nga lakang: ipadala ang card sa pamilya o higala nga imong gisaligan, ug paghulat sa dili pa molihok.',
        confirmed: 'Salamat! Nakumpirma sa imong pamilya nga ayaw paglihok. Luwas ka.',
        buttonConfirm: 'CONFIRM: NANGUTANA NA KO SA AKONG PAMILYA',
        buttonConfirmed: 'CONFIRMED - AYAW PAGLIHAW',
      };
    }
    if (language === 'ILOCANO') {
      return {
        prompt: 'Kasayaatan nga addang: itulod ti card iti pamilya wenno gayyem a pagtalekam, ket aguray sakbay nga agtignay.',
        confirmed: 'Agyamanak! Inkompirma ti pamilyam a saan ka nga agtignay. Natalged ka.',
        buttonConfirm: 'CONFIRM: NAGDAMDAMAG AK ITI PAMILIAK',
        buttonConfirmed: 'CONFIRMED - SAAN AKA AGTIGNAY',
      };
    }
    return {
      prompt: 'Best step: send this card to a family member or friend you trust, and wait before doing anything.',
      confirmed: 'Thank you! Your family confirmed not to act. Stay safe.',
      buttonConfirm: 'CONFIRM: I ASKED MY FAMILY',
      buttonConfirmed: 'CONFIRMED - DO NOT ACT',
    };
  })();

  if (!isOpen) return null;

  const handleConfirm = () => {
    playSound('success');
    const next = !confirmed;
    setConfirmed(next);
    try {
      if (next) localStorage.setItem(CONFIRM_KEY(confirmKey), '1');
      else localStorage.removeItem(CONFIRM_KEY(confirmKey));
    } catch {
      // private mode - confirmation just won't persist across reloads
    }
  };

  const handleShareOrDownload = async () => {
    if (!cardRef.current) return;
    playSound('click');
    setIsGenerating(true);
    
    try {
      // Wait a moment for fonts/layout to settle
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0f172a', // Match bg
        scale: 2, // Higher quality
      });
      
      // Convert canvas to Blob
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const fileName = `Aghoy-Warning-${result.scamType.replace(/\s+/g, '-')}.png`;
        const file = new File([blob], fileName, { type: 'image/png' });

        // CHECK: Does the device support native sharing of files?
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({
                    title: 'WARNING: SCAM DETECTED',
                    text: `I used Project Aghoy to scan this. It's a verified ${result.scamType}. Be careful!`,
                    files: [file]
                });
                playSound('success');
            } catch (shareError) {
                console.log('Sharing closed or failed', shareError);
            }
        } else {
            // FALLBACK: If sharing isn't supported (e.g., Desktop), just download it
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = fileName;
            link.click();
            playSound('success');
        }
      }, 'image/png');

    } catch (err) {
      console.error("Failed to generate image", err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Color logic
  const isHighRisk = result.verdict === Verdict.HIGH_RISK;
  const mainColor = isHighRisk ? 'bg-red-600' : 'bg-yellow-500';
  const textColor = isHighRisk ? 'text-red-500' : 'text-yellow-500';
  const borderColor = isHighRisk ? 'border-red-500' : 'border-yellow-500';

  return (
    <div ref={dialogRef} tabIndex={-1} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex flex-col items-center gap-3 max-w-md w-full animate-in fade-in zoom-in duration-300 my-auto">
        
        {/* The Card to be Captured */}
        <div 
          ref={cardRef} 
          className={`w-full bg-slate-900 border-[6px] ${borderColor} p-4 md:p-6 relative overflow-hidden shadow-2xl font-['Press_Start_2P']`}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

            <div className="flex items-center gap-3 mb-4 md:mb-6 border-b-4 border-slate-700 pb-3 md:pb-4">
                <div className="bg-slate-800 p-1 border-2 border-white">
                    <PixelLogo width={48} height={48} />
                </div>
                <div>
                    <h1 id="family-warning-title" className="text-white text-xs md:text-lg leading-tight">PROJECT AGHOY</h1>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-1">AI SCAM DETECTOR</p>
                </div>
            </div>

            <div className={`${mainColor} text-white p-3 md:p-4 text-center mb-4 md:mb-6 border-4 border-black shadow-[4px_4px_0_0_#fff]`}>
                <h2 className="text-lg md:text-2xl uppercase font-bold leading-snug">
                    BABALA: <br/> SCAM ITO!
                </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-center font-['VT323']">
                <div className="text-slate-300 text-lg md:text-2xl uppercase">
                    TYPE: <span className={textColor}>{result.scamType}</span>
                </div>

                <div className="bg-black/50 p-3 md:p-4 border-l-4 border-white text-left">
                     <p className="text-sm md:text-xl text-white leading-relaxed break-words">
                        "{result.educationalTip}"
                     </p>
                </div>

                {result.senderEntity && (
                     <div className="mt-2 md:mt-4 p-2 bg-slate-800 text-slate-300 text-xs md:text-lg border border-slate-600 break-all">
                        SENDER: {result.senderEntity}
                     </div>
                )}
            </div>

            <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t-4 border-slate-700 flex justify-between items-end">
                 <div className="text-[10px] md:text-xs text-slate-400 max-w-[60%]">
                    FLAGGED BY PROJECT AGHOY AI - CONFIRM BEFORE ACTING
                 </div>
                 <div className="text-[10px] md:text-xs text-white bg-slate-800 px-2 py-1">
                    #ProjectAghoy
                 </div>
            </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 w-full">
            <button 
                onClick={onClose}
                className="flex-1 py-3 bg-slate-700 text-white font-['VT323'] text-lg md:text-xl border-b-4 border-slate-900 hover:bg-slate-600 active:border-b-0 active:translate-y-1"
            >
                CLOSE
            </button>
            <button 
                onClick={handleShareOrDownload}
                disabled={isGenerating}
                className="flex-1 py-3 bg-blue-600 text-white font-['VT323'] text-lg md:text-xl border-b-4 border-blue-900 hover:bg-blue-500 active:border-b-0 active:translate-y-1 flex items-center justify-center gap-2"
            >
                {isGenerating ? (
                    'PROCESSING...' 
                ) : (
                    <>
                        <Share2 className="w-5 h-5"/> SHARE CARD
                    </>
                )}
            </button>
        </div>

        {/* Family-check protective flow: the most protective action for a
            vulnerable elder is "send it to someone you trust and wait"
            (EuroUSEC 2023). Share the card, then confirm with the family
            member - this is a recorded protective step, not a download. */}
        <div className={`w-full border-2 p-3 mt-3 ${confirmed ? 'border-green-600 bg-green-950/30' : 'border-cyan-700 bg-cyan-950/20'}`}>
          <p className="font-['VT323'] text-lg text-slate-100 leading-tight">
            {confirmed ? familyCopy.confirmed : familyCopy.prompt}
          </p>
          <button
            onClick={handleConfirm}
            className={`mt-2 w-full py-2 font-['Press_Start_2P'] text-[10px] border-b-4 flex items-center justify-center gap-2 min-h-[40px] ${
              confirmed
                ? 'bg-green-700 text-white border-green-900 hover:bg-green-600'
                : 'bg-cyan-700 text-white border-cyan-900 hover:bg-cyan-600'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {confirmed ? familyCopy.buttonConfirmed : familyCopy.buttonConfirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyWarningCard;
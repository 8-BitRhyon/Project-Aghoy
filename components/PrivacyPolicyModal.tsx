import React, { useState, useRef, useEffect } from 'react';
import { X, Shield, Lock, Server, FileText, Globe, UserCheck, Scale, AlertTriangle, FileWarning, ChevronDown } from 'lucide-react';
import { playSound } from '../utils/sound';
import { useModal } from '../src/hooks/useModal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [canAgree, setCanAgree] = useState(false);
  const [hasReadProtocol, setHasReadProtocol] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useModal(isOpen, onClose, 'privacy-policy-title');

  const handleScroll = () => {
    if (!contentRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    
    if (scrollHeight - scrollTop - clientHeight < 50) {
      if (!canAgree) {
          setCanAgree(true);
          playSound('hover');
      }
    }
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        if (scrollHeight <= clientHeight) {
            setCanAgree(true);
        } else {
            setCanAgree(false);
        }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={dialogRef} tabIndex={-1} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border-4 border-slate-600 w-full max-w-2xl max-h-[85vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b-4 border-slate-700 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-slate-700 p-2 border-2 border-slate-500 rounded-sm">
                <Scale className="w-6 h-6 text-slate-300" />
             </div>
             <div>
                <h2 id="privacy-policy-title" className="text-white font-['Press_Start_2P'] text-xs md:text-sm">LEGAL_PROTOCOLS</h2>
                <p className="text-slate-400 font-mono text-[10px] uppercase">SCROLL TO BOTTOM TO ACCEPT</p>
             </div>
          </div>
          <button 
            onClick={() => { playSound('click'); onClose(); }}
            aria-label="Close"
            className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
            ref={contentRef}
            onScroll={handleScroll}
            tabIndex={0}
            aria-label="Privacy protocols. Use arrow keys or space to scroll."
            className="p-6 overflow-y-auto custom-scrollbar font-mono text-slate-300 space-y-8 text-sm md:text-base leading-relaxed relative"
        >
          
          {/* === PART 1: PRIVACY === */}
          <div className="border-b-2 border-slate-700 pb-4 mb-4">
            <h3 className="text-cyan-400 font-bold mb-4 font-['Press_Start_2P'] text-xs uppercase flex items-center gap-2">
              <Shield className="w-4 h-4" /> PART I: DATA PRIVACY (RA 10173)
            </h3>

            <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 bg-green-900/10 p-2">
                    <p className="text-xs"><strong>MISSION:</strong> Project Aghoy analyzes pasted text for scam indicators using third-party AI providers. We do not sell personal data. Sensitive data is masked before it is sent, and scan results stay on your device.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><FileText className="w-3 h-3 text-cyan-500"/> 1. DATA WE PROCESS</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       • <strong>Text you paste:</strong> SMS, emails, job offers, or other messages. Sent to AI providers for analysis.<br/>
                       • <strong>OCR text from screenshots:</strong> The image itself never leaves your device (OCR runs in your browser). Only the extracted text is analyzed.<br/>
                       • <strong>Analysis result:</strong> The verdict, risk score, and explanation returned by the AI.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><Globe className="w-3 h-3 text-cyan-500"/> 2. THIRD-PARTY PROCESSORS</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       • <strong>Cloudflare:</strong> Pages hosting, Functions backend, and the AI Gateway that proxies model requests.<br/>
                       • <strong>Cerebras:</strong> Primary AI model provider.<br/>
                       • <strong>Groq:</strong> Fallback AI model provider.<br/>
                       • <strong>Cloudflare Worker with Durable Objects:</strong> Runs the Training Dojo simulator.<br/>
                       Provider processing is governed by each provider's terms. We use these services only to generate scam analysis.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><Lock className="w-3 h-3 text-cyan-500"/> 3. REJECTS LAYER (MASKING)</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       Before content is sent to an AI provider, a filter masks sensitive data such as credit/debit card numbers, Philippine mobile numbers, email addresses, API keys, government-issued ID numbers, and one-time passwords. AI provider responses are masked the same way.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><Server className="w-3 h-3 text-cyan-500"/> 4. DATA RETENTION</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       • <strong>Scanner (browser):</strong> Analysis results are stored only in your browser (localStorage, last 20 scans). Clear them with the VIEW_LOGS clear action.<br/>
                       • <strong>Scanner (server, sanitized only):</strong> After each scan, the redacted verdict and extracted scam indicators (domains, URLs, keywords) and a one-way hash of any phone number found may be saved in a shared community blacklist so other users can see "this was reported N times". These records contain no message text, no names, no raw numbers, and no personal identifiers.<br/>
                       • <strong>Dojo:</strong> Training conversations may be processed server-side and are not retained longer than needed.<br/>
                       No personal data is stored on our servers beyond the sanitized blacklist records described above.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><UserCheck className="w-3 h-3 text-cyan-500"/> 5. YOUR RIGHTS (PH DATA PRIVACY ACT)</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       Under RA 10173 you have the right to know, object, access, rectify, and erase or block your personal data, and to file a complaint with the National Privacy Commission (NPC) at privacy.gov.ph. For privacy requests, contact <strong>[privacy contact - add before launch]</strong>.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><Scale className="w-3 h-3 text-cyan-500"/> 6. CONSENT</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       Analysis only proceeds after you accept these protocols. You can revoke consent at any time by pressing RESET_CONSENT in the footer.
                    </p>
                </div>
            </div>
          </div>

          {/* === PART 2: LIABILITY (THE LEGAL SHIELD) === */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-4 font-['Press_Start_2P'] text-xs uppercase flex items-center gap-2">
              <FileWarning className="w-4 h-4" /> PART II: TERMS OF SERVICE
            </h3>

            <div className="space-y-6 text-xs text-slate-300">
                
                {/* DISCLAIMER OF WARRANTY */}
                <div className="bg-red-900/10 border border-red-900/50 p-4 rounded">
                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> CRITICAL DISCLAIMER
                    </h4>
                    <p className="uppercase font-bold text-[10px] leading-relaxed text-red-200/80">
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. 
                        PROJECT AGHOY IS AN EXPERIMENTAL AI TOOL. IT CAN MAKE MISTAKES ("HALLUCINATIONS").
                        A "SAFE" VERDICT DOES NOT GUARANTEE SAFETY. A "SCAM" VERDICT DOES NOT GUARANTEE MALICE.
                    </p>
                </div>

                {/* NO FINANCIAL ADVICE */}
                <div className="pl-2 border-l-2 border-slate-700">
                    <strong className="text-white block mb-1">2. NOT FINANCIAL OR LEGAL ADVICE</strong>
                    <p className="text-slate-400">
                        This tool is for <strong>educational and informational purposes only</strong>. 
                        Do not make financial decisions (investments, transfers) based solely on this app. 
                        Always verify with official banks or authorities.
                    </p>
                </div>

                {/* INDEMNIFICATION */}
                <div className="pl-2 border-l-2 border-slate-700">
                    <strong className="text-white block mb-1">3. LIMITATION OF LIABILITY</strong>
                    <p className="text-slate-400">
                        By using Project Aghoy, you agree that the developer/operator shall NOT be liable for any 
                        damages, financial losses, or security breaches resulting from the use or inability to use this tool. 
                        You use this software entirely at your own risk.
                    </p>
                </div>

                 {/* OPEN SOURCE LICENSE */}
                 <div className="pl-2 border-l-2 border-slate-700">
                    <strong className="text-white block mb-1">4. OPEN SOURCE LICENSE (MIT)</strong>
                    <p className="text-slate-400 mb-2">
                        This project is open source. You are free to inspect the code to verify our security claims.
                    </p>
                    <div className="bg-black/50 p-2 font-mono text-[10px] text-slate-400 rounded border border-slate-800">
                        Copyright (c) 2025 Project Aghoy. Permission is hereby granted, free of charge, to any person obtaining a copy of this software... [See LICENSE file for full text]
                    </div>
                </div>

                {/* ACCEPTANCE */}
                <div className="pl-2 border-l-2 border-slate-700">
                    <strong className="text-white block mb-1">5. ACCEPTANCE OF TERMS</strong>
                    <p className="text-slate-400">
                        The Scanner and Training Dojo are available only after you accept the privacy protocols in Part I.
                        Analysis only proceeds after consent is given. If you do not agree, press DECLINE or close the application.
                    </p>
                </div>
                
                {/* Spacer to ensure they can scroll past the last element */}
                <div className="h-10"></div>

            </div>
          </div>

        </div>

        {/* Footer with Conditional Button */}
        <div className="bg-slate-900 p-4 border-t-4 border-slate-700 text-center shrink-0 relative">
          
          {/* Scroll Hint (Only shows if not yet agreed) */}
          {!canAgree && (
              <div className="absolute -top-8 left-0 right-0 flex justify-center pointer-events-none animate-bounce">
                  <div className="bg-cyan-900 text-cyan-400 text-[10px] px-3 py-1 rounded-full border border-cyan-500 font-mono flex items-center gap-1 shadow-lg">
                      <ChevronDown className="w-3 h-3" /> SCROLL TO ACKNOWLEDGE <ChevronDown className="w-3 h-3" />
                  </div>
              </div>
          )}

          <label className="flex items-center justify-center gap-2 text-slate-300 font-mono text-xs py-3 cursor-pointer">
              <input
                  type="checkbox"
                  checked={hasReadProtocol}
                  onChange={(e) => { setHasReadProtocol(e.target.checked); playSound('click'); }}
                  className="w-4 h-4 accent-cyan-500"
              />
              I have read and understand the protocols
          </label>

          <button 
            onClick={() => { 
                if (canAgree && hasReadProtocol) {
                    playSound('click'); 
                    onClose(); 
                }
            }}
            disabled={!canAgree || !hasReadProtocol}
            className={`w-full font-bold py-3 px-4 border-b-4 transition-all font-['Press_Start_2P'] text-xs uppercase ${
                canAgree && hasReadProtocol
                ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 active:border-b-0 active:translate-y-1 cursor-pointer' 
                : 'bg-slate-800/50 text-slate-600 border-slate-800 cursor-not-allowed grayscale'
            }`}
          >
            {canAgree && hasReadProtocol ? "I UNDERSTAND & AGREE" : "[READ & CHECK TO ENABLE]"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
import React, { useState, useRef, useEffect } from 'react';
import { X, Shield, Lock, Server, Eye, FileText, Globe, Wifi, UserCheck, Scale, AlertTriangle, FileWarning, ArrowDown, ChevronDown } from 'lucide-react';
import { playSound } from '../utils/sound';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [canAgree, setCanAgree] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border-4 border-slate-600 w-full max-w-2xl max-h-[85vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b-4 border-slate-700 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-slate-700 p-2 border-2 border-slate-500 rounded-sm">
                <Scale className="w-6 h-6 text-slate-300" />
             </div>
             <div>
                <h2 className="text-white font-['Press_Start_2P'] text-xs md:text-sm">LEGAL_PROTOCOLS</h2>
                <p className="text-slate-400 font-mono text-[10px] uppercase">SCROLL TO BOTTOM TO ACCEPT</p>
             </div>
          </div>
          <button 
            onClick={() => { playSound('click'); onClose(); }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
            ref={contentRef}
            onScroll={handleScroll}
            className="p-6 overflow-y-auto custom-scrollbar font-mono text-slate-300 space-y-8 text-sm md:text-base leading-relaxed relative"
        >
          
          {/* === PART 1: PRIVACY === */}
          <div className="border-b-2 border-slate-700 pb-4 mb-4">
            <h3 className="text-cyan-400 font-bold mb-4 font-['Press_Start_2P'] text-xs uppercase flex items-center gap-2">
              <Shield className="w-4 h-4" /> PART I: DATA DEFENSE (PRIVACY)
            </h3>
            
            <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 bg-green-900/10 p-2">
                    <p className="text-xs"><strong>MISSION:</strong> Project Aghoy is a privacy-first tool. We process data ephemerally. We do not sell, store, or train models on your personal messages.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2 text-xs uppercase"><Server className="w-3 h-3 text-cyan-500"/> 1. Data Architecture</h4>
                    <p className="text-xs text-slate-400 pl-5">
                       • <strong>Text:</strong> Sent securely to AI partners (Cerebras/Groq) for analysis, then <span className="text-red-400">immediately discarded</span>.<br/>
                       • <strong>Images:</strong> Processed on-device via Client-Side OCR. Raw images NEVER leave your device.<br/>
                       • <strong>History:</strong> Stored 100% locally in your browser (`localStorage`).
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
                    <div className="bg-black/50 p-2 font-mono text-[10px] text-slate-500 rounded border border-slate-800">
                        Copyright (c) 2025 Project Aghoy. Permission is hereby granted, free of charge, to any person obtaining a copy of this software... [See LICENSE file for full text]
                    </div>
                </div>

                {/* ACCEPTANCE */}
                <div className="pl-2 border-l-2 border-slate-700">
                    <strong className="text-white block mb-1">5. ACCEPTANCE OF TERMS</strong>
                    <p className="text-slate-400">
                        Using the "Analyze" feature constitutes acceptance of these protocols. 
                        If you do not agree, please close the application immediately.
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

          <button 
            onClick={() => { 
                if (canAgree) {
                    playSound('click'); 
                    onClose(); 
                }
            }}
            disabled={!canAgree}
            className={`w-full font-bold py-3 px-4 border-b-4 transition-all font-['Press_Start_2P'] text-xs uppercase ${
                canAgree 
                ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-600 active:border-b-0 active:translate-y-1 cursor-pointer' 
                : 'bg-slate-800/50 text-slate-600 border-slate-800 cursor-not-allowed grayscale'
            }`}
          >
            {canAgree ? "I UNDERSTAND & AGREE" : "[READ FULL PROTOCOL TO ENABLE]"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
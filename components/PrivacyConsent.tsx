import React, { useState, useEffect } from 'react';
import { Shield, Check, X, AlertTriangle } from 'lucide-react';
import { playSound } from '../utils/sound';
import { mintConsentToken, clearConsentToken } from '../src/api/storageClient';

interface PrivacyConsentProps {
  onConsentChange?: (granted: boolean) => void;
}

const PrivacyConsent: React.FC<PrivacyConsentProps> = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mintError, setMintError] = useState(false);
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aghoy_privacy_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = async (accepted: boolean) => {
    playSound(accepted ? 'success' : 'click');
    if (!accepted) {
      localStorage.setItem('aghoy_privacy_consent', 'denied');
      clearConsentToken();
      if (onConsentChange) onConsentChange(false);
      setIsVisible(false);
      return;
    }

    // Server-enforced consent: mint the attestation BEFORE granting. Without a
    // valid token the server rejects every data request (403), so if minting
    // fails we cannot honestly mark consent as granted.
    setMinting(true);
    setMintError(false);
    const minted = await mintConsentToken();
    setMinting(false);
    if (!minted) {
      setMintError(true);
      return;
    }
    localStorage.setItem('aghoy_privacy_consent', 'granted');
    if (onConsentChange) onConsentChange(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center items-end pointer-events-none">
      <div className="bg-slate-900 border-4 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] max-w-2xl w-full pointer-events-auto animate-in slide-in-from-bottom-10 fade-in duration-500 p-4 relative">
        
        {/* Decorative Header */}
        <div className="absolute -top-3 left-4 bg-cyan-600 text-white px-3 py-1 font-['Press_Start_2P'] text-[10px] uppercase tracking-widest border-2 border-slate-900">
          <Shield className="w-3 h-3 inline-block mr-2" />
          System Security
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <div className="flex-1">
            <h3 className="text-white font-['Press_Start_2P'] text-xs mb-2">
              INITIALIZE PRIVACY PROTOCOLS?
            </h3>
            <p className="font-['VT323'] text-slate-300 text-lg leading-tight text-justify">
              Project Aghoy uses <span className="text-white font-bold">Advanced AI</span> to analyze messages.
              Message text is processed by <span className="text-cyan-400 font-bold">third-party AI providers</span> to detect scams.
              <br/>
              <span className="text-green-400">MASKED:</span> Card numbers, PH mobile numbers, emails, IDs, and OTPs are redacted before sending.
              <br/>
              <span className="text-green-400">ON-DEVICE:</span> Images never leave your device. Results are saved only on your device.
            </p>
            {mintError && (
              <p className="mt-2 flex items-center gap-2 text-red-400 font-['VT323'] text-lg">
                <AlertTriangle className="w-4 h-4" /> Could not record consent. Please check your connection and try again.
              </p>
            )}
          </div>

          <div className="flex gap-2 shrink-0">
            <button 
              onClick={() => handleConsent(true)}
              disabled={minting}
              className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white font-['Press_Start_2P'] text-[10px] border-b-4 border-cyan-900 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Check className="w-4 h-4" /> {minting ? 'RECORDING...' : 'ACCEPT'}
            </button>
            <button 
              onClick={() => handleConsent(false)}
              disabled={minting}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 font-['Press_Start_2P'] text-[10px] border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <X className="w-4 h-4" /> DECLINE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsent;
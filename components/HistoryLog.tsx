import React from 'react';
import { X, Clock, ChevronRight, Trash2, ShieldCheck, ShieldAlert, AlertTriangle } from 'lucide-react';
import { AnalysisResult, Verdict } from '../types';
import { playSound } from '../utils/sound';

interface HistoryLogProps {
  isOpen: boolean;
  onClose: () => void;
  history: AnalysisResult[];
  onClear: () => void;
}

const HistoryLog: React.FC<HistoryLogProps> = ({ isOpen, onClose, history, onClear }) => {
  if (!isOpen) return null;

  const getIcon = (verdict: Verdict) => {
    switch (verdict) {
      case Verdict.HIGH_RISK: return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case Verdict.SUSPICIOUS: return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case Verdict.SAFE: return <ShieldCheck className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl border-4 border-slate-600 bg-slate-900 shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-slate-800 border-b-4 border-slate-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h2 className="font-['Press_Start_2P'] text-sm md:text-lg text-white">SCAN_LOGS</h2>
            </div>
            <button 
                onClick={() => { playSound('click'); onClose(); }}
                className="text-slate-400 hover:text-white transition-colors"
            >
                <X className="w-6 h-6" />
            </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3 bg-black/20">
            {history.length === 0 ? (
                <div className="text-center py-10 text-slate-500 font-['VT323'] text-xl">
                    NO DATA FOUND. START SCANNING.
                </div>
            ) : (
                history.map((item, idx) => (
                    <div key={idx} className="bg-slate-800 border border-slate-700 p-3 flex items-start gap-3 hover:border-cyan-500/50 transition-colors group">
                        <div className="mt-1 shrink-0">
                            {getIcon(item.verdict)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <span className={`font-['Press_Start_2P'] text-[10px] uppercase ${
                                    item.verdict === Verdict.HIGH_RISK ? 'text-red-400' : 
                                    item.verdict === Verdict.SUSPICIOUS ? 'text-yellow-400' : 'text-green-400'
                                }`}>
                                    {item.scamType !== 'None' ? item.scamType : 'SAFE CONTENT'}
                                </span>
                                {/* We don't have a real timestamp in AnalysisResult yet, so we just show the index/order */}
                                <span className="text-[10px] text-slate-500 font-mono">#{history.length - idx}</span>
                            </div>
                            <p className="text-slate-300 font-['VT323'] text-lg mt-1 line-clamp-2 leading-tight opacity-80 group-hover:opacity-100">
                                {item.analysis}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>

        {/* Footer Actions */}
        {history.length > 0 && (
            <div className="p-3 bg-slate-800 border-t-4 border-slate-600 flex justify-end">
                <button 
                    onClick={() => { playSound('click'); onClear(); }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-900/30 border border-red-500/50 text-red-400 hover:bg-red-900/50 hover:text-red-200 transition-all font-['Press_Start_2P'] text-xs"
                >
                    <Trash2 className="w-4 h-4" />
                    PURGE_LOGS
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default HistoryLog;

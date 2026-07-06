import React from 'react';
import { Shield, AlertTriangle, Search, TrendingUp } from 'lucide-react';

interface StatsPanelProps {
  stats: {
    totalScans: number;
    highRiskCount: number;
    scamsBlocked: number;
  };
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 animate-fade-in">
      
      {/* Total Scans */}
      <div className="bg-slate-900 border-2 border-slate-700 p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500 transition-colors">
        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors"></div>
        <Search className="w-5 h-5 text-blue-400 mb-1" />
        <span className="text-2xl md:text-3xl font-['Press_Start_2P'] text-white">{stats.totalScans}</span>
        <span className="text-[10px] text-slate-400 font-mono uppercase mt-1">Total Scans</span>
      </div>

      {/* Threats Found */}
      <div className="bg-slate-900 border-2 border-slate-700 p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-red-500 transition-colors">
        <div className="absolute inset-0 bg-red-900/10 group-hover:bg-red-900/20 transition-colors"></div>
        <AlertTriangle className="w-5 h-5 text-red-500 mb-1" />
        <span className="text-2xl md:text-3xl font-['Press_Start_2P'] text-red-500">{stats.highRiskCount}</span>
        <span className="text-[10px] text-slate-400 font-mono uppercase mt-1">Threats Detected</span>
      </div>

      {/* Money Saved (Estimated) */}
      <div className="bg-slate-900 border-2 border-slate-700 p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-green-500 transition-colors">
        <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/20 transition-colors"></div>
        <Shield className="w-5 h-5 text-green-400 mb-1" />
        <span className="text-2xl md:text-3xl font-['Press_Start_2P'] text-green-400">{stats.scamsBlocked}</span>
        <span className="text-[10px] text-slate-400 font-mono uppercase mt-1">Scams Blocked</span>
      </div>
    </div>
  );
};

export default StatsPanel;

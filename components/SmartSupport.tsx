import React from 'react';
import { Phone, Smartphone, Building2, ChevronDown, Globe, MessageSquare } from 'lucide-react';
import { SUPPORT_DATABASE, SupportEntry } from '../src/support/supportDatabase';

interface SmartSupportProps {
  detectedEntity?: string;
  entities?: string[];
}

const SupportCard: React.FC<{ entry: SupportEntry }> = ({ entry }) => {
  const colors = getThemeClasses(entry.theme);
  // Only channels that are actually reachable by phone get a tel: button.
  // In-app-only entries (SeaBank, CIMB, ShopeePay, LazadaWallet) start with
  // an inapp channel and must NOT produce a malformed tel: link.
  const verified = entry.channels.filter(c => !(c.notes || "").includes("verify before launch"));
  const callable = verified.filter(c => c.type === 'voice' || c.type === 'tollfree');
  const primary = callable[0] || null;
  const tollFree = callable.filter(c => c.type === 'tollfree');
  const email = verified.find(c => c.type === 'email');
  const inAppGuide = entry.appGuide && entry.appGuide.length > 0;

  return (
    <div className="bg-slate-900 border-4 border-slate-700 p-1 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] mb-4 last:mb-0">
      <div className={`bg-slate-800 p-4 border-2 border-slate-600`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`${colors.text} font-['Press_Start_2P'] text-xs md:text-sm uppercase flex items-center gap-2`}>
            <div className={`p-1 ${colors.iconBg} text-white`}>
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            {entry.name}
          </h3>
          <div className={`flex items-center gap-2 px-2 py-1 ${colors.bg} border ${colors.border} rounded-full`}>
            <div className="relative w-2 h-2">
              <div className={`absolute w-full h-full ${colors.text.replace('text', 'bg')} rounded-full animate-ping opacity-75`}></div>
              <div className={`relative w-full h-full ${colors.text.replace('text', 'bg').replace('400','500')} rounded-full`}></div>
            </div>
            <span className={`text-[10px] md:text-xs ${colors.text} font-bold tracking-wider hidden sm:block`}>{entry.availability}</span>
          </div>
        </div>

        <p className="text-slate-300 text-lg leading-tight mb-4 border-l-2 border-slate-600 pl-3">
          {entry.fraudFocus}
        </p>

        {primary && (
          <a href={`tel:${primary.value}`} className={`block ${colors.btn} text-white p-3 border-b-4 border-r-4 border-black active:border-0 active:translate-y-1 transition-all text-center`}>
            <span className="font-['Press_Start_2P'] text-sm md:text-xl flex items-center justify-center gap-3">
              {primary.label}
            </span>
            <span className="block text-xs text-white/80 mt-1 font-sans uppercase tracking-widest">Tap to Call - Standard Rates</span>
          </a>
        )}
      </div>

      <div className="bg-slate-950 border-t-0 border-2 border-slate-700 mt-1">
        <details className="group">
          <summary className={`flex items-center justify-between p-3 cursor-pointer text-slate-400 transition-colors list-none select-none`}>
            <span className="flex items-center gap-2 text-base md:text-lg uppercase tracking-wide font-bold">
              <Building2 className="w-4 h-4" />
              Alternative Channels
            </span>
            <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="p-4 pt-0 border-t border-slate-800 grid gap-4">
            {inAppGuide && (
              <div className="bg-slate-900 p-3 border border-slate-700 flex gap-3 items-start">
                <div className={`p-2 ${colors.bg} ${colors.text}`}>
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 text-xs uppercase font-bold mb-1">In-App Support (Fastest)</span>
                  <p className="text-white text-base md:text-lg leading-none">{entry.appGuide}</p>
                </div>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-3 px-2">
                <MessageSquare className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">Email: <span className="text-white select-all">{email.value}</span></span>
              </div>
            )}

            {tollFree.map((tf, idx) => (
              <div key={idx} className="flex items-start gap-3 border-t border-slate-800 pt-3">
                <div className="p-2 bg-slate-800 text-slate-400 border border-slate-600 shrink-0">
                  {tf.type === 'voice' ? <Smartphone className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                </div>
                <div>
                  <span className="block text-slate-500 text-xs uppercase font-bold">{tf.label}</span>
                  <a href={`tel:${tf.value}`} className={`text-lg md:text-xl text-white font-bold tracking-wider underline decoration-dotted underline-offset-4`}>
                    {tf.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

const SmartSupport: React.FC<SmartSupportProps> = ({ detectedEntity, entities }) => {
  // Normalize to an ordered list of brand keys: explicit entities win, then the
  // legacy single-entity fallback, then the government default (PNP + CICC).
  let keys: string[] = [];
  if (Array.isArray(entities) && entities.length > 0) {
    keys = entities.slice(0, 3);
  } else if (detectedEntity) {
    const normalized = detectedEntity.toUpperCase();
    const found = Object.keys(SUPPORT_DATABASE).find(key => normalized.includes(key));
    if (found) keys = [found];
  }
  if (keys.length === 0) keys = ['PNP', 'CICC'];

  return (
    <div className="w-full font-['VT323'] mt-4 animate-in fade-in slide-in-from-bottom-2">
      {keys.map(key => {
        const entry = SUPPORT_DATABASE[key];
        if (!entry || !entry.active) return null;
        return <SupportCard key={entry.key} entry={entry} />;
      })}
    </div>
  );
};

const getThemeClasses = (t: string) => {
  switch (t) {
    case 'green': return { border: 'border-green-600', bg: 'bg-green-900/30', text: 'text-green-400', btn: 'bg-green-700 hover:bg-green-600', iconBg: 'bg-green-900' };
    case 'blue': return { border: 'border-blue-600', bg: 'bg-blue-900/30', text: 'text-blue-400', btn: 'bg-blue-700 hover:bg-blue-600', iconBg: 'bg-blue-900' };
    case 'red': return { border: 'border-red-600', bg: 'bg-red-900/30', text: 'text-red-400', btn: 'bg-red-700 hover:bg-red-600', iconBg: 'bg-red-900' };
    case 'purple': return { border: 'border-purple-600', bg: 'bg-purple-900/30', text: 'text-purple-400', btn: 'bg-purple-700 hover:bg-purple-600', iconBg: 'bg-purple-900' };
    case 'yellow': return { border: 'border-yellow-600', bg: 'bg-yellow-900/30', text: 'text-yellow-400', btn: 'bg-yellow-700 hover:bg-yellow-600', iconBg: 'bg-yellow-900' };
    default: return { border: 'border-slate-500', bg: 'bg-slate-800', text: 'text-slate-400', btn: 'bg-slate-600 hover:bg-slate-500', iconBg: 'bg-slate-700' };
  }
};

export default SmartSupport;

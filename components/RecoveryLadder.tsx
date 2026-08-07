import React from 'react';
import { Phone, ShieldCheck, Copy, Check, ArrowRight, Clock } from 'lucide-react';
import { Verdict } from '../types';
import { playSound } from '../utils/sound';
import { SUPPORT_DATABASE } from '../src/support/supportDatabase';
import { t, AghoyLang } from '../src/i18n';

// Recovery-first ladder: for a HIGH_RISK verdict, the first thing the user sees
// is what to DO, not the technical analysis. The four steps mirror the
// freeze-funds / evidence / report sequence a PH scam victim actually needs,
// and every action is one tap. This is the wedge that separates Aghoy from a
// general chatbot: intervention, not just diagnosis.

interface RecoveryLadderProps {
  verdict: string;
  entities?: string[];
  scamType?: string;
  redFlags?: string[];
  onCopyReport?: () => void;
  copied?: boolean;
  language?: AghoyLang;
  alreadyScammed?: boolean; // triage: user already lost money (victim state)
}

const stepNumber = (n: number, color: string): React.ReactNode => (
  <div className={`shrink-0 w-9 h-9 md:w-12 md:h-12 ${color} border-2 border-current flex items-center justify-center font-bold text-lg md:text-2xl font-['Press_Start_2P']`}>
    {n}
  </div>
);

const RecoveryLadder: React.FC<RecoveryLadderProps> = ({
  verdict,
  entities = [],
  scamType = '',
  redFlags = [],
  onCopyReport,
  copied = false,
  language = 'TAGALOG',
  alreadyScammed = false,
}) => {
  const isHighRisk = verdict === Verdict.HIGH_RISK;

  // Build the freeze-funds list from matched brands. If nothing matched OR
  // every matched brand is unknown/inactive, fall back to the four most common
  // wallets so Step 1 never renders an empty action list.
  const candidates = entities.length > 0 ? entities.slice(0, 4) : ['GCASH', 'MAYA', 'BDO', 'BPI'];
  let freezeEntries = candidates
    .map((k) => SUPPORT_DATABASE[k])
    .filter((e): e is typeof SUPPORT_DATABASE[string] => !!e && e.active);
  if (freezeEntries.length === 0) {
    freezeEntries = ['GCASH', 'MAYA', 'BDO', 'BPI']
      .map((k) => SUPPORT_DATABASE[k])
      .filter((e): e is typeof SUPPORT_DATABASE[string] => !!e && e.active);
  }

  // One-rule banner: the single most transferable lesson for this verdict.
  // For HIGH_RISK this is a definitive Taglish command, not a hedge - the
  // moment of truth is right here, and the user must not reply or share codes.
  const banner = isHighRisk
    ? t(language, 'oneRule')
    : t(language, 'dontReply');

  return (
    <div className="relative z-10 mb-6 border-4 border-red-900 bg-red-950/30">
      {/* Banner */}
      <div className="flex items-center gap-3 px-3 py-2 border-b-2 border-red-900/60">
        {isHighRisk ? (
          <ShieldCheck className="w-6 h-6 text-red-400 shrink-0 animate-pulse" />
        ) : (
          <Phone className="w-6 h-6 text-amber-400 shrink-0" />
        )}
        <p className="font-['VT323'] text-lg md:text-xl text-red-100 leading-tight">{banner}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
        {/* STEP 1 - FREEZE FUNDS */}
        <div className="bg-slate-900 border-2 border-slate-700 p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {stepNumber(1, 'bg-red-900/50 text-red-400')}
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] text-red-400 font-bold mb-0.5"><Clock className="w-3 h-3" /> {t(language, 'timeFrameNow')}</span>
              <h5 className="text-red-300 font-bold text-sm md:text-lg font-['Press_Start_2P']">{t(language, 'freezeFunds')}</h5>
              <p className="text-slate-400 text-sm leading-tight">{t(language, 'freezeSub')}</p>
            </div>
          </div>
          <div className="space-y-1.5">
            {freezeEntries.map((e) => {
              const voice = e.channels.find((c) => c.type === 'voice') || e.channels.find((c) => c.type === 'tollfree');
              return (
                <div key={e.key} className="flex items-center justify-between bg-slate-950 border border-slate-700 px-2 py-1.5">
                  <span className={`font-bold text-sm ${e.theme === 'green' ? 'text-green-400' : 'text-blue-400'}`}>{e.name}</span>
                  {voice ? (
                    <a href={`tel:${voice.value}`} className="text-cyan-300 hover:text-white underline decoration-dotted underline-offset-2 text-sm">
                      {voice.value}
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm">{e.appGuide}</span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-slate-400 text-xs md:text-sm leading-tight border-t border-slate-700 pt-2">
            {t(language, 'callScript')}
          </p>
        </div>

        {/* STEP 2 - EVIDENCE */}
        <div className="bg-slate-900 border-2 border-slate-700 p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {stepNumber(2, 'bg-orange-900/50 text-orange-400')}
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] text-orange-400 font-bold mb-0.5"><Clock className="w-3 h-3" /> {t(language, 'timeFrameToday')}</span>
              <h5 className="text-orange-300 font-bold text-sm md:text-lg font-['Press_Start_2P']">{t(language, 'saveEvidence')}</h5>
              <p className="text-slate-400 text-sm leading-tight">
                {alreadyScammed
                  ? t(language, 'deletedEvidence')
                  : 'Do not delete anything. It becomes your police report.'}
              </p>
            </div>
          </div>
          {!alreadyScammed && (
            <ul className="text-slate-300 text-sm md:text-base space-y-1 leading-tight">
              <li className="flex items-start gap-2"><span className="text-orange-400 shrink-0">&gt;</span> Screenshot the message and sender</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 shrink-0">&gt;</span> Copy any link or number mentioned</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 shrink-0">&gt;</span> Keep receipts if money was sent</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 shrink-0">&gt;</span> Note the date and time received</li>
            </ul>
          )}
        </div>

        {/* STEP 3 - REPORT (full width) */}
        <div className="md:col-span-2 bg-slate-900 border-2 border-slate-700 p-3 flex flex-col md:flex-row items-start md:items-center gap-3">
          {stepNumber(3, 'bg-slate-800 text-slate-300')}
          <div className="flex-1">
            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-bold mb-0.5"><Clock className="w-3 h-3" /> {t(language, 'timeFrameThisWeek')}</span>
            <h5 className="text-slate-200 font-bold text-sm md:text-lg font-['Press_Start_2P']">{t(language, 'reportIt')}</h5>
            <p className="text-slate-400 text-sm leading-tight">
              One report warns everyone. Use the report below for PNP-ACG and CICC 1326, or just copy it.
            </p>
            {scamType && redFlags.length > 0 && (
              <p className="text-slate-500 text-xs mt-1 truncate">
                {scamType} | flags: {redFlags.slice(0, 4).join(', ')}
              </p>
            )}
          </div>
          {onCopyReport && (
            <button
              onClick={onCopyReport}
              className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-600 text-white font-['Press_Start_2P'] text-xs border-b-4 border-r-4 border-red-900 active:border-0 active:translate-y-1 transition-all shrink-0 min-h-[44px]"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'COPIED!' : 'COPY REPORT'}
            </button>
          )}
        </div>
      </div>

      {isHighRisk && (
        <div className="px-3 py-2 border-t-2 border-red-900/60 flex items-center gap-2 text-slate-300 text-sm md:text-base">
          <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Then contact <span className="text-white font-bold">CICC 1326</span> or the{" "}
            <span className="text-white font-bold">PNP Anti-Cybercrime Group</span> below. The government can act on a
            structured report.
          </span>
        </div>
      )}
    </div>
  );
};

export default RecoveryLadder;

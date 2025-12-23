import React from 'react';
import { Phone, Smartphone, Building2, ChevronDown, Globe, MessageSquare } from 'lucide-react';

interface SupportData {
  theme: 'green' | 'blue' | 'red' | 'yellow' | 'purple' | 'slate';
  name: string;
  hotlineLabel: string;
  hotlineNumber: string;
  description: string;
  availability: string;
  appGuide: string;
  tollFree?: { label: string; number: string; type: 'mobile' | 'landline' }[];
  email?: string;
}

// DATABASE OF PH BANKS & WALLETS
const SUPPORT_DATABASE: Record<string, SupportData> = {
  // === WALLETS ===
  'GCASH': {
    theme: 'blue',
    name: 'GCash Help Center',
    hotlineLabel: '2882',
    hotlineNumber: '2882',
    description: 'For account takeover, unauthorized transfers, or lost SIM.',
    availability: 'Daily 8AM - 5PM (Urgent: 24/7)',
    appGuide: 'Open App > Profile > Help Center > Chat with Gigi',
    tollFree: [
      { label: 'Globe / TM Users', number: '2882', type: 'mobile' },
      { label: 'Landline', number: '(02) 7213-9999', type: 'landline' }
    ]
  },
  'MAYA': {
    theme: 'green',
    name: 'Maya Hotline',
    hotlineLabel: '(02) 8845 7788',
    hotlineNumber: '+63288457788',
    description: 'For lost phones, fraud, or unauthorized transactions.',
    availability: 'Daily 8AM - 7PM',
    appGuide: 'Open App > Profile > Help & FAQs > Chat Support',
    tollFree: [
      { label: 'Smart / Sun / TNT', number: '*788', type: 'mobile' },
      { label: 'PLDT Landline', number: '1-800-1084-57788', type: 'landline' }
    ]
  },

  // === MAJOR UNIVERSAL & COMMERCIAL BANKS ===
  'BDO': {
    theme: 'blue',
    name: 'BDO Contact Center',
    hotlineLabel: '(02) 8631-8000',
    hotlineNumber: '+63286318000',
    description: 'Report compromised cards and unauthorized online banking access.',
    availability: '24/7 Banking Support',
    appGuide: 'Log in > More > Contact Us > Report Phishing',
    email: 'callcenter@bdo.com.ph',
    tollFree: [
       { label: 'Domestic Toll-Free', number: '1-800-10-631-8000', type: 'landline' }, // PLDT
       { label: 'Intl. (IAC)', number: '+800-8-CALLBDO', type: 'landline' } //
    ]
  },
  'METROBANK': {
    theme: 'purple',
    name: 'Metrobank Contact Center',
    hotlineLabel: '(02) 88-700-700',
    hotlineNumber: '+63288700700',
    description: 'Report Metrobank Online fraud or card compromise.',
    availability: '24/7 Domestic',
    appGuide: 'Open App > Contact Us',
    email: 'customercare@metrobank.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-1888-5775', type: 'landline' } //
    ]
  },
  'BPI': {
    theme: 'red',
    name: 'BPI Contact Center',
    hotlineLabel: '(02) 889-10000',
    hotlineNumber: '+63288910000',
    description: 'Immediately report lost cards or cyber fraud incidents.',
    availability: '24/7 Contact Center',
    appGuide: 'Visit branch or call hotline immediately.',
    email: 'help@bpi.com.ph', //
    tollFree: [
      { label: 'Domestic Toll-Free', number: '1-800-188-89-100', type: 'landline' }, // PLDT
      { label: 'Mobile/Intl', number: '+63-2-889-10000', type: 'mobile' } //
    ]
  },
  'PNB': {
    theme: 'blue',
    name: 'PNB Customer Care',
    hotlineLabel: '(02) 8573-8888', // Updated from doc
    hotlineNumber: '+63285738888',
    description: 'For credit card fraud, lost cards, or online banking issues.',
    availability: '24/7 Hotline',
    appGuide: 'Call hotline or visit branch.',
    email: 'customercare@pnb.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10-818-9-818', type: 'landline' } //
    ]
  },
  'SECURITY BANK': {
    theme: 'blue',
    name: 'Security Bank Hotline',
    hotlineLabel: '(02) 8887-9188',
    hotlineNumber: '+63288879188',
    description: 'Report fraud, lost cards, or unauthorized SB Online access.',
    availability: '24/7 Customer Service',
    appGuide: 'Open App > Help & Support',
    email: 'customercare@securitybank.com.ph', //
    tollFree: [
      { label: 'PLDT Toll Free', number: '1-800-1-888-1250', type: 'landline' } //
    ]
  },
  'RCBC': {
    theme: 'blue',
    name: 'RCBC Customer Care',
    hotlineLabel: '(02) 8877-7222',
    hotlineNumber: '+63288777222',
    description: 'Report RCBC Online or Pulz app fraud incidents immediately.',
    availability: '24/7 Support',
    appGuide: 'Open App > Contact Us',
    email: 'customercare@rcbc.com', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10000-7222', type: 'landline' } //
    ]
  },
  'CHINA BANK': {
    theme: 'red',
    name: 'China Bank Hotline',
    hotlineLabel: '(02) 888-55-888',
    hotlineNumber: '+63288855888',
    description: 'Concerns regarding ATM, Online Banking, or Mobile Banking fraud.',
    availability: '24/7 Contact Center',
    appGuide: 'Call hotline for immediate assistance.',
    email: 'online@chinabank.ph', //
    tollFree: [
      { label: 'PLDT Toll Free', number: '1-800-1888-5888', type: 'landline' } //
    ]
  },
  'UNIONBANK': {
    theme: 'yellow',
    name: 'UnionBank Hotline',
    hotlineLabel: '(02) 8841-8600',
    hotlineNumber: '+63288418600',
    description: 'Customer service for fraud and account security.',
    availability: '24/7 Support',
    appGuide: 'Open App > Mailbox Icon > Create Ticket',
    email: 'customer.service@unionbankph.com', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-1888-2277', type: 'landline' } //
    ]
  },
  'EASTWEST': {
    theme: 'purple',
    name: 'EastWest Service',
    hotlineLabel: '(02) 8888-1700',
    hotlineNumber: '+63288881700',
    description: 'Report unauthorized transactions or lost EastWest cards.',
    availability: '24/7 Customer Service',
    appGuide: 'Call hotline or email service.',
    email: 'service@eastwestbanker.com', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-1888-8600', type: 'landline' } //
    ]
  },
  'BANK OF COMMERCE': {
    theme: 'red',
    name: 'BankCom Hotline',
    hotlineLabel: '(02) 8632-2265',
    hotlineNumber: '+63286322265',
    description: 'Customer care for fraud reporting and account security.',
    availability: 'Bank Hours & 24/7 ATM Ctr',
    appGuide: 'Call hotline for assistance.',
    email: 'customerservice@bankcom.com.ph', //
    tollFree: [
      { label: 'PLDT Toll Free', number: '1800-10-982-6000', type: 'landline' }, //
      { label: 'Globe Toll Free', number: '1800-8-982-6000', type: 'mobile' } //
    ]
  },
  'ROBINSONS BANK': {
    theme: 'red',
    name: 'RBank (Merged BPI)',
    hotlineLabel: '(02) 8637-2273',
    hotlineNumber: '+63286372273',
    description: 'Merged with BPI. Legacy support active.',
    availability: 'Contact Center',
    appGuide: 'Contact C3 support or visit BPI branch.',
    email: 'C3@robinsonsbank.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10-637-2273', type: 'landline' } //
    ]
  },
  'PBCOM': {
    theme: 'red',
    name: 'PBCOM Customer Care',
    hotlineLabel: '(02) 8830-7000',
    hotlineNumber: '+63288307000',
    description: 'Report lost cards or suspicious banking activities.',
    availability: 'Business Hours',
    appGuide: 'Call hotline.',
    email: 'customercare@pbcom.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10-830-7000', type: 'landline' } //
    ]
  },
  'PVB': {
    theme: 'green',
    name: 'Veterans Bank',
    hotlineLabel: '(02) 7902-1700', // Updated from doc
    hotlineNumber: '+63279021700',
    description: 'Customer care for PVB clients and veterans.',
    availability: 'Mon-Fri 8AM-5PM', //
    appGuide: 'Call hotline.',
    email: 'customercare@veteransbank.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10-333-8247', type: 'landline' } //
    ]
  },
  'AUB': {
    theme: 'yellow',
    name: 'AUB Customer Care',
    hotlineLabel: '(02) 8282-8888',
    hotlineNumber: '+63282828888',
    description: 'Asia United Bank support for fraud and HelloMoney.',
    availability: 'Mon-Fri 8:30AM-5:30PM',
    appGuide: 'Call hotline.',
    email: 'customercare@aub.com.ph', //
    tollFree: [
      { label: 'Domestic Toll Free', number: '1-800-10-282-8888', type: 'landline' } //
    ]
  },

  // --- DEFAULT (PNP-ACG) ---
  'DEFAULT': {
    theme: 'slate',
    name: 'PNP Anti-Cybercrime',
    hotlineLabel: '(02) 8414-1560',
    hotlineNumber: '+63284141560',
    description: 'Official police unit for filing cybercrime complaints.',
    availability: 'Government Office Hours',
    appGuide: 'File complaint at acg.pnp.gov.ph',
    tollFree: [
      { label: 'CICC Hotline', number: '1326', type: 'mobile' }
    ]
  }
};

interface SmartSupportProps {
  detectedEntity?: string; // e.g., "BDO", "GCash", "Unionbank"
}

const SmartSupport: React.FC<SmartSupportProps> = ({ detectedEntity }) => {
  // Normalize input to find a match
  const normalizedEntity = detectedEntity ? detectedEntity.toUpperCase() : '';
  
  // Find matching key in database
  const matchKey = Object.keys(SUPPORT_DATABASE).find(key => normalizedEntity.includes(key)) || 'DEFAULT';
  const data = SUPPORT_DATABASE[matchKey];

  // Dynamic Theme Colors
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

  const colors = getThemeClasses(data.theme);

  return (
    <div className="w-full font-['VT323'] mt-4 animate-in fade-in slide-in-from-bottom-2">
      
      {/* Main Card */}
      <div className={`bg-slate-900 border-4 ${colors.border} p-1 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]`}>
        
        {/* Header / Primary Hotline */}
        <div className={`bg-slate-800 p-4 border-2 border-slate-600 relative overflow-hidden group hover:${colors.border} transition-colors`}>
          
          <div className="flex justify-between items-start mb-2">
            <h3 className={`${colors.text} font-['Press_Start_2P'] text-xs md:text-sm uppercase flex items-center gap-2`}>
              <div className={`p-1 ${colors.iconBg} text-white`}>
                 <Phone className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              {data.name}
            </h3>
            {/* Pulsing Status Dot */}
            <div className={`flex items-center gap-2 px-2 py-1 ${colors.bg} border ${colors.border} rounded-full`}>
              <div className="relative w-2 h-2">
                <div className={`absolute w-full h-full ${colors.text.replace('text', 'bg')} rounded-full animate-ping opacity-75`}></div>
                <div className={`relative w-full h-full ${colors.text.replace('text', 'bg').replace('400','500')} rounded-full`}></div>
              </div>
              <span className={`text-[10px] md:text-xs ${colors.text} font-bold tracking-wider hidden sm:block`}>{data.availability}</span>
            </div>
          </div>

          <p className="text-slate-300 text-lg leading-tight mb-4 border-l-2 border-slate-600 pl-3">
            {data.description}
          </p>

          {/* Primary Call Action */}
          <a href={`tel:${data.hotlineNumber}`} className={`block ${colors.btn} text-white p-3 border-b-4 border-r-4 border-black active:border-0 active:translate-y-1 transition-all text-center group-hover:scale-[1.02]`}>
             <span className="font-['Press_Start_2P'] text-sm md:text-xl flex items-center justify-center gap-3">
               {data.hotlineLabel}
             </span>
             <span className="block text-xs text-white/80 mt-1 font-sans uppercase tracking-widest">Tap to Call • Standard Rates</span>
          </a>
        </div>

        {/* Secondary Options (The Dropdown) */}
        <div className="bg-slate-950 border-t-0 border-2 border-slate-700 mt-1">
          <details className="group">
            <summary className={`flex items-center justify-between p-3 cursor-pointer text-slate-400 hover:${colors.text} transition-colors list-none select-none`}>
              <span className="flex items-center gap-2 text-base md:text-lg uppercase tracking-wide font-bold">
                <Building2 className="w-4 h-4" />
                Alternative Channels
              </span>
              <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
            </summary>
            
            <div className="p-4 pt-0 border-t border-slate-800 grid gap-4 animate-in slide-in-from-top-2">
              
              {/* App Guide */}
              <div className="bg-slate-900 p-3 border border-slate-700 flex gap-3 items-start">
                  <div className={`p-2 ${colors.bg} ${colors.text}`}>
                      <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                      <span className="block text-slate-400 text-xs uppercase font-bold mb-1">In-App Support (Fastest)</span>
                      <p className="text-white text-base md:text-lg leading-none">{data.appGuide}</p>
                  </div>
              </div>

              {/* Email if available */}
              {data.email && (
                 <div className="flex items-center gap-3 px-2">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-400">Email: <span className="text-white select-all">{data.email}</span></span>
                 </div>
              )}

              {/* Toll Free List */}
              {data.tollFree && data.tollFree.map((tf, idx) => (
                <div key={idx} className="flex items-start gap-3 border-t border-slate-800 pt-3">
                    <div className="p-2 bg-slate-800 text-slate-400 border border-slate-600 shrink-0">
                        {tf.type === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                    </div>
                    <div>
                        <span className="block text-slate-500 text-xs uppercase font-bold">{tf.label}</span>
                        <a href={`tel:${tf.number}`} className={`text-lg md:text-xl text-white hover:${colors.text} font-bold tracking-wider underline decoration-dotted underline-offset-4`}>
                            {tf.number}
                        </a>
                    </div>
                </div>
              ))}

            </div>
          </details>
        </div>

      </div>
    </div>
  );
};

export default SmartSupport;
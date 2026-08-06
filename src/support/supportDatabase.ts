export type SupportChannelType = 'voice' | 'tollfree' | 'email' | 'chat' | 'inapp' | 'web';

export interface SupportChannel {
  type: SupportChannelType;
  label: string;
  value: string;
  notes?: string;
}

export interface SupportEntry {
  key: string;
  name: string;
  theme: 'green' | 'blue' | 'red' | 'yellow' | 'purple' | 'slate';
  channels: SupportChannel[];
  appGuide: string;
  availability: string;
  fraudFocus: string;
  verifiedAt: string;
  source: string;
  active: boolean;
  imposterPriority: number;
}

export const SUPPORT_DATABASE: Record<string, SupportEntry> = {
  GCASH: {
    key: 'GCASH',
    name: 'GCash Help Center',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '2882' },
      { type: 'tollfree', label: 'Globe / TM Users', value: '2882' },
      { type: 'tollfree', label: 'Landline', value: '(02) 7213-9999' }
    ],
    appGuide: 'Open App > Profile > Help Center > Chat with Gigi',
    availability: 'Daily 8AM - 5PM (Urgent: 24/7)',
    fraudFocus: 'For account takeover, unauthorized transfers, or lost SIM.',
    verifiedAt: '2025-07-01',
    source: 'https://www.gcash.com/support',
    active: true,
    imposterPriority: 10
  },
  MAYA: {
    key: 'MAYA',
    name: 'Maya Hotline',
    theme: 'green',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288457788' },
      { type: 'tollfree', label: 'Smart / Sun / TNT', value: '*788' },
      { type: 'tollfree', label: 'PLDT Landline', value: '1-800-1084-57788' }
    ],
    appGuide: 'Open App > Profile > Help & FAQs > Chat Support',
    availability: 'Daily 8AM - 7PM',
    fraudFocus: 'For lost phones, fraud, or unauthorized transactions.',
    verifiedAt: '2025-07-01',
    source: 'https://www.maya.ph/help',
    active: true,
    imposterPriority: 9
  },

  BDO: {
    key: 'BDO',
    name: 'BDO Contact Center',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63286318000' },
      { type: 'tollfree', label: 'Domestic Toll-Free (PLDT)', value: '1-800-10-631-8000' },
      { type: 'tollfree', label: 'International (IAC)', value: '+800-8-CALLBDO' },
      { type: 'email', label: 'Email', value: 'callcenter@bdo.com.ph' }
    ],
    appGuide: 'Log in > More > Contact Us > Report Phishing',
    availability: '24/7 Banking Support',
    fraudFocus: 'Report compromised cards and unauthorized online banking access.',
    verifiedAt: '2025-07-01',
    source: 'https://www.bdo.com.ph/contact-us',
    active: true,
    imposterPriority: 7
  },
  METROBANK: {
    key: 'METROBANK',
    name: 'Metrobank Contact Center',
    theme: 'purple',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288700700' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-1888-5775' },
      { type: 'email', label: 'Email', value: 'customercare@metrobank.com.ph' }
    ],
    appGuide: 'Open App > Contact Us',
    availability: '24/7 Domestic',
    fraudFocus: 'Report Metrobank Online fraud or card compromise.',
    verifiedAt: '2025-07-01',
    source: 'https://www.metrobank.com.ph/contact-us',
    active: true,
    imposterPriority: 7
  },
  BPI: {
    key: 'BPI',
    name: 'BPI Contact Center',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288910000' },
      { type: 'tollfree', label: 'Domestic Toll-Free', value: '1-800-188-89-100' },
      { type: 'voice', label: 'Mobile / Intl', value: '+63-2-889-10000' },
      { type: 'email', label: 'Email', value: 'help@bpi.com.ph' }
    ],
    appGuide: 'Visit branch or call hotline immediately.',
    availability: '24/7 Contact Center',
    fraudFocus: 'Immediately report lost cards or cyber fraud incidents.',
    verifiedAt: '2025-07-01',
    source: 'https://www.bpi.com.ph/',
    active: true,
    imposterPriority: 7
  },
  PNB: {
    key: 'PNB',
    name: 'PNB Customer Care',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63285738888' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10-818-9-818' },
      { type: 'email', label: 'Email', value: 'customercare@pnb.com.ph' }
    ],
    appGuide: 'Call hotline or visit branch.',
    availability: '24/7 Hotline',
    fraudFocus: 'For credit card fraud, lost cards, or online banking issues.',
    verifiedAt: '2025-07-01',
    source: 'https://www.pnb.com.ph/',
    active: true,
    imposterPriority: 7
  },
  'SECURITY BANK': {
    key: 'SECURITY BANK',
    name: 'Security Bank Hotline',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288879188' },
      { type: 'tollfree', label: 'PLDT Toll Free', value: '1-800-1-888-1250' },
      { type: 'email', label: 'Email', value: 'customercare@securitybank.com.ph' }
    ],
    appGuide: 'Open App > Help & Support',
    availability: '24/7 Customer Service',
    fraudFocus: 'Report fraud, lost cards, or unauthorized SB Online access.',
    verifiedAt: '2025-07-01',
    source: 'https://www.securitybank.com/',
    active: true,
    imposterPriority: 7
  },
  RCBC: {
    key: 'RCBC',
    name: 'RCBC Customer Care',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288777222' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10000-7222' },
      { type: 'email', label: 'Email', value: 'customercare@rcbc.com' }
    ],
    appGuide: 'Open App > Contact Us',
    availability: '24/7 Support',
    fraudFocus: 'Report RCBC Online or Pulz app fraud incidents immediately.',
    verifiedAt: '2025-07-01',
    source: 'https://www.rcbc.com/',
    active: true,
    imposterPriority: 7
  },
  'CHINA BANK': {
    key: 'CHINA BANK',
    name: 'China Bank Hotline',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288855888' },
      { type: 'tollfree', label: 'PLDT Toll Free', value: '1-800-1888-5888' },
      { type: 'email', label: 'Email', value: 'online@chinabank.ph' }
    ],
    appGuide: 'Call hotline for immediate assistance.',
    availability: '24/7 Contact Center',
    fraudFocus: 'Concerns regarding ATM, Online Banking, or Mobile Banking fraud.',
    verifiedAt: '2025-07-01',
    source: 'https://www.chinabank.ph/',
    active: true,
    imposterPriority: 7
  },
  UNIONBANK: {
    key: 'UNIONBANK',
    name: 'UnionBank Hotline',
    theme: 'yellow',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288418600' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-1888-2277' },
      { type: 'email', label: 'Email', value: 'customer.service@unionbankph.com' }
    ],
    appGuide: 'Open App > Mailbox Icon > Create Ticket',
    availability: '24/7 Support',
    fraudFocus: 'Customer service for fraud and account security.',
    verifiedAt: '2025-07-01',
    source: 'https://www.unionbankph.com/',
    active: true,
    imposterPriority: 7
  },
  EASTWEST: {
    key: 'EASTWEST',
    name: 'EastWest Service',
    theme: 'purple',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288881700' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-1888-8600' },
      { type: 'email', label: 'Email', value: 'service@eastwestbanker.com' }
    ],
    appGuide: 'Call hotline or email service.',
    availability: '24/7 Customer Service',
    fraudFocus: 'Report unauthorized transactions or lost EastWest cards.',
    verifiedAt: '2025-07-01',
    source: 'https://www.eastwestbanker.com/',
    active: true,
    imposterPriority: 7
  },
  'BANK OF COMMERCE': {
    key: 'BANK OF COMMERCE',
    name: 'BankCom Hotline',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63286322265' },
      { type: 'tollfree', label: 'PLDT Toll Free', value: '1800-10-982-6000' },
      { type: 'tollfree', label: 'Globe Toll Free', value: '1800-8-982-6000' },
      { type: 'email', label: 'Email', value: 'customerservice@bankcom.com.ph' }
    ],
    appGuide: 'Call hotline for assistance.',
    availability: 'Bank Hours & 24/7 ATM Ctr',
    fraudFocus: 'Customer care for fraud reporting and account security.',
    verifiedAt: '2025-07-01',
    source: 'https://www.bankcom.com.ph/',
    active: true,
    imposterPriority: 7
  },
  'ROBINSONS BANK': {
    key: 'ROBINSONS BANK',
    name: 'RBank (Merged BPI)',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63286372273' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10-637-2273' },
      { type: 'email', label: 'Email', value: 'C3@robinsonsbank.com.ph' }
    ],
    appGuide: 'Contact C3 support or visit BPI branch.',
    availability: 'Contact Center',
    fraudFocus: 'Merged into BPI. Legacy support active.',
    verifiedAt: '2025-07-01',
    source: 'https://www.bpi.com.ph/',
    active: false,
    imposterPriority: 7
  },
  PBCOM: {
    key: 'PBCOM',
    name: 'PBCOM Customer Care',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288307000' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10-830-7000' },
      { type: 'email', label: 'Email', value: 'customercare@pbcom.com.ph' }
    ],
    appGuide: 'Call hotline.',
    availability: 'Business Hours',
    fraudFocus: 'Report lost cards or suspicious banking activities.',
    verifiedAt: '2025-07-01',
    source: 'https://www.pbcom.com.ph/',
    active: true,
    imposterPriority: 7
  },
  PVB: {
    key: 'PVB',
    name: 'Veterans Bank',
    theme: 'green',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63279021700' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10-333-8247' },
      { type: 'email', label: 'Email', value: 'customercare@veteransbank.com.ph' }
    ],
    appGuide: 'Call hotline.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'Customer care for PVB clients and veterans.',
    verifiedAt: '2025-07-01',
    source: 'https://www.veteransbank.com.ph/',
    active: true,
    imposterPriority: 7
  },
  AUB: {
    key: 'AUB',
    name: 'AUB Customer Care',
    theme: 'yellow',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63282828888' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-10-282-8888' },
      { type: 'email', label: 'Email', value: 'customercare@aub.com.ph' }
    ],
    appGuide: 'Call hotline.',
    availability: 'Mon-Fri 8:30AM-5:30PM',
    fraudFocus: 'Asia United Bank support for fraud and HelloMoney.',
    verifiedAt: '2025-07-01',
    source: 'https://www.aub.com.ph/',
    active: true,
    imposterPriority: 7
  },

  GOTYME: {
    key: 'GOTYME',
    name: 'GoTyme Help Center',
    theme: 'green',
    channels: [
      { type: 'voice', label: 'Hotline', value: '468888', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'help@gotyme.com.ph', notes: 'verify before launch' }
    ],
    appGuide: 'Open App > Help Center > Contact Support',
    availability: 'In-app chat 24/7; hotline during business hours',
    fraudFocus: 'For lost cards, unauthorized transactions, or GoTyme account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.gotyme.com.ph/help',
    active: true,
    imposterPriority: 7
  },
  SEABANK: {
    key: 'SEABANK',
    name: 'SeaBank Customer Care',
    theme: 'purple',
    channels: [
      { type: 'inapp', label: 'In-App Chat', value: 'SeaBank App > Help Center', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'support@seabank.ph', notes: 'verify before launch' }
    ],
    appGuide: 'Open App > Help Center > Chat with Support',
    availability: '24/7 in-app support',
    fraudFocus: 'For unauthorized transactions, card issues, or SeaBank account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.seabank.ph/',
    active: true,
    imposterPriority: 7
  },
  CIMB: {
    key: 'CIMB',
    name: 'CIMB Bank PH',
    theme: 'yellow',
    channels: [
      { type: 'inapp', label: 'In-App Chat', value: 'CIMB PH App > Help Center', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'cimb.ph@cimb.com', notes: 'verify before launch' }
    ],
    appGuide: 'Open App > Help > Chat with Us',
    availability: '24/7 in-app',
    fraudFocus: 'For unauthorized transactions or CIMB account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.cimbbank.com.ph/',
    active: true,
    imposterPriority: 7
  },
  SHOPEEPAY: {
    key: 'SHOPEEPAY',
    name: 'ShopeePay Customer Care',
    theme: 'yellow',
    channels: [
      { type: 'inapp', label: 'In-App via Shopee', value: 'Shopee App > Me > ShopeePay > Help Center', notes: 'verify before launch' },
      { type: 'chat', label: 'Shopee Chat Support', value: 'Shopee App > Chat with Shopee Support' }
    ],
    appGuide: 'Open Shopee App > Me > ShopeePay > Help Center',
    availability: '24/7 in-app',
    fraudFocus: 'For unauthorized ShopeePay transactions or account takeover.',
    verifiedAt: '2026-01-01',
    source: 'https://shopee.ph/m/shopee-pay',
    active: true,
    imposterPriority: 9
  },
  LAZADAWALLET: {
    key: 'LAZADAWALLET',
    name: 'Lazada Wallet Support',
    theme: 'purple',
    channels: [
      { type: 'inapp', label: 'In-App via Lazada', value: 'Lazada App > Account > Lazada Wallet > Help', notes: 'verify before launch' },
      { type: 'chat', label: 'Lazada Chat Support', value: 'Lazada App > Customer Service Chat' }
    ],
    appGuide: 'Open Lazada App > Account > Lazada Wallet > Help Center',
    availability: '24/7 in-app',
    fraudFocus: 'For unauthorized Lazada Wallet transactions or account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.lazada.com.ph/',
    active: true,
    imposterPriority: 8
  },

  LANDBANK: {
    key: 'LANDBANK',
    name: 'LandBank Contact Center',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63284057000' },
      { type: 'tollfree', label: 'Domestic Toll Free', value: '1-800-1008-4057', notes: 'verify before launch' }
    ],
    appGuide: 'Visit branch or call the Contact Center.',
    availability: 'Mon-Sat 8AM-6PM',
    fraudFocus: 'For unauthorized transactions, ATM card issues, or LandBank account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.landbank.com/',
    active: true,
    imposterPriority: 7
  },

  GLOBE: {
    key: 'GLOBE',
    name: 'Globe Telecom Hotline',
    theme: 'blue',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63277301000' },
      { type: 'tollfree', label: 'Globe / TM Mobile', value: '211' },
      { type: 'inapp', label: 'GlobeOne App', value: 'GlobeOne App > Help & Support' }
    ],
    appGuide: 'Open GlobeOne app > Support',
    availability: '24/7',
    fraudFocus: 'For unauthorized load/cash-out, SIM swap, or Globe/TM account issues.',
    verifiedAt: '2026-01-01',
    source: 'https://www.globe.com.ph/',
    active: true,
    imposterPriority: 8
  },
  SMART: {
    key: 'SMART',
    name: 'Smart Communications Hotline',
    theme: 'purple',
    channels: [
      { type: 'voice', label: 'Smart Hotline', value: '8888' },
      { type: 'tollfree', label: 'PLDT Landline', value: '1-800-3-888-1111', notes: 'verify before launch' }
    ],
    appGuide: 'Dial 8888 or use the Smart App > Help',
    availability: '24/7',
    fraudFocus: 'For unauthorized load, SIM swap, or Smart/TNT account issues.',
    verifiedAt: '2026-01-01',
    source: 'https://www.smart.com.ph/',
    active: true,
    imposterPriority: 8
  },
  DITO: {
    key: 'DITO',
    name: 'DITO Telecommunity Hotline',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'DITO Hotline', value: '185' },
      { type: 'inapp', label: 'DITO App', value: 'DITO App > Help Center' }
    ],
    appGuide: 'Open DITO App > Help Center',
    availability: '24/7',
    fraudFocus: 'For unauthorized data/cash-out, SIM issues, or DITO account security.',
    verifiedAt: '2026-01-01',
    source: 'https://www.dito.ph/',
    active: true,
    imposterPriority: 8
  },

  'J&T': {
    key: 'J&T',
    name: 'J&T Express Customer Service',
    theme: 'yellow',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63285389999' },
      { type: 'chat', label: 'In-App Chat', value: 'J&T Express App > Support', notes: 'verify before launch' }
    ],
    appGuide: 'Use the J&T Express app or website tracker.',
    availability: 'Mon-Sun 8AM-6PM',
    fraudFocus: 'For parcel delivery scams, fake customs fees, or parcel tracking issues.',
    verifiedAt: '2026-01-01',
    source: 'https://www.jtexpress.ph/',
    active: true,
    imposterPriority: 5
  },
  LBC: {
    key: 'LBC',
    name: 'LBC Express Hotline',
    theme: 'red',
    channels: [
      { type: 'voice', label: 'Hotline', value: '+63288585222' },
      { type: 'email', label: 'Email', value: 'support@lbcexpress.com', notes: 'verify before launch' }
    ],
    appGuide: 'Use the LBC Express app or call the hotline.',
    availability: 'Mon-Sat 8AM-6PM',
    fraudFocus: 'For customs/insurance fee scams and lost or held parcels.',
    verifiedAt: '2026-01-01',
    source: 'https://www.lbcexpress.com/',
    active: true,
    imposterPriority: 5
  },
  PHILPOST: {
    key: 'PHILPOST',
    name: 'PhilPost Hotline',
    theme: 'slate',
    channels: [
      { type: 'voice', label: 'Hotline', value: '(02) 8876-8880', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'phlpostinfo@phlpost.gov.ph', notes: 'verify before launch' },
      { type: 'web', label: 'Website', value: 'https://www.phlpost.gov.ph/' }
    ],
    appGuide: 'Track parcels on phlpost.gov.ph or visit the local post office.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For customs fee scams pretending to be from the post office.',
    verifiedAt: '2026-01-01',
    source: 'https://www.phlpost.gov.ph/',
    active: true,
    imposterPriority: 5
  },

  NBI: {
    key: 'NBI',
    name: 'NBI Hotline',
    theme: 'slate',
    channels: [
      { type: 'voice', label: 'Hotline', value: '(02) 8523-8231', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'nbi_cybercrime@nbi.gov.ph', notes: 'verify before launch' },
      { type: 'web', label: 'Website', value: 'https://nbi.gov.ph/' }
    ],
    appGuide: 'File a complaint in person at the NBI Cybercrime Division.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For filing official complaints on cyber fraud and identity theft.',
    verifiedAt: '2026-01-01',
    source: 'https://nbi.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  PNP: {
    key: 'PNP',
    name: 'PNP Anti-Cybercrime Group',
    theme: 'slate',
    channels: [
      { type: 'voice', label: 'PNP-ACG Hotline', value: '(02) 8414-1560' },
      { type: 'tollfree', label: 'PNP-ACG Toll Free', value: '1-800-1-702-0012', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'acg@acg.pnp.gov.ph', notes: 'verify before launch' },
      { type: 'web', label: 'Complaint Desk', value: 'https://acg.pnp.gov.ph/' }
    ],
    appGuide: 'File a complaint online or in person at acg.pnp.gov.ph',
    availability: '24/7 (emergency desk)',
    fraudFocus: 'Official police unit for filing cybercrime complaints.',
    verifiedAt: '2026-01-01',
    source: 'https://acg.pnp.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  CICC: {
    key: 'CICC',
    name: 'CICC Inter-Agency Response Center',
    theme: 'purple',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '1326' },
      { type: 'email', label: 'Email', value: 'report@cicc.gov.ph', notes: 'verify before launch' }
    ],
    appGuide: 'Report online scams to the CICC hotline 1326.',
    availability: '24/7',
    fraudFocus: 'For reporting online fraud and verifying scam calls.',
    verifiedAt: '2026-01-01',
    source: 'https://cicc.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  BIR: {
    key: 'BIR',
    name: 'BIR Contact Center',
    theme: 'slate',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '8538-3200', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'contact_us@bir.gov.ph', notes: 'verify before launch' },
      { type: 'web', label: 'Website', value: 'https://www.bir.gov.ph/' }
    ],
    appGuide: 'Use the BIR Contact Center or visit an RDO.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For tax fine scams and fake BIR notices.',
    verifiedAt: '2026-01-01',
    source: 'https://www.bir.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  DTI: {
    key: 'DTI',
    name: 'DTI Consumer Hotline',
    theme: 'slate',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '1384' },
      { type: 'email', label: 'Email', value: 'consumercare@dti.gov.ph', notes: 'verify before launch' },
      { type: 'web', label: 'Consumer Care', value: 'https://www.dti.gov.ph/' }
    ],
    appGuide: 'Call 1384 or use the DTI Consumer Care portal.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For online seller scams, fake promotions, and consumer complaints.',
    verifiedAt: '2026-01-01',
    source: 'https://www.dti.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  SSS: {
    key: 'SSS',
    name: 'SSS Hotline',
    theme: 'slate',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '1455', notes: 'verify before launch' },
      { type: 'web', label: 'My.SSS Portal', value: 'https://www.sss.gov.ph/' }
    ],
    appGuide: 'Use the My.SSS portal or call 1455.',
    availability: 'Mon-Sat 8AM-5PM',
    fraudFocus: 'For fake SSS benefit loans and impostor calls.',
    verifiedAt: '2026-01-01',
    source: 'https://www.sss.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  GSIS: {
    key: 'GSIS',
    name: 'GSIS Contact Center',
    theme: 'slate',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '8847-4747', notes: 'verify before launch' },
      { type: 'email', label: 'Email', value: 'gsis@gsis.gov.ph', notes: 'verify before launch' }
    ],
    appGuide: 'Use the GSIS Touch app or call the contact center.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For fake GSIS loan applications and impostor calls.',
    verifiedAt: '2026-01-01',
    source: 'https://www.gsis.gov.ph/',
    active: true,
    imposterPriority: 3
  },
  PAGIBIG: {
    key: 'PAGIBIG',
    name: 'Pag-IBIG Fund Hotline',
    theme: 'slate',
    channels: [
      { type: 'tollfree', label: 'Hotline', value: '8724-4244', notes: 'verify before launch' },
      { type: 'web', label: 'Virtual Pag-IBIG', value: 'https://www.pagibigfund.gov.ph/' }
    ],
    appGuide: 'Use the Virtual Pag-IBIG portal or call the hotline.',
    availability: 'Mon-Fri 8AM-5PM',
    fraudFocus: 'For fake loan agents and Pag-IBIG impostor calls.',
    verifiedAt: '2026-01-01',
    source: 'https://www.pagibigfund.gov.ph/',
    active: true,
    imposterPriority: 3
  }
};

export const SUPPORT_KEYS: string[] = Object.keys(SUPPORT_DATABASE);

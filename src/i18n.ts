// === AGHOY LOCALIZATION ===
// The language toggle was cosmetic: it only affected the AI chat, not the UI,
// consent, or recovery copy. This module makes the critical, life-saving copy
// actually localizable. Covers the strings a panicking user must understand
// immediately. Keyed by string id; falls back to Taglish (the de-facto PH
// safety language) when a dialect lacks an entry.

export type AghoyLang = 'TAGALOG' | 'BISAYA' | 'ILOCANO' | 'ENGLISH';

type CopyKey =
  | 'oneRule'
  | 'consentTitle'
  | 'consentBody'
  | 'consentAccept'
  | 'consentDecline'
  | 'scanButton'
  | 'pasteHere'
  | 'freezeFunds'
  | 'freezeSub'
  | 'saveEvidence'
  | 'reportIt'
  | 'iLostMoney'
  | 'didYouSendMoney'
  | 'yesSent'
  | 'noNotYet'
  | 'callNow'
  | 'callScript'
  | 'deletedEvidence'
  | 'timeFrameNow'
  | 'timeFrameToday'
  | 'timeFrameThisWeek'
  | 'reportedTimes'
  | 'dontReply';

const COPY: Record<AghoyLang, Partial<Record<CopyKey, string>>> = {
  TAGALOG: {
    oneRule: "SCAM 'YAN. WAG MAG-REPLY. WAG IBIGAY ANG OTP (ang 6-digit code). Walang bangko, walang GCash, walang gobyerno na hihingi ng OTP mo. KAILANMAN.",
    consentTitle: 'PROTEKTAHAN ANG PAMILYA MO. PROTEKTAHAN ANG PRIVACY MO.',
    consentBody: 'Para ma-check ang text mo, ipapadala ito sa AI scanner. Tinatanggal ang numero mo, ID, at OTP bago ipadala. Walang account, walang ibinebenta. Ever.',
    consentAccept: 'OO, TULOY',
    consentDecline: 'HINDI MUNA',
    scanButton: 'I-CHECK ANG TEXT',
    pasteHere: 'May text ka na kahina-hinala? I-paste o kunan ng larawan dito.',
    freezeFunds: 'I-LOCK ANG ACCOUNT KO',
    freezeSub: 'Tawagan ang bangko/wallet ngayon. Sabihin: i-lock ang lahat ng account ko.',
    saveEvidence: 'MAG-SAVE NG EVIDENCE',
    reportIt: 'ISUMBONG',
    iLostMoney: 'NA-SCAM NA PO AKO / NALOKO NA AKO',
    didYouSendMoney: 'Nagpadala ka na ba ng pera o nagbigay ng code?',
    yesSent: 'OO, nagpadala ako',
    noNotYet: 'HINDI PA',
    callNow: 'TAWAGAN NGAYON',
    callScript: "Sabihin sa hotline: 'Na-scam po ako. Pakilock po ang lahat ng account ko at i-report ang transaction. Humihingi po ako ng reference number.'",
    deletedEvidence: 'Na-delete mo na ang text? OK lang. Ipakita pa rin sa bank app mo ang transfer, at nasa call log mo ang numero. I-screenshot ang dalawang iyon.',
    timeFrameNow: 'NGAYON NA',
    timeFrameToday: 'NGAYONG ARAW',
    timeFrameThisWeek: 'SA WEEK NA ITO',
    reportedTimes: 'ang numero na ito ay na-report na',
    dontReply: 'WAG KA MAG-REPLY. WAG KANG MANINIWALA.',
  },
  ENGLISH: {
    oneRule: "This is a scam. Do not reply. Do not give your OTP (the 6-digit code). No bank, no wallet, no government office ever asks for your OTP. Ever.",
    consentTitle: 'PROTECT YOUR FAMILY. PROTECT YOUR PRIVACY.',
    consentBody: 'To check your text, it is sent to an AI scanner. Your number, ID, and OTP are removed before sending. No account, no data sold. Ever.',
    consentAccept: 'YES, CONTINUE',
    consentDecline: 'NOT NOW',
    scanButton: 'CHECK THE MESSAGE',
    pasteHere: 'Got a suspicious message? Paste it or take a photo here.',
    freezeFunds: 'FREEZE MY ACCOUNT',
    freezeSub: 'Call your bank/wallet now. Say: lock all my accounts.',
    saveEvidence: 'SAVE EVIDENCE',
    reportIt: 'REPORT IT',
    iLostMoney: "I ALREADY LOST MONEY",
    didYouSendMoney: 'Did you already send money or share a code?',
    yesSent: 'YES, I SENT MONEY',
    noNotYet: 'NOT YET',
    callNow: 'CALL NOW',
    callScript: "Tell the hotline: 'I have been scammed. Please lock all my accounts and report the transaction. I want a reference number.'",
    deletedEvidence: 'You deleted the text? That is okay. Your bank app still shows the transfer, and your call log still shows the number. Screenshot those two.',
    timeFrameNow: 'NOW',
    timeFrameToday: 'TODAY',
    timeFrameThisWeek: 'THIS WEEK',
    reportedTimes: 'this number has been reported',
    dontReply: 'DO NOT REPLY. DO NOT TRUST IT.',
  },
  BISAYA: {
    oneRule: "SCAM NA. AYAW MOTO TUBAGAN. AYAW IHATAG ANG OTP (ang 6-digit code). WALAY bangko, walay GCash, walay gobyerno nga mangayo sa imong OTP. KANUS-ON MAN.",
    consentTitle: 'PANALIPUD ANG PAMILYA. PANALIPUD ANG PRIVACY.',
    consentBody: 'Para ma-check ang text, ipadala kini sa AI scanner. Tangtangon ang numero, ID, ug OTP una ipadala. Walay account, walay baligya. Ever.',
    consentAccept: 'OO, PADAYON',
    consentDecline: 'DILI PA',
    scanButton: 'I-CHECK ANG TEXT',
    freezeFunds: 'I-LOCK ANG AKONG ACCOUNT',
    freezeSub: 'Tawagi ang bangko/wallet karon. Isulti: i-lock ang akong account.',
    saveEvidence: 'MAG-SAVE NG EVIDENCE',
    reportIt: 'ISUMBONG',
    iLostMoney: 'NA-SCAM NA KO / NA-LOKO NA KO',
    didYouSendMoney: 'Nagpadala ka na ba ug kwarta o naghatag ug code?',
    yesSent: 'OO, nagpadala ko',
    noNotYet: 'WALA PA',
    callNow: 'TAWAGI KARON',
    callScript: "Isulti sa hotline: 'Na-scam ko. Palihug i-lock ang akong account ug i-report ang transaction. Gusto ko ug reference number.'",
    deletedEvidence: 'Na-delete na nimo ang text? OK ra. Makita pa sa bank app ang transfer, ug naa sa call log ang numero. I-screenshot kana duha.',
    timeFrameNow: 'KARON',
    timeFrameToday: 'KARON ADLAWA',
    timeFrameThisWeek: 'NIINING SEMANAHA',
    reportedTimes: 'kini nga numero gi-report na',
    dontReply: 'AYAW TUBAGI. AYAW TUOHI.',
  },
  ILOCANO: {
    oneRule: "SCAM DAYTA. DIAK AGSUBONG. DIAK ITED TI OTP (ti 6-digit a code). Awan bangko, awan GCash, awan gobyerno nga agdawdawat ti OTP mo. Saan koman.",
    consentTitle: 'PROTEKTAHAM TI PAMILIAM. PROTEKTAHAM TI PRIVACY.',
    consentBody: 'Tapno ma-check ti text, maipatulod iti AI scanner. Maikkat ti numero, ID, ken OTP sakbay nga maipatulod. Awan account, awan mailako. Ever.',
    consentAccept: 'WEN, TULOY',
    consentDecline: 'SAAN PAY',
    scanButton: 'I-CHECK TI TEXT',
    freezeFunds: 'I-LOCK TI ACCOUNT KO',
    freezeSub: 'Tawagen ti bangko/wallet itan. Ibaga: i-lock ti account ko.',
    saveEvidence: 'AG-SAVE TI EVIDENCE',
    reportIt: 'ISUMBONG',
    iLostMoney: 'NA-SCAM AKON / NA-LOKO AKON',
    didYouSendMoney: 'Nangipatulod kan ti kuarta wenno nangted ti code?',
    yesSent: 'WEN, nangipatulod ak',
    noNotYet: 'SAAN PAY',
    callNow: 'TAWAGEN ITAN',
    callScript: "Ibaga iti hotline: 'Na-scam ak. Pangngaasi nga i-lock ti account ken i-report ti transaction. Kayat ko ti reference number.'",
    deletedEvidence: 'Na-delete mo ti text? OK la. Makita pay iti bank app ti transfer, ken adda iti call log ti numero. I-screenshot dagita dua.',
    timeFrameNow: 'ITAN',
    timeFrameToday: 'ITA NGA ALDAW',
    timeFrameThisWeek: 'ITI DAYTAY A LAVAS',
    reportedTimes: 'daytoy a numero na-reporten',
    dontReply: 'DI AGSUBONG. DI PAGTALINAWAN.',
  },
};

export const t = (lang: AghoyLang, key: CopyKey): string =>
  COPY[lang]?.[key] ?? COPY.TAGALOG[key] ?? key;

export const normalizeLang = (s: string): AghoyLang =>
  s === 'ENGLISH' ? 'ENGLISH' : s === 'BISAYA' ? 'BISAYA' : s === 'ILOCANO' ? 'ILOCANO' : 'TAGALOG';

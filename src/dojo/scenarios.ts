// === DOJO SCENARIO LIBRARY ===
// Hand-authored, deterministic training scenarios. No AI dependency: these run
// entirely on-device so the Dojo works for everyone (grandmas, low-bandwidth,
// offline) and costs nothing. Each scenario teaches one scam vector through a
// message + multiple-choice steps with plain-language feedback.
//
// Plain-language rule: every message/feedback reads like a trusted friend
// explaining it to a family member. No jargon. Feedback explains WHY.

export type ScenarioChannel = "sms" | "email" | "chat" | "linkedin" | "vishing" | "qr";
export type ScenarioDifficulty = "easy" | "medium" | "hard";
export type ScenarioFamily =
  | "ewallet" | "bank" | "telco" | "delivery" | "customs" | "job" | "romance"
  | "investment" | "government" | "quishing" | "vishing" | "sim-pretext"
  | "family-emergency" | "remittance" | "loan-app" | "charity" | "fake-reward"
  | "good-message";
export type ScenarioArchetype = "trap" | "redirect" | "good-message" | "hybrid";
// Interaction formats: multiple-choice (default), spot-the-red-flag,
// what-happens-next (predict the script), good-message-or-scam (discriminate),
// which-rule-applies (match rule to message), reply-builder (chip compose).
export type ScenarioFormat = "mc" | "spotflag" | "whatnext" | "goodscam" | "rulematch" | "reply";

export interface ScenarioOption {
  id: string;
  text: string;
  correct: boolean;
  feedback: string; // why this choice is right or wrong
}

// A tappable segment of a message for spot-the-red-flag format.
export interface MessageSegment {
  text: string;
  flag?: string; // present = this segment contains the red flag (spotflag)
  official?: boolean; // present = this segment is the legit tell (goodscam)
}

// Generic step fields across all interaction formats.
export interface ScenarioStep {
  id: string;
  channel: ScenarioChannel;
  senderLabel: string; // e.g. "GCash", "J&T Express", "LinkedIn InMail"
  format?: ScenarioFormat; // defaults to "mc"
  message: string; // the message the user receives
  // mc + whatnext + reply: the question and the options to pick from
  question: string;
  options: ScenarioOption[];
  // spotflag: the message rendered as tappable segments
  segments?: MessageSegment[];
  // whatnext: the full scam script revealed after an answer (the lesson pattern)
  script?: string[];
  // rulematch: the rule label this scenario trains (maps to a named mnemonic)
  rule?: string;
  tip: string; // the one memorable rule, shown after any answer
}

export interface Scenario {
  id: string;
  title: string;
  icon: string; // lucide icon name used by the UI
  difficulty: ScenarioDifficulty;
  family: ScenarioFamily;
  archetype: ScenarioArchetype;
  category: string;
  setup: string; // context before the first message
  steps: ScenarioStep[];
  debrief: string; // closing summary
  source: "curated" | "generated"; // provenance for review + attribution
}

export const SCENARIOS: Scenario[] = [
  {
    id: "gcash-otp",
    title: "The GCash OTP Trap",
    icon: "Smartphone",
    difficulty: "easy",

    family: "ewallet",

    archetype: "redirect",

    source: "curated",
    category: "E-wallet / SMS",
    setup:
      "You get a text message that looks like it is from GCash. You do have a GCash account. What do you do?",
    steps: [
      {
        id: "s1",
        channel: "sms",
        senderLabel: "GCash",
        message:
          "GCash: Your account is locked due to unusual activity. Reply with your OTP now to reactivate, or your money will be gone in 24 hours.",
        question: "A text says your account is locked and asks for your OTP. What do you do?",
        options: [
          {
            id: "a",
            text: "Reply with the OTP right away so my money is safe.",
            correct: false,
            feedback:
              "Real GCash never asks for your OTP. Anyone asking for your OTP is trying to empty your account. The text is the scam.",
          },
          {
            id: "b",
            text: "Open the GCash app myself and check my account there.",
            correct: true,
            feedback:
              "Correct. You checked the real app instead of trusting the text. Your account is the source of truth, not a message.",
          },
          {
            id: "c",
            text: "Call the number in the text to verify.",
            correct: false,
            feedback:
              "That number belongs to the scammer. Always use the official GCash hotline (2882) found in the real app, never the number in a suspicious text.",
          },
        ],
        tip: "Rule 1: OTPs are secret. A real company NEVER asks you to send your OTP.",
      },
      {
        id: "s2",
        channel: "sms",
        senderLabel: "GCash",
        message:
          "GCash Alert: You have an incoming transfer of P50,000! To receive it, first pay a small P250 'release fee' to this number.",
        question: "A text says you won a transfer but must pay a fee first. What do you do?",
        options: [
          {
            id: "a",
            text: "Send the P250 so I can receive the P50,000.",
            correct: false,
            feedback:
              "This is the 'advance fee' trick. You pay the fee, and the P50,000 never arrives. Money in, money gone.",
          },
          {
            id: "b",
            text: "Delete the message and report it.",
            correct: true,
            feedback:
              "Correct. A real transfer arrives by itself. No one needs you to pay a 'release fee' to receive money.",
          },
          {
            id: "c",
            text: "Reply to ask for more details.",
            correct: false,
            feedback:
              "Replying tells the scammer your number is active. They will try again and again.",
          },
        ],
        tip: "Rule 2: If you have to PAY to RECEIVE money, it is a scam.",
      },
      {
        id: "s3",
        channel: "sms",
        senderLabel: "Unknown +63",
        message:
          "Congratulations! You won P1,000,000 in the GCash year-end raffle! Click this link to claim: g-cash-verify-ph.top",
        question: "You won a raffle you never joined. What do you do?",
        options: [
          {
            id: "a",
            text: "Click the link quickly before the prize expires.",
            correct: false,
            feedback:
              "You cannot win a raffle you never entered. Clicking the link leads to a fake GCash page that steals your login and money.",
          },
          {
            id: "b",
            text: "Ignore it. You never joined a raffle, so this is fake.",
            correct: true,
            feedback:
              "Correct. If you did not join, you cannot win. This is a classic fake-reward scam.",
          },
          {
            id: "c",
            text: "Forward the link to a friend so they can also win.",
            correct: false,
            feedback:
              "Forwarding spreads the scam to the people you love. Delete it and warn your family instead.",
          },
        ],
        tip: "Rule 3: You cannot win a prize you never entered. Delete and ignore.",
      },
    ],
    debrief:
      "You practiced the 3 rules of e-wallet scams: OTPs are secret, never pay to receive money, and you cannot win a raffle you never joined. Tell your family these 3 rules today.",
  },
  {
    id: "parcel-fee",
    title: "The Parcel Fee",
    icon: "Package",
    difficulty: "easy",

    family: "delivery",

    archetype: "redirect",

    source: "curated",
    category: "Delivery / SMS",
    setup:
      "You are waiting for a package you really did order. Then this text arrives. It sounds believable because you ARE expecting a delivery.",
    steps: [
      {
        id: "s1",
        channel: "sms",
        senderLabel: "J&T Express",
        message:
          "J&T Express: Your parcel is on hold because of an unpaid delivery fee of P150. Pay now at this link or your package will be returned.",
        question: "You are expecting a package. What do you do?",
        options: [
          {
            id: "a",
            text: "Pay the P150 so my parcel is not returned.",
            correct: false,
            feedback:
              "Real delivery companies collect fees at your door or in their official app, never through a random link in a text.",
          },
          {
            id: "b",
            text: "Check the real J&T tracking number in my order app.",
            correct: true,
            feedback:
              "Correct. You compared with the real tracking from your order. If the text's tracking number does not match, it is fake.",
          },
          {
            id: "c",
            text: "Pay via the link to be safe.",
            correct: false,
            feedback:
              "That link is fake. It will take your card details and empty your account.",
          },
        ],
        tip: "Rule: Delivery fees are paid through the real app or at the door, never a text link.",
      },
      {
        id: "s2",
        channel: "sms",
        senderLabel: "LBC",
        message:
          "LBC: Your package is being held by customs. Pay P1,200 clearance fee to release it. Customs found undeclared items. Reply C to confirm.",
        question: "Customs wants a clearance fee. What do you do?",
        options: [
          {
            id: "a",
            text: "Pay the fee so customs releases my package.",
            correct: false,
            feedback:
              "Customs does not collect fees by text. And if you never sent anything from abroad, there is nothing to clear.",
          },
          {
            id: "b",
            text: "Call LBC's official hotline to check if this is real.",
            correct: true,
            feedback:
              "Correct. You verified through the official channel. The text is a fake customs scam.",
          },
          {
            id: "c",
            text: "Reply C so they release it faster.",
            correct: false,
            feedback:
              "Replying tells scammers your number works. You will get even more scam texts.",
          },
        ],
        tip: "Rule: Customs and couriers never ask you to pay a 'clearance fee' by text.",
      },
    ],
    debrief:
      "Delivery scams work because they ride on a real package you ordered. Always compare the tracking number, and never pay a text link.",
  },
  {
    id: "linkedin-job",
    title: "The LinkedIn Job Offer",
    icon: "Briefcase",
    difficulty: "medium",

    family: "job",

    archetype: "redirect",

    source: "curated",
    category: "Job Scam",
    setup:
      "A recruiter messages you on LinkedIn. The job looks perfect: work from home, good pay, and they found you first. You are excited.",
    steps: [
      {
        id: "s1",
        channel: "linkedin",
        senderLabel: "Recruiter from 'CryptoGlobal Ltd'",
        message:
          "Hi! We saw your profile and love it. We offer P45,000/month working from home as a 'Crypto Trading Assistant'. No experience needed. Download this app to start your training today.",
        question: "A dream job found you first. What do you do?",
        options: [
          {
            id: "a",
            text: "Download the app immediately before they pick someone else.",
            correct: false,
            feedback:
              "Urgency is a scam signal. Real companies interview and verify you; they do not rush you to download apps. That app may be malware.",
          },
          {
            id: "b",
            text: "Search the company name and check their real website first.",
            correct: true,
            feedback:
              "Correct. A real company has a verifiable web presence. Fake recruiters hide behind vague names and no history.",
          },
          {
            id: "c",
            text: "Reply with my full name, address, and SSS number to prove I am interested.",
            correct: false,
            feedback:
              "Never send personal IDs to someone who contacted you first. That is identity theft waiting to happen.",
          },
        ],
        tip: "Rule: Legit companies do NOT hire strangers without an interview, and never rush you to install apps.",
      },
      {
        id: "s2",
        channel: "linkedin",
        senderLabel: "Recruiter from 'CryptoGlobal Ltd'",
        message:
          "Great! For your first task, transfer P5,000 to this wallet as a 'performance deposit'. It is fully refundable after your training.",
        question: "They want a deposit to start the job. What do you do?",
        options: [
          {
            id: "a",
            text: "Send the deposit. It says it is refundable.",
            correct: false,
            feedback:
              "Real employers pay YOU. They never ask you to pay to start working. The 'refundable' promise is the bait.",
          },
          {
            id: "b",
            text: "Say no. No real job asks you to pay to work.",
            correct: true,
            feedback:
              "Correct. This is the 'pay to work' scam. You pay, they disappear, the job never existed.",
          },
          {
            id: "c",
            text: "Send half and ask for proof.",
            correct: false,
            feedback:
              "Do not negotiate with a scammer. Even 'half' is money you lose.",
          },
        ],
        tip: "Rule: A job that makes YOU pay to work is not a job, it is a scam.",
      },
    ],
    debrief:
      "Job scams target people who are desperate for work. Real companies interview, never rush you, and never ask you to pay a deposit. Protect your ID and your money.",
  },
  {
    id: "vishing-bank",
    title: "The Bank Call",
    icon: "Phone",
    difficulty: "medium",

    family: "vishing",

    archetype: "redirect",

    source: "curated",
    category: "Vishing / Call",
    setup:
      "Your phone rings. The caller ID shows your bank's name. A professional-sounding voice says your card was used for fraud.",
    steps: [
      {
        id: "s1",
        channel: "vishing",
        senderLabel: "Caller ID: BDO Bank",
        message:
          "This is BDO fraud department. We detected a P25,000 charge on your card. To verify it is you, please say your card number and the code on the back.",
        question: "The caller ID shows your real bank. What do you do?",
        options: [
          {
            id: "a",
            text: "Read my card number and the 3-digit code to stop the fraud.",
            correct: false,
            feedback:
              "Never give card details or the back-of-card code over the phone. Real banks already have your card number; they never ask you to say it.",
          },
          {
            id: "b",
            text: "Hang up, then call the number on the back of my card.",
            correct: true,
            feedback:
              "Correct. Caller ID can be faked. Hang up and call the real number on your card to check.",
          },
          {
            id: "c",
            text: "Ask them to prove who they are before I answer.",
            correct: false,
            feedback:
              "A scammer will say anything to sound official. The only safe move is to call the real number yourself.",
          },
        ],
        tip: "Rule: Caller ID can be fake. Always hang up and call the official number on your card.",
      },
      {
        id: "s2",
        channel: "vishing",
        senderLabel: "Caller ID: BDO Bank",
        message:
          "Sir/Maam, we need to secure your account NOW. I will send you a code. Please read it back so I can close the fraudulent transfer.",
        question: "They send you a code and ask you to read it back. What do you do?",
        options: [
          {
            id: "a",
            text: "Read the code so they can stop the scam.",
            correct: false,
            feedback:
              "That code is your OTP. Reading it lets them empty your account. The 'urgent' call is the scam.",
          },
          {
            id: "b",
            text: "Hang up. No real bank needs your code.",
            correct: true,
            feedback:
              "Correct. A code sent to your phone is proof of who you are. Only you should ever see it.",
          },
        ],
        tip: "Rule: Never read a code to someone who called you, no matter how official they sound.",
      },
    ],
    debrief:
      "Vishing (voice phishing) fakes caller IDs and panics you into acting. The fix is always the same: hang up and call the real number yourself.",
  },
  {
    id: "email-phishing",
    title: "The Fake Bank Email",
    icon: "Mail",
    difficulty: "medium",

    family: "bank",

    archetype: "redirect",

    source: "curated",
    category: "Email Phishing",
    setup:
      "You check your email and see a message from 'BDO Online Banking' saying your account will be closed unless you update it today.",
    steps: [
      {
        id: "s1",
        channel: "email",
        senderLabel: "BDO Online Banking <security@bdo-update-secure.net>",
        message:
          "Dear Client, your online banking will be CLOSED in 24 hours unless you re-verify your identity. Click here to update: https://bdo-secure-login.net",
        question: "The email says your bank account will close. What do you do?",
        options: [
          {
            id: "a",
            text: "Click the link and enter my login so my account is not closed.",
            correct: false,
            feedback:
              "Look at the sender: it is bdo-update-secure.net, not bdo.com.ph. That is a fake lookalike domain. Your login would be stolen.",
          },
          {
            id: "b",
            text: "Check the sender's email address carefully first.",
            correct: true,
            feedback:
              "Correct. You spotted the lookalike domain. Real bank emails end with the real bank domain, and banks never threaten to close your account by email.",
          },
          {
            id: "c",
            text: "Reply to the email asking if it is real.",
            correct: false,
            feedback:
              "Replying only confirms your email address works. It will not stop the threat.",
          },
        ],
        tip: "Rule: Check the sender address, not the name. 'BDO' can be shown, but security@bdo-secure.net is fake.",
      },
      {
        id: "s2",
        channel: "email",
        senderLabel: "BDO Online Banking <security@bdo-update-secure.net>",
        message:
          "URGENT: Your account was accessed from a new device. To keep it safe, enter your username, password, and mobile number below.",
        question: "They want your full login details. What do you do?",
        options: [
          {
            id: "a",
            text: "Enter my details so they can secure my account.",
            correct: false,
            feedback:
              "You would be handing the scammer everything they need to log in as you.",
          },
          {
            id: "b",
            text: "Open my bank app directly and check if there is any real alert.",
            correct: true,
            feedback:
              "Correct. The real bank app is the only place to check your account. The email is the scam.",
          },
        ],
        tip: "Rule: Never type login details into a link that came from an email.",
      },
    ],
    debrief:
      "Email phishing fakes the bank's name but the domain gives it away. Always check the address after the @, and log in only through the real app.",
  },
  {
    id: "quishing-qr",
    title: "The Parking QR",
    icon: "QrCode",
    difficulty: "easy",

    family: "quishing",

    archetype: "trap",

    source: "curated",
    category: "QR Phishing",
    setup:
      "You park your car and see a notice: 'Scan this QR code to pay for parking.' You have paid parking this way before. It looks official.",
    steps: [
      {
        id: "s1",
        channel: "qr",
        senderLabel: "Parking Notice",
        message:
          "[QR CODE] Scan to pay P40 parking fee. Walka-Bay parking service. Payment is instant and secure.",
        question: "A QR code offers to pay for parking. What do you do?",
        options: [
          {
            id: "a",
            text: "Scan it and pay. It is only P40.",
            correct: false,
            feedback:
              "That QR may point to a fake payment page that steals your card. Small amounts trick you into trusting it.",
          },
          {
            id: "b",
            text: "Look for the official parking sign or pay at the machine.",
            correct: true,
            feedback:
              "Correct. Always use the official payment method, never a sticker that appeared out of nowhere.",
          },
          {
            id: "c",
            text: "Scan it but check the page before paying.",
            correct: false,
            feedback:
              "Even scanning a malicious QR can open a fake page or install something. Better to ignore it completely.",
          },
        ],
        tip: "Rule: QR codes you did not ask for are suspicious. Pay through the official way only.",
      },
    ],
    debrief:
      "Quishing (QR phishing) sticks fake QR codes over real ones. If a QR suddenly appears for payment, find the official machine or staff instead.",
  },
  {
    id: "task-scam",
    title: "The Easy Money Task",
    icon: "Zap",
    difficulty: "medium",

    family: "investment",

    archetype: "trap",

    source: "curated",
    category: "Task / Telegram",
    setup:
      "A friend forwards you a message about earning easy money by doing simple tasks on your phone. You could use the extra income.",
    steps: [
      {
        id: "s1",
        channel: "chat",
        senderLabel: "Telegram: 'EasyEarnPH'",
        message:
          "Earn P2,000 a day! Just like YouTube videos and follow pages. To unlock higher-paying tasks, deposit P500 first. Guaranteed.",
        question: "Easy money for simple tasks. What do you do?",
        options: [
          {
            id: "a",
            text: "Deposit P500 to unlock the good tasks.",
            correct: false,
            feedback:
              "This is a task scam. They pay you small amounts first, then ask for bigger deposits, then disappear with your money.",
          },
          {
            id: "b",
            text: "Say no. If it needs a deposit to earn, it is a scam.",
            correct: true,
            feedback:
              "Correct. Real work pays you. Anything that asks you to pay to earn is the trap.",
          },
          {
            id: "c",
            text: "Do the free tasks first and see if they really pay.",
            correct: false,
            feedback:
              "They will pay a tiny amount to build trust, then the 'unlock' deposit is where you lose. The pattern is the scam.",
          },
        ],
        tip: "Rule: 'Pay to earn' is always a scam. Real income never requires you to deposit first.",
      },
      {
        id: "s2",
        channel: "chat",
        senderLabel: "Telegram: 'EasyEarnPH'",
        message:
          "You have completed 5 tasks. Your balance is P1,500! To withdraw, upgrade to VIP by depositing P3,000. VIP members withdraw instantly.",
        question: "They show a big balance, but need a deposit to withdraw. What do you do?",
        options: [
          {
            id: "a",
            text: "Deposit P3,000 to get my P1,500 out.",
            correct: false,
            feedback:
              "The balance on the screen is fake. The only real money is the P3,000 you are about to lose.",
          },
          {
            id: "b",
            text: "Leave the chat and block them.",
            correct: true,
            feedback:
              "Correct. You cannot withdraw because the balance never existed. Block and report.",
          },
        ],
        tip: "Rule: If you must pay to withdraw, the 'balance' is a lie.",
      },
    ],
    debrief:
      "Task scams lure you with small real payments, then ask for deposits to 'unlock' or 'withdraw'. The deposit is where you lose everything.",
  },
  {
    id: "family-emergency",
    title: "The Family Emergency",
    icon: "Users",
    difficulty: "easy",

    family: "family-emergency",

    archetype: "trap",

    source: "curated",
    category: "Emotional",
    setup:
      "You get a message from an unknown number claiming to be your daughter. Her 'phone was broken' so she is using a new number, and she needs money right now.",
    steps: [
      {
        id: "s1",
        channel: "sms",
        senderLabel: "Unknown +63",
        message:
          "Mom/Dad, it's me. I broke my phone and lost all my contacts. I'm in trouble, please send P8,000 to this GCash. I'll explain later. Please don't call, my new phone is broken.",
        question: "It sounds exactly like your child. What do you do?",
        options: [
          {
            id: "a",
            text: "Send the money. It must be my child, who else would know their name?",
            correct: false,
            feedback:
              "Scammers use names from social media. The 'don't call' line is the red flag - they do not want you to verify.",
          },
          {
            id: "b",
            text: "Call the REAL number of my child before sending anything.",
            correct: true,
            feedback:
              "Correct. You verified before acting. If you cannot reach them, call a relative. Never trust an unknown 'new number'.",
          },
          {
            id: "c",
            text: "Ask a question only my child would know the answer to.",
            correct: false,
            feedback:
              "Better than sending money, but the safest move is to call the real number you already have saved.",
          },
        ],
        tip: "Rule: Scammers use your family's names to panic you. Always call the real number you already saved.",
      },
    ],
    debrief:
      "Family-emergency scams trade on love and panic. The 'don't call' request is the giveaway. Verify with the real number, every time.",
  },
];

export const getScenario = (id: string): Scenario | undefined =>
  SCENARIOS.find((s) => s.id === id);

// Index for the scenario-select screen.
export const SCENARIO_INDEX = SCENARIOS.map(({ id, title, icon, difficulty, category, setup }) => ({
  id,
  title,
  icon,
  difficulty,
  category,
  setup,
}));

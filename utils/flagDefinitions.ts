
export const FLAG_DEFINITIONS: Record<string, string> = {
    // New, most-specific keys come FIRST so substring matching (upperFlag.includes(key))
    // never lets a shorter key swallow a more specific match.
    "ACCOUNT_HIJACK_EMERGENCY": "A message claiming your account was hijacked and you must act now to 'protect' it. The link or 'agent' is usually the actual hijacker.",
    "PAYMENT_TO_UNLOCK": "A request to send money to 'unlock' earnings, a balance, or an account. Anything that needs a deposit before you get paid is a scam.",
    "FAKE_REWARD": "A promise of a prize, voucher, or reward you never joined or earned. Claiming it usually ends in a 'processing fee' request.",
    "FAKE_SUPPORT": "Fake customer support accounts that offer to 'help' but ask for your password, OTP, or a remote access app. Official support never does.",
    "VISHING_CALL": "A phone call where a fake agent or official pressures you for OTPs, codes, or payments. Hang up and call the official hotline instead.",
    "MONEY_MULE": "A 'job' asking you to receive money and forward it to another account. Moving scam money makes you part of the fraud.",
    "LOOKALIKE_SENDER": "The message pretends to come from an official sender, but the number, name, or account does not match. Verify through the official app.",
    "LOOKALIKE_DOMAIN": "The link looks like the real website but is a fake domain (e.g., 'gcash-verify.xyz'). Check the exact spelling before tapping.",
    "SIM_REGISTRATION_PRETEXT": "A fake SIM registration or re-registration notice that harvests your ID and mobile details. Register only on official telco channels.",
    "FAMILY_EMERGENCY": "A text or call claiming a relative is in trouble and needs money right now. Call the relative on their real number first.",
    "OTP_SHARING": "Never share the one-time password (OTP) sent to your phone. Banks and wallets will never ask for it, and sharing it lets scammers take over your account.",
    "TASK_SCAM": "Scammers offer easy 'tasks' like liking videos or following accounts for pay, then demand a deposit to unlock bigger earnings. The promised payout never comes.",
    "PARCEL_FEE": "A message about an undelivered package with a small 'fee' or 'insurance' to release it. Legit couriers bill the sender, not the receiver, through the app.",
    "IMPERSONATION": "A message pretending to be from a company, official, or family member. Scammers copy names and logos to make fake requests look real.",
    "ADVANCE_FEE": "A request to pay a fee first before you can receive a prize, loan, job, or inheritance. Real transactions do not ask for an advance fee.",
    "QUISHING": "A QR code that hides a phishing link. Scanning it opens a fake login page designed to steal your account details.",
    "URGENCY": "Scammers create a false sense of emergency (e.g., 'Account Locked', 'Last Chance') to panic you into acting without thinking.",
    "SHORTENED URL": "Links like 'bit.ly' or 'tinyurl' hide the true destination. Scammers use them to mask phishing sites.",
    "TOO GOOD TO BE TRUE OFFER": "Promises of huge money for little work, or expensive items for free, are almost always scams.",
    "SUSPICIOUS CHARACTER SUBSTITUTION": "Using symbols like 'C@sh', 'G-Cash', or '0' instead of 'O' to bypass SMS spam filters.",
    "UNSOLICITED MESSAGE": "Receiving messages from numbers or people you don't know, especially regarding accounts you don't have.",
    "ILLEGAL GAMBLING PROMOTION": "Promoting unregulated casinos or betting sites ('Sure win', 'Free 888'), which is illegal and risky.",
    "GENERIC GREETING": "Using vague terms like 'Dear Customer' or 'Lods' instead of your real name, indicating a mass-sent message.",
    "REQUEST FOR PERSONAL INFO": "Legitimate banks and companies will NEVER ask for your Password, MPIN, or OTP via text or link.",
    "GRAMMATICAL ERRORS": "Professional companies rarely make spelling or grammar mistakes. Awkward phrasing is a red flag.",
    "UNOFFICIAL DOMAIN": "Links that don't match the official website (e.g., 'bdo-online-verify.com' instead of 'bdo.com.ph').",
    "ASKING FOR PAYMENT TO WORK": "Legitimate jobs pay YOU. You should never have to pay for 'training', 'equipment', or 'fees' to start.",
    "THREATS": "Threatening legal action, police involvement, or public shaming to force compliance.",
    "UNUSUAL SENDER": "Official alerts usually come from a named Sender ID (e.g., 'GCash', 'BDO'), not a random mobile number (0912...).",
    "VERIFIED_SENDER": "The sender is a verified official Philippine channel (e.g., GCash shortcode 2882, BDO sender ID). Identity-verified - the text model cannot escalate this message.",
    "REPORTED_PHONE": "This phone number has been reported to the community blacklist 2+ times as a scam sender. Escalates the verdict.",
    "REPORTED_DOMAIN": "This domain has been reported to the community blacklist as a scam link. Escalates the verdict.",
    "UNKNOWN": "An anomaly was detected that doesn't fit standard categories but indicates suspicious patterns."
};

export const getFlagDefinition = (flag: string): string => {
    const upperFlag = flag.toUpperCase();
    if (FLAG_DEFINITIONS[upperFlag]) return FLAG_DEFINITIONS[upperFlag];
    
    const foundKey = Object.keys(FLAG_DEFINITIONS).find(key => upperFlag.includes(key));
    return foundKey ? FLAG_DEFINITIONS[foundKey] : "This indicator suggests a pattern commonly associated with fraudulent activity.";
};

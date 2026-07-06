// utils/privacy.ts

export const sanitizeText = (text: string): string => {
  if (!text) return "";

  let cleanText = text;

  // 1. Redact Philippine Mobile Numbers (09xx-xxx-xxxx or +639...)
  const mobileRegex = /(\+63|0)9\d{9}/g;
  cleanText = cleanText.replace(mobileRegex, '[MOBILE_NUMBER]');

  // 2. Redact Email Addresses
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  cleanText = cleanText.replace(emailRegex, '[EMAIL_REDACTED]');

  // 3. Redact Potential Bank Account Numbers (10-12 digits)
  // We use a stricter lookahead to avoid replacing timestamps or simple amounts
  const accountRegex = /\b\d{10,12}\b/g;
  cleanText = cleanText.replace(accountRegex, '[ACCOUNT_NUMBER]');

  // 4. Redact Names (Greeting patterns common in PH SMS)
  // Matches: "Hi [Name],", "Hello [Name]!", "Dear [Name]"
  const greetingRegex = /\b(Hi|Hello|Dear|Good day|Mr\.|Ms\.|Mrs\.)\s+([A-Z][a-z]+(\s[A-Z][a-z]+)?)/g;
  cleanText = cleanText.replace(greetingRegex, '$1 [NAME_REDACTED]');

  return cleanText;
};

// Generate a safe, anonymous hash for tracking duplicates
// Uses the Web Crypto API available in all modern browsers
export const generateContentHash = async (text: string): Promise<string> => {
  const safeText = sanitizeText(text).toLowerCase().trim(); // Hash the CLEAN version only
  const encoder = new TextEncoder();
  const data = encoder.encode(safeText);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

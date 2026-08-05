export type AppLanguage = 'TAGALOG' | 'BISAYA' | 'ILOCANO' | 'ENGLISH';

const LANG_MAP: Record<AppLanguage, string> = {
  TAGALOG: 'tl',
  BISAYA: 'ceb',
  ILOCANO: 'ilo',
  ENGLISH: 'en',
};

export const setDocumentLang = (language: string): void => {
  const code = LANG_MAP[language as AppLanguage];
  if (code) {
    document.documentElement.lang = code;
  }
};

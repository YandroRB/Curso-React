export const SUPPORTED_LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  pt: 'Portuguese',
  ru: 'Russian',
  zh: 'Chinese',
  ja: 'Japanese',
  ko: 'Korean',
  ar: 'Arabic',
  bg: 'Bulgarian',
} as const;
export const TO_LANGUAGE_SUPPORT = {
  en: ['en-us', 'en-gb'],
  pt: ['pt-pt', 'pt-br'],
} as const;
export const AUTO_LANGUAGE = 'auto';

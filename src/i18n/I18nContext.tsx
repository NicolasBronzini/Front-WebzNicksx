import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { es, Translations } from './locales/es';
import { en } from './locales/en';

type Language = 'es' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  es,
  en,
};

// Detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  // Check if browser language is Spanish
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  
  // Default to English for all other languages
  return 'en';
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());

  useEffect(() => {
    // Optional: Save language preference to localStorage
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

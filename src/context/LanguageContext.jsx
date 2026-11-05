import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import ku from '../locales/ku.json';
import ar from '../locales/ar.json';

import ukFlag from '../assets/languages/uk-flag.png';
import kuFlag from '../assets/languages/ku-flag.png';
import iqFlag from '../assets/languages/iq-flag.png';

const translations = { en, ku, ar };

export const languages = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flagIcon: ukFlag,
    dir: 'ltr'
  },
  {
    code: 'ku',
    name: 'Kurdish',
    nativeName: 'کوردی',
    flagIcon: kuFlag,
    dir: 'rtl'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flagIcon: iqFlag,
    dir: 'rtl'
  },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('carepoint_lang') || 'en';
  });

  const currentLangMeta = languages.find((l) => l.code === lang) || languages[0];
  const isRTL = currentLangMeta.dir === 'rtl';

  useEffect(() => {
    localStorage.setItem('carepoint_lang', lang);
    document.documentElement.dir = currentLangMeta.dir;
    document.documentElement.lang = lang;
  }, [lang, currentLangMeta]);

  // Nested translation helper: t('hero.title') or t('nav.dashboard')
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];

    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // Fallback to English if translation is missing
        let fallback = translations.en;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }

    return result;
  };

  const changeLanguage = (code) => {
    if (translations[code]) {
      setLang(code);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isRTL,
        currentLangMeta,
        changeLanguage,
        languages,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS, fallbackLng, resources, type SupportedLng } from './resources';

const LANGUAGE_STORAGE_KEY = 'gwanaklab-language';

const resolveInitialLanguage = (): SupportedLng => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === 'ko' || stored === 'en') return stored;
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ko') ? 'ko' : 'en';
};

const initialLng = resolveInitialLanguage();
document.documentElement.lang = initialLng;

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLng,
  fallbackLng,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
});

export { LANGUAGE_STORAGE_KEY };
export default i18n;

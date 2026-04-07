import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS, fallbackLng, resources } from './resources';
import type { SupportedLng } from './resources';
import { persistLanguage, resolveInitialLanguage } from './languagePreference';

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
  persistLanguage(lng as SupportedLng);
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultNS, fallbackLng, resources } from './resources';
import { resolveInitialLanguageFromPath } from './localeRouting';

const initialLng = resolveInitialLanguageFromPath();
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
});

export default i18n;

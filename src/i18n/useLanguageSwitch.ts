import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLng } from './resources';

export function useLanguageSwitch() {
  const { i18n } = useTranslation();

  return useCallback(() => {
    const next: SupportedLng = i18n.language === 'ko' ? 'en' : 'ko';
    void i18n.changeLanguage(next);
  }, [i18n]);
}

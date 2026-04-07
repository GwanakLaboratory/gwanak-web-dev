import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { swapLocaleInPath } from './localeRouting';
import type { SupportedLng } from './resources';

/** 언어 전환 시 URL의 첫 세그먼트만 바꿉니다 (localStorage 없음). */
export function useLanguageSwitch() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    const next: SupportedLng = i18n.language === 'ko' ? 'en' : 'ko';
    const path = swapLocaleInPath(location.pathname, next);
    navigate(path + location.search + location.hash);
  }, [i18n.language, location.pathname, location.search, location.hash, navigate]);
}

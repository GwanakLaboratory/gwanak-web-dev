import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { withLocalePrefix } from './localeRouting';

/** 현재 URL의 `/:lang`에 맞춰 절대 경로를 만듭니다. */
export function useLocalizedPath() {
  const { lang } = useParams<{ lang: string }>();
  const prefixLang = lang ?? 'ko';

  return useCallback(
    (path: string) => withLocalePrefix(path, prefixLang),
    [prefixLang],
  );
}

import { useCallback } from 'react';

/** 경로를 `/`로 시작하는 절대 경로로 정규화합니다. */
export function useLocalizedPath() {
  return useCallback((path: string) => {
    const clean = path.startsWith('/') ? path : `/${path}`;
    return clean;
  }, []);
}

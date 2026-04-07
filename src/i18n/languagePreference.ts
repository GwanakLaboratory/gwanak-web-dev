import type { SupportedLng } from './resources';

const STORAGE_KEY = 'gwanaklab-ui-lang';

export function resolveInitialLanguage(): SupportedLng {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ko' || stored === 'en') return stored;
  } catch {
    /* ignore */
  }
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

export function persistLanguage(lng: SupportedLng): void {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore */
  }
}

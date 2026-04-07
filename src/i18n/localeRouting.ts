import type { SupportedLng } from './resources';

export function isLocaleSegment(value: string | undefined): value is SupportedLng {
  return value === 'ko' || value === 'en';
}

export function parseLocaleFromPathname(pathname: string): SupportedLng | null {
  const seg = pathname.split('/').filter(Boolean)[0];
  return isLocaleSegment(seg) ? seg : null;
}

/** 초기 i18n·루트 리다이렉트용. 경로에 `/ko`·`/en`이 없으면 브라우저 언어로 추정 */
export function resolveInitialLanguageFromPath(): SupportedLng {
  const fromPath = parseLocaleFromPathname(window.location.pathname);
  if (fromPath) return fromPath;
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

export function withLocalePrefix(path: string, lang: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${lang}`;
  return `/${lang}${clean}`;
}

export function swapLocaleInPath(pathname: string, newLang: SupportedLng): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isLocaleSegment(segments[0])) {
    segments[0] = newLang;
  } else {
    segments.unshift(newLang);
  }
  return '/' + segments.join('/');
}

/** `/:lang`이 ko|en이 아닐 때 첫 세그먼트를 기본 로케일로 교체한 경로 */
export function coercePathToSupportedLocale(
  pathname: string,
  defaultLocale: SupportedLng = 'ko',
): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${defaultLocale}`;
  if (isLocaleSegment(segments[0])) return pathname;
  segments[0] = defaultLocale;
  return '/' + segments.join('/');
}

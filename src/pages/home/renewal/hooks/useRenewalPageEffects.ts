import { useCallback, useEffect, useRef, useState } from 'react';

type Options = {
  /** 스크롤 컨테이너 (기본: window) */
  root?: HTMLElement | null;
  fadeSelector?: string;
};

/**
 * 리뉴얼 랜딩 전용: 섹션 페이드인, 앵커 스무스 스크롤, 네비 그림자
 */
export function useRenewalPageEffects(options: Options = {}) {
  const { root = null, fadeSelector = '[data-renewal-fade]' } = options;
  const navRef = useRef<HTMLElement | null>(null);
  const [navShadow, setNavShadow] = useState(false);

  const scrollTargetIntoView = useCallback(
    (hash: string) => {
      const id = hash.replace(/^#/, '');
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const navH = navRef.current?.getBoundingClientRect().height ?? 64;
      if (root) {
        const top =
          el.getBoundingClientRect().top -
          root.getBoundingClientRect().top +
          root.scrollTop -
          navH;
        root.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    },
    [root],
  );

  useEffect(() => {
    const scrollEl = root ?? window;
    const onScroll = () => {
      const y = root ? root.scrollTop : window.scrollY;
      setNavShadow(y > 20);
    };
    scrollEl.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => scrollEl.removeEventListener('scroll', onScroll);
  }, [root]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.15, root: root ?? undefined },
    );

    const nodes = document.querySelectorAll(fadeSelector);
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [fadeSelector, root]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      const a = t.closest?.('a[href^="#"]');
      if (!(a instanceof HTMLAnchorElement)) return;
      if (a.getAttribute('href') === '#') return;
      e.preventDefault();
      scrollTargetIntoView(a.getAttribute('href') ?? '');
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [scrollTargetIntoView]);

  return { navRef, navShadow };
}

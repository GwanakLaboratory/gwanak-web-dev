import { type RefObject, useEffect } from 'react';

/**
 * 세로 휠을 가로 스크롤로 매핑 (가로 스냅 트랙용).
 */
export function useHorizontalGuideScroll(
  trackRef: RefObject<HTMLElement | null>,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return;
    const el = trackRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const horizontalDelta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (horizontalDelta === 0) return;
      event.preventDefault();
      el.scrollBy({ left: horizontalDelta, behavior: 'smooth' });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [enabled, trackRef]);
}

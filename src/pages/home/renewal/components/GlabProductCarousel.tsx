import styled from '@emotion/styled';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const BASE = import.meta.env.BASE_URL;

const FILES = [
  'glab-screen-01.png',
  'glab-screen-02.png',
  'glab-screen-03.png',
  'glab-screen-04.png',
  'glab-screen-05.png',
  'glab-screen-06.png',
  'glab-screen-07.png',
  'glab-screen-08.png',
] as const;

const SRC = FILES.map((f) => `${BASE}renewal/glab-carousel/${f}`);

const Wrap = styled.div`
  position: relative;
  background: #fff;
  outline: none;
  &:focus-visible {
    box-shadow:
      0 0 0 2px var(--surface),
      0 0 0 4px var(--accent);
  }
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  margin-left: -10px;
`;

const Slide = styled.div`
  flex: 0 0 50%;
  min-width: 0;
  padding-left: 10px;
  box-sizing: border-box;
`;

const Card = styled.div`
  padding: 4px;
  border-radius: 10px;
  border: 1px solid var(--border-light);
  background: #fff;
  box-sizing: border-box;
`;

const ThumbButton = styled.button`
  all: unset;
  display: block;
  width: 100%;
  cursor: zoom-in;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid var(--accent, #1a56db);
    outline-offset: 2px;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Arrow = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 10px' : 'right: 10px')};
  z-index: 1;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 8px 14px;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.96));
`;

const Dot = styled.button<{ $on: boolean }>`
  width: ${({ $on }) => ($on ? 22 : 8)}px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: ${({ $on }) =>
    $on ? 'var(--accent, #1a56db)' : 'rgba(26, 86, 219, 0.22)'};
`;

function GlabProductCarousel() {
  const { t } = useTranslation();
  const [reduced, setReduced] = useState(false);
  const [snap, setSnap] = useState(0);
  const [nSnaps, setNSnaps] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const slides = useMemo(
    () =>
      SRC.map((src, i) => ({
        src,
        alt: t('landing.renewal.products.glabCarousel.altScreen', { n: i + 1 }),
      })),
    [t],
  );

  const plugins = useMemo(
    () =>
      reduced
        ? []
        : [
            Autoplay({
              delay: 5500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [reduced],
  );

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1, duration: 22 },
    plugins,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const s = () => setReduced(mq.matches);
    s();
    mq.addEventListener('change', s);
    return () => mq.removeEventListener('change', s);
  }, []);

  const sync = useCallback(() => {
    if (!embla) return;
    setSnap(embla.selectedScrollSnap());
    setNSnaps(embla.scrollSnapList().length);
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on('select', sync);
    embla.on('reInit', sync);
    return () => {
      embla.off('select', sync);
      embla.off('reInit', sync);
    };
  }, [embla, sync]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  const onKey = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    },
    [prev, next],
  );

  const openLb = useCallback((i: number) => {
    setLbIndex(i);
    setLbOpen(true);
  }, []);

  return (
    <>
      <Wrap
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={t('landing.renewal.products.glabCarousel.regionLabel')}
        onKeyDown={onKey}
      >
        <Viewport ref={emblaRef} id="glab-embla">
          <Container>
            {SRC.map((src, i) => (
              <Slide key={src}>
                <Card>
                  <ThumbButton
                    type="button"
                    aria-label={t(
                      'landing.renewal.products.glabCarousel.openLightbox',
                      { n: i + 1 },
                    )}
                    onClick={() => openLb(i)}
                  >
                    <Img
                      src={src}
                      alt={slides[i]?.alt ?? ''}
                      sizes="(max-width: 900px) 46vw, 300px"
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable={false}
                      fetchPriority={i < 2 ? 'high' : undefined}
                    />
                  </ThumbButton>
                </Card>
              </Slide>
            ))}
          </Container>
        </Viewport>

        <Arrow
          type="button"
          $side="left"
          aria-controls="glab-embla"
          aria-label={t('landing.renewal.products.glabCarousel.prev')}
          onClick={prev}
        >
          ‹
        </Arrow>
        <Arrow
          type="button"
          $side="right"
          aria-controls="glab-embla"
          aria-label={t('landing.renewal.products.glabCarousel.next')}
          onClick={next}
        >
          ›
        </Arrow>

        <Dots aria-label={t('landing.renewal.products.glabCarousel.dotsLabel')}>
          {nSnaps > 0 &&
            Array.from({ length: nSnaps }, (_, i) => (
              <Dot
                key={i}
                type="button"
                $on={i === snap}
                aria-label={t('landing.renewal.products.glabCarousel.goTo', {
                  n: i + 1,
                })}
                aria-current={i === snap ? 'true' : undefined}
                onClick={() => embla?.scrollTo(i)}
              />
            ))}
        </Dots>
      </Wrap>

      <Lightbox
        open={lbOpen}
        close={() => setLbOpen(false)}
        index={lbIndex}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        carousel={{ padding: '48px' }}
        styles={{
          container: {
            backdropFilter: 'blur(2px)',
            '--yarl__color_backdrop': 'rgba(10, 15, 30, 0.38)',
          },
        }}
        labels={{
          Close: t('landing.renewal.products.glabCarousel.closeLightbox'),
        }}
        on={{ view: ({ index }) => setLbIndex(index) }}
      />
    </>
  );
}

export default GlabProductCarousel;

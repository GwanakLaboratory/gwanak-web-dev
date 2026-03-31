import { useCallback, useRef } from 'react';
import LandingNavBar from '../../../components/common/LandingNavBar';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { S as LayoutS } from '../../../components/layout/AuthLandingLayout/style';
import GlabGuideCta from './GlabGuideCta';
import GlabGuideMobileNav from './GlabGuideMobileNav';
import GlabGuideHero from './GlabGuideHero';
import GlabGuideStepPanel from './GlabGuideStepPanel';
import { GLAB_GUIDE_STEPS } from './glabGuideData';
import { GuideWideContent, S } from './style';
import { useHorizontalGuideScroll } from './useHorizontalGuideScroll';

const MOBILE_NAV_QUERY = '(max-width: 900px)';

const GlabStartGuidePage = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isMobileNav = useMediaQuery(MOBILE_NAV_QUERY);

  useHorizontalGuideScroll(trackRef, !isMobileNav);

  const scrollTrackTo = useCallback((left: number) => {
    trackRef.current?.scrollTo({ left, behavior: 'smooth' });
  }, []);

  const scrollToFirstStep = useCallback(() => {
    if (isMobileNav) {
      document.getElementById('step1')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    const track = trackRef.current;
    if (!track) return;
    const el = track.querySelector('#step1');
    if (!(el instanceof HTMLElement)) return;
    track.scrollTo({ left: el.offsetLeft, behavior: 'smooth' });
  }, [isMobileNav]);

  const scrollToStart = useCallback(() => {
    if (isMobileNav) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    scrollTrackTo(0);
  }, [isMobileNav, scrollTrackTo]);

  return (
    <LayoutS.Shell>
      {isMobileNav ? <GlabGuideMobileNav /> : <LandingNavBar variant="auth" />}
      <GuideWideContent
        as="section"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: 0,
        }}
      >
        {isMobileNav ? (
          <S.MobileFlow>
            <S.MobileSection>
              <GlabGuideHero onScrollToGuide={scrollToFirstStep} />
            </S.MobileSection>
            {GLAB_GUIDE_STEPS.map((step, index) => (
              <S.MobileSection key={step.id} id={step.id}>
                <GlabGuideStepPanel
                  step={step}
                  stepIndex={index}
                  imageSrc={step.imageSrc}
                />
              </S.MobileSection>
            ))}
            <S.MobileSection>
              <GlabGuideCta onAgain={scrollToStart} />
            </S.MobileSection>
          </S.MobileFlow>
        ) : (
          <S.HorizontalTrack ref={trackRef}>
            <S.Panel>
              <GlabGuideHero onScrollToGuide={scrollToFirstStep} />
            </S.Panel>
            {GLAB_GUIDE_STEPS.map((step, index) => (
              <S.Panel key={step.id} id={step.id}>
                <GlabGuideStepPanel
                  step={step}
                  stepIndex={index}
                  imageSrc={step.imageSrc}
                />
              </S.Panel>
            ))}
            <S.Panel>
              <GlabGuideCta onAgain={scrollToStart} />
            </S.Panel>
          </S.HorizontalTrack>
        )}
      </GuideWideContent>
    </LayoutS.Shell>
  );
};

export default GlabStartGuidePage;

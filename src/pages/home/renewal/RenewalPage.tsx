import { Global, css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LandingContactModal from '../landing/components/LandingContactModal';
import { renewalS } from './renewalStyles';
import { useRenewalPageEffects } from './hooks/useRenewalPageEffects';
import { useRenewalContent } from './hooks/useRenewalContent';
import { renewalNavLinks } from './renewal.content';
import {
  PillarsSection,
  ProblemSection,
  ProductsSection,
  RenewalAchievementsSection,
  RenewalCtaSection,
  RenewalFooter,
  RenewalHero,
  RenewalHistorySection,
  RenewalNav,
  RenewalTeamSection,
  SolutionSection,
} from './components';

const { PageRoot } = renewalS;

/** 기존 랜딩(`LandingPage`)과 동일 */
const CONTACT_EMAIL = 'support@gwanaklab.co.kr';

const fontImports = css`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
`;

/**
 * 관악연구소 메인 랜딩 (/)
 *
 * 카피는 `i18n/resources.ts` → `landing.renewal.*` + `useRenewalContent`
 */
function RenewalPage() {
  const { t } = useTranslation();
  const { navRef, navShadow } = useRenewalPageEffects();
  const rc = useRenewalContent();
  const [contactOpen, setContactOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setContactOpen(true);
  }, []);

  const copyEmailToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const temp = document.createElement('textarea');
      temp.value = CONTACT_EMAIL;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
  }, []);

  useEffect(() => {
    document.title = rc.documentTitle;
  }, [rc.documentTitle]);

  return (
    <>
      <Global styles={fontImports} />
      <PageRoot>
        <RenewalNav
          ref={navRef}
          links={renewalNavLinks}
          navShadow={navShadow}
          onContact={openContactModal}
        />

        <RenewalHero
          primaryCta={{
            label: t('landing.renewal.hero.ctaPrimary'),
            onClick: openContactModal,
          }}
          secondaryCta={{
            href: '#products',
            label: t('landing.renewal.hero.ctaSecondary'),
          }}
        />

        <PillarsSection pillars={rc.pillars} />

        <ProblemSection
          tag={rc.problemSectionCopy.tag}
          title={rc.problemSectionCopy.title}
          lead={rc.problemSectionCopy.lead}
          stats={rc.problemStats}
        />

        <SolutionSection
          tag={rc.solutionSectionCopy.tag}
          title={rc.solutionSectionCopy.title}
          lead={rc.solutionSectionCopy.lead}
          items={rc.solutions}
        />

        <ProductsSection
          tag={rc.productsSectionCopy.tag}
          title={rc.productsSectionCopy.title}
          lead={rc.productsSectionCopy.lead}
          productB2B={rc.productB2B}
          productCards={rc.productCards}
        />

        <RenewalAchievementsSection
          tag={rc.achievementsSectionCopy.tag}
          title={rc.achievementsSectionCopy.title}
          items={rc.achievements}
        />

        <RenewalHistorySection id="history" />

        <RenewalTeamSection
          tag={rc.teamSectionCopy.tag}
          title={rc.teamSectionCopy.title}
          lead={rc.teamSectionCopy.lead}
          members={rc.team}
        />

        <RenewalCtaSection
          title={rc.ctaCopy.title}
          lead={rc.ctaCopy.lead}
          onPrimaryClick={openContactModal}
          primaryLabel={t('landing.renewal.hero.ctaPrimary')}
          secondaryLabel={t('landing.renewal.cta.secondaryDownload')}
        />

        <RenewalFooter />

        <LandingContactModal
          isOpen={contactOpen}
          email={CONTACT_EMAIL}
          onClose={() => setContactOpen(false)}
          onCopy={copyEmailToClipboard}
        />
      </PageRoot>
    </>
  );
}

export default RenewalPage;

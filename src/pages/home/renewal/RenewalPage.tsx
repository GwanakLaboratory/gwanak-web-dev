import { Global, css } from '@emotion/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { renewalS } from './renewalStyles';
import { useRenewalPageEffects } from './hooks/useRenewalPageEffects';
import {
  renewalAchievements,
  renewalAchievementsSectionCopy,
  renewalCtaCopy,
  renewalNavLinks,
  renewalPillars,
  renewalProblemSectionCopy,
  renewalProblemStats,
  renewalProductB2B,
  renewalProductCards,
  renewalProductsSectionCopy,
  renewalSolutions,
  renewalSolutionSectionCopy,
  renewalTeam,
  renewalTeamSectionCopy,
  renewalTrustPartners,
} from './renewal.content';
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
  TrustBarSection,
} from './components';

const { PageRoot } = renewalS;

const fontImports = css`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/variable/pretendardvariable.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
`;

/**
 * 관악연구소 리뉴얼 랜딩 (/renewal)
 *
 * 섹션 구성:
 * 1. Hero          — 회전 헤드라인 (i18n)
 * 2. Pillars       — 3대 사업 축
 * 3. TrustBar      — 협력 기관
 * 4. Problem       — 문제 제기
 * 5. Solution      — 기술 소개 + 캔버스 비주얼 (nhero-right 재사용)
 * 6. Products      — 비즈니스 (B2B 좌상단, SI/SM 좌하단, GLAB + 채팅 데모 우측)
 * 7. Achievements  — 4가지 검증 지표 카드
 * 8. History       — 연혁 + 보도자료 + 파트너 마퀴 (기존 AchievementsSection 재사용)
 * 9. Team          — 팀 소개
 * 10. CTA          — 문의 CTA
 * 11. Footer
 */
function RenewalPage() {
  const { t } = useTranslation();
  const { navRef, navShadow } = useRenewalPageEffects();

  useEffect(() => {
    document.title = '관악연구소 | AI 기반 금융 의사결정 엔진';
  }, []);

  return (
    <>
      <Global styles={fontImports} />
      <PageRoot>
        <RenewalNav
          ref={navRef}
          links={renewalNavLinks}
          navShadow={navShadow}
        />

        {/* 1. Hero */}
        <RenewalHero
          primaryCta={{
            href: '#contact',
            label: t('landing.renewal.hero.ctaPrimary', {
              defaultValue: '문의하기 →',
            }),
          }}
          secondaryCta={{
            href: '#products',
            label: t('landing.renewal.hero.ctaSecondary', {
              defaultValue: '사업 영역 보기',
            }),
          }}
        />

        {/* 2. Pillars */}
        <PillarsSection pillars={renewalPillars} />

        {/* 3. TrustBar */}
        <TrustBarSection partners={renewalTrustPartners} />

        {/* 4. Problem */}
        <ProblemSection
          tag={renewalProblemSectionCopy.tag}
          title={renewalProblemSectionCopy.title}
          lead={renewalProblemSectionCopy.lead}
          stats={renewalProblemStats}
        />

        {/* 5. Solution + 캔버스 비주얼 */}
        <SolutionSection
          tag={renewalSolutionSectionCopy.tag}
          title={renewalSolutionSectionCopy.title}
          lead={renewalSolutionSectionCopy.lead}
          items={renewalSolutions}
        />

        {/* 6. Products */}
        <ProductsSection
          tag={renewalProductsSectionCopy.tag}
          title={renewalProductsSectionCopy.title}
          lead={renewalProductsSectionCopy.lead}
          productB2B={renewalProductB2B}
          productCards={renewalProductCards}
        />

        {/* 7. Achievements — 검증 지표 카드 */}
        <RenewalAchievementsSection
          tag={renewalAchievementsSectionCopy.tag}
          title={renewalAchievementsSectionCopy.title}
          items={renewalAchievements}
        />

        {/* 8. History — 연혁 + 보도자료 (기존 AchievementsSection 재사용) */}
        <RenewalHistorySection id="history" />

        {/* 9. Team */}
        <RenewalTeamSection
          tag={renewalTeamSectionCopy.tag}
          title={renewalTeamSectionCopy.title}
          lead={renewalTeamSectionCopy.lead}
          members={renewalTeam}
        />

        {/* 10. CTA */}
        <RenewalCtaSection
          title={renewalCtaCopy.title}
          lead={renewalCtaCopy.lead}
          primaryHref={renewalCtaCopy.mailto}
          primaryLabel={t('landing.renewal.hero.ctaPrimary', {
            defaultValue: '문의하기 →',
          })}
        />

        {/* 11. Footer */}
        <RenewalFooter />
      </PageRoot>
    </>
  );
}

export default RenewalPage;

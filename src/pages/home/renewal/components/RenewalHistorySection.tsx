/**
 * RenewalHistorySection
 * 기존 랜딩 페이지의 AchievementsSection(연혁 + 보도자료 + 파트너 마퀴)을
 * 리뉴얼 페이지에서 재사용합니다.
 * LandingStylesBridge로 CSS 클래스를 주입합니다.
 */
import styled from '@emotion/styled';
import { renewalS } from '../renewalStyles';
import { LandingStylesBridge } from './LandingStylesBridge';
import AchievementsSection from '../../landing/components/AchievementsSection';

const { FadeBlock } = renewalS;

const Section = styled(FadeBlock)`
  padding: 0 0 60px;
  background: linear-gradient(
    180deg,
    #fafbff 0%,
    rgba(41, 86, 219, 0.06) 55%,
    #f5f7fc 100%
  );
`;

const BridgeWrap = styled(LandingStylesBridge)`
  /* 섹션 기본 패딩 유지 */
  section#achievements {
    padding: 96px 48px;
    min-height: unset;
    scroll-snap-align: unset;

    @media (max-width: 900px) {
      padding: 64px 24px;
    }
  }
`;

export type RenewalHistorySectionProps = {
  id?: string;
};

function RenewalHistorySection({ id = 'history' }: RenewalHistorySectionProps) {
  return (
    <Section id={id} data-renewal-fade>
      <BridgeWrap>
        <AchievementsSection />
      </BridgeWrap>
    </Section>
  );
}

export default RenewalHistorySection;

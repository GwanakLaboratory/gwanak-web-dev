import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { LandingStylesBridge } from './LandingStylesBridge';
import { renewalS } from '../renewalStyles';

const { BtnPrimary, BtnSecondary } = renewalS;

const Hero = styled.section`
  padding: 160px 40px 80px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 120px 24px 40px;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export type RenewalHeroProps = {
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

function RenewalHero({ primaryCta, secondaryCta }: RenewalHeroProps) {
  const { t } = useTranslation();

  return (
    <Hero>
      <Content>
        <LandingStylesBridge>
          {/* Badge */}
          <div className="nhero-tag">
            <span className="nhero-dot" />
            {t('landing.renewal.hero.badge')}
          </div>

          {/* 헤드라인 + 회전 텍스트 */}
          <h1
            className="nhero-headline"
            style={{ marginBottom: 20, textAlign: 'center' }}
          >
            {t('landing.renewal.hero.titleLine1')}
            <br />
            <span className="nhero-rotating-line">
              <span className="nhero-rotating-wrap">
                <span className="nhero-rw nhero-rw--1">
                  {t('landing.newHero.rotatingWord1')}
                </span>
                <span className="nhero-rw nhero-rw--2">
                  {t('landing.newHero.rotatingWord2')}
                </span>
                <span className="nhero-rw nhero-rw--3">
                  {t('landing.newHero.rotatingWord3')}
                </span>
              </span>
            </span>
          </h1>

          <p
            className="nhero-sub"
            style={{ margin: '0 auto 36px', textAlign: 'center' }}
          >
            {t('landing.renewal.hero.description')}
          </p>
        </LandingStylesBridge>

        <Actions>
          <BtnPrimary href={primaryCta.href}>{primaryCta.label}</BtnPrimary>
          <BtnSecondary href={secondaryCta.href}>
            {secondaryCta.label}
          </BtnSecondary>
        </Actions>
      </Content>
    </Hero>
  );
}

export default RenewalHero;

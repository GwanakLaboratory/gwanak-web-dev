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

const GlabHeroLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export type RenewalHeroProps = {
  /** `onClick`이 있으면 모달 등 — 앵커 대신 버튼으로 렌더 */
  primaryCta:
    | { label: string; href: string }
    | { label: string; onClick: () => void };
  secondaryCta: { href: string; label: string };
  /** GLAB B2C 웹 — 메인 배너에서 바로 연결 */
  glabCta: { href: string; label: string };
};

function RenewalHero({ primaryCta, secondaryCta, glabCta }: RenewalHeroProps) {
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
            <span
              className="nhero-rotating-line"
              style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <span className="nhero-rotating-wrap" style={{ textAlign: 'center' }}>
                <span className="nhero-rw nhero-rw--1">
                  <span className="nhero-accent">
                    {t('landing.newHero.rotatingWord1')}
                  </span>
                </span>
                <span className="nhero-rw nhero-rw--2">
                  <span className="nhero-accent">
                    {t('landing.newHero.rotatingWord2')}
                  </span>
                </span>
                <span className="nhero-rw nhero-rw--3">
                  <span className="nhero-accent">
                    {t('landing.newHero.rotatingWord3')}
                  </span>
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
          {'onClick' in primaryCta ? (
            <BtnPrimary
              as="button"
              type="button"
              onClick={primaryCta.onClick}
            >
              {primaryCta.label}
            </BtnPrimary>
          ) : (
            <BtnPrimary href={primaryCta.href}>{primaryCta.label}</BtnPrimary>
          )}
          <BtnSecondary href={secondaryCta.href}>
            {secondaryCta.label}
          </BtnSecondary>
        </Actions>

        <GlabHeroLink href={glabCta.href} target="_blank" rel="noopener noreferrer">
          {glabCta.label}
          <span aria-hidden>↗</span>
        </GlabHeroLink>
      </Content>
    </Hero>
  );
}

export default RenewalHero;

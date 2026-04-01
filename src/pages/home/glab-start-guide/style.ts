import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { S as LayoutS } from '../../../components/layout/AuthLandingLayout/style';

const glabHeroFloat = keyframes`
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(2%, -2%) rotate(1deg);
  }
  66% {
    transform: translate(-1%, 1%) rotate(-0.5deg);
  }
`;

const glabPulse = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
`;

const glab = {
  blue: '#3B5BDB',
  green: '#20C997',
  dark: '#1A1A2E',
  gray: '#6B7280',
  light: '#F8F9FC',
  white: '#FFFFFF',
  accent: '#5B7FFF',
} as const;

export const S = {
  MobileFlow: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  MobileSection: styled.section`
    width: 100%;
    word-break: keep-all;
    overflow-wrap: break-word;
  `,

  HorizontalTrack: styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    flex: 1;
    height: 100%;
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 900px) {
      height: auto;
      min-height: 0;
    }
  `,

  Panel: styled.section`
    flex: 0 0 100vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    min-width: 100vw;
    height: calc(100dvh - 96px);
    min-height: calc(100dvh - 96px);
    scroll-snap-align: start;
    scroll-snap-stop: always;
    overflow: hidden;
    box-sizing: border-box;
    word-break: keep-all;
    overflow-wrap: break-word;

    @media (max-width: 900px) {
      height: auto;
      min-height: auto;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-y: contain;
    }
  `,

  Hero: styled.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: clamp(20px, 5vw, 44px);
    padding-top: max(48px, env(safe-area-inset-top, 0px));
    padding-bottom: max(48px, env(safe-area-inset-bottom, 0px));
    background: linear-gradient(
      165deg,
      #0f0f23 0%,
      #1a1a3e 35%,
      #2b2b5e 65%,
      ${glab.blue} 100%
    );
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background:
        radial-gradient(
          circle at 30% 70%,
          rgba(32, 201, 151, 0.08) 0%,
          transparent 50%
        ),
        radial-gradient(
          circle at 70% 30%,
          rgba(91, 127, 255, 0.12) 0%,
          transparent 50%
        );
      animation: ${glabHeroFloat} 20s ease-in-out infinite;
    }

    @media (max-width: 900px) {
      height: auto;
      justify-content: center;
      min-height: auto;
      padding: 12px 16px;
      padding-top: max(8px, env(safe-area-inset-top, 0px));
      padding-bottom: max(24px, env(safe-area-inset-bottom, 0px));
    }
  `,

  HeroBadge: styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 100px;
    color: ${glab.green};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 18px;
    position: relative;
    z-index: 1;
    backdrop-filter: blur(10px);

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background: ${glab.green};
      border-radius: 50%;
      animation: ${glabPulse} 2s ease-in-out infinite;
    }
  `,

  HeroTitle: styled.h1`
    font-size: clamp(26px, 5.5vw, 44px);
    font-weight: 800;
    color: ${glab.white};
    line-height: 1.22;
    max-width: 18ch;
    margin: 0 auto 20px;
    position: relative;
    z-index: 1;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;
  `,

  HeroEm: styled.em`
    font-style: normal;
    background: linear-gradient(135deg, ${glab.green}, ${glab.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `,

  HeroDesc: styled.p`
    font-size: clamp(14px, 2.2vw, 17px);
    color: rgba(255, 255, 255, 0.6);
    max-width: min(34em, 92vw);
    line-height: 1.65;
    margin: 0 auto 32px;
    position: relative;
    z-index: 1;
    font-weight: 300;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;
    white-space: pre-line;
  `,

  HeroCta: styled.button`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: ${glab.green};
    color: ${glab.dark};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(32, 201, 151, 0.3);
    }

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  `,

  Step: styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    grid-template-areas: 'visual content';
    gap: clamp(24px, 4vw, 56px);
    align-items: center;
    min-height: 100%;
    padding: clamp(40px, 6vh, 56px) clamp(20px, 5vw, 44px);
    padding-top: max(48px, env(safe-area-inset-top, 0px));
    padding-bottom: max(48px, env(safe-area-inset-bottom, 0px));
    background: ${glab.light};
    box-sizing: border-box;

    & > * {
      min-width: 0;
    }

    @media (max-width: 900px) {
      height: auto;
      min-height: auto;
      grid-template-columns: 1fr;
      grid-template-areas: 'visual' 'content';
      gap: 20px;
      align-items: start;
      align-content: start;
      padding-top: clamp(24px, 4vh, 40px);
      padding-bottom: clamp(28px, 5vh, 48px);
    }
  `,

  StepVisual: styled.div`
    grid-area: visual;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  PhoneGlow: styled.div`
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(
      circle at center,
      rgba(59, 91, 219, 0.06) 0%,
      transparent 60%
    );
    pointer-events: none;
  `,

  PhoneFrame: styled.div`
    width: min(280px, 72vw);
    border-radius: 36px;
    overflow: hidden;
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(0, 0, 0, 0.04);
    position: relative;
    background: #000;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.02) translateY(-4px);
    }

    img {
      width: 100%;
      display: block;
    }

    @media (max-width: 900px) {
      width: min(240px, 72vw);
    }
  `,

  StepContent: styled.div`
    grid-area: content;
    min-width: 0;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;
  `,

  StepNumber: styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${glab.blue}, ${glab.accent});
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 14px;
  `,

  StepTag: styled.span`
    display: inline-block;
    padding: 4px 12px;
    background: rgba(59, 91, 219, 0.08);
    color: ${glab.blue};
    font-size: 12px;
    font-weight: 600;
    border-radius: 100px;
    margin-bottom: 10px;
  `,

  StepHeading: styled.h2`
    font-size: clamp(22px, 3.6vw, 32px);
    font-weight: 800;
    line-height: 1.3;
    margin: 0 0 14px;
    color: ${glab.dark};
  `,

  StepEm: styled.em`
    font-style: normal;
    color: ${glab.blue};
  `,

  StepLead: styled.p`
    font-size: 15px;
    color: ${glab.gray};
    line-height: 1.65;
    margin: 0 0 18px;
    font-weight: 300;
  `,

  StepFeatures: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 901px) {
      gap: 14px;
    }
  `,

  StepFeature: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 12px 14px;
    background: ${glab.white};
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    @media (min-width: 901px) {
      padding: 14px 18px;
    }

    &:hover {
      transform: translateX(6px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
  `,

  StepFeatureIcon: styled.div<{ $bg: string }>`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
    background: ${({ $bg }) => $bg};
  `,

  StepFeatureText: styled.span`
    font-size: 14px;
    color: ${glab.dark};
    font-weight: 500;
    line-height: 1.5;
    padding-top: 6px;

    @media (min-width: 901px) {
      font-size: 15px;
    }
  `,

  CtaPanel: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    background: linear-gradient(180deg, ${glab.light} 0%, #eef1fa 100%);

    @media (max-width: 900px) {
      height: auto;
      min-height: auto;
    }
  `,

  Cta: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    min-height: 0;
    padding: clamp(48px, 10vh, 72px) clamp(20px, 5vw, 44px);
    padding-top: max(48px, env(safe-area-inset-top, 0px));
    padding-bottom: max(48px, env(safe-area-inset-bottom, 0px));
    box-sizing: border-box;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;

    @media (max-width: 900px) {
      min-height: auto;
    }
  `,

  CtaFooter: styled.div`
    width: 100%;
    flex-shrink: 0;

    .landing-footer {
      padding: 40px 48px;
      border-top: 1px solid rgba(26, 29, 43, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: rgba(26, 29, 43, 0.58);
      flex-wrap: wrap;
      gap: 8px;
      background: linear-gradient(180deg, #eef1f8 0%, #e4e9f4 100%);
      font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    }

    .landing-footer .nav-logo {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      color: #2956e0;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .landing-footer .nav-logo span {
      background: #2956e0;
      color: #fff;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .landing-footer .nav-logo img {
      height: 28px;
      width: auto;
      display: block;
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a {
      color: inherit;
      text-decoration: none;
    }

    .footer-links a:hover {
      color: rgba(26, 29, 43, 0.78);
    }

    @media (max-width: 900px) {
      .landing-footer {
        flex-direction: column;
        text-align: center;
        padding: 40px 19px;
      }

      .footer-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px 20px;
      }
    }
  `,

  CtaTitle: styled.h2`
    font-size: clamp(24px, 4vw, 38px);
    font-weight: 900;
    margin: 0 0 16px;
    color: ${glab.dark};
  `,

  CtaDesc: styled.p`
    font-size: 15px;
    color: ${glab.gray};
    margin: 0 0 28px;
    font-weight: 300;
    line-height: 1.6;
  `,

  CtaButtons: styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,

  CtaBtnPrimary: styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 14px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    background: ${glab.blue};
    color: #fff;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(59, 91, 219, 0.3);
    }
  `,

  CtaDisclaimer: styled.p`
    margin: 32px 0 0;
    max-width: 36em;
    font-size: 11px;
    line-height: 1.65;
    color: ${glab.gray};
    opacity: 0.9;
  `,

  CtaBtnSecondary: styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 14px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 700;
    background: ${glab.white};
    color: ${glab.dark};
    border: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
    font-family:
      'Noto Sans KR',
      -apple-system,
      sans-serif;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    }
  `,
};

/** 모바일 가이드: 고정 네비 제거에 맞춰 상단 패딩 최소화 */
export const GuideWideContent = styled(LayoutS.WideContent)`
  box-sizing: border-box;

  @media (min-width: 901px) {
    height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    padding-top: max(4px, env(safe-area-inset-top, 0px));
    height: auto;
    max-height: none;
    overflow: visible;
  }
`;

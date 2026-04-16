import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

/** 공통 레이아웃·토큰 — 섹션별 세부 스타일은 각 컴포넌트에서 확장 */
export const renewalS = {
  PageRoot: styled.div`
    --bg: #fafbfd;
    --surface: #ffffff;
    --surface-alt: #f3f5f9;
    --text-primary: #0a0f1e;
    --text-secondary: #4a5168;
    --text-muted: #8891a5;
    --accent: #1a56db;
    --accent-light: #e8effc;
    --accent-dark: #0f3a94;
    --gradient-start: #1a56db;
    --gradient-end: #0ea5e9;
    --border: #e2e6ef;
    --border-light: #f0f2f7;
    --success: #059669;
    --warning: #d97706;

    font-family:
      'Pretendard Variable',
      'Plus Jakarta Sans',
      -apple-system,
      sans-serif;
    background: var(--bg);
    color: var(--text-primary);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    min-height: 100vh;
  `,

  Container: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    @media (max-width: 900px) {
      padding: 0 24px;
    }
  `,

  SectionTag: styled.div`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  `,

  BtnPrimary: styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent);
    color: white;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 14px 28px;
    cursor: pointer;
    transition: all 0.25s;
    text-decoration: none;

    &:hover {
      background: var(--accent-dark);
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(26, 86, 219, 0.25);
    }
  `,

  BtnSecondary: styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--surface);
    color: var(--text-primary);
    font-size: 15px;
    font-weight: 600;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px 28px;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  `,

  /** IntersectionObserver가 data-visible="true"를 주면 나타남 */
  FadeBlock: styled.section`
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.7s ease,
      transform 0.7s ease;

    &[data-visible='true'] {
      opacity: 1;
      transform: translateY(0);
    }
  `,

  HeroPulseDot: styled.span`
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
    animation: ${pulse} 2s infinite;
  `,
};

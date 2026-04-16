/**
 * LandingStylesBridge
 *
 * 기존 랜딩 페이지 컴포넌트(GlabChatDemo, AchievementsSection, HeroSection visual)는
 * S.LandingWrapper 내부의 CSS 클래스에 의존합니다.
 * 이 Bridge 컴포넌트는 해당 CSS 클래스들만 선택적으로 감싸 리뉴얼 페이지에서
 * 레거시 컴포넌트를 그대로 재사용할 수 있게 합니다.
 */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

/* ── Keyframe 재정의 (style.ts 에서 export 되지 않아 재선언) ─────────────── */
const glabMsgIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const glabCursorPulse = keyframes`
  0%, 100% { opacity: 1;    }
  50%       { opacity: 0.35; }
`;

const glabCaretBlink = keyframes`
  0%,  45% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const glabSendPulse = keyframes`
  0%   { transform: scale(1);    box-shadow: 0 0 0 0   rgba(41,86,224,0.28); }
  55%  { transform: scale(1.04); box-shadow: 0 0 0 10px rgba(41,86,224,0);   }
  100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(41,86,224,0);    }
`;

const partnerMarqueeLoop = keyframes`
  from { transform: translateX(0);   }
  to   { transform: translateX(-50%);}
`;

const nheroWordRotate = keyframes`
  0%   { opacity: 0; transform: translateY(65%);  }
  7%   { opacity: 1; transform: translateY(0);     }
  28%  { opacity: 1; transform: translateY(0);     }
  35%  { opacity: 0; transform: translateY(-55%);  }
  100% { opacity: 0; transform: translateY(-55%);  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0);    }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1);   }
  50%       { opacity: 0.5; transform: scale(0.8); }
`;

/* ── Bridge 래퍼 ──────────────────────────────────────────────────────────── */
export const LandingStylesBridge = styled.div`
  /* Landing 페이지 CSS 변수 */
  --primary: #1a56db;
  --primary-light: #4a72f5;
  --primary-dark: #1d3fab;
  --primary-bg: rgba(26, 86, 219, 0.06);
  --primary-glow: rgba(26, 86, 219, 0.15);
  --accent: #00c9a7;
  --accent-bg: rgba(0, 201, 167, 0.08);
  --orange: #f5852b;
  --border: rgba(26, 86, 219, 0.08);
  --border-strong: rgba(26, 86, 219, 0.15);
  --bg: #fafbfd;
  --bg-card: #ffffff;
  --bg-card-alt: #f3f6fc;
  --text: #0a0f1e;
  --text-muted: #4a5168;
  --text-dim: #8891a5;

  font-family:
    'Noto Sans KR',
    'Outfit',
    -apple-system,
    sans-serif;
  color: var(--text);
  -webkit-font-smoothing: antialiased;

  /* reveal: 리뉴얼 페이지에서는 기본 visible */
  .reveal {
    opacity: 1;
    transform: none;
  }

  /* ── 섹션 공통 ─────────────────────────────────────────────────────────── */
  .section-label {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 12px;
  }

  .section-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(29px, 3.5vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
    max-width: 650px;
    color: var(--text);
  }

  /* ── nhero-right (캔버스 비주얼) ─────────────────────────────────────── */
  .nhero-right {
    position: relative;
    animation: ${fadeUp} 1s ease 0.1s both;
  }

  .nhero-visual-shell {
    position: relative;
    border-radius: 24px;
    padding: 16px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.6)
    );
    border: 1px solid var(--border);
    box-shadow:
      0 10px 40px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(41, 86, 224, 0.04);
    backdrop-filter: blur(16px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .nhero-vis-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .nhero-vis-label {
    font-family: 'Outfit', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .nhero-vis-dots {
    display: flex;
    gap: 6px;
  }

  .nhero-vis-dots i {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: var(--border-strong);
    transition: all 0.25s ease;
  }

  .nhero-vis-dots i.active {
    background: var(--primary);
    box-shadow: 0 0 0 4px rgba(41, 86, 224, 0.14);
  }

  .nhero-canvas-wrap {
    position: relative;
    height: 100%;
    min-height: 380px;
    flex: 1;
    border-radius: 18px;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(238, 243, 255, 0.5),
      rgba(250, 251, 254, 0.3)
    );
    border: 1px solid rgba(41, 86, 224, 0.06);
  }

  .nhero-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .nhero-step-panel {
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .nhero-step-card {
    padding: 12px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid transparent;
    transition: all 0.45s ease;
    opacity: 0.4;
    transform: scale(0.985);
  }

  .nhero-step-card.active {
    opacity: 1;
    transform: scale(1);
    background: rgba(255, 255, 255, 0.8);
    border-color: var(--border-strong);
    box-shadow: 0 4px 20px rgba(41, 86, 224, 0.06);
  }

  .nhero-step-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .nhero-step-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: var(--primary-bg);
    flex-shrink: 0;
  }

  .nhero-step-idx {
    font-family: 'Outfit', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    margin-bottom: 1px;
  }

  .nhero-step-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--text);
  }

  .nhero-step-desc {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ── nhero headline 회전 텍스트 ──────────────────────────────────────── */
  .nhero-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px 7px 12px;
    border-radius: 999px;
    color: var(--primary);
    background: var(--primary-bg);
    border: 1px solid var(--border-strong);
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  .nhero-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 14px rgba(0, 201, 167, 0.5);
    animation: ${pulse} 1.8s ease-in-out infinite;
  }

  .nhero-headline {
    font-family: 'Outfit', 'Noto Sans KR', sans-serif;
    font-size: clamp(36px, 5vw, 62px);
    line-height: 1.12;
    font-weight: 900;
    letter-spacing: -0.04em;
    color: var(--text);
    margin-bottom: 18px;
  }

  .nhero-accent {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nhero-rotating-line {
    display: inline-flex;
    align-items: baseline;
    gap: 0;
  }

  .nhero-rotating-wrap {
    position: relative;
    display: inline-block;
    min-width: 22ch;
    padding-right: 0.5ch;
    height: 1.15em;
    overflow: hidden;
    vertical-align: bottom;
  }

  .nhero-rw {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(65%);
    color: var(--primary);
    font-weight: 900;
    white-space: nowrap;
  }

  .nhero-rw--1 {
    animation: ${nheroWordRotate} 9s ease-in-out infinite;
    animation-delay: 0s;
  }

  .nhero-rw--2 {
    animation: ${nheroWordRotate} 9s ease-in-out infinite;
    animation-delay: 3s;
  }

  .nhero-rw--3 {
    animation: ${nheroWordRotate} 9s ease-in-out infinite;
    animation-delay: 6s;
  }

  .nhero-sub {
    max-width: 560px;
    font-size: 17px;
    line-height: 1.75;
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 32px;
  }

  /* ── chat-msg (GlabChatDemo 내부) ────────────────────────────────────── */
  .chat-msgs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .chat-msg {
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 1.55;
    max-width: 88%;
  }

  .chat-msg.user {
    background: var(--primary);
    color: #fff;
    align-self: flex-end;
    border-bottom-right-radius: 3px;
  }

  .chat-msg.ai {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text);
    align-self: flex-start;
    border-bottom-left-radius: 3px;
  }

  .chat-msg .label {
    font-size: 10px;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 2px;
    display: block;
  }

  /* ── glab-chat (GlabChatDemo 최상위) ─────────────────────────────────── */
  .glab-chat {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
    height: 368px;
    min-height: 368px;
    max-height: 368px;
    flex-shrink: 0;
    overflow: hidden;
  }

  .glab-chat__thread {
    min-width: 0;
  }

  .glab-chat-msgs {
    flex: 1 1 0;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-end;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .glab-chat-msgs::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .glab-chat--reduced .glab-chat__thread {
    flex: 1 1 0;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-start;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .glab-chat--reduced .glab-chat__thread::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .glab-msg-enter {
    animation: ${glabMsgIn} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .glab-ai-body {
    display: inline;
  }

  .glab-stream-cursor {
    display: inline-block;
    margin-left: 1px;
    font-weight: 300;
    color: var(--primary);
    animation: ${glabCursorPulse} 0.9s ease-in-out infinite;
    vertical-align: -0.05em;
  }

  .glab-chat__composer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-shrink: 0;
    gap: 10px;
    padding-top: 12px;
    border-top: 1px solid var(--border);
    min-width: 0;
  }

  .glab-chat__input {
    box-sizing: border-box;
    flex: 1;
    min-width: 0;
    min-height: 40px;
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    border: 1px solid var(--border-strong);
    background: var(--bg-card);
    overflow: hidden;
  }

  .glab-chat__input-line {
    font-size: 12px;
    line-height: 1.4;
    color: var(--text);
    max-height: calc(1.4em * 2);
    overflow: hidden;
    word-break: keep-all;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .glab-chat__caret {
    display: inline-block;
    width: 2px;
    height: 1.05em;
    margin-left: 1px;
    border-radius: 1px;
    vertical-align: -0.14em;
    background: var(--primary);
    animation: ${glabCaretBlink} 1.05s step-end infinite;
  }

  .glab-chat__send {
    flex-shrink: 0;
    box-sizing: border-box;
    height: 40px;
    padding: 0 16px;
    border: none;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 700;
    font-family: 'Outfit', 'Noto Sans KR', sans-serif;
    color: #fff;
    background: var(--primary);
    cursor: default;
    transition:
      transform 0.2s ease,
      filter 0.2s ease;
  }

  .glab-chat__send--active {
    animation: ${glabSendPulse} 0.55s ease both;
    filter: brightness(1.08);
  }

  /* ── Achievements: 연혁 / 보도자료 / 파트너 ─────────────────────────── */
  .ach-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-top: 48px;
    align-items: start;
  }

  .ach-col-title {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 19px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }

  .tl-track {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .tl-track::before {
    content: '';
    position: absolute;
    left: 9px;
    top: 14px;
    bottom: 14px;
    width: 2px;
    background: var(--border-strong);
    pointer-events: none;
  }

  .tl-node {
    display: grid;
    grid-template-columns: 20px 62px 1fr;
    gap: 0 10px;
    padding: 10px 0;
    cursor: default;
    transition: background 0.25s;
    border-radius: 8px;
    position: relative;
    z-index: 1;
  }

  .tl-node--active {
    background: var(--primary-bg);
  }

  .tl-rail {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: 1 / 2;
    padding-top: 4px;
  }

  .tl-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    background: var(--bg);
    flex-shrink: 0;
    transition: all 0.25s;
  }

  .tl-node--active .tl-dot {
    background: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-glow);
  }

  .tl-line {
    display: none;
  }

  .tl-date {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-dim);
    padding-top: 2px;
    white-space: nowrap;
    transition: color 0.25s;
  }

  .tl-node--active .tl-date {
    color: var(--primary);
  }

  .tl-body h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 2px;
    transition: color 0.25s;
  }

  .tl-node--active .tl-body h5 {
    color: var(--primary);
    font-weight: 600;
  }

  .tl-body p {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.45;
  }

  .ev-track {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .ev-group-block {
    display: grid;
    grid-template-columns: 62px 1fr;
    gap: 0 10px;
  }

  .ev-group-category {
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--text-dim);
    padding-top: 11px;
    white-space: nowrap;
  }

  .ev-group-items {
    display: flex;
    flex-direction: column;
  }

  .ev-row {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 0 10px;
    padding: 0;
    border-radius: 8px;
    transition: background 0.25s ease;
    position: relative;
    z-index: 1;
  }

  .ev-row--active {
    background: var(--primary-bg);
  }

  .ev-rail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    position: relative;
    z-index: 1;
  }

  .ev-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    background: var(--bg);
    flex-shrink: 0;
    transition: all 0.25s ease;
  }

  .ev-line {
    flex: 1;
    width: 2px;
    background: var(--border-strong);
    min-height: 100%;
    margin-top: 2px;
  }

  .ev-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 0;
  }

  .ev-item--link {
    text-decoration: none;
    cursor: pointer;
  }

  .ev-item--link:hover .ev-item-title {
    color: var(--primary);
  }

  .ev-item-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    line-height: 1.5;
    transition: color 0.25s ease;
  }

  .ev-row--active .ev-dot {
    background: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-glow);
  }

  .ev-row--active .ev-item-title {
    color: var(--primary);
    font-weight: 600;
  }

  .ev-group-divider {
    grid-column: 1 / -1;
    height: 1px;
    background: var(--border);
    margin: 4px 0 6px;
  }

  .ev-item-sub {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--text-dim);
    font-family: 'Outfit', monospace;
    line-height: 1.4;
  }

  .ev-item-arrow {
    font-size: 11px;
    color: var(--primary);
    opacity: 0.7;
  }

  .ach-partners {
    margin-top: 56px;
    padding-top: 40px;
    border-top: 1px solid var(--border);
  }

  .ach-partners-title {
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin: 0 0 20px;
    text-align: center;
  }

  .partner-marquee {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 18px 0;
    box-sizing: border-box;
    mask-image: linear-gradient(
      90deg,
      transparent,
      #000 2%,
      #000 98%,
      transparent
    );
  }

  .partner-marquee--static {
    mask-image: none;
  }

  .partner-marquee-track {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
    gap: 12px;
    animation: ${partnerMarqueeLoop} 48s linear infinite;
  }

  .partner-marquee-track:hover {
    animation-play-state: paused;
  }

  .partner-marquee-track--static {
    animation: none !important;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .partner-marquee-item {
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    min-height: 88px;
    padding: 16px 18px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 10px;
  }

  .partner-marquee-text {
    font-family: 'Outfit', 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-muted);
    white-space: nowrap;
  }

  .partner-marquee-logo {
    display: block;
    max-width: 100%;
    max-height: 48px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  /* ── 반응형 ─────────────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .ach-layout {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .nhero-step-panel {
      grid-template-columns: 1fr;
    }

    .nhero-canvas-wrap {
      min-height: 280px;
    }

    .partner-marquee-item {
      width: 140px;
      min-height: 72px;
    }
  }
`;

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`;

const revealUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glabCaretBlink = keyframes`
  0%,
  45% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
`;

const glabSendPulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(41, 86, 224, 0.28);
  }
  55% {
    transform: scale(1.04);
    box-shadow: 0 0 0 10px rgba(41, 86, 224, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(41, 86, 224, 0);
  }
`;

const glabMsgIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const glabCursorPulse = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
`;

export const S = {
  LandingWrapper: styled.div`
    --bg: #fafbfe;
    --bg-dark: #0b1023;
    --bg-card: #ffffff;
    --bg-card-alt: #f3f6fc;
    --text: #1a1d2b;
    --text-muted: #5c6178;
    --text-dim: #9196ab;
    --primary: #2956e0;
    --primary-light: #4a72f5;
    --primary-dark: #1d3fab;
    --primary-bg: rgba(41, 86, 224, 0.06);
    --primary-glow: rgba(41, 86, 224, 0.15);
    --accent: #00c9a7;
    --accent-bg: rgba(0, 201, 167, 0.08);
    --orange: #f5852b;
    --border: rgba(41, 86, 224, 0.08);
    --border-strong: rgba(41, 86, 224, 0.15);

    font-size: 16px;
    line-height: 1.5;
    background: var(--bg);
    color: var(--text);
    font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    height: 100dvh;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    overscroll-behavior-y: contain;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* ──── NEW HERO ──── */
    .nhero {
      position: relative;
      min-height: 100vh;
      padding: 88px 48px 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      isolation: isolate;
      background: linear-gradient(
        185deg,
        #fbfcff 0%,
        #eef3ff 42%,
        #f6f8fc 78%,
        #fafbfe 100%
      );
    }

    .nhero::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(41, 86, 224, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(41, 86, 224, 0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      mask-image: radial-gradient(
        ellipse 70% 62% at 50% 42%,
        black 15%,
        transparent 74%
      );
      z-index: -2;
      pointer-events: none;
    }

    .nhero-orb {
      position: absolute;
      border-radius: 999px;
      filter: blur(100px);
      opacity: 0.45;
      z-index: -1;
      animation: nheroOrbFloat 10s ease-in-out infinite;
      pointer-events: none;
    }

    .nhero-orb--1 {
      width: 380px;
      height: 380px;
      left: 8%;
      top: 14%;
      background: rgba(41, 86, 224, 0.1);
    }

    .nhero-orb--2 {
      width: 320px;
      height: 320px;
      right: 10%;
      top: 26%;
      background: rgba(0, 201, 167, 0.08);
      animation-delay: -3s;
    }

    @keyframes nheroOrbFloat {
      0%,
      100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(20px, -14px) scale(1.04);
      }
      66% {
        transform: translate(-14px, 12px) scale(0.97);
      }
    }

    .nhero-inner {
      max-width: 1680px;
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 0.5fr 1.5fr;
      gap: 0;
      align-items: stretch;
      transform: translateY(-8px);
    }

    .nhero-left {
      position: relative;
      z-index: 2;
      animation: ${fadeUp} 0.9s ease both;
    }

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
      animation: nheroWordRotate 9s ease-in-out infinite;
      animation-delay: 0s;
    }

    .nhero-rw--2 {
      animation: nheroWordRotate 9s ease-in-out infinite;
      animation-delay: 3s;
    }

    .nhero-rw--3 {
      animation: nheroWordRotate 9s ease-in-out infinite;
      animation-delay: 6s;
    }

    @keyframes nheroWordRotate {
      0% {
        opacity: 0;
        transform: translateY(65%);
      }
      7% {
        opacity: 1;
        transform: translateY(0);
      }
      28% {
        opacity: 1;
        transform: translateY(0);
      }
      35% {
        opacity: 0;
        transform: translateY(-55%);
      }
      100% {
        opacity: 0;
        transform: translateY(-55%);
      }
    }

    .nhero-sub {
      max-width: 560px;
      font-size: 17px;
      line-height: 1.75;
      color: var(--text-muted);
      font-weight: 300;
      margin-bottom: 32px;
    }

    .nhero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 36px;
    }

    .nhero-cta-primary,
    .nhero-cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      border-radius: 12px;
      padding: 14px 24px;
      font-size: 15px;
      font-weight: 700;
      font-family: 'Noto Sans KR', 'Outfit', sans-serif;
      cursor: pointer;
      transition: transform 0.25s, box-shadow 0.25s, background 0.25s,
        border-color 0.25s;
    }

    .nhero-cta-primary {
      color: #fff;
      background: var(--primary);
      border: none;
      box-shadow: 0 12px 36px rgba(41, 86, 224, 0.18);
    }

    .nhero-cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 40px rgba(41, 86, 224, 0.25);
      background: var(--primary-dark);
    }

    .nhero-cta-secondary {
      color: var(--primary);
      border: 1.5px solid var(--border-strong);
      background: transparent;
    }

    .nhero-cta-secondary:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
      background: var(--primary-bg);
    }

    .nhero-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .nhero-stat {
      min-width: 140px;
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid var(--border);
      backdrop-filter: blur(12px);
    }

    .nhero-stat-val {
      font-family: 'Outfit', monospace;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--primary);
      margin-bottom: 3px;
    }

    .nhero-stat-lbl {
      color: var(--text-dim);
      font-size: 11px;
      line-height: 1.45;
    }

    /* ──── visual panel ──── */
    .nhero-right {
      position: relative;
      animation: ${fadeUp} 1s ease 0.1s both;
      min-height: 100%;
      margin-left: -48px;
      padding-left: 8px;
    }

    .nhero-visual-shell {
      position: relative;
      border-radius: 24px;
      padding: 16px;
      height: 100%;
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
      min-height: 400px;
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

    /* ──── New hero responsive ──── */
    @media (max-width: 1080px) {
      .nhero-inner {
        grid-template-columns: 1fr;
      }

      .nhero-left {
        order: 1;
      }

      .nhero-right {
        order: 2;
        margin-left: 0;
        padding-left: 0;
      }

      .nhero-canvas-wrap {
        min-height: 300px;
      }
    }

    @media (max-width: 768px) {
      .nhero {
        padding: 90px 18px 28px;
      }

      .nhero-sub {
        font-size: 15px;
      }

      .nhero-rotating-wrap {
        min-width: 16ch;
      }

      .nhero-stats {
        gap: 10px;
      }

      .nhero-stat {
        flex: 1 1 calc(50% - 6px);
        min-width: 0;
      }

      .nhero-step-panel {
        grid-template-columns: 1fr;
      }

      .nhero-canvas-wrap {
        min-height: 240px;
      }

    }

    @media (max-width: 520px) {
      .nhero-headline {
        font-size: 32px;
      }

      .nhero-ctas {
        flex-direction: column;
      }

      .nhero-cta-primary,
      .nhero-cta-secondary {
        width: 100%;
        justify-content: center;
      }

      .nhero-stat {
        flex: 1 1 100%;
      }

    }

    /* ──── SECTIONS (공통) ──── */
    section {
      padding: 96px 48px;
    }

    .landing-intro {
      scroll-margin-top: 0;
      display: flex;
      flex-direction: column;
    }

    .nhero,
    .about-section,
    #projects,
    #achievements,
    #team {
      min-height: 100vh;
      min-height: 100dvh;
      scroll-margin-top: 72px;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    #contact {
      scroll-margin-top: 72px;
      scroll-snap-align: start;
    }

    .landing-footer {
      scroll-snap-align: start;
    }

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

    .section-desc {
      color: var(--text-muted);
      font-size: 16px;
      line-height: 1.75;
      max-width: 520px;
      margin-top: 16px;
      font-weight: 400;
    }

    /* ──── ABOUT ──── */
    .about-section {
      background: linear-gradient(
        175deg,
        #f2f6ff 0%,
        #ecf5f3 48%,
        #f4f6fb 100%
      );
    }

    #projects {
      background: linear-gradient(
        160deg,
        #f3f6fc 0%,
        rgba(0, 201, 167, 0.07) 38%,
        rgba(245, 133, 43, 0.06) 72%,
        #f8f6ff 100%
      );
    }

    #achievements {
      background: linear-gradient(
        180deg,
        #fafbff 0%,
        rgba(41, 86, 224, 0.06) 55%,
        #f5f7fc 100%
      );
    }

    #team {
      background: linear-gradient(
        172deg,
        #f5f8fc 0%,
        rgba(0, 201, 167, 0.06) 50%,
        #f0f4fa 100%
      );
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      margin-top: 48px;
      align-items: start;
    }

    .about-text h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 10px;
      margin-top: 24px;
      color: var(--text);
    }

    .about-text h3:first-of-type {
      margin-top: 0;
    }

    .about-text p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.75;
    }

    .engine-steps {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .engine-step {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 24px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .step-num {
      font-family: 'Outfit', sans-serif;
      font-size: 10px;
      font-weight: 700;
      color: #fff;
      background: var(--primary);
      padding: 3px 8px;
      border-radius: 4px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .engine-step h4 {
      font-family: 'Outfit', sans-serif;
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 3px;
    }

    .engine-step p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    /* ──── GLAB SERVICE ──── */
    .service-dual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 48px;
    }

    .service-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 32px;
    }

    .projects-engine-block {
      margin-top: 64px;
      padding-top: 8px;
      background: none;
    }

    .service-card.wide {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: flex-start;
      background: linear-gradient(
        135deg,
        var(--bg-card) 0%,
        rgba(41, 86, 224, 0.02) 100%
      );
    }

    .service-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 21px;
      margin-bottom: 19px;
    }

    .service-icon.blue {
      background: var(--primary-bg);
      border: 1px solid var(--border-strong);
    }

    .service-icon.green {
      background: var(--accent-bg);
      border: 1px solid rgba(0, 201, 167, 0.15);
    }

    .service-card h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .service-card p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.7;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 16px;
    }

    .tag {
      padding: 4px 11px;
      border-radius: 100px;
      font-size: 11px;
      border: 1px solid var(--border-strong);
      color: var(--text-muted);
      font-weight: 500;
    }

    .demo-box {
      background: var(--bg-card-alt);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
    }

    .demo-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .demo-title {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: var(--primary);
    }

    .demo-live {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 100px;
      background: rgba(0, 201, 167, 0.1);
      color: var(--accent);
      font-weight: 600;
    }

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

    .glab-chat-demo {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .glab-chat-msgs {
      height: 300px;
      min-height: 300px;
      max-height: 300px;
      overflow-y: auto;
      flex-shrink: 0;
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

    .glab-chat-composer {
      display: flex;
      align-items: stretch;
      gap: 8px;
      padding-top: 4px;
      border-top: 1px solid var(--border);
    }

    .glab-chat-input-wrap {
      flex: 1;
      min-width: 0;
    }

    .glab-chat-input-fake {
      min-height: 40px;
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid var(--border-strong);
      background: var(--bg-card);
      font-size: 12px;
      line-height: 1.45;
      color: var(--text);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0;
      word-break: keep-all;
    }

    .glab-chat-caret {
      display: inline-block;
      width: 2px;
      height: 14px;
      margin-left: 1px;
      background: var(--primary);
      border-radius: 1px;
      animation: ${glabCaretBlink} 1.05s step-end infinite;
      flex-shrink: 0;
    }

    .glab-chat-send {
      flex-shrink: 0;
      align-self: center;
      padding: 0 14px;
      height: 36px;
      border: none;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 700;
      font-family: 'Outfit', 'Noto Sans KR', sans-serif;
      color: #fff;
      background: var(--primary);
      cursor: default;
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .glab-chat-send--active {
      animation: ${glabSendPulse} 0.55s ease both;
      filter: brightness(1.08);
    }

    /* ──── B2B ──── */
    .b2b-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 40px;
    }

    .b2b-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
    }

    .b2b-status {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 3px;
      display: inline-block;
      margin-bottom: 12px;
      font-family: 'Outfit', sans-serif;
      letter-spacing: 0.03em;
    }

    .b2b-status.done {
      background: rgba(0, 201, 167, 0.1);
      color: #00a88a;
    }

    .b2b-status.wip {
      background: rgba(41, 86, 224, 0.08);
      color: var(--primary);
    }

    .b2b-status.plan {
      background: rgba(245, 133, 43, 0.08);
      color: var(--orange);
    }

    .b2b-card h4 {
      font-family: 'Outfit', sans-serif;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .b2b-card p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* ──── PROJECTS ──── */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 48px;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
    }

    .project-thumb {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .project-thumb .big-num {
      font-family: 'Outfit', sans-serif;
      font-size: 64px;
      font-weight: 800;
      opacity: 0.04;
      position: absolute;
    }

    .project-thumb .icon {
      font-size: 32px;
      position: relative;
      z-index: 1;
    }

    .project-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 24px;
    }

    .project-cat {
      font-size: 10px;
      font-weight: 700;
      color: var(--primary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-family: 'Outfit', sans-serif;
    }

    .project-card h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 6px;
      letter-spacing: -0.01em;
    }

    .project-card p {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .project-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: auto;
      padding-top: 12px;
      border-top: 1px solid var(--border);
      font-size: 11px;
      color: var(--text-dim);
    }

    .projects-glov {
      margin-top: 64px;
    }

    .projects-glov-desc {
      max-width: 560px;
    }

    /* ──── ACHIEVEMENTS ──── */
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

    /* ── vertical timeline ── */
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

    /* ── evidence track (라인 단위 hover) ── */
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

    /* rail: tl-rail과 동일 구조 */
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

    /* 카테고리 레이블 */
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

    .ev-row--active ~ .ev-row .ev-line {
      background: var(--border-strong);
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

    /* ──── TEAM ──── */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 48px;
    }

    .team-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
    }

    .team-role {
      font-size: 10px;
      font-weight: 700;
      color: var(--primary);
      background: var(--primary-bg);
      padding: 2px 8px;
      border-radius: 3px;
      display: inline-block;
      margin-bottom: 10px;
      font-family: 'Outfit', sans-serif;
      letter-spacing: 0.03em;
    }

    .team-card h4 {
      font-family: 'Outfit', sans-serif;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .team-card .affil {
      font-size: 12px;
      color: var(--primary);
      font-weight: 500;
      margin-bottom: 8px;
    }

    .team-card p {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    /* ──── CTA ──── */
    .cta-section {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(
        165deg,
        #0b1023 0%,
        #121a3a 38%,
        #0d2538 72%,
        #0b1023 100%
      );
      color: #fff;
    }

    .cta-section .section-label {
      color: var(--accent);
    }

    .cta-section .section-title {
      color: #fff;
      text-align: center;
      max-width: 550px;
    }

    .cta-section .section-desc {
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      margin-top: 32px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .btn-white {
      padding: 14px 32px;
      border-radius: 10px;
      background: #fff;
      color: var(--primary);
      font-weight: 600;
      font-size: 15px;
      border: none;
      cursor: pointer;
      transition: all 0.25s;
      font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    }

    .btn-white:hover {
      box-shadow: 0 6px 30px rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
    }

    .btn-ghost {
      padding: 14px 32px;
      border-radius: 10px;
      background: transparent;
      color: #fff;
      font-weight: 500;
      font-size: 15px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      cursor: pointer;
      transition: all 0.25s;
      font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    }

    .btn-ghost:hover {
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.04);
    }

    /* ──── FOOTER ──── */
    .landing-footer {
      padding: 40px 48px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--text-dim);
      flex-wrap: wrap;
      gap: 8px;
      background: linear-gradient(
        180deg,
        #eef1f8 0%,
        #e4e9f4 100%
      );
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a:hover {
      color: var(--text-muted);
    }

    /* ──── REVEAL ANIMATION ──── */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
    }

    .reveal.visible {
      animation: ${revealUp} 0.7s ease both;
    }

    .reveal.visible:nth-child(2) {
      animation-delay: 0.08s;
    }

    .reveal.visible:nth-child(3) {
      animation-delay: 0.16s;
    }

    .reveal.visible:nth-child(4) {
      animation-delay: 0.24s;
    }

    /* ──── RESPONSIVE ──── */
    @media (max-width: 900px) {
      scroll-snap-type: none;

      section,
      .hero {
        padding-left: max(19px, env(safe-area-inset-left, 0px));
        padding-right: max(19px, env(safe-area-inset-right, 0px));
      }

      /* 한 화면(대담 배너만) — 아래 .hero와 묶인 min-height:auto에 덮이지 않도록 분리 */
      .legacy-hero-banner {
        flex-shrink: 0;
        box-sizing: border-box;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        min-height: 100dvh;
        min-height: 100svh;
        padding: max(88px, calc(env(safe-area-inset-top, 0px) + 52px)) 19px 28px;
        padding-bottom: max(28px, env(safe-area-inset-bottom, 0px));
        background-position: center 25%;
      }

      .legacy-hero-title {
        font-size: clamp(26px, 8.2vw, 40px);
        line-height: 1.18;
      }

      .legacy-hero-subtitle {
        font-size: clamp(17px, 5.5vw, 28px);
        line-height: 1.22;
        margin-top: 8px;
      }

      .legacy-hero-copy {
        padding: 0 4px;
      }

      .hero {
        padding-top: max(80px, calc(env(safe-area-inset-top, 0px) + 48px));
        padding-bottom: 36px;
        min-height: auto;
      }

      .hero h1 {
        font-size: clamp(30px, 8.5vw, 44px);
        line-height: 1.12;
      }

      .hero-sub {
        font-size: 15px;
        margin-top: 18px;
      }

      .hero-actions {
        margin-top: 28px;
      }

      .metrics {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 32px;
      }

      .hero,
      .about-section,
      #projects,
      #achievements,
      #team {
        min-height: auto;
        scroll-snap-align: none;
        scroll-snap-stop: normal;
      }

      #contact {
        scroll-snap-align: none;
      }

      .metric {
        border-right: none;
        border-bottom: 1px solid var(--border);
      }

      .about-grid,
      .service-dual,
      .ach-layout {
        grid-template-columns: 1fr;
      }

      .service-card.wide {
        grid-template-columns: 1fr;
      }

      .projects-grid,
      .b2b-cards {
        grid-template-columns: 1fr;
      }

      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .landing-footer {
        flex-direction: column;
        text-align: center;
        padding: 40px 19px;
      }
    }
  `,
};

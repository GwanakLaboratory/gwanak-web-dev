import styled from '@emotion/styled';

/** 랜딩 네비와 동일한 토큰·스타일 (고정 nav) */
export const NavShell = styled.div`
  --bg: #fafbfe;
  --text: #1a1d2b;
  --text-muted: #5c6178;
  --primary: #2956e0;
  --primary-dark: #1d3fab;
  --primary-bg: rgba(41, 86, 224, 0.06);
  --primary-glow: rgba(41, 86, 224, 0.15);
  --border: rgba(41, 86, 224, 0.08);

  font-family: 'Noto Sans KR', 'Outfit', sans-serif;
  -webkit-font-smoothing: antialiased;

  a {
    color: inherit;
    text-decoration: none;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 20px;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    column-gap: 24px;
    align-items: center;
    background: rgba(250, 251, 254, 0.96);
    border-bottom: 1px solid var(--border);
    transition: all 0.3s;
  }

  .nav-logo {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 21px;
    color: var(--primary);
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .nav-logo span {
    background: var(--primary);
    color: #fff;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  .nav-logo img {
    height: 60px;
    width: auto;
    display: block;
  }

  .nav-links {
    display: flex;
    gap: 35px;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
  }

  .nav-links a {
    position: relative;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--primary);
  }

  .nav-links a.active {
    color: var(--primary);
    font-weight: 600;
  }

  .nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary);
    border-radius: 2px;
    opacity: 0.95;
  }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 22px;
    border-radius: 8px;
    background: var(--primary);
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border: none;
    cursor: pointer;
    transition: all 0.25s;
    font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    text-decoration: none;
  }

  .nav-cta:hover {
    background: var(--primary-dark);
    box-shadow: 0 4px 20px var(--primary-glow);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .nav-auth-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    min-height: 34px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    cursor: pointer;
    transition:
      color 0.2s,
      background 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    text-decoration: none;
    white-space: nowrap;
  }

  .nav-auth-btn.nav-auth-outline {
    border-color: rgba(26, 29, 43, 0.14);
    background: #fff;
    color: var(--text);
  }

  .nav-auth-btn.nav-auth-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  .nav-auth-btn.nav-auth-soft {
    border: none;
    background: var(--primary-bg);
    color: var(--primary);
  }

  .nav-auth-btn.nav-auth-soft:hover {
    background: rgba(41, 86, 224, 0.12);
  }

  .nav-auth-btn.nav-lang-btn {
    border-color: rgba(41, 86, 224, 0.18);
    background: #fff;
    color: var(--primary);
    min-width: 48px;
  }

  .nav-auth-btn.nav-lang-btn:hover {
    border-color: var(--primary);
    background: var(--primary-bg);
  }

  @media (max-width: 1180px) and (min-width: 901px) {
    nav {
      padding: 14px 20px;
      padding-left: max(20px, env(safe-area-inset-left, 0px));
      padding-right: max(20px, env(safe-area-inset-right, 0px));
      column-gap: 14px;
    }

    .nav-logo {
      font-size: 18px;
      gap: 4px;
    }

    .nav-logo span {
      font-size: 9px;
      padding: 2px 5px;
    }

    .nav-logo img {
      height: 30px;
    }

    .nav-links {
      gap: 18px;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 2px 6px;
      mask-image: linear-gradient(
        90deg,
        transparent,
        #000 12px,
        #000 calc(100% - 12px),
        transparent
      );
    }

    .nav-links::-webkit-scrollbar {
      display: none;
    }

    .nav-links a {
      flex-shrink: 0;
      white-space: nowrap;
      font-size: 12px;
    }

    .nav-actions {
      gap: 6px;
    }

    .nav-cta {
      padding: 8px 14px;
      font-size: 11px;
    }

    .nav-auth-btn {
      padding: 0 10px;
      min-height: 32px;
      font-size: 11px;
    }
  }

  @media (max-width: 900px) {
    nav {
      padding: 12px 14px;
      padding-left: max(14px, env(safe-area-inset-left, 0px));
      padding-right: max(14px, env(safe-area-inset-right, 0px));
      padding-top: max(12px, env(safe-area-inset-top, 0px));
      column-gap: 10px;
    }

    .nav-logo {
      font-size: 17px;
      flex-shrink: 0;
    }

    .nav-logo img {
      height: 26px;
    }

    .nav-links {
      flex: 1;
      min-width: 0;
      gap: 0;
      overflow: visible;
      justify-content: center;
      padding: 4px 2px 10px;
      margin-bottom: -6px;
    }

    .nav-links a:not(.active) {
      display: none;
    }

    &.landing-nav--auth .nav-links {
      gap: 0 10px;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      justify-content: flex-start;
      mask-image: linear-gradient(
        90deg,
        transparent,
        #000 12px,
        #000 calc(100% - 12px),
        transparent
      );
    }

    &.landing-nav--auth .nav-links::-webkit-scrollbar {
      display: none;
    }

    &.landing-nav--auth .nav-links a:not(.active) {
      display: inline-flex;
    }

    .nav-links a {
      flex-shrink: 0;
      font-size: 12px;
      white-space: nowrap;
    }

    .nav-links a.active::after {
      bottom: -4px;
    }

    .nav-actions {
      gap: 5px;
    }

    .nav-cta {
      display: none;
    }

    .nav-auth-btn {
      padding: 0 8px;
      min-height: 30px;
      font-size: 11px;
    }

    &.landing-nav--auth .nav-cta {
      display: none;
    }
  }
`;

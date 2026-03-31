import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const S = {
  Bar: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: max(6px, env(safe-area-inset-top, 0px))
      max(10px, env(safe-area-inset-right, 0px)) 0
      max(10px, env(safe-area-inset-left, 0px));
    pointer-events: none;

    & > * {
      pointer-events: auto;
    }
  `,

  Hamburger: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    padding: 10px;
    border: none;
    border-radius: 12px;
    background: rgba(250, 251, 254, 0.92);
    box-shadow:
      0 1px 0 rgba(41, 86, 224, 0.06),
      0 4px 16px rgba(26, 29, 43, 0.08);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    span {
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 1px;
      background: #1a1d2b;
    }
  `,

  Backdrop: styled.div`
    position: fixed;
    inset: 0;
    z-index: 210;
    background: rgba(15, 18, 30, 0.45);
    backdrop-filter: blur(2px);
    cursor: pointer;
  `,

  Panel: styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 220;
    width: min(100vw - 48px, 300px);
    max-width: 100vw;
    height: 100%;
    height: 100dvh;
    padding: max(12px, env(safe-area-inset-top, 0px))
      max(12px, env(safe-area-inset-right, 0px))
      max(16px, env(safe-area-inset-bottom, 0px))
      max(16px, env(safe-area-inset-left, 0px));
    background: #fafbfe;
    box-shadow: -8px 0 32px rgba(26, 29, 43, 0.12);
    display: flex;
    flex-direction: column;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    font-family: 'Noto Sans KR', 'Outfit', sans-serif;
  `,

  PanelHeader: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(41, 86, 224, 0.1);

    a {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 17px;
      color: #2956e0;
      letter-spacing: -0.02em;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }

    span {
      display: inline-block;
      margin-left: 6px;
      background: #2956e0;
      color: #fff;
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 600;
      letter-spacing: 0.04em;
      vertical-align: middle;
    }

    a img {
      height: 22px;
      width: auto;
      display: block;
    }
  `,

  CloseBtn: styled.button`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: rgba(41, 86, 224, 0.08);
    color: #1a1d2b;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  `,

  NavList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  NavLink: styled.a`
    display: block;
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #5c6178;
    text-decoration: none;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover {
      background: rgba(41, 86, 224, 0.06);
      color: #2956e0;
    }
  `,

  NavLinkRouter: styled(Link)`
    display: block;
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #5c6178;
    text-decoration: none;
    transition:
      background 0.2s,
      color 0.2s;

    &:hover {
      background: rgba(41, 86, 224, 0.06);
      color: #2956e0;
    }
  `,

  NavButton: styled.button`
    display: block;
    width: 100%;
    text-align: left;
    padding: 12px 14px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #5c6178;
    background: transparent;
    cursor: pointer;
    font-family: inherit;

    &:hover {
      background: rgba(41, 86, 224, 0.06);
      color: #2956e0;
    }
  `,
};

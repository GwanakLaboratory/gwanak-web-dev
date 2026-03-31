import styled from '@emotion/styled';

export const S = {
  Shell: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(
      185deg,
      #fbfcff 0%,
      #eef3ff 42%,
      #f6f8fc 78%,
      #fafbfe 100%
    );
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: fixed;
      top: -20%;
      right: -15%;
      width: 55vw;
      height: 55vw;
      z-index: 0;
      pointer-events: none;
      background: radial-gradient(
        circle,
        rgba(41, 86, 224, 0.06) 0%,
        transparent 65%
      );
    }
  `,
  Main: styled.main`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 24px 64px;
    padding-left: max(24px, env(safe-area-inset-left, 0px));
    padding-right: max(24px, env(safe-area-inset-right, 0px));
    padding-top: max(96px, calc(env(safe-area-inset-top, 0px) + 72px));

    @media (max-width: 900px) {
      padding-top: max(88px, calc(env(safe-area-inset-top, 0px) + 56px));
    }
  `,
  /** 인증·포트폴리오 등 전체 폭 콘텐츠 (BasicLayout) */
  WideContent: styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    flex: 1;
    min-height: 0;
    padding-top: max(96px, calc(env(safe-area-inset-top, 0px) + 72px));

    @media (max-width: 900px) {
      padding-top: max(88px, calc(env(safe-area-inset-top, 0px) + 56px));
    }
  `,
};

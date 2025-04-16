import styled from '@emotion/styled';
import BackgroundAnalyzeJPG from '../../../lib/assets/images/bg_analyze.jpg';
export const S = {
  ServicePageContainer: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  DescriptionContainer: styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  `,
  DescriptionTitleText: styled.span`
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
  `,
  DescriptionSubtitleText: styled.span`
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    line-height: 120%;
  `,
  DescriptionText: styled.span`
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 3.2rem;
    word-break: auto-phrase;
    text-align: center;
  `,
  ServicePageTextBox: styled.div`
    width: 100%;
    height: 800px;

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${BackgroundAnalyzeJPG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    text-align: center;
  `,
};

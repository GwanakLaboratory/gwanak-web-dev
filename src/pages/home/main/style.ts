import styled from '@emotion/styled';
import MainPNG from '../../../lib/assets/images/bg_blue_gradient.png';
import ReportJPG from '../../../lib/assets/images/bg_chart_report.jpg';
import { BREAKPOINT, COLOR } from '../../../lib/constants';

export const S = {
  MainPageContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #f9f9f9;
  `,
  MainPageLendingBox: styled.div`
    width: 100%;
    height: 100vh;

    background-image: url(${MainPNG});
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
  `,
  JumboText: styled.span`
    color: ${COLOR.White};
    font-size: 6rem;
    font-weight: 800;
    line-height: 1.2;
  `,
  JumboSubText: styled.span`
    color: ${COLOR.White};
    font-size: 5rem;
    font-weight: 400;
    line-height: 1.2;
  `,
  MainCardContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    justify-items: center;
    align-items: center;

    margin: 0 auto;
    padding: 4rem 2rem;
    gap: 32px;

    max-width: 1400px;
    min-height: 800px;

    @media (max-width: ${BREAKPOINT.largeDesktop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${BREAKPOINT.tablet}) {
      grid-template-columns: 1fr;
    }
  `,
  MainPageFullBox: styled.div`
    position: relative;

    width: 100%;
    height: 100vh;

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ReportJPG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;
  `,
  TextWrapper: styled.div`
    width: 100%;
    position: absolute;
    left: 5%;
    top: 50%;

    display: flex;
    flex-direction: column;
    transform: translateY(-50%);

    color: white;
    font-size: 2rem;

    @media (max-width: ${BREAKPOINT.tablet}) {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  `,
};

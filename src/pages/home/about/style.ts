import styled from '@emotion/styled';
import BackgroundOfficeBuildingJPG from '../../../lib/assets/images/bg_about_office_building.jpg';
import { COLOR } from '../../../lib/constants';
export const S = {
  AboutPageContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  AboutPageTextBox: styled.div`
    width: 100%;
    height: 800px;

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${BackgroundOfficeBuildingJPG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  AboutTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 70px;
    padding-bottom: 70px;
    word-break: auto-phrase;
  `,
  AboutPageTitleText: styled.span`
    font-size: 3rem;
    color: ${COLOR.White};
    font-weight: 700;
  ,`,
  AboutPageDescriptionText: styled.span`
    font-size: 2.2rem;
    color: ${COLOR.White};
    font-weight: 300;
    line-height: 3.5rem;
    word-break: auto-phrase;
  `,
  AboutCellSpanStyle: styled.span`
    display: inline-block;
    min-width: 120px;
  `,
};

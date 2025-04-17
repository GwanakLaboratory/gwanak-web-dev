import styled from '@emotion/styled';
import { BREAKPOINT } from '../../../lib/constants';

export const S = {
  TechCardContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 60px;
  `,
  TechCardHeadContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    @media (max-width: ${BREAKPOINT.tablet}) {
      flex-direction: column-reverse;
    }
  `,
  TechCardTailContainer: styled.div`
    padding-left: 30%;
    box-sizing: border-box;
    width: 100%;

    line-height: 180%;

    @media (max-width: ${BREAKPOINT.tablet}) {
      padding: 0px;
      text-align: center;
    }
  `,
  TechCardTitleText: styled.span`
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
  `,
  TechCardDescriptionText: styled.span`
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 160%;
  `,
  TechCardTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
  `,
  TechCardImg: styled.img`
    width: 20%;
    maxwidth: 320px;
    minwidth: 150px;
  `,
  TechCardHorizontalBox: styled.div`
    width: 120px;
    border-bottom: 3px solid black;
    @media (max-width: 767px) {
      width: 100%;
    }
  `,
};

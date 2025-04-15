import styled from '@emotion/styled';
import { BREAKPOINT } from '../../../lib/constants';

export const S = {
  MainCardContainer: styled.div`
    width: 100%;
    height: auto;
    text-align: center;

    gap: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    @media (max-width: ${BREAKPOINT.tablet}) {
      padding: 0;
    }
  `,

  CardImg: styled.img`
    width: 30%;
    max-width: 320px;
    min-width: 150px;
    max-height: 200px;
  `,

  CardTitleText: styled.span`
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.4;
    white-space: pre-line;
  `,
  CardSubTitleText: styled.span`
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.4;
    white-space: pre-line;
  `,
};

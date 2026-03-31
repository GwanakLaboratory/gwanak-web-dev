import styled from '@emotion/styled';
import MainPNG from '../../../lib/assets/images/bg_blue_gradient.png';
import { BREAKPOINT, COLOR } from '../../../lib/constants';

export const S = {
  DescriptionContainer: styled.div`
    width: 100%;
    height: 300px;

    background-image: url(${MainPNG});
    background-position: center bottom;
    background-size: cover;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: ${BREAKPOINT.tablet}) {
      flex-direction: column;
      height: 150px;
      justify-content: end;
      padding-bottom: 20px;
    }
  `,
  DescriptionBoxTextWrapper: styled.div`
    width: 100%;
    color: ${COLOR.White};
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  SubtitleTextWrapper: styled.div`
    display: flex;
    gap: 2px;
  `,
  DescriptionBoxTitleText: styled.span`
    font-size: 3.5rem;
    font-weight: 800;
  `,
};

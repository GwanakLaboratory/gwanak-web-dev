import styled from '@emotion/styled';
import { BREAKPOINT } from '../../../lib/constants';

export const S = {
  OuterStyle: styled.div`
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  `,
  InnerStyle: styled.div`
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    // @media (max-width: ${BREAKPOINT.tablet}) {
    //   min-height: calc(100vh - 300px);
    // }
  `,
};

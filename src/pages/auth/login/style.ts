import styled from '@emotion/styled';
import { BREAKPOINT, COLOR } from '../../../lib/constants';

export const S = {
  LoginContainer: styled.form`
    width: 100%;
    padding: 40px 28%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    @media (max-width: ${BREAKPOINT.tablet}) {
      padding: 20px 0;
    }
  `,
  LoginTitleWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
  `,
  LoginTitleText: styled.span`
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
  `,
  LoginInputContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  LoginButton: styled.button<{ isFilled: boolean }>`
    width: 100%;
    background-color: ${(props) =>
      props.isFilled ? COLOR.Grey600 : COLOR.Grey100};
    color: ${(props) => (props.isFilled ? COLOR.White : COLOR.Grey500)};
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    padding: 20px 0px;
    border: none;
  `,
  LoginSubText: styled.span`
    word-break: keep-all;
    font-size: 2rem;
    font-weight: 700;

    text-align: center;
    a {
      color: #000;
    }
  `,
};

import styled from '@emotion/styled';
import { COLOR } from '../../../lib/constants';

export const S = {
  PortfolioResultContainer: styled.div`
    width: 100%;
  `,
  PropensityTitleText: styled.div`
    font-size: 3.5rem;
    font-weight: 700;
    margin-top: 100px;
    margin-bottom: 100px;
  `,
  PortfolioDescription: styled.div`
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 100px;
    text-align: center;
  `,
  FormContainer: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;
  `,
  ResultConatiner: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-bottom: 50px;
  `,
  ResultButton: styled.button<{ color?: 'primary' | 'secondary' }>`
    cursor: pointer;
    height: 60px;
    padding: 18px 20px 17px;
    flex: 1;
    max-width: 280px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 2rem;
    background-color: ${(props) =>
      props.color === 'primary' ? '#0465D7' : '#474747'};
  `,
  PortfolioDetailContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
  `,
  InputDetailText: styled.div`
    font-size: 2rem;
    color: #303030;
  `,
  InputStyle: styled.input`
    padding: 5px 10px;
  `,
  StockLinkText: styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: ${COLOR.Black};
  `,
};

import styled from '@emotion/styled';

export const S = {
  PortfolioContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  PropensityContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    margin-bottom: 100px;
    border-bottom: 1px solid #d2d2d2;
  `,
  PropensityTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  PropensityText: styled.span`
    font-size: 3rem;
    font-weight: 600;
    line-height: 120%;
  `,
  AnalysisButton: styled.button`
    background-color: #0465d7;
    border-radius: 5px;
    width: 200px;
    height: 60px;
    color: #fff;
    border: 0px;
    cursor: pointer;
  `,
};

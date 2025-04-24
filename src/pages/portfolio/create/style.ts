import styled from '@emotion/styled';

export const S = {
  CreatePortfolioPageContainer: styled.form`
    width: 100%;
  `,
  PropensityTitleText: styled.div`
    font-size: 3.5rem;
    font-weight: 600;
    margin-top: 100px;
    margin-bottom: 100px;
  `,
  ModelContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  TitleText: styled.div`
    font-size: 2.4rem;
    font-weight: 700;
    color: #303030;
    margin-bottom: 30px;
  `,
  GridContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    margin-bottom: 30px;
  `,
  TableContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 50px;
    margin-bottom: 50px;
  `,

  CustomTableStyle: styled.table`
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
  `,

  FormContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 50px;
  `,

  THead: styled.thead``,

  TBody: styled.tbody``,

  Tr: styled.tr``,

  Td: styled.td<{ disabled?: boolean }>`
    color: ${(props) => (props.disabled ? '#BCBCBC' : '#303030')};
    font-size: 1.6rem;
    padding: 10px;
    vertical-align: middle;
  `,
  ResultButton: styled.button<{ color?: 'primary' | 'secondary' }>`
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
    cursor: pointer;
  `,
};

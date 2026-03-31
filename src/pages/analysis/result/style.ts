import styled from '@emotion/styled';

export const S = {
  ResultContainer: styled.div`
    padding-top: 8%;
    padding-bottom: 12%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #474747;
  `,
  ResultTitleText: styled.p`
    font-size: 4rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
  `,
  ResultImage: styled.img`
    height: 450px;
    margin-bottom: 54px;
  `,
  ResultDetail: styled.p`
    color: #676767;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 84px;
    line-height: 160%;
  `,
  FormContainer: styled.form`
    width: 100%;
  `,
  CheckboxContainer: styled.div`
    width: 100%;
    margin-bottom: 31px;
  `,
  ResultComment: styled.p`
    font-size: 3rem;
    color: #676767;
    width: 100%;
  `,
  ResultTable: styled.div`
    background-color: #f3f3f3;
    padding: 60px 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 45px;
  `,
  ResultColumn: styled.div`
    display: flex;
  `,
  ResultLabel: styled.p`
    font-size: 3rem;
    font-weight: 700;
    flex-basis: 300px;
    flex-shrink: 0;
  `,
  ResultValue: styled.p`
    font-size: 3rem;
    line-height: 120%;
  `,
  ResultButtons: styled.div`
    margin-top: 114px;
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
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
  `,
};

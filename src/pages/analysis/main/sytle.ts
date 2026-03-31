import styled from '@emotion/styled';

export const S = {
  AnalysisPageForm: styled.form`
    width: 100%;
    padding-top: 8%;
    padding-bottom: 12%;

    color: #474747;
  `,
  FormTitleText: styled.span`
    font-size: 3rem;
    line-height: 120%;
    font-weight: 700;
  `,
  FormContainer: styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
  `,
  QuestionBox: styled.div`
    margin-bottom: 100px;
  `,
  QuestionTitleText: styled.p`
    font-size: 1.5rem;
    color: #474747;
  `,
  QuestionSubTitleText: styled.p`
    font-size: 1.3rem;
    color: #a7a7a7;
    margin-top: 9px;
  `,
  QuestionContent: styled.div`
    margin-top: 35px;
    margin-left: 13px;
  `,
  QuestionInputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 16px;
  `,
  AnalysisButton: styled.button`
    width: 400px;
    height: 60px;
    outline: 0;
    border: 0;
    padding: 18px 12px 17px;
    background-color: #474747;
    color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;

    @media (max-width: 480px) {
      width: 100%;
      height: auto;
    }
  `,
};

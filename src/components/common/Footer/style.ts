import styled from '@emotion/styled';

export const S = {
  FooterContainer: styled.footer`
    width: 100%;
    height: 350px;
    background: #f2f2f2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media (max-width: 767px) {
      height: 300px;
      padding: 0px 5%;
    }
  `,
  LogoContainer: styled.div`
    width: 150px;
    @media (max-width: 767px) {
      width: 100px;
    }
  `,
  FooterHeaderRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px 0px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      gap: 8px;
    }
  `,
  TermsPrivacyInstaWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    p {
      padding-right: 50px;
    }
  `,
  FooterDescriptionWrapper: styled.div`
    color: #aaaaaa;
    p {
      margin: 4px;
    }
  `,
  CellSpanStyle: styled.span`
    display: inline-block;
    min-width: 120px;
  `,
  DefaultStyle: styled.p`
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  `,
};

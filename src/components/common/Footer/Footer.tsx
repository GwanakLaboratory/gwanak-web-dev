import { S } from './style';
import LogoPNG from '../../../lib/assets/images/logo_transparent.png';

const Footer = () => {
  return (
    <S.FooterContainer className="layout-padding">
      <S.FooterHeaderRow>
        <S.LogoContainer>
          <img src={LogoPNG} alt="logo" style={{ width: '100%' }} />
        </S.LogoContainer>
      </S.FooterHeaderRow>
      <S.FooterDescriptionWrapper>
        <S.DefaultStyle>주식회사 관악연구소</S.DefaultStyle>
        <S.DefaultStyle>서울시 광진구 구의강변로 46, 401호</S.DefaultStyle>
        <br />
        <S.DefaultStyle>
          <S.CellSpanStyle>대표이사</S.CellSpanStyle>|&nbsp;&nbsp;승 현 찬
        </S.DefaultStyle>
        <S.DefaultStyle>
          <S.CellSpanStyle>사업자등록번호</S.CellSpanStyle>
          |&nbsp;&nbsp;728-87-02830
        </S.DefaultStyle>
        <S.DefaultStyle>
          <S.CellSpanStyle>문의</S.CellSpanStyle>
          |&nbsp;&nbsp;support@gwanaklab.co.kr
        </S.DefaultStyle>
        <S.DefaultStyle>
          <S.CellSpanStyle>연락처</S.CellSpanStyle>|&nbsp;&nbsp;070-4101-6132
        </S.DefaultStyle>
        <br />
        <S.DefaultStyle>
          Copyright 2023. Gwanak Lab Co., Ltd. all rights reserved.
        </S.DefaultStyle>
      </S.FooterDescriptionWrapper>
    </S.FooterContainer>
  );
};
export default Footer;

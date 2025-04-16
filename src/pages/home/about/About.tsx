import DescriptionBox from '../../../components/feature/DescriptionBox';
import { S } from './style';

const AboutPage = () => {
  return (
    <S.AboutPageContainer>
      <DescriptionBox title="관악연구소" subtitle={['회사소개']} />
      <S.AboutPageTextBox className="layout-padding">
        <S.AboutTextWrapper>
          <S.AboutPageTitleText>주식회사 관악연구소</S.AboutPageTitleText>
          <S.AboutPageDescriptionText>
            관악연구소는 혁신적인 금융서비스를 제공하는 기업으로서,
            <br /> 안정적이면서도 과감한 투자 경험을 할 수 있는 금융자산관리
            솔루션을 서비스하고 있습니다.
            <br />
            <br />
            통계적으로 검증된 최신 이론과 예측력 높은 AI 기술을 기반으로 한 자체
            개발 엔진을 통해
            <br />
            개인 맞춤형 투자 서비스를 제공하여 안정적인 투자자산관리를 가능하게
            하며, 나아가 건전한 투자문화 형성에 이바지하고자 합니다.
          </S.AboutPageDescriptionText>
        </S.AboutTextWrapper>
        <S.AboutPageDescriptionText>
          <S.AboutCellSpanStyle>설립 연도</S.AboutCellSpanStyle>| &nbsp;2023년
          2월 <br />
          <S.AboutCellSpanStyle>본사 위치</S.AboutCellSpanStyle>| &nbsp;서울
          광진구 <br />
          <S.AboutCellSpanStyle>주요 서비스</S.AboutCellSpanStyle>|
          &nbsp;투자자산관리 솔루션 <br />
          <S.AboutCellSpanStyle>주요 기술</S.AboutCellSpanStyle>| &nbsp;자체
          개발 엔진(AI 및 통계 계산학 기반)
        </S.AboutPageDescriptionText>
      </S.AboutPageTextBox>
    </S.AboutPageContainer>
  );
};
export default AboutPage;

import { S } from './style';
import ImgChartReportPNG from '../../../lib/assets/images/img_3d_chart_report.png';
import APIInterfacePNG from '../../../lib/assets/images/img_api_interface.png';
import SecurityPNG from '../../../lib/assets/images/img_security.png';
import MainCard from '../../../components/feature/MainCard';

const HomeMainPage = () => {
  const cardData = [
    {
      img: ImgChartReportPNG,
      title: '투자 상황, 습관 등을\n반영한 맞춤형 개인성향 분석',
      detail:
        '기존 금융사에서 진행되는 단순한\n설문으로는 투자자들의 실제 성향을 포착하기 힘듭니다.\n실제 투자 상황에 맞는 질문들과 투자 습관 등을 고려하여\n보다 정확한 맞춤형 성향을 분석, 포트폴리오 추정에 적용합니다.',
    },
    {
      img: APIInterfacePNG,
      title:
        'Transformer 기반의 자체 예측모델을 \n활용한 포트폴리오 후보군 선정',
      detail:
        '재무제표, 주가, 거래량, 기업의 정적인 데이터 등을 \n활용하여 미래 기업가치를 예측합니다.\n 미래 기업가치가 긍정적으로 예상되는 기업들을 대상으로 \n포트폴리오 후보군을 선정합니다. ',
    },
    {
      img: SecurityPNG,
      title: '저위험 기반의 \n포트폴리오 추정',
      detail:
        '손실을 최소화하기 위해 저위험 기반의 알고리즘을 채택, \n위험을 평가하는 목적함수를 활용하여 \n선별된 투자종목군을 바탕으로 포트폴리오 추정합니다.',
    },
  ];
  return (
    <S.MainPageContainer>
      <S.MainPageLendingBox>
        <S.JumboText>대담, 하지만 안정적인</S.JumboText>
        <S.JumboSubText>새로운 경험의 금융투자 서비스</S.JumboSubText>
      </S.MainPageLendingBox>
      <S.MainCardContainer>
        {cardData.map((item) => (
          <MainCard img={item.img} title={item.title} detail={item.detail} />
        ))}
      </S.MainCardContainer>
      <S.MainPageFullBox>
        <S.TextWrapper>
          <S.JumboText>안전한 투자의 시작</S.JumboText>
          <S.JumboText>관악연구소</S.JumboText>
        </S.TextWrapper>
      </S.MainPageFullBox>
    </S.MainPageContainer>
  );
};

export default HomeMainPage;

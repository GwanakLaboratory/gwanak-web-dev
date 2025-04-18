import DescriptionBox from '../../../components/feature/DescriptionBox';
import { S } from './style';
import ImgChartReportPNG from '../../../lib/assets/images/img_3d_chart_report.png';
import APIInterfacePNG from '../../../lib/assets/images/img_api_interface.png';
import SecurityPNG from '../../../lib/assets/images/img_security.png';
import TechCard from '../../../components/feature/TechCard';
import TechTable from '../../../components/feature/TechTable';
import { TechTableProps } from '../../../components/feature/TechTable/TechTable';

const cardData = [
  {
    img: ImgChartReportPNG,
    title: '정확한 투자성향 파악',
    detail:
      '투자자의 투자 니즈를 정확하게 파악하여 제안합니다. \n기존 금융사 등에서 진행되는 단순 설문으로 포착하지 못하는 투자자의 투자 습관, 성향을 파악할 수 있도록 투자성향 분석 프로그램을 활용하여 정확한 개인의 투자성향을 파악합니다.',
  },
  {
    img: APIInterfacePNG,
    title: '자체개발 엔진을 활용한\n개인 맞춤형 포트폴리오 대상 선정',
    detail:
      '수 많은 종목들 중, 재무정보, 가격정보, 기타 정적인 정보들을 활용해 AI기반의 예측엔진을 통해 미래의 기업가치를 예측, 성장할 것으로 판단되는 기업들을 1차적으로 선별한 후 투자자 개인성향을 더하여 가장 적합한 포트폴리오를 제공합니다.\n\n포트폴리오 대상 후보군은 기업들의 재무정보 업데이트 및 시장 상황의 변화에 따라 정기/수시적으로 리밸런싱 됩니다.',
  },
  {
    img: SecurityPNG,
    title: '저위험 기반 맞춤 포트폴리오 추천',
    detail:
      '선정된 포트폴리오 후보군을 대상으로 자체 개발 포트폴리오 엔진을 활용하여 대담하면서도 안정적으로 수익을 창출할 수 있는 포트폴리오를 제시합니다.',
  },
];
const techTableData: TechTableProps[] = [
  {
    index: '01',
    title: '최적 투자 비율 결정 장치 및 방법',
    subtitle: 'Device and Method for Determining Optimal Investment Ratio',
    description: '출원중',
  },
];

const TechPage = () => {
  return (
    <S.TechPageContainer>
      <DescriptionBox
        title="관악연구소만의 테크/특허"
        subtitle={['기술과 서비스', '> 테크 / 특허']}
      />
      <S.TechPageTextWrapper className="layout-padding">
        <S.TechPageTitleText>
          1. 자체 구현 알고리즘의 3가지 특징
        </S.TechPageTitleText>
      </S.TechPageTextWrapper>
      {cardData.map((item) => (
        <TechCard img={item.img} title={item.title} detail={item.detail} />
      ))}
      <S.TechPageTextWrapper className="layout-padding">
        <S.TechPageTitleText>2. 특허</S.TechPageTitleText>
        <TechTable data={techTableData} />
      </S.TechPageTextWrapper>
    </S.TechPageContainer>
  );
};
export default TechPage;

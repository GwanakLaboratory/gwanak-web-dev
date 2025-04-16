import DescriptionBox from '../../../components/feature/DescriptionBox';
import { S } from './style';

const ServicePage = () => {
  return (
    <S.ServicePageContainer>
      <DescriptionBox
        title="LOVA"
        subtitle={['기술과 서비스', ' > 서비스 소개']}
      />
      <S.DescriptionContainer className="layout-padding">
        <S.DescriptionTitleText>
          더 이상 시장변동성에 두려울 필요없습니다.
        </S.DescriptionTitleText>
        <S.DescriptionText>
          금리 상승 등 시장 변동성이 불안정해지며 막대한 손실을 입는 투자자들이
          <br></br>
          다수 발생하고 있습니다.
        </S.DescriptionText>
        <S.DescriptionText>
          정보를 쉽게 접할 수 없는 투자자들에게는 정보불균형으로 인한 손실
          현상이 <br></br>더 빈번하게 발생하고 있으며,<br></br> 이는 정보 자체를
          얻기 어려운 가상자산 시장에서 더욱 두드러지고 있습니다.
        </S.DescriptionText>
        <S.DescriptionText>
          <span style={{ fontWeight: 700 }}>
            이 과정에서 LOVA는 불안정한 시장 변동성을 예측하여 수익을 창출할 수
            있는 <br></br>포트폴리오를 추천합니다.
          </span>
        </S.DescriptionText>
      </S.DescriptionContainer>
      <S.ServicePageTextBox>
        <S.DescriptionTitleText style={{ color: 'white' }}>
          관악연구소가 AI기반 예측모델과 <br />
          최신 포트폴리오 통계 이론의 시너지효과를
          <br />
          극대화한 포트폴리오를 제안합니다.
        </S.DescriptionTitleText>
        <S.DescriptionSubtitleText>
          자체적으로 개발한 예측모델은 투자대상의 잠재적인 위험을 포착하여
          <br />
          포트폴리오 후보군을 엄선합니다. <br />
          이러한 특징은 수익에 집중하는 타 서비스들 보다 더욱 안정적인 투자를
          가능하게 합니다.
        </S.DescriptionSubtitleText>
      </S.ServicePageTextBox>
    </S.ServicePageContainer>
  );
};

export default ServicePage;

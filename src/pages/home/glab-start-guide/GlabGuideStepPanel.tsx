import type { GlabGuideStep } from './glabGuideData';
import { S } from './style';

type Props = {
  step: GlabGuideStep;
  stepIndex: number;
  imageSrc: string;
};

const GlabGuideStepPanel = ({ step, stepIndex, imageSrc }: Props) => {
  return (
    <S.Step>
      <S.StepVisual>
        <S.PhoneGlow />
        <S.PhoneFrame>
          <img
            src={imageSrc}
            alt={`${step.tag} 화면 예시`}
            loading="lazy"
            decoding="async"
          />
        </S.PhoneFrame>
      </S.StepVisual>
      <S.StepContent>
        <S.StepNumber>{stepIndex + 1}</S.StepNumber>
        <S.StepTag>{step.tag}</S.StepTag>
        <S.StepHeading>
          {step.titleBefore}
          <br />
          <S.StepEm>{step.titleEm}</S.StepEm>
        </S.StepHeading>
        <S.StepLead>{step.lead}</S.StepLead>
        <S.StepFeatures>
          {step.features.map((f) => (
            <S.StepFeature key={f.text}>
              <S.StepFeatureIcon $bg={f.iconBg}>{f.icon}</S.StepFeatureIcon>
              <S.StepFeatureText>{f.text}</S.StepFeatureText>
            </S.StepFeature>
          ))}
        </S.StepFeatures>
      </S.StepContent>
    </S.Step>
  );
};

export default GlabGuideStepPanel;

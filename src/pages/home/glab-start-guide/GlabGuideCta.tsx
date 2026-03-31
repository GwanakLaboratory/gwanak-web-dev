import { GLAB_GUIDE_CTA, GLAB_GUIDE_FOOTER } from './glabGuideData';
import { S } from './style';

type Props = {
  onAgain: () => void;
};

const GlabGuideCta = ({ onAgain }: Props) => {
  return (
    <S.Cta>
      <S.CtaTitle>{GLAB_GUIDE_CTA.title}</S.CtaTitle>
      <S.CtaDesc>{GLAB_GUIDE_CTA.description}</S.CtaDesc>
      <S.CtaButtons>
        <S.CtaBtnPrimary
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          앱 다운로드
        </S.CtaBtnPrimary>
        <S.CtaBtnSecondary type="button" onClick={onAgain}>
          가이드 다시 보기
        </S.CtaBtnSecondary>
      </S.CtaButtons>
      <S.CtaDisclaimer>{GLAB_GUIDE_FOOTER}</S.CtaDisclaimer>
    </S.Cta>
  );
};

export default GlabGuideCta;

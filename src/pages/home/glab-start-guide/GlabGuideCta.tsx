import LandingFooter from '../landing/components/LandingFooter';
import { GLAB_GUIDE_CTA, GLAB_GUIDE_FOOTER } from './glabGuideData';
import { S } from './style';
import { useTranslation } from 'react-i18next';

type Props = {
  onAgain: () => void;
};

const GlabGuideCta = ({ onAgain }: Props) => {
  const { t } = useTranslation();

  return (
    <S.CtaPanel>
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
            {t('glabGuide.ctaDownload')}
          </S.CtaBtnPrimary>
          <S.CtaBtnSecondary type="button" onClick={onAgain}>
            {t('glabGuide.ctaAgain')}
          </S.CtaBtnSecondary>
        </S.CtaButtons>
        <S.CtaDisclaimer>{GLAB_GUIDE_FOOTER}</S.CtaDisclaimer>
      </S.Cta>
      <S.CtaFooter>
        <LandingFooter />
      </S.CtaFooter>
    </S.CtaPanel>
  );
};

export default GlabGuideCta;

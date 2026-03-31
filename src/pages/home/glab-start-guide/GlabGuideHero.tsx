import { GLAB_GUIDE_HERO } from './glabGuideData';
import { S } from './style';

type Props = {
  onScrollToGuide: () => void;
};

const GlabGuideHero = ({ onScrollToGuide }: Props) => {
  return (
    <S.Hero>
      <S.HeroBadge>{GLAB_GUIDE_HERO.badge}</S.HeroBadge>
      <S.HeroTitle>
        {GLAB_GUIDE_HERO.titleBefore}
        <S.HeroEm>{GLAB_GUIDE_HERO.titleEm}</S.HeroEm>
        {GLAB_GUIDE_HERO.titleAfter}
        <br />
        {GLAB_GUIDE_HERO.titleLine2}
      </S.HeroTitle>
      <S.HeroDesc>{GLAB_GUIDE_HERO.description}</S.HeroDesc>
      <S.HeroCta type="button" onClick={onScrollToGuide}>
        시작 가이드 보기
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </S.HeroCta>
    </S.Hero>
  );
};

export default GlabGuideHero;

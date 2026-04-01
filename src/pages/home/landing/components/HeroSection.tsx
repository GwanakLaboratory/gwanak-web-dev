import { useTranslation } from 'react-i18next';

type HeroSectionProps = {
  onContact: () => void;
};

const HeroSection = ({ onContact }: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="dot" />
        {t('landing.hero.tag')}
      </div>
      <h1>
        {t('landing.hero.titleLine1Prefix')}
        <br />
        <span className="accent">{t('landing.hero.titleLine1Accent')}</span>
        {t('landing.hero.titleLine1Suffix')}
      </h1>
      <p className="hero-sub">{t('landing.hero.description')}</p>
      <div className="hero-actions">
        <button className="btn-outline" onClick={onContact}>
          {t('landing.hero.contact')}
        </button>
      </div>
      <div className="metrics">
        <div className="metric reveal">
          <div className="metric-value">82.5%</div>
          <div className="metric-label">{t('landing.hero.metric1Label')}</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">{t('landing.hero.metric2Value')}</div>
          <div className="metric-label">{t('landing.hero.metric2Label')}</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">{t('landing.hero.metric3Value')}</div>
          <div className="metric-label">{t('landing.hero.metric3Label')}</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">IBK PoC</div>
          <div className="metric-label">{t('landing.hero.metric4Label')}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

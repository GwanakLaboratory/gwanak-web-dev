import { useTranslation } from 'react-i18next';

const LegacyHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="legacy-hero-banner">
      <div className="legacy-hero-copy">
        <p className="legacy-hero-title">{t('landing.legacyHero.title')}</p>
        <p className="legacy-hero-subtitle">{t('landing.legacyHero.subtitle')}</p>
      </div>
    </section>
  );
};

export default LegacyHeroSection;

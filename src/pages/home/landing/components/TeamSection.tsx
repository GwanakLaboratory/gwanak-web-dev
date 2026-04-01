import { useTranslation } from 'react-i18next';

const TeamSection = () => {
  const { t } = useTranslation();
  const cardIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <section id="team">
      <div className="reveal">
        <div className="section-label">{t('landing.team.label')}</div>
        <h2 className="section-title">{t('landing.team.title')}</h2>
      </div>
      <div className="team-grid">
        {cardIndexes.map((idx) => (
          <div className="team-card reveal" key={idx}>
            <span className="team-role">{t(`landing.team.cards.${idx}.role`)}</span>
            <h4>{t(`landing.team.cards.${idx}.title`)}</h4>
            <div className="affil">{t(`landing.team.cards.${idx}.affil`)}</div>
            <p>{t(`landing.team.cards.${idx}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

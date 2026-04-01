import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TimelineEntry = {
  date: string;
  titleKey: string;
  descKey: string;
};

const TIMELINE: TimelineEntry[] = [
  { date: '2025.03', titleKey: 'g1i1Title', descKey: 'g1i1Desc' },
  { date: '2025.05', titleKey: 'g1i2Title', descKey: 'g1i2Desc' },
  { date: '2025.07', titleKey: 'g1i3Title', descKey: 'g1i3Desc' },
  { date: '2025.09', titleKey: 'g1i4Title', descKey: 'g1i4Desc' },
  { date: '2025.11', titleKey: 'g2i1Title', descKey: 'g2i1Desc' },
  { date: '2026.01', titleKey: 'g2i2Title', descKey: 'g2i2Desc' },
  { date: '2026.03', titleKey: 'g2i3Title', descKey: 'g2i3Desc' },
  { date: '2026.04', titleKey: 'g2i4Title', descKey: 'g2i4Desc' },
];

const AchievementsSection = () => {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label">{t('landing.achievements.label')}</div>
        <h2 className="section-title">{t('landing.achievements.title')}</h2>
      </div>
      <div className="ach-layout">
        <div className="ach-timeline reveal">
          <h4 className="ach-col-title">
            {t('landing.achievements.timelineTitle', { defaultValue: '연혁' })}
          </h4>
          <div className="tl-track">
            {TIMELINE.map((entry, idx) => (
              <div
                key={idx}
                className={`tl-node${activeIdx === idx ? ' tl-node--active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <div className="tl-rail">
                  <span className="tl-dot" />
                  {idx < TIMELINE.length - 1 && <span className="tl-line" />}
                </div>
                <div className="tl-date">{entry.date}</div>
                <div className="tl-body">
                  <h5>{t(`landing.achievements.${entry.titleKey}`)}</h5>
                  <p>{t(`landing.achievements.${entry.descKey}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ach-evidence reveal">
          <h4 className="ach-col-title">
            {t('landing.achievements.evidenceTitle', { defaultValue: '보도 · 증빙' })}
          </h4>
          <div className="ach-ev-card">
            <span className="ach-ev-badge">{t('landing.achievements.group1Title')}</span>
            <h5>{t('landing.achievements.g1i1Title')}</h5>
            <p>{t('landing.achievements.g1i1Desc')}</p>
          </div>
          <div className="ach-ev-card">
            <span className="ach-ev-badge">{t('landing.achievements.group1Title')}</span>
            <h5>{t('landing.achievements.g1i2Title')}</h5>
            <p>{t('landing.achievements.g1i2Desc')}</p>
          </div>
          <div className="ach-ev-card">
            <span className="ach-ev-badge">{t('landing.achievements.group2Title')}</span>
            <h5>{t('landing.achievements.g2i2Title')}</h5>
            <p>{t('landing.achievements.g2i2Desc')}</p>
          </div>
          <div className="ach-ev-card">
            <span className="ach-ev-badge">{t('landing.achievements.group2Title')}</span>
            <h5>{t('landing.achievements.g2i4Title')}</h5>
            <p>{t('landing.achievements.g2i4Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

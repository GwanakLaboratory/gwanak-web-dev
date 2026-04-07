import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TimelineEntry = { date: string; title: string };
type EvidenceGroup = {
  category: string;
  items: Array<{ title: string; sub: string; href?: string }>;
};

const TIMELINE_KEYS = [
  { date: '23.02', titleKey: 'timeline.i1' },
  { date: '23.12', titleKey: 'timeline.i2' },
  { date: '24.06', titleKey: 'timeline.i3' },
  { date: '25.01', titleKey: 'timeline.i4' },
  { date: '25.04', titleKey: 'timeline.i5' },
  { date: '25.10', titleKey: 'timeline.i6' },
  { date: '26.01', titleKey: 'timeline.i7' },
  { date: '26.02', titleKey: 'timeline.i8' },
  { date: '26.02', titleKey: 'timeline.i9' },
  { date: '26.03', titleKey: 'timeline.i10' },
  { date: '26.03', titleKey: 'timeline.i11' },
] as const;

const AchievementsSection = () => {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeEvidenceIdx, setActiveEvidenceIdx] = useState<number | null>(null);
  const timeline: TimelineEntry[] = TIMELINE_KEYS.map((item) => ({
    date: item.date,
    title: t(`landing.achievements.${item.titleKey}`),
  }));
  const evidenceGroups: EvidenceGroup[] = [
    {
      category: t('landing.achievements.evidence.patent'),
      items: [
        {
          title: t('landing.achievements.evidence.patentItem1Title'),
          sub: t('landing.achievements.evidence.patentItem1Sub'),
        },
      ],
    },
    {
      category: t('landing.achievements.evidence.paper'),
      items: [
        {
          title: t('landing.achievements.evidence.paperItem1Title'),
          sub: t('landing.achievements.evidence.paperItem1Sub'),
        },
        {
          title: t('landing.achievements.evidence.paperItem2Title'),
          sub: t('landing.achievements.evidence.paperItem2Sub'),
        },
      ],
    },
    {
      category: t('landing.achievements.evidence.news'),
      items: [
        {
          title: t('landing.achievements.evidence.newsItem1Title'),
          sub: t('landing.achievements.evidence.newsItem1Sub'),
          href: 'https://www.dt.co.kr/article/12048079?ref=naver',
        },
        {
          title: t('landing.achievements.evidence.newsItem2Title'),
          sub: t('landing.achievements.evidence.newsItem2Sub'),
          href: 'https://www.mt.co.kr/future/2026/04/07/2026040611022367960',
        },
        {
          title: t('landing.achievements.evidence.newsItem3Title'),
          sub: t('landing.achievements.evidence.newsItem3Sub'),
          href: 'https://www.yna.co.kr/view/AKR20260331144100051?input=1195m',
        },
      ],
    },
  ];

  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label">{t('landing.achievements.label')}</div>
        <h2 className="section-title">{t('landing.achievements.title')}</h2>
      </div>

      <div className="ach-layout">
        {/* ── 연혁 ── */}
        <div className="ach-timeline reveal">
          <h4 className="ach-col-title">
            {t('landing.achievements.timelineTitle', { defaultValue: '연혁' })}
          </h4>
          <div className="tl-track">
            {timeline.map((entry, idx) => (
              <div
                key={idx}
                className={`tl-node${activeIdx === idx ? ' tl-node--active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <div className="tl-rail">
                  <span className="tl-dot" />
                  {idx < timeline.length - 1 && <span className="tl-line" />}
                </div>
                <div className="tl-date">{entry.date}</div>
                <div className="tl-body">
                  <h5>{entry.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 보도 · 증빙 ── */}
        <div className="ach-evidence reveal">
          <h4 className="ach-col-title">
            {t('landing.achievements.evidenceTitle', { defaultValue: '보도 · 증빙' })}
          </h4>

          <div className="ev-track">
            {evidenceGroups.map((group, groupIdx) => (
              <div
                key={group.category}
                className="ev-group-block"
              >
                <div className="ev-group-category">{group.category}</div>

                <div className="ev-group-items">
                  {group.items.map((item, idx) => (
                    <div
                      key={`${group.category}-${idx}`}
                      className={`ev-row${activeEvidenceIdx === groupIdx * 10 + idx ? ' ev-row--active' : ''}`}
                      onMouseEnter={() => setActiveEvidenceIdx(groupIdx * 10 + idx)}
                      onMouseLeave={() => setActiveEvidenceIdx(null)}
                    >
                      <div className="ev-rail">
                        <span className="ev-dot" />
                        {idx < group.items.length - 1 && <span className="ev-line" />}
                      </div>

                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="ev-item ev-item--link"
                        >
                          <span className="ev-item-title">{item.title}</span>
                          <span className="ev-item-sub">
                            {item.sub}
                            <span className="ev-item-arrow">↗</span>
                          </span>
                        </a>
                      ) : (
                        <div className="ev-item">
                          <span className="ev-item-title">{item.title}</span>
                          <span className="ev-item-sub">{item.sub}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {groupIdx < evidenceGroups.length - 1 && <div className="ev-group-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

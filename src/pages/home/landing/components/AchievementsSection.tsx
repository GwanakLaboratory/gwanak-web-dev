import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TimelineEntry = { date: string; title: string };
type EvidenceGroup = {
  category: '특허' | '논문' | '기사';
  items: Array<{ title: string; sub: string; href?: string }>;
};

const TIMELINE: TimelineEntry[] = [
  { date: '23.02', title: '관악연구소 설립' },
  { date: '23.12', title: '핀테크 AI 개발 (서울시립대학교와 공동연구개발)' },
  { date: '24.06', title: '로보어드바이저 테스트베드 운용심사 통과' },
  { date: '25.01', title: 'LG CNS 생성형 AI 기반 이미지 편집툴, COP 프로젝트 개발' },
  { date: '25.04', title: '핀테크 AI, 특허 등록 완료' },
  { date: '25.10', title: '서울핀테크랩 멤버십 기업 선정' },
  { date: '26.01', title: '동물병원 통합 데이터베이스 구축 프로젝트 개발' },
  { date: '26.02', title: 'IBK 1st LAB 7기 선정 (카드고객이탈방지 모델 구축 PoC)' },
  { date: '26.02', title: '기보벤처캠프 18기 선정' },
  { date: '26.03', title: '한국핀테크지원센터 디지털 금융기술 내재화 사업 선정' },
  { date: '26.03', title: 'BNK썸 인큐베이터 11기 선정' },
];

const EVIDENCE_GROUPS: EvidenceGroup[] = [
  {
    category: '특허',
    items: [{ title: '투자 비율 결정 장치 및 방법', sub: '제10-2803037호' }],
  },
  {
    category: '논문',
    items: [
      {
        title: 'Generating High-Diversity Synthetic Tabular Data via Less-Constrained Prior',
        sub: 'Anonymous Authors · IJCAI 2026',
      },
      {
        title: 'Dynamic Higher-Order Relations and Event-Driven Temporal Modeling for Stock Price Forecasting',
        sub: 'Kijeong Park, Sungchul Hong, Jong-June Jeon · 2025',
      },
    ],
  },
  {
    category: '기사',
    items: [
      {
        title: "기업은행, 오픈 이노베이션 프로그램 'IBK 1st랩' 7기 참여기업 선정",
        sub: '디지털타임스',
        href: 'https://www.dt.co.kr/article/12048079?ref=naver',
      },
      {
        title: "기보벤처캠프 18기, 'AI·그린' 스타트업 집결…산업 혁신 전면에",
        sub: '머니투데이',
        href: 'https://www.mt.co.kr/future/2026/04/07/2026040611022367960',
      },
      {
        title: "부산은행 '썸 인큐베이터 11기' 발대…스타트업 육성",
        sub: '연합뉴스',
        href: 'https://www.yna.co.kr/view/AKR20260331144100051?input=1195m',
      },
    ],
  },
];

const AchievementsSection = () => {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeEvidenceIdx, setActiveEvidenceIdx] = useState<number | null>(null);

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
            {EVIDENCE_GROUPS.map((group, groupIdx) => (
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
                {groupIdx < EVIDENCE_GROUPS.length - 1 && <div className="ev-group-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

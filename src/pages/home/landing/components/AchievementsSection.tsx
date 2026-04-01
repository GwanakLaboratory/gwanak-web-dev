import { useTranslation } from 'react-i18next';

const AchievementsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label">{t('landing.achievements.label')}</div>
        <h2 className="section-title">{t('landing.achievements.title')}</h2>
      </div>
      <div className="ach-grid">
        <div className="ach-group reveal">
          <h4>{t('landing.achievements.group1Title', { defaultValue: '기술 검증 · IP' })}</h4>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g1i1Title', { defaultValue: '로보어드바이저 운용심사 통과' })}</h5>
              <p>{t('landing.achievements.g1i1Desc', { defaultValue: '테스트베드 정기심사 완료 · 4개 알고리즘 운용심사 확인증' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g1i2Title', { defaultValue: '투자 비율 결정 장치 및 방법 특허' })}</h5>
              <p>{t('landing.achievements.g1i2Desc', { defaultValue: '특허 제10-2803037호 등록' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g1i3Title', { defaultValue: 'Specificity 82.5% 달성' })}</h5>
              <p>{t('landing.achievements.g1i3Desc', { defaultValue: '하락 예측 정확도 업계 최고 수준 기록' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g1i4Title', { defaultValue: 'LG CNS COP 프로젝트 납품' })}</h5>
              <p>{t('landing.achievements.g1i4Desc', { defaultValue: '타이트한 QA 테스트 한 번에 통과' })}</p>
            </div>
          </div>
        </div>
        <div className="ach-group reveal">
          <h4>{t('landing.achievements.group2Title', { defaultValue: '기관 선정 · 파트너십' })}</h4>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g2i1Title', { defaultValue: '서울핀테크랩 선정' })}</h5>
              <p>{t('landing.achievements.g2i1Desc', { defaultValue: '핀테크 생태계 핵심 기관 지원사업' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g2i2Title', { defaultValue: 'IBK 1st LAB 오픈이노베이션' })}</h5>
              <p>{t('landing.achievements.g2i2Desc', { defaultValue: '현업 금융기관 엑셀러레이팅 선정' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g2i3Title', { defaultValue: '한국핀테크지원센터 선정' })}</h5>
              <p>{t('landing.achievements.g2i3Desc', { defaultValue: '핀테크 스타트업 지원 프로그램' })}</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>{t('landing.achievements.g2i4Title', { defaultValue: '기술보증기금 · BNK 부산은행' })}</h5>
              <p>{t('landing.achievements.g2i4Desc', { defaultValue: '기술력 기반 보증 및 금융사 파트너십' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

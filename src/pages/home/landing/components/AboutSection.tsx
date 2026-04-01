import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="reveal">
        <div className="section-label">{t('landing.about.label')}</div>
        <h2 className="section-title">
          {t('landing.about.title').split('\n')[0]}
          <br />
          {t('landing.about.title').split('\n')[1]}
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <h3>{t('landing.about.problemTitle')}</h3>
          <p>{t('landing.about.problemDesc')}</p>
          <h3>{t('landing.about.approachTitle')}</h3>
          <p>{t('landing.about.approachDesc')}</p>
        </div>
        <div className="engine-steps reveal">
          <div className="engine-step">
            <span className="step-num">01</span>
            <div>
              <h4>{t('landing.about.step1Title', { defaultValue: '상태 표현 계층' })}</h4>
              <p>{t('landing.about.step1Desc', { defaultValue: 'TabLLM 기반으로 Raw Data를 맥락을 포함한 상태 벡터로 변환. 변수가 바뀌어도 문장만 변경하면 됩니다.' })}</p>
            </div>
          </div>
          <div className="engine-step">
            <span className="step-num">02</span>
            <div>
              <h4>{t('landing.about.step2Title', { defaultValue: '상태 전이 예측' })}</h4>
              <p>{t('landing.about.step2Desc', { defaultValue: 'TFT(Temporal Fusion Transformer) 기반으로 다음 값이 아닌 상태의 가능성을 예측합니다.' })}</p>
            </div>
          </div>
          <div className="engine-step">
            <span className="step-num">03</span>
            <div>
              <h4>{t('landing.about.step3Title', { defaultValue: '판단 기준 구조화' })}</h4>
              <p>{t('landing.about.step3Desc', { defaultValue: '예측 결과에 리스크 요소를 반영한 명시적 판단 기준을 적용하여 최종 의사결정을 도출합니다.' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

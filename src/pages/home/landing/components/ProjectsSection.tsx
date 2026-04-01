import { useTranslation } from 'react-i18next';
import GlabChatDemo from './GlabChatDemo';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label">{t('landing.projects.label')}</div>
        <h2 className="section-title">{t('landing.projects.title')}</h2>
        <p className="section-desc">{t('landing.projects.desc')}</p>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal">
          <div
            className="project-thumb"
            style={{
              background:
                'linear-gradient(135deg, rgba(41,86,224,0.04), rgba(41,86,224,0.01))',
            }}
          >
            <span className="big-num">01</span>
            <span className="icon">🧠</span>
          </div>
          <div className="project-body">
            <div className="project-cat">Robo Advisor</div>
            <h3>{t('landing.projects.card1Title', { defaultValue: 'TFT 기반 포트폴리오 운용' })}</h3>
            <p>{t('landing.projects.card1Desc', { defaultValue: 'DART 재무제표를 활용하여 기업 펀더멘탈을 예측하고, Pessimistic 알고리즘으로 리스크를 최소화하는 포트폴리오를 운용합니다.' })}</p>
            <div className="project-meta">
              <span>{t('landing.projects.card1Meta1', { defaultValue: '운용심사 통과' })}</span>
              <span>{t('landing.projects.card1Meta2', { defaultValue: '특허 등록' })}</span>
              <span>Specificity 82.5%</span>
            </div>
          </div>
        </div>
        <div className="project-card reveal">
          <div
            className="project-thumb"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,201,167,0.04), rgba(0,201,167,0.01))',
            }}
          >
            <span className="big-num">02</span>
            <span className="icon">💳</span>
          </div>
          <div className="project-body">
            <div className="project-cat">Financial PoC</div>
            <h3>{t('landing.projects.card2Title', { defaultValue: '카드 고객 이탈방지 모형' })}</h3>
            <p>{t('landing.projects.card2Desc', { defaultValue: 'IBK 1st LAB에서 TFT 모델을 카드 고객 이탈예측에 적용. 이탈 원인별 차별화된 리텐션 전략을 자동으로 도출합니다.' })}</p>
            <div className="project-meta">
              <span>IBK 1st LAB</span>
              <span>{t('landing.projects.card2Meta2', { defaultValue: 'PoC 진행중' })}</span>
            </div>
          </div>
        </div>
        <div className="project-card reveal">
          <div
            className="project-thumb"
            style={{
              background:
                'linear-gradient(135deg, rgba(245,133,43,0.04), rgba(245,133,43,0.01))',
            }}
          >
            <span className="big-num">03</span>
            <span className="icon">💬</span>
          </div>
          <div className="project-body">
            <div className="project-cat">AI Digital PB</div>
            <h3>{t('landing.projects.card3Title', { defaultValue: 'GLAB 1:1 디지털 PB' })}</h3>
            <p>{t('landing.projects.card3Desc', { defaultValue: '투자종목 데이터와 사용자 대화를 결합하여 상태를 정의하고, 개인 성향에 따른 초개인화 투자 가이드를 제공합니다.' })}</p>
            <div className="project-meta">
              <span>2026 Q2 MVP</span>
              <span>{t('landing.projects.card3Meta2', { defaultValue: '금융 Vertical LLM' })}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="service" className="projects-engine-block">
        <div className="reveal">
          <div className="section-label">{t('landing.service.label')}</div>
          <h2 className="section-title">{t('landing.service.title')}</h2>
          <p className="section-desc">{t('landing.service.desc')}</p>
        </div>

        <div className="service-dual">
          <div className="service-card wide reveal">
            <div>
              <div className="service-icon blue">💬</div>
              <h3>{t('landing.service.card1Title', { defaultValue: 'GLAB — 1:1 AI 디지털 PB' })}</h3>
              <p>{t('landing.service.card1Desc', { defaultValue: '유저 성향과 심리를 실시간 분석하여 맞춤형 투자 가이드를 제안합니다. 범용 LLM이 정보를 나열하고 판단을 유보하는 데 그치는 반면, GLAB은 시장 상태를 정의하고 구체적인 행동 지침까지 제시합니다.' })}</p>
              <div className="tags">
                <span className="tag">{t('landing.service.card1Tag1', { defaultValue: '국내주식' })}</span>
                <span className="tag">{t('landing.service.card1Tag2', { defaultValue: '미국주식 (예정)' })}</span>
                <span className="tag">{t('landing.service.card1Tag3', { defaultValue: '가상자산 (예정)' })}</span>
                <span className="tag">{t('landing.service.card1Tag4', { defaultValue: '개인화 코칭' })}</span>
                <span className="tag">{t('landing.service.card1Tag5', { defaultValue: '투자교육' })}</span>
              </div>
            </div>
            <div className="demo-box">
              <div className="demo-header">
                <span className="demo-title">{t('landing.service.demoTitle', { defaultValue: 'GLAB 대화 예시' })}</span>
                <span className="demo-live">AI PB</span>
              </div>
              <GlabChatDemo />
            </div>
          </div>

          <div className="service-card reveal">
            <div className="service-icon green">📊</div>
            <h3>{t('landing.service.card2Title', { defaultValue: '포트폴리오 엔진' })}</h3>
            <p>{t('landing.service.card2Desc', { defaultValue: 'TFT 기반 종목 예측과 Pessimistic 리스크 최소화를 결합. 극단적 손실 확률을 최소화하는 포트폴리오를 자동으로 구성하고 리밸런싱합니다.' })}</p>
            <div className="tags">
              <span className="tag">{t('landing.service.card2Tag1', { defaultValue: 'TFT 시계열 예측' })}</span>
              <span className="tag">{t('landing.service.card2Tag2', { defaultValue: 'CVaR 최소화' })}</span>
              <span className="tag">{t('landing.service.card2Tag3', { defaultValue: '자동 리밸런싱' })}</span>
            </div>
          </div>

          <div className="service-card reveal">
            <div className="service-icon blue">🎓</div>
            <h3>{t('landing.service.card3Title', { defaultValue: '투자교육 · AI 커뮤니티' })}</h3>
            <p>{t('landing.service.card3Desc', { defaultValue: '유저의 대화 내역으로 투자 성향과 지식수준을 분석하여 맞춤 교육 콘텐츠를 제공합니다. 투자 대가의 전략을 학습한 AI Agent와 토론하는 커뮤니티도 준비 중입니다.' })}</p>
            <div className="tags">
              <span className="tag">{t('landing.service.card3Tag1', { defaultValue: '개인화 학습' })}</span>
              <span className="tag">{t('landing.service.card3Tag2', { defaultValue: 'AI Agent 커뮤니티' })}</span>
              <span className="tag">{t('landing.service.card3Tag3', { defaultValue: '수익률 리그' })}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-glov reveal">
        <div className="projects-glov-divider" aria-hidden />
        <div className="section-label">{t('landing.projects.glovLabel', { defaultValue: 'GLOV — B2B' })}</div>
        <p className="section-desc projects-glov-desc">{t('landing.projects.glovDesc', { defaultValue: '기관을 통해 검증된 전략을 리테일에 적용하고, 리테일 유저 데이터로 엔진을 고도화하는 플라이휠 구조입니다.' })}</p>
        <div className="b2b-cards">
          <div className="b2b-card reveal">
            <span className="b2b-status done">{t('landing.projects.b2b1Status', { defaultValue: '검증 완료' })}</span>
            <h4>{t('landing.projects.b2b1Title', { defaultValue: '증권 / 자산운용' })}</h4>
            <p>{t('landing.projects.b2b1Desc', { defaultValue: '사모펀드 B2B 자문 운용 중. TFT + 리스크최소화 포트폴리오로 PB 의사결정을 지원합니다.' })}</p>
          </div>
          <div className="b2b-card reveal">
            <span className="b2b-status wip">{t('landing.projects.b2b2Status', { defaultValue: 'PoC 진행중' })}</span>
            <h4>{t('landing.projects.b2b2Title', { defaultValue: '카드 (IBK 1st LAB)' })}</h4>
            <p>{t('landing.projects.b2b2Desc', { defaultValue: '고객 상태 정의 + 이탈 원인별 리텐션 의사결정. KB카드와도 검증 진행 예정입니다.' })}</p>
          </div>
          <div className="b2b-card reveal">
            <span className="b2b-status plan">{t('landing.projects.b2b3Status', { defaultValue: '확장 예정' })}</span>
            <h4>{t('landing.projects.b2b3Title', { defaultValue: '은행 / 보험' })}</h4>
            <p>{t('landing.projects.b2b3Desc', { defaultValue: '동일 엔진으로 미납/해지 리텐션, 손해율 추세 기반 의사결정으로 확장합니다.' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

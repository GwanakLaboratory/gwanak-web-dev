const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label">Projects</div>
        <h2 className="section-title">우리가 만들어온 것들</h2>
        <p className="section-desc">
          State 기반 의사결정 엔진을 다양한 금융 도메인에 적용하고 검증해왔습니다.
        </p>
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
            <h3>TFT 기반 포트폴리오 운용</h3>
            <p>
              DART 재무제표를 활용하여 기업 펀더멘탈을 예측하고, Pessimistic
              알고리즘으로 리스크를 최소화하는 포트폴리오를 운용합니다.
            </p>
            <div className="project-meta">
              <span>운용심사 통과</span>
              <span>특허 등록</span>
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
            <h3>카드 고객 이탈방지 모형</h3>
            <p>
              IBK 1st LAB에서 TFT 모델을 카드 고객 이탈예측에 적용. 이탈 원인별
              차별화된 리텐션 전략을 자동으로 도출합니다.
            </p>
            <div className="project-meta">
              <span>IBK 1st LAB</span>
              <span>PoC 진행중</span>
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
            <h3>GLAB 1:1 디지털 PB</h3>
            <p>
              투자종목 데이터와 사용자 대화를 결합하여 상태를 정의하고, 개인 성향에
              따른 초개인화 투자 가이드를 제공합니다.
            </p>
            <div className="project-meta">
              <span>2026 Q2 MVP</span>
              <span>금융 Vertical LLM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-glov reveal">
        <div className="projects-glov-divider" aria-hidden />
        <div className="section-label">GLOV — B2B</div>
        <p className="section-desc projects-glov-desc">
          기관을 통해 검증된 전략을 리테일에 적용하고, 리테일 유저 데이터로 엔진을
          고도화하는 플라이휠 구조입니다.
        </p>
        <div className="b2b-cards">
          <div className="b2b-card reveal">
            <span className="b2b-status done">검증 완료</span>
            <h4>증권 / 자산운용</h4>
            <p>
              사모펀드 B2B 자문 운용 중. TFT + 리스크최소화 포트폴리오로 PB 의사결정을
              지원합니다.
            </p>
          </div>
          <div className="b2b-card reveal">
            <span className="b2b-status wip">PoC 진행중</span>
            <h4>카드 (IBK 1st LAB)</h4>
            <p>
              고객 상태 정의 + 이탈 원인별 리텐션 의사결정. KB카드와도 검증 진행
              예정입니다.
            </p>
          </div>
          <div className="b2b-card reveal">
            <span className="b2b-status plan">확장 예정</span>
            <h4>은행 / 보험</h4>
            <p>
              동일 엔진으로 미납/해지 리텐션, 손해율 추세 기반 의사결정으로 확장합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

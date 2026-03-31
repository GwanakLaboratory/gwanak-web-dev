import GlabChatDemo from './GlabChatDemo';

const ServiceSection = () => {
  return (
    <section id="service">
      <div className="reveal">
        <div className="section-label">glab 서비스</div>
        <h2 className="section-title">하나의 엔진, 두 개의 시장</h2>
        <p className="section-desc">
          투자 영역에서 검증된 기술을 리테일 투자자(GLAB)와 기관 고객(GLOV) 양쪽에
          제공합니다.
        </p>
      </div>

      <div className="service-dual">
        <div className="service-card wide reveal">
          <div>
            <div className="service-icon blue">💬</div>
            <h3>GLAB — 1:1 AI 디지털 PB</h3>
            <p>
              유저 성향과 심리를 실시간 분석하여 맞춤형 투자 가이드를 제안합니다.
              범용 LLM이 정보를 나열하고 판단을 유보하는 데 그치는 반면, GLAB은
              시장 상태를 정의하고 구체적인 행동 지침까지 제시합니다.
            </p>
            <div className="tags">
              <span className="tag">국내주식</span>
              <span className="tag">미국주식 (예정)</span>
              <span className="tag">가상자산 (예정)</span>
              <span className="tag">개인화 코칭</span>
              <span className="tag">투자교육</span>
            </div>
            <p
              style={{
                fontSize: 12,
                color: 'var(--primary)',
                fontWeight: 600,
                marginTop: 16,
              }}
            >
              2026년 2분기 MVP 출시 · 구독 Basic 50,000원/연, Premium 100,000원/연
            </p>
          </div>
          <div className="demo-box">
            <div className="demo-header">
              <span className="demo-title">GLAB 대화 예시</span>
              <span className="demo-live">AI PB</span>
            </div>
            <GlabChatDemo />
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon green">📊</div>
          <h3>포트폴리오 엔진</h3>
          <p>
            TFT 기반 종목 예측과 Pessimistic 리스크 최소화를 결합. 극단적 손실
            확률을 최소화하는 포트폴리오를 자동으로 구성하고 리밸런싱합니다.
          </p>
          <div className="tags">
            <span className="tag">TFT 시계열 예측</span>
            <span className="tag">CVaR 최소화</span>
            <span className="tag">자동 리밸런싱</span>
          </div>
        </div>

        <div className="service-card reveal">
          <div className="service-icon blue">🎓</div>
          <h3>투자교육 · AI 커뮤니티</h3>
          <p>
            유저의 대화 내역으로 투자 성향과 지식수준을 분석하여 맞춤 교육 콘텐츠를
            제공합니다. 투자 대가의 전략을 학습한 AI Agent와 토론하는 커뮤니티도
            준비 중입니다.
          </p>
          <div className="tags">
            <span className="tag">개인화 학습</span>
            <span className="tag">AI Agent 커뮤니티</span>
            <span className="tag">수익률 리그</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

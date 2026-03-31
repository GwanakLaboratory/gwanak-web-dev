type HeroSectionProps = {
  onStart: () => void;
  onContact: () => void;
};

const HeroSection = ({ onStart, onContact }: HeroSectionProps) => {
  return (
    <section className="hero">
      <div className="hero-tag">
        <span className="dot" />
        State 기반 AI 의사결정 엔진
      </div>
      <h1>
        금융 의사결정을
        <br />
        <span className="accent">구조화</span>합니다.
      </h1>
      <p className="hero-sub">
        AI는 예측하지만, &ldquo;무엇을 해야 하는가&rdquo;는 여전히 사람의 감에
        의존합니다. 관악연구소는 상태(State)를 정의하고, 변화를 예측하며, 판단
        기준을 구조화하여 금융 전반의 의사결정 인프라를 만듭니다.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={onStart}>
          GLAB 체험하기
        </button>
        <button className="btn-outline" onClick={onContact}>
          기업 도입 문의 →
        </button>
      </div>
      <div className="metrics">
        <div className="metric reveal">
          <div className="metric-value">82.5%</div>
          <div className="metric-label">하락 예측 정확도 (Specificity)</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">특허 등록</div>
          <div className="metric-label">투자 비율 결정 장치 및 방법</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">RA 심사 통과</div>
          <div className="metric-label">로보어드바이저 운용심사</div>
        </div>
        <div className="metric reveal">
          <div className="metric-value">IBK PoC</div>
          <div className="metric-label">금융기관 실증 진행중</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

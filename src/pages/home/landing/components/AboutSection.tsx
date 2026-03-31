const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="reveal">
        <div className="section-label">About</div>
        <h2 className="section-title">
          합리적인 의사결정은
          <br />
          지금의 상태를 이해하는 것에서 시작됩니다
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <h3>우리가 해결하는 문제</h3>
          <p>
            금융 산업 전반에 데이터와 AI가 넘쳐나지만, 의사결정 자동화율은 여전히
            약 5%에 불과합니다. 같은 10% 수익률이어도 상승장 초입과 하락장 반등은
            완전히 다른 상황이지만, 기존 AI는 숫자를 예측할 뿐 맥락을 이해하지
            못합니다.
          </p>
          <h3>우리의 접근</h3>
          <p>
            관악연구소는 서울대·서울시립대 통계학과 연구실과 공동연구를 수행하며,
            투자 · 카드 · 보험 등 금융 도메인 전반에 적용 가능한 State 기반 AI
            의사결정 엔진을 개발합니다. 하나의 엔진으로 영역을 넘나드는 의사결정
            인프라를 구축하고 있습니다.
          </p>
        </div>
        <div className="engine-steps reveal">
          <div className="engine-step">
            <span className="step-num">01</span>
            <div>
              <h4>상태 표현 계층</h4>
              <p>
                TabLLM 기반으로 Raw Data를 맥락을 포함한 상태 벡터로 변환. 변수가
                바뀌어도 문장만 변경하면 됩니다.
              </p>
            </div>
          </div>
          <div className="engine-step">
            <span className="step-num">02</span>
            <div>
              <h4>상태 전이 예측</h4>
              <p>
                TFT(Temporal Fusion Transformer) 기반으로 다음 값이 아닌 상태의
                가능성을 예측합니다.
              </p>
            </div>
          </div>
          <div className="engine-step">
            <span className="step-num">03</span>
            <div>
              <h4>판단 기준 구조화</h4>
              <p>
                예측 결과에 리스크 요소를 반영한 명시적 판단 기준을 적용하여 최종
                의사결정을 도출합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

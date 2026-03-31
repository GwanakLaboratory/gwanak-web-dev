const AchievementsSection = () => {
  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label">Achievements</div>
        <h2 className="section-title">관악연구소의 발자취</h2>
      </div>
      <div className="ach-grid">
        <div className="ach-group reveal">
          <h4>기술 검증 · IP</h4>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>로보어드바이저 운용심사 통과</h5>
              <p>테스트베드 정기심사 완료 · 4개 알고리즘 운용심사 확인증</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>투자 비율 결정 장치 및 방법 특허</h5>
              <p>특허 제10-2803037호 등록</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>Specificity 82.5% 달성</h5>
              <p>하락 예측 정확도 업계 최고 수준 기록</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>LG CNS COP 프로젝트 납품</h5>
              <p>타이트한 QA 테스트 한 번에 통과</p>
            </div>
          </div>
        </div>
        <div className="ach-group reveal">
          <h4>기관 선정 · 파트너십</h4>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>서울핀테크랩 선정</h5>
              <p>핀테크 생태계 핵심 기관 지원사업</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>IBK 1st LAB 오픈이노베이션</h5>
              <p>현업 금융기관 엑셀러레이팅 선정</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>한국핀테크지원센터 선정</h5>
              <p>핀테크 스타트업 지원 프로그램</p>
            </div>
          </div>
          <div className="ach-item">
            <span className="ach-marker" />
            <div className="ach-content">
              <h5>기술보증기금 · BNK 부산은행</h5>
              <p>기술력 기반 보증 및 금융사 파트너십</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

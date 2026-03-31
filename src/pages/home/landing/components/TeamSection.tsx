const TeamSection = () => {
  return (
    <section id="team">
      <div className="reveal">
        <div className="section-label">Team</div>
        <h2 className="section-title">
          금융 · 통계 · AI 핵심 분야의 연구진과 실행 조직
        </h2>
      </div>
      <div className="team-grid">
        <div className="team-card reveal">
          <span className="team-role">대표</span>
          <h4>CEO</h4>
          <div className="affil">서울대 재료공학 학/석사 · 기술경영경제정책 박사과정</div>
          <p>
            5년 개발경력 (C++, Flutter), 2년 금융경력 (사모펀드 운영). 스타트업
            앱서비스 직접 개발·운영 경험.
          </p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">공동연구</span>
          <h4>IDEA Lab.</h4>
          <div className="affil">서울대학교 통계학과</div>
          <p>
            대규모 통계 모델의 안정성·해석 가능성 검증. Survival Analysis, Bayesian
            Statistics, Statistical ML, Fair AI.
          </p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">공동연구</span>
          <h4>OPTIM. Lab.</h4>
          <div className="affil">서울시립대학교 통계학과</div>
          <p>
            금융 시계열·최적화 모델의 산업 적용 설계. Financial AI, Knowledge Graph,
            Synthetic Data Generation.
          </p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">연구원</span>
          <h4>AI/ML 연구원</h4>
          <div className="affil">서울시립대 통계데이터사이언스 석사</div>
          <p>
            분자독성 네트워크 기반 예측 모델, 멀티모달 AI 진단서비스, 도메인 특화
            파운데이션 모델 연구.
          </p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>10년차 풀스택 개발자</h4>
          <div className="affil">광운대 컴퓨터소프트웨어공학</div>
          <p>LG CNS SaaS 서비스 개발리드. PC App, Mobile App, Web 등 모든 서비스 형태의 개발 경력.</p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>7년차 풀스택 개발자</h4>
          <div className="affil">연세대 공과대학 석사 · Computer Vision</div>
          <p>LG CNS SaaS 서비스 백엔드리드. MAU 30만 앱서비스 CTO 경험. 데이터베이스 전문.</p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>5년차 프론트엔드 개발자</h4>
          <div className="affil">아주대 시스템보안</div>
          <p>
            LG CNS SaaS 서비스 프론트엔드. 이미지 편집 플랫폼 다수 개발. 레거시
            전환 및 성능 최적화 전문.
          </p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>4년차 풀스택 개발자</h4>
          <div className="affil">Oregon 주립대 컴퓨터공학</div>
          <p>LG CNS SaaS 서비스 풀스택. 자동매매 알고리즘 해커톤 입상, 오픈소스 기여. 유저 친화 설계.</p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>4년차 풀스택 개발자</h4>
          <div className="affil">한양대 컴퓨터소프트웨어학부</div>
          <p>LG CNS SaaS 서비스 풀스택. AI 기술 활용 서비스 CTO 경험. 정보올림피아드 경시 은상.</p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>4년차 풀스택 개발자</h4>
          <div className="affil">서울시립대 통계학과</div>
          <p>로보어드바이저 시스템 개발. Web 서비스 개발 전문. 새로운 기술 스택 도입 및 리팩토링 역량.</p>
        </div>
        <div className="team-card reveal">
          <span className="team-role">개발</span>
          <h4>3년차 풀스택 개발자</h4>
          <div className="affil">광운대 데이터사이언스</div>
          <p>LG CNS SaaS 서비스 프론트엔드. 실사용 중심 기능 개발. 학부생 특허·논문, 다수 공모전 입상.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

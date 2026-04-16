import type {
  RenewalAchievement,
  RenewalNavLink,
  RenewalPillar,
  RenewalProductB2B,
  RenewalProductCard,
  RenewalSolutionItem,
  RenewalStatCard,
  RenewalTeamMember,
} from './renewal.types';

/** Problem 섹션 카피 */
export const renewalProblemSectionCopy = {
  tag: 'Problem',
  title: 'AI는 넘쳐나지만,\n"무엇을 해야 하는가"에 대한 답은 없습니다',
  lead: '금융 현장에서 AI는 데이터를 분석하고 예측까지는 해줍니다.\n하지만 정작 중요한 의사결정 — 지금 매수할지, 이 고객을 어떻게 잡을지, 이 리스크를 어떻게 평가할지 — 은\n여전히 사람의 경험과 감에 의존하고 있습니다.',
};

/**
 * 네비게이션 — 링크 추가/수정 시 배열만 수정하면 됩니다.
 * RenewalNav 컴포넌트에서 i18n 키로 label을 override 합니다.
 */
export const renewalNavLinks: RenewalNavLink[] = [
  { id: 'products', label: '사업 영역' },
  { id: 'solution', label: '기술' },
  { id: 'achievements', label: '성과' },
  { id: 'history', label: '연혁' },
  { id: 'team', label: '팀' },
];

export const renewalTrustPartners: string[] = [
  '서울대학교',
  'IBK기업은행',
  'KB Innovation HUB',
  'LG CNS',
  '서울시립대학교',
  '기보',
  '서울핀테크랩',
  '한국핀테크지원센터',
  'BNK부산은행',
];

export const renewalPillars: RenewalPillar[] = [
  {
    id: 'pillar-core',
    variant: 'core',
    badge: 'CORE',
    sublabel: 'B2B SaaS',
    title: 'AI 기반\n금융 분석 엔진',
    description: '상태 예측 AI로 금융기관의 의사결정을 자동화하는 SaaS 솔루션',
  },
  {
    id: 'pillar-b2c',
    variant: 'surface',
    badge: 'B2C',
    sublabel: 'GLAB 서비스',
    title: '예측 분석\nLLM 솔루션',
    description: '1:1 AI PB로 개인 투자자에게 맞춤형 의사결정 코칭을 제공',
  },
  {
    id: 'pillar-si',
    variant: 'accent',
    badge: 'SI/SM',
    sublabel: 'IT 서비스',
    title: 'AI 중심\nIT SI/SM',
    description: 'AI 기술 기반의 시스템 구축 및 운영·관리 서비스',
  },
];

export const renewalProblemStats: RenewalStatCard[] = [
  {
    id: 'stat-1',
    number: '같은 데이터,\n다른 판단',
    label: '상태 정의가 없다',
    description:
      '같은 숫자를 보고도 사람마다 다르게 해석합니다. 지금 이 상황이 어떤 상태인지 정의하는 구조가 없기 때문입니다.',
  },
  {
    id: 'stat-2',
    number: '좋아지는 건지,\n나빠지는 건지',
    label: '변화 방향을 모른다',
    description:
      '지금 시점의 스냅샷만 보고 판단합니다. 상황이 어디서 왔고 어디로 가는지, 방향성을 파악하지 못합니다.',
  },
  {
    id: 'stat-3',
    number: '담당자마다\n다른 결정',
    label: '판단 기준이 없다',
    description:
      '같은 예측 결과를 보고도 사람마다 다른 결정을 내립니다. 기준이 머릿속에만 있어 일관성도, 확장성도 없습니다.',
    highlight: true,
  },
];

export const renewalSolutions: RenewalSolutionItem[] = [
  {
    id: 'sol-1',
    icon: '📊',
    title: '상태를 정의합니다',
    body: '숫자 나열이 아니라, "지금 어떤 판단이 필요한 상황인지"를 맥락과 함께 표현합니다. 같은 10% 수익률이라도 상승장 초입과 하락장 반등은 다르니까요.',
  },
  {
    id: 'sol-2',
    icon: '🔮',
    title: '변화 방향을 예측합니다',
    body: '지금 이 순간의 스냅샷이 아니라, 상태가 어디서 왔고 어디로 가고 있는지를 시계열 AI로 예측합니다. 방향성이 있어야 판단이 가능합니다.',
  },
  {
    id: 'sol-3',
    icon: '⚖️',
    title: '판단 기준을 세웁니다',
    body: '예측 결과에 리스크를 반영한 명시적 기준을 적용합니다. 담당자가 바뀌어도, 시장이 바뀌어도, 일관되고 합리적인 의사결정이 가능해집니다.',
  },
];

export const renewalProductB2B: RenewalProductB2B = {
  tag: '핵심 사업 · B2B SaaS',
  title: 'AI 기반 금융 분석 엔진',
  description:
    '상태 예측 AI로 금융기관의 의사결정을 자동화합니다. 기존 시스템을 건드리지 않고 도입할 수 있으며, 데이터가 쌓일수록 엔진이 강해지는 구조입니다.',
  features: [
    { id: 'f1', text: '고객이탈방지 · 연체예측 · 타겟마케팅 등 금융 전 영역' },
    { id: 'f2', text: '기존 분석 모델 위에 의사결정 레이어 추가' },
    { id: 'f3', text: '증권 · 카드 · 은행 · 보험 대응' },
  ],
};

export const renewalProductCards: RenewalProductCard[] = [
  {
    id: 'prod-glab',
    variant: 'b2c',
    tag: 'B2C 서비스',
    title: 'GLAB · 1:1 AI PB',
    description:
      '예측 분석 LLM 기반의 개인 투자 코칭 서비스입니다. 투자 금액과 무관하게 전문 PB 수준의 맞춤형 의사결정을 지원합니다.',
    features: [
      { id: 'g1', text: '시장 상태 분석 → 구체적인 행동 지침 제시' },
      { id: 'g2', text: '투자 성향 · 심리에 맞춘 초개인화 코칭' },
      { id: 'g3', text: '국내주식 · 미국주식 · 가상자산 · 퇴직연금' },
    ],
  },
  {
    id: 'prod-si',
    variant: 'si',
    tag: 'IT SI/SM',
    title: 'AI 중심 IT 서비스',
    description:
      'AI 기술 역량을 기반으로 금융·공공 영역의 시스템 구축(SI) 및 운영·관리(SM) 서비스를 제공합니다.',
    features: [
      { id: 's1', text: '금융 도메인 특화 AI 시스템 설계 및 구축' },
      { id: 's2', text: 'LG CNS 등 대형 프로젝트 수행 경험' },
      { id: 's3', text: '구축부터 운영까지 End-to-End 대응' },
    ],
  },
];

export const renewalAchievements: RenewalAchievement[] = [
  {
    id: 'ach-1',
    icon: '📜',
    title: '로보어드바이저\n운용심사 통과',
    description: '금융위원회 산하 테스트베드 심사 4회 연속 완료',
  },
  {
    id: 'ach-2',
    icon: '🏆',
    title: '하락 예측 정확도\n82.5%',
    description: '시장 하락 국면을 높은 정확도로 사전 감지',
  },
  {
    id: 'ach-3',
    icon: '📋',
    title: '특허 등록 완료',
    description: 'AI 기반 투자 비율 결정 방법 특허 보유',
  },
  {
    id: 'ach-4',
    icon: '🤝',
    title: '금융기관 협업',
    description: 'IBK · KB · BNK 등 현업 금융기관과 프로젝트 수행',
  },
];

export const renewalTeam: RenewalTeamMember[] = [
  {
    id: 'team-1',
    avatar: '🎓',
    name: '대표 · 연구',
    role: '서울대학교 학/석사 · 박사과정',
    description:
      '개발과 금융 양쪽 현장 경험을 바탕으로 기술과 사업을 연결합니다.',
  },
  {
    id: 'team-2',
    avatar: '🔬',
    avatarGradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    name: '공동연구',
    role: '서울대 · 서울시립대 통계학과',
    description:
      '금융 AI 모델의 학문적 타당성과 산업 적용성을 공동 검증합니다.',
  },
  {
    id: 'team-3',
    avatar: '💻',
    avatarGradient: 'linear-gradient(135deg,#059669,#34d399)',
    name: '개발팀 7명',
    role: '시니어 · 풀스택',
    description: '대형 SaaS 프로젝트 경험을 갖춘 실전형 팀입니다.',
  },
];

export const renewalHeroCopy = {
  titleLine1: '금융 AI,',
  titleEm: '엔진부터 시스템까지',
  description:
    '핵심 엔진 기술을 중심으로 B2B SaaS, B2C 서비스, IT 구축까지\n금융 AI 전 영역을 커버합니다.',
};

export const renewalSolutionSectionCopy = {
  tag: 'Technology',
  title: '예측을 넘어,\n판단까지 도달합니다',
  lead: '관악연구소의 AI는 숫자를 예측하는 데서 멈추지 않습니다.\n상태를 정의하고, 변화를 읽고, 기준을 세워 — 실행 가능한 의사결정을 만듭니다.',
};

export const renewalProductsSectionCopy = {
  tag: 'Business',
  title: '금융 AI의 모든 레이어를\n설계, 개발합니다',
  lead: '핵심 엔진 기술을 중심으로, B2B SaaS · B2C 서비스 · IT 구축까지\n금융 AI의 전 영역을 커버합니다.',
};

export const renewalTeamSectionCopy = {
  tag: 'Team',
  title: '서울대 출신 창업팀,\n현장을 아는 전문가들',
  lead: '서울대학교·서울시립대 통계학과 연구실과 공동연구 체계를 갖추고 있으며,\n금융·개발 현장 경험을 가진 팀이 기술을 서비스로 만듭니다.',
};

export const renewalAchievementsSectionCopy = {
  tag: 'Achievements',
  title: '검증된 기술',
};

export const renewalCtaCopy = {
  title: '합리적인 의사결정,\n지금 시작하세요',
  lead: '개인 투자자는 GLAB으로, 금융기관은 맞춤 상담으로 시작할 수 있습니다.',
  mailto: 'mailto:support@gwanaklab.com',
};

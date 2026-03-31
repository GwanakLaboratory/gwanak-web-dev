import StepImage1 from '../../../lib/assets/images/glab-guide/step-1.png';
import StepImage2 from '../../../lib/assets/images/glab-guide/step-2.png';
import StepImage3 from '../../../lib/assets/images/glab-guide/step-3.png';
import StepImage4 from '../../../lib/assets/images/glab-guide/step-4.png';
import StepImage5 from '../../../lib/assets/images/glab-guide/step-5.png';
import StepImage6 from '../../../lib/assets/images/glab-guide/step-6.png';

export type GlabGuideFeature = {
  iconBg: string;
  icon: string;
  text: string;
};

export type GlabGuideStep = {
  id: string;
  imageSrc: string;
  tag: string;
  titleBefore: string;
  titleEm: string;
  lead: string;
  features: GlabGuideFeature[];
};

export const GLAB_GUIDE_HERO = {
  badge: 'AI 디지털 PB 서비스',
  titleBefore: '투자, ',
  titleEm: 'GLAB',
  titleAfter: '에게',
  titleLine2: '물어보세요',
  description:
    'AI 기반 디지털 PB가 시장 분석부터 종목 진단까지,\n당신의 투자 판단을 돕습니다.',
};

export const GLAB_GUIDE_STEPS: GlabGuideStep[] = [
  {
    id: 'step1',
    imageSrc: StepImage1,
    tag: '채팅',
    titleBefore: '궁금한 건',
    titleEm: '바로 물어보세요',
    lead: '앱을 열면 AI PB와 대화할 준비가 되어 있습니다. 추천 질문을 탭하거나, 자유롭게 궁금한 투자 이야기를 입력해 보세요.',
    features: [
      {
        iconBg: 'rgba(59,91,219,0.08)',
        icon: '💬',
        text: '시장 전략, 종목 질문, ETF 가이드 등 자유로운 대화',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '⚡',
        text: '자주 묻는 질문을 추천 버튼으로 한 번에',
      },
    ],
  },
  {
    id: 'step2',
    imageSrc: StepImage2,
    tag: '대화 관리',
    titleBefore: '지난 상담도',
    titleEm: '언제든 다시',
    lead: '이전에 나눴던 AI 상담 내용을 대화 내역에서 확인할 수 있습니다. 사이드 메뉴를 열어 과거 대화를 이어가 보세요.',
    features: [
      {
        iconBg: 'rgba(59,91,219,0.08)',
        icon: '📋',
        text: '대화 주제별로 자동 정리되는 히스토리',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '🔄',
        text: '"이전 대화 불러오기"로 맥락 이어가기',
      },
    ],
  },
  {
    id: 'step3',
    imageSrc: StepImage3,
    tag: 'AI 분석',
    titleBefore: '데이터에 기반한',
    titleEm: '투자 인사이트',
    lead: '"삼성전자, 지금 사도 될까?" 같은 질문에 AI가 수익률, 변동성, 시장 분위기까지 분석해 구체적인 행동 가이드를 제공합니다.',
    features: [
      {
        iconBg: 'rgba(59,91,219,0.08)',
        icon: '📊',
        text: '실시간 수치와 함께 제공되는 맞춤 분석',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '🎯',
        text: '"어떻게 행동할지"까지 알려주는 구체적 가이드',
      },
    ],
  },
  {
    id: 'step4',
    imageSrc: StepImage4,
    tag: '종목 분석',
    titleBefore: '종목 리포트를',
    titleEm: '한 화면에',
    lead: '강점·리스크·관전 포인트를 한눈에 정리한 종합 요약과 단기·중기·장기 투자 전망, 최근 실적 차트까지 모두 담겨 있습니다.',
    features: [
      {
        iconBg: 'rgba(59,91,219,0.08)',
        icon: '📈',
        text: '강점, 리스크, 관전 포인트 한눈에 정리',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '📅',
        text: '분기별 매출·영업이익 추이 차트 제공',
      },
    ],
  },
  {
    id: 'step5',
    imageSrc: StepImage5,
    tag: '심화 데이터',
    titleBefore: '모멘텀과 공시',
    titleEm: '놓치지 마세요',
    lead: '가격 흐름, 변동성, 거래량을 모멘텀 차트로 한눈에 파악하고, 최근 공시 정보까지 실시간으로 확인할 수 있습니다.',
    features: [
      {
        iconBg: 'rgba(59,91,219,0.08)',
        icon: '🔔',
        text: '자기주식 처분, 주주총회 등 최근 공시 한 곳에',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '📉',
        text: '가격·최대손실률·거래량 모멘텀 차트',
      },
    ],
  },
  {
    id: 'step6',
    imageSrc: StepImage6,
    tag: '설정',
    titleBefore: '간편 로그인으로',
    titleEm: '바로 시작',
    lead: '카카오 간편 로그인으로 빠르게 가입하고, 테마 설정이나 피드백 보내기 등 필요한 설정을 마이페이지에서 관리하세요.',
    features: [
      {
        iconBg: 'rgba(250,215,0,0.15)',
        icon: '🔑',
        text: '카카오 간편 로그인으로 1초 회원가입',
      },
      {
        iconBg: 'rgba(32,201,151,0.08)',
        icon: '🎨',
        text: '다크/라이트 테마 전환 지원',
      },
    ],
  },
];

export const GLAB_GUIDE_CTA = {
  title: '지금 GLAB을 시작하세요',
  description: 'AI 디지털 PB와 함께하는 스마트한 투자 생활',
};

export const GLAB_GUIDE_FOOTER =
  'GLAB은 투자 결정을 대신하지 않고, 이해와 판단을 돕는 AI PB입니다. 본 서비스에서 제공하는 정보는 투자 권유가 아니며, 투자 손익은 이용자의 책임입니다.';

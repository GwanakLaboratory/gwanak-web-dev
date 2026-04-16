/** 리뉴얼 랜딩 — 콘텐츠/섹션 확장 시 타입을 여기서 관리합니다. */

export type RenewalNavLink = {
  id: string;
  label: string;
};

export type RenewalPillar = {
  id: string;
  variant: 'core' | 'surface' | 'accent';
  badge: string;
  sublabel: string;
  title: string;
  description: string;
};

export type RenewalStatCard = {
  id: string;
  number: string;
  label: string;
  description: string;
  highlight?: boolean;
};

export type RenewalSolutionItem = {
  id: string;
  icon: string;
  title: string;
  body: string;
};

export type RenewalProductFeature = {
  id: string;
  text: string;
};

export type RenewalProductB2B = {
  tag: string;
  title: string;
  description: string;
  features: RenewalProductFeature[];
};

export type RenewalProductCard = {
  id: string;
  variant: 'b2b' | 'b2b-advisory' | 'b2c' | 'si';
  tag: string;
  title: string;
  description: string;
  features: RenewalProductFeature[];
};

export type RenewalAchievement = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type RenewalTeamMember = {
  id: string;
  avatar: string;
  avatarGradient?: string;
  name: string;
  role: string;
  description: string;
};

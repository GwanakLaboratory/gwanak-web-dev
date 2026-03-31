export const NAV_SCROLL_IDS = [
  'intro',
  'about',
  'service',
  'projects',
  'achievements',
  'team',
  'contact',
] as const;

export type NavScrollId = (typeof NAV_SCROLL_IDS)[number];

export const SECTION_LABELS: Record<NavScrollId, string> = {
  intro: '홈',
  about: 'About',
  service: 'glab 서비스',
  projects: 'Projects',
  achievements: 'Achievements',
  team: 'Team',
  contact: 'Contact',
};

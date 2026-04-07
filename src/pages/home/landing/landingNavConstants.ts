export const NAV_SCROLL_IDS = [
  'intro',
  'about',
  'projects',
  'achievements',
  'contact',
] as const;

export type NavScrollId = (typeof NAV_SCROLL_IDS)[number];

export const SECTION_LABELS: Record<NavScrollId, string> = {
  intro: 'Home',
  about: 'About',
  projects: 'Projects',
  achievements: 'Achievements',
  contact: 'Contact',
};

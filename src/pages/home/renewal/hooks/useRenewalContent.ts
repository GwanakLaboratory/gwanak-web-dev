import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type {
  RenewalAchievement,
  RenewalPillar,
  RenewalProductB2B,
  RenewalProductCard,
  RenewalSolutionItem,
  RenewalStatCard,
  RenewalTeamMember,
} from '../renewal.types';

/** 리뉴얼 랜딩 카피 — `resources.ts`의 `landing.renewal.*` 에서 로드 */
export function useRenewalContent() {
  const { t } = useTranslation();

  return useMemo(() => {
    const problemSectionCopy = {
      tag: t('landing.renewal.problem.tag'),
      title: t('landing.renewal.problem.title'),
      lead: t('landing.renewal.problem.lead'),
    };

    const problemStats: RenewalStatCard[] = [
      {
        id: 'stat-1',
        number: t('landing.renewal.problem.stats.stat1.number'),
        label: t('landing.renewal.problem.stats.stat1.label'),
        description: t('landing.renewal.problem.stats.stat1.description'),
      },
      {
        id: 'stat-2',
        number: t('landing.renewal.problem.stats.stat2.number'),
        label: t('landing.renewal.problem.stats.stat2.label'),
        description: t('landing.renewal.problem.stats.stat2.description'),
      },
      {
        id: 'stat-3',
        number: t('landing.renewal.problem.stats.stat3.number'),
        label: t('landing.renewal.problem.stats.stat3.label'),
        description: t('landing.renewal.problem.stats.stat3.description'),
        highlight: true,
      },
    ];

    const pillars: RenewalPillar[] = [
      {
        id: 'pillar-core',
        variant: 'core',
        badge: t('landing.renewal.pillars.core.badge'),
        sublabel: t('landing.renewal.pillars.core.sublabel'),
        title: t('landing.renewal.pillars.core.title'),
        description: t('landing.renewal.pillars.core.description'),
      },
      {
        id: 'pillar-b2c',
        variant: 'surface',
        badge: t('landing.renewal.pillars.b2c.badge'),
        sublabel: t('landing.renewal.pillars.b2c.sublabel'),
        title: t('landing.renewal.pillars.b2c.title'),
        description: t('landing.renewal.pillars.b2c.description'),
      },
      {
        id: 'pillar-si',
        variant: 'accent',
        badge: t('landing.renewal.pillars.si.badge'),
        sublabel: t('landing.renewal.pillars.si.sublabel'),
        title: t('landing.renewal.pillars.si.title'),
        description: t('landing.renewal.pillars.si.description'),
      },
    ];

    const solutions: RenewalSolutionItem[] = [
      {
        id: 'sol-1',
        icon: '📊',
        title: t('landing.renewal.solutions.sol1.title'),
        body: t('landing.renewal.solutions.sol1.body'),
      },
      {
        id: 'sol-2',
        icon: '🔮',
        title: t('landing.renewal.solutions.sol2.title'),
        body: t('landing.renewal.solutions.sol2.body'),
      },
      {
        id: 'sol-3',
        icon: '⚖️',
        title: t('landing.renewal.solutions.sol3.title'),
        body: t('landing.renewal.solutions.sol3.body'),
      },
    ];

    const productB2B: RenewalProductB2B = {
      tag: t('landing.renewal.products.b2b.tag'),
      title: t('landing.renewal.products.b2b.title'),
      description: t('landing.renewal.products.b2b.description'),
      features: [
        { id: 'f1', text: t('landing.renewal.products.b2b.f1') },
        { id: 'f2', text: t('landing.renewal.products.b2b.f2') },
        { id: 'f3', text: t('landing.renewal.products.b2b.f3') },
      ],
    };

    const productCards: RenewalProductCard[] = [
      {
        id: 'prod-glab',
        variant: 'b2c',
        tag: t('landing.renewal.products.glab.tag'),
        title: t('landing.renewal.products.glab.title'),
        description: t('landing.renewal.products.glab.description'),
        features: [
          { id: 'g1', text: t('landing.renewal.products.glab.g1') },
          { id: 'g2', text: t('landing.renewal.products.glab.g2') },
          { id: 'g3', text: t('landing.renewal.products.glab.g3') },
        ],
      },
      {
        id: 'prod-si',
        variant: 'si',
        tag: t('landing.renewal.products.si.tag'),
        title: t('landing.renewal.products.si.title'),
        description: t('landing.renewal.products.si.description'),
        features: [
          { id: 's1', text: t('landing.renewal.products.si.s1') },
          { id: 's2', text: t('landing.renewal.products.si.s2') },
          { id: 's3', text: t('landing.renewal.products.si.s3') },
        ],
      },
    ];

    const achievements: RenewalAchievement[] = [
      {
        id: 'ach-1',
        icon: '📜',
        title: t('landing.renewal.achievementsCards.ach1.title'),
        description: t('landing.renewal.achievementsCards.ach1.description'),
      },
      {
        id: 'ach-2',
        icon: '🏆',
        title: t('landing.renewal.achievementsCards.ach2.title'),
        description: t('landing.renewal.achievementsCards.ach2.description'),
      },
      {
        id: 'ach-3',
        icon: '📋',
        title: t('landing.renewal.achievementsCards.ach3.title'),
        description: t('landing.renewal.achievementsCards.ach3.description'),
      },
      {
        id: 'ach-4',
        icon: '🤝',
        title: t('landing.renewal.achievementsCards.ach4.title'),
        description: t('landing.renewal.achievementsCards.ach4.description'),
      },
    ];

    const team: RenewalTeamMember[] = [
      {
        id: 'team-1',
        avatar: '🎓',
        name: t('landing.renewal.teamMembers.m1.name'),
        role: t('landing.renewal.teamMembers.m1.role'),
        description: t('landing.renewal.teamMembers.m1.description'),
      },
      {
        id: 'team-2',
        avatar: '🔬',
        avatarGradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
        name: t('landing.renewal.teamMembers.m2.name'),
        role: t('landing.renewal.teamMembers.m2.role'),
        description: t('landing.renewal.teamMembers.m2.description'),
      },
      {
        id: 'team-3',
        avatar: '💻',
        avatarGradient: 'linear-gradient(135deg,#059669,#34d399)',
        name: t('landing.renewal.teamMembers.m3.name'),
        role: t('landing.renewal.teamMembers.m3.role'),
        description: t('landing.renewal.teamMembers.m3.description'),
      },
    ];

    const solutionSectionCopy = {
      tag: t('landing.renewal.section.solutionTag'),
      title: t('landing.renewal.section.solutionTitle'),
      lead: t('landing.renewal.section.solutionLead'),
    };

    const productsSectionCopy = {
      tag: t('landing.renewal.section.productsTag'),
      title: t('landing.renewal.section.productsTitle'),
      lead: t('landing.renewal.section.productsLead'),
    };

    const achievementsSectionCopy = {
      tag: t('landing.renewal.achievementsHeader.tag'),
      title: t('landing.renewal.achievementsHeader.title'),
    };

    const teamSectionCopy = {
      tag: t('landing.renewal.teamSection.tag'),
      title: t('landing.renewal.teamSection.title'),
      lead: t('landing.renewal.teamSection.lead'),
    };

    const ctaCopy = {
      title: t('landing.renewal.cta.title'),
      lead: t('landing.renewal.cta.lead'),
      /** 기존 랜딩 `LandingPage` CONTACT_EMAIL 과 동일 */
      mailto: 'mailto:support@gwanaklab.co.kr',
    };

    return {
      problemSectionCopy,
      problemStats,
      pillars,
      solutions,
      productB2B,
      productCards,
      achievements,
      team,
      solutionSectionCopy,
      productsSectionCopy,
      achievementsSectionCopy,
      teamSectionCopy,
      ctaCopy,
      documentTitle: t('landing.renewal.meta.documentTitle'),
    };
  }, [t]);
}

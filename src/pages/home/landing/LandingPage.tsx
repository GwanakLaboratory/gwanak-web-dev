import { useEffect, useCallback, useRef, useState } from 'react';
import { S } from './style';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import LandingFooter from './components/LandingFooter';
import LegacyHeroSection from './components/LegacyHeroSection';
import ProjectsSection from './components/ProjectsSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';

const NAV_SCROLL_IDS = [
  'intro',
  'about',
  'service',
  'projects',
  'achievements',
  'team',
  'contact',
] as const;

type NavScrollId = (typeof NAV_SCROLL_IDS)[number];

function topWithinScroller(scroller: HTMLElement, el: HTMLElement): number {
  return (
    scroller.scrollTop +
    (el.getBoundingClientRect().top - scroller.getBoundingClientRect().top)
  );
}

function resolveActiveSection(
  scroller: HTMLElement,
  navHeight: number,
): NavScrollId {
  const maxScroll = scroller.scrollHeight - scroller.clientHeight;
  const scrollTop = scroller.scrollTop;
  const slack = 32;
  const nearBottom = maxScroll > 0 && maxScroll - scrollTop <= slack;

  if (nearBottom) {
    const contact = scroller.querySelector('#contact');
    if (contact instanceof HTMLElement) {
      return 'contact';
    }
  }

  const probe = scrollTop + navHeight + 44;
  let active: NavScrollId = 'intro';
  for (const id of NAV_SCROLL_IDS) {
    const node = scroller.querySelector(`#${id}`);
    if (!(node instanceof HTMLElement)) continue;
    if (topWithinScroller(scroller, node) <= probe) active = id;
  }
  return active;
}

const LandingPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<NavScrollId>('intro');

  const getNavOffset = useCallback(() => {
    const nav = wrapperRef.current?.querySelector('nav');
    if (!(nav instanceof HTMLElement)) return 0;
    return nav.getBoundingClientRect().height;
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const target = wrapper.querySelector(`#${id}`);
      if (!(target instanceof HTMLElement)) return;

      const navOffset = getNavOffset();
      const y = topWithinScroller(wrapper, target) - navOffset;
      wrapper.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    },
    [getNavOffset],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 },
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    let ticking = false;
    const tick = () => {
      ticking = false;
      setActiveSection(resolveActiveSection(wrap, getNavOffset()));
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    };

    tick();
    wrap.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      wrap.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [getNavOffset]);

  const navLinkClass = (id: NavScrollId) =>
    activeSection === id ? 'active' : undefined;

  return (
    <S.LandingWrapper ref={wrapperRef}>
      <nav>
        <a
          className="nav-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            wrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          관악연구소 <span>GWANAK LAB</span>
        </a>

        <div className="nav-links">
          <a
            className={navLinkClass('intro')}
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('intro');
            }}
          >
            홈
          </a>
          <a
            className={navLinkClass('about')}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
          >
            About
          </a>
          <a
            className={navLinkClass('service')}
            href="#service"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('service');
            }}
          >
            glab 서비스
          </a>
          <a
            className={navLinkClass('projects')}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('projects');
            }}
          >
            Projects
          </a>
          <a
            className={navLinkClass('achievements')}
            href="#achievements"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('achievements');
            }}
          >
            Achievements
          </a>
          <a
            className={navLinkClass('team')}
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('team');
            }}
          >
            Team
          </a>
          <a
            className={navLinkClass('contact')}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            Contact
          </a>
        </div>

        <button className="nav-cta" onClick={() => scrollTo('service')}>
          시작하기
        </button>
      </nav>

      <div id="intro" className="landing-intro">
        <LegacyHeroSection />
        <HeroSection
          onStart={() => scrollTo('service')}
          onContact={() => scrollTo('contact')}
        />
      </div>
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <AchievementsSection />
      <TeamSection />
      <ContactSection />
      <LandingFooter />
    </S.LandingWrapper>
  );
};

export default LandingPage;

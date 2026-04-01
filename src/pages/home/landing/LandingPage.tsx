import { useEffect, useCallback, useRef, useState } from 'react';
import { S } from './style';
import LandingNavBar from '../../../components/common/LandingNavBar';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import LandingFooter from './components/LandingFooter';
import ProjectsSection from './components/ProjectsSection';
import LandingContactModal from './components/LandingContactModal';
import TeamSection from './components/TeamSection';
import {
  NAV_SCROLL_IDS,
  type NavScrollId,
} from './landingNavConstants';

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
  const [contactOpen, setContactOpen] = useState(false);
  const contactEmail = 'support@gwanaklab.co.kr';

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

  const copyEmailToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      const temp = document.createElement('textarea');
      temp.value = contactEmail;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
  }, [contactEmail]);

  const openContactModal = useCallback(() => {
    setContactOpen(true);
  }, []);

  return (
    <S.LandingWrapper ref={wrapperRef}>
      <LandingNavBar
        variant="landing"
        wrapperRef={wrapperRef}
        activeSection={activeSection}
        scrollTo={scrollTo}
        navLinkClass={navLinkClass}
      />

      <div id="intro" className="landing-intro">
        <HeroSection onContact={openContactModal} />
      </div>
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <TeamSection />
      <ContactSection onContact={openContactModal} />
      <LandingFooter />
      <LandingContactModal
        isOpen={contactOpen}
        email={contactEmail}
        onClose={() => setContactOpen(false)}
        onCopy={copyEmailToClipboard}
      />
    </S.LandingWrapper>
  );
};

export default LandingPage;

import styled from '@emotion/styled';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { RenewalNavLink } from '../renewal.types';

const NavRoot = styled.nav<{ $shadow: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 251, 253, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-light);
  transition: all 0.3s;
  box-shadow: ${({ $shadow }) =>
    $shadow ? '0 1px 12px rgba(0,0,0,0.06)' : 'none'};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;

/** 기존 랜딩 네비와 동일 이미지 (`LandingNavBar`) */
const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  cursor: pointer;

  img {
    height: 52px;
    width: auto;
    display: block;
  }

  @media (max-width: 900px) {
    img {
      height: 44px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
`;

const Cta = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 8px;
  padding: 9px 20px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background: var(--accent-dark);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LangWrap = styled.div`
  position: relative;
`;

const LangTrigger = styled.button<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid
    ${({ $open }) => ($open ? 'var(--accent)' : 'var(--border)')};
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const LangMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 84px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 6px;
  z-index: 120;
`;

const LangOption = styled.button<{ $active?: boolean }>`
  width: 100%;
  border: none;
  border-radius: 7px;
  background: ${({ $active }) =>
    $active ? 'var(--accent-light)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--accent)' : 'var(--text-secondary)'};
  font-size: 12px;
  font-weight: 700;
  padding: 7px 8px;
  text-align: left;
  cursor: pointer;
`;

export type RenewalNavProps = {
  links: RenewalNavLink[];
  navShadow: boolean;
  /** 기존 랜딩과 동일 — 문의 모달 열기 */
  onContact?: () => void;
};

const RenewalNav = forwardRef<HTMLElement, RenewalNavProps>(function RenewalNav(
  { links, navShadow, onContact },
  ref,
) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <NavRoot ref={ref} $shadow={navShadow}>
      <Inner>
        <LogoLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/gwanak-logo.png" alt="GWANAK LAB logo" />
        </LogoLink>
        <Links>
          {links.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              {t(`landing.renewal.nav.${item.id}`, {
                defaultValue: item.label,
              })}
            </Link>
          ))}
        </Links>
        <Actions>
          <LangWrap ref={langRef}>
            <LangTrigger
              type="button"
              $open={langOpen}
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {i18n.language === 'ko' ? '🇰🇷 KO' : '🇺🇸 EN'}{' '}
              <span aria-hidden>▾</span>
            </LangTrigger>
            {langOpen && (
              <LangMenu role="listbox" aria-label="Language">
                <LangOption
                  type="button"
                  $active={i18n.language === 'ko'}
                  onClick={() => {
                    void i18n.changeLanguage('ko');
                    setLangOpen(false);
                  }}
                >
                  🇰🇷 KO
                </LangOption>
                <LangOption
                  type="button"
                  $active={i18n.language === 'en'}
                  onClick={() => {
                    void i18n.changeLanguage('en');
                    setLangOpen(false);
                  }}
                >
                  🇺🇸 EN
                </LangOption>
              </LangMenu>
            )}
          </LangWrap>
          {onContact ? (
            <Cta as="button" type="button" onClick={onContact}>
              {t('landing.renewal.nav.contact', { defaultValue: '문의하기' })}
            </Cta>
          ) : (
            <Cta href="#contact">
              {t('landing.renewal.nav.contact', { defaultValue: '문의하기' })}
            </Cta>
          )}
        </Actions>
      </Inner>
    </NavRoot>
  );
});

export default RenewalNav;

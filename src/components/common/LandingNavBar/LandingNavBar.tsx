import { useEffect, useRef, useState, type RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../../i18n/useLocalizedPath';
import { useSignOutMutation } from '../../../apis';
import { accessTokenAtom } from '../../../store/auth';
import {
  NAV_SCROLL_IDS,
  type NavScrollId,
} from '../../../pages/home/landing/landingNavConstants';
import { NavShell } from './style';

/** 리전 인디케이터 이모지(🇰🇷 🇺🇸). 일부 구형 윈도우에서는 KR/US 두 글자로 보일 수 있음 */
const FLAG_EMOJI_KR = '\u{1F1F0}\u{1F1F7}';
const FLAG_EMOJI_US = '\u{1F1FA}\u{1F1F8}';

type LandingNavBarProps =
  | {
      variant: 'landing';
      wrapperRef: RefObject<HTMLDivElement | null>;
      activeSection: NavScrollId;
      scrollTo: (id: string) => void;
      navLinkClass: (id: NavScrollId) => string | undefined;
    }
  | {
      variant: 'auth';
    };

const LandingNavBar = (props: LandingNavBarProps) => {
  const accessToken = useAtomValue(accessTokenAtom);
  const logoutMutation = useSignOutMutation();
  const { t, i18n } = useTranslation();
  const localizedPath = useLocalizedPath();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    if (window.confirm(t('ui.logoutConfirm'))) {
      logoutMutation.mutate();
    }
  };

  const isAuth = props.variant === 'auth';
  const shellClass = isAuth
    ? 'landing-nav-root landing-nav--auth'
    : 'landing-nav-root landing-nav--landing';

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
    <NavShell className={shellClass}>
      <nav>
        {isAuth ? (
          <Link className="nav-logo" to={localizedPath('/')}>
            <img src="/gwanak-logo.png" alt="GWANAK LAB logo" />
          </Link>
        ) : (
          <a
            className="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.wrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/gwanak-logo.png" alt="GWANAK LAB logo" />
          </a>
        )}

        <div className="nav-links">
          {NAV_SCROLL_IDS.map((id) =>
            isAuth ? (
              <a key={id} href={`${localizedPath('/')}#${id}`}>
                {t(`landing.nav.sections.${id}`)}
              </a>
            ) : (
              <a
                key={id}
                className={props.navLinkClass(id)}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  props.scrollTo(id);
                }}
              >
                {t(`landing.nav.sections.${id}`)}
              </a>
            ),
          )}
        </div>

        <div className="nav-actions">
          <div className="nav-lang-dropdown" ref={langRef}>
            <button
              type="button"
              className={`nav-lang-trigger${langOpen ? ' open' : ''}`}
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={
                i18n.language === 'ko'
                  ? 'Language: Korean, select English'
                  : 'Language: English, select Korean'
              }
            >
              <span className="nav-lang-trigger-inner">
                <span className="nav-lang-flag-emoji" aria-hidden>
                  {i18n.language === 'ko' ? FLAG_EMOJI_KR : FLAG_EMOJI_US}
                </span>
                <span className="nav-lang-code">{i18n.language === 'ko' ? 'KO' : 'EN'}</span>
              </span>
              <span className="nav-lang-chevron" aria-hidden>
                ▾
              </span>
            </button>
            {langOpen && (
              <div className="nav-lang-menu" role="listbox" aria-label="Language">
                <button
                  type="button"
                  className={`nav-lang-option${i18n.language === 'ko' ? ' active' : ''}`}
                  onClick={() => {
                    void i18n.changeLanguage('ko');
                    setLangOpen(false);
                  }}
                >
                  <span className="nav-lang-option-inner">
                    <span className="nav-lang-flag-emoji" aria-hidden>
                      {FLAG_EMOJI_KR}
                    </span>
                    <span>KO</span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`nav-lang-option${i18n.language === 'en' ? ' active' : ''}`}
                  onClick={() => {
                    void i18n.changeLanguage('en');
                    setLangOpen(false);
                  }}
                >
                  <span className="nav-lang-option-inner">
                    <span className="nav-lang-flag-emoji" aria-hidden>
                      {FLAG_EMOJI_US}
                    </span>
                    <span>EN</span>
                  </span>
                </button>
              </div>
            )}
          </div>
          {isAuth && (
            <>
              <Link className="nav-auth-btn nav-auth-soft" to={localizedPath('/auth/portfolios')}>
                {t('landing.nav.portfolio')}
              </Link>
              {accessToken !== null && accessToken !== '' ? (
                <button
                  type="button"
                  className="nav-auth-btn nav-auth-outline"
                  onClick={handleLogout}
                >
                  {t('landing.nav.logout')}
                </button>
              ) : (
                <Link className="nav-auth-btn nav-auth-outline" to={localizedPath('/login')}>
                  {t('landing.nav.loginSignup')}
                </Link>
              )}
            </>
          )}
        </div>
      </nav>
    </NavShell>
  );
};

export default LandingNavBar;

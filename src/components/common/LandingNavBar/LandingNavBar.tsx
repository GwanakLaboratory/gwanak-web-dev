import type { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../../i18n/useLocalizedPath';
import { useLanguageSwitch } from '../../../i18n/useLanguageSwitch';
import { useSignOutMutation } from '../../../apis';
import { accessTokenAtom } from '../../../store/auth';
import {
  NAV_SCROLL_IDS,
  type NavScrollId,
} from '../../../pages/home/landing/landingNavConstants';
import { NavShell } from './style';
import LogoPNG from '../../../lib/assets/images/logo_transparent.png';

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
  const switchLanguage = useLanguageSwitch();

  const handleLogout = () => {
    if (window.confirm(t('ui.logoutConfirm'))) {
      logoutMutation.mutate();
    }
  };

  const isAuth = props.variant === 'auth';
  const shellClass = isAuth
    ? 'landing-nav-root landing-nav--auth'
    : 'landing-nav-root landing-nav--landing';

  return (
    <NavShell className={shellClass}>
      <nav>
        {isAuth ? (
          <Link className="nav-logo" to={localizedPath('/')}>
            <img src={LogoPNG} alt="GWANAK LAB logo" />
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
            <img src={LogoPNG} alt="GWANAK LAB logo" />
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

        {isAuth && (
          <div className="nav-actions">
            <button type="button" className="nav-auth-btn nav-lang-btn" onClick={switchLanguage}>
              {i18n.language === 'ko' ? 'EN' : 'KO'}
            </button>
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
          </div>
        )}
      </nav>
    </NavShell>
  );
};

export default LandingNavBar;

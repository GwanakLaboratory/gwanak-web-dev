import type { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useSignOutMutation } from '../../../apis';
import { accessTokenAtom } from '../../../store/auth';
import {
  NAV_SCROLL_IDS,
  SECTION_LABELS,
  type NavScrollId,
} from '../../../pages/home/landing/landingNavConstants';
import { NavShell } from './style';

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

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logoutMutation.mutate();
    }
  };

  const isAuth = props.variant === 'auth';
  const shellClass = isAuth ? 'landing-nav-root landing-nav--auth' : 'landing-nav-root';

  return (
    <NavShell className={shellClass}>
      <nav>
        {isAuth ? (
          <Link className="nav-logo" to="/">
            관악연구소 <span>GWANAK LAB</span>
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
            관악연구소 <span>GWANAK LAB</span>
          </a>
        )}

        <div className="nav-links">
          {NAV_SCROLL_IDS.map((id) =>
            isAuth ? (
              <a key={id} href={`/#${id}`}>
                {SECTION_LABELS[id]}
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
                {SECTION_LABELS[id]}
              </a>
            ),
          )}
        </div>

        <div className="nav-actions">
          {!isAuth && (
            <button
              type="button"
              className="nav-cta"
              onClick={() => props.scrollTo('service')}
            >
              시작하기
            </button>
          )}
          <Link className="nav-auth-btn nav-auth-soft" to="/auth/portfolios">
            포트폴리오
          </Link>
          {accessToken !== null && accessToken !== '' ? (
            <button
              type="button"
              className="nav-auth-btn nav-auth-outline"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          ) : (
            <Link className="nav-auth-btn nav-auth-outline" to="/login">
              로그인 · 회원가입
            </Link>
          )}
        </div>
      </nav>
    </NavShell>
  );
};

export default LandingNavBar;

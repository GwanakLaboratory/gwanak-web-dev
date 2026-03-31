import { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useSignOutMutation } from '../../../apis';
import { accessTokenAtom } from '../../../store/auth';
import { NAV_SCROLL_IDS, SECTION_LABELS } from '../landing/landingNavConstants';
import { S } from './glabGuideMobileNavStyle';

const GlabGuideMobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const accessToken = useAtomValue(accessTokenAtom);
  const logoutMutation = useSignOutMutation();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logoutMutation.mutate();
      close();
    }
  };

  const menu = open
    ? createPortal(
        <>
          <S.Backdrop onClick={close} aria-hidden />
          <S.Panel
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="사이트 메뉴"
          >
            <S.PanelHeader>
              <Link to="/" onClick={close}>
                관악연구소 <span>GWANAK LAB</span>
              </Link>
              <S.CloseBtn type="button" aria-label="메뉴 닫기" onClick={close}>
                ×
              </S.CloseBtn>
            </S.PanelHeader>
            <S.NavList>
              {NAV_SCROLL_IDS.map((id) => (
                <li key={id}>
                  <S.NavLink href={`/#${id}`} onClick={close}>
                    {SECTION_LABELS[id]}
                  </S.NavLink>
                </li>
              ))}
              <li>
                <S.NavLinkRouter to="/auth/portfolios" onClick={close}>
                  포트폴리오
                </S.NavLinkRouter>
              </li>
              {accessToken !== null && accessToken !== '' ? (
                <li>
                  <S.NavButton type="button" onClick={handleLogout}>
                    로그아웃
                  </S.NavButton>
                </li>
              ) : (
                <li>
                  <S.NavLinkRouter to="/login" onClick={close}>
                    로그인 · 회원가입
                  </S.NavLinkRouter>
                </li>
              )}
            </S.NavList>
          </S.Panel>
        </>,
        document.body,
      )
    : null;

  return (
    <>
      <S.Bar>
        <S.Hamburger
          type="button"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="dialog"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </S.Hamburger>
      </S.Bar>
      {menu}
    </>
  );
};

export default GlabGuideMobileNav;

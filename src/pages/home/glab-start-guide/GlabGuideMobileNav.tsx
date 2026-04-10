import { useCallback, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../../i18n/useLocalizedPath';
import { useLanguageSwitch } from '../../../i18n/useLanguageSwitch';
import { useSignOutMutation } from '../../../apis';
import { accessTokenAtom } from '../../../store/auth';
import { NAV_SCROLL_IDS } from '../landing/landingNavConstants';
import { S } from './glabGuideMobileNavStyle';

const GlabGuideMobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const accessToken = useAtomValue(accessTokenAtom);
  const logoutMutation = useSignOutMutation();
  const { t, i18n } = useTranslation();
  const localizedPath = useLocalizedPath();
  const switchLanguage = useLanguageSwitch();

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
    if (window.confirm(t('ui.logoutConfirm'))) {
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
            aria-label={t('ui.siteMenu')}
          >
            <S.PanelHeader>
              <Link to={localizedPath('/')} onClick={close}>
                <img src="/gwanak-logo.png" alt="GWANAK LAB logo" />
              </Link>
              <S.CloseBtn type="button" aria-label={t('ui.closeMenu')} onClick={close}>
                ×
              </S.CloseBtn>
            </S.PanelHeader>
            <S.NavList>
              {NAV_SCROLL_IDS.map((id) => (
                <li key={id}>
                  <S.NavLink href={`${localizedPath('/')}#${id}`} onClick={close}>
                    {t(`landing.nav.sections.${id}`)}
                  </S.NavLink>
                </li>
              ))}
              <li>
                <S.NavButton type="button" onClick={switchLanguage}>
                  {i18n.language === 'ko' ? 'Switch to English' : '한국어로 전환'}
                </S.NavButton>
              </li>
              <li>
                <S.NavLinkRouter to={localizedPath('/auth/portfolios')} onClick={close}>
                  {t('landing.nav.portfolio')}
                </S.NavLinkRouter>
              </li>
              {accessToken !== null && accessToken !== '' ? (
                <li>
                  <S.NavButton type="button" onClick={handleLogout}>
                    {t('landing.nav.logout')}
                  </S.NavButton>
                </li>
              ) : (
                <li>
                  <S.NavLinkRouter to={localizedPath('/login')} onClick={close}>
                    {t('landing.nav.loginSignup')}
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
          aria-label={open ? t('ui.closeMenu') : t('ui.openMenu')}
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

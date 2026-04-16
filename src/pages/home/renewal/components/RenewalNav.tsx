import styled from '@emotion/styled';
import { forwardRef } from 'react';
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

const Logo = styled.div`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-primary);

  span {
    color: var(--accent);
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

export type RenewalNavProps = {
  links: RenewalNavLink[];
  navShadow: boolean;
};

const RenewalNav = forwardRef<HTMLElement, RenewalNavProps>(function RenewalNav(
  { links, navShadow },
  ref,
) {
  const { t } = useTranslation();

  return (
    <NavRoot ref={ref} $shadow={navShadow}>
      <Inner>
        <Logo>
          <span>관악</span>연구소
        </Logo>
        <Links>
          {links.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              {t(`landing.renewal.nav.${item.id}`, {
                defaultValue: item.label,
              })}
            </Link>
          ))}
        </Links>
        <Cta href="#contact">
          {t('landing.renewal.nav.contact', { defaultValue: '문의하기' })}
        </Cta>
      </Inner>
    </NavRoot>
  );
});

export default RenewalNav;

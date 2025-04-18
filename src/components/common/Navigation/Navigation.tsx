import { Link, NavLink } from 'react-router-dom';
import { S } from './style';
import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/auth';
import LogoWhiteSVG from '../../../lib/assets/images/logo_white.svg';
import Modal from '../Modal';
import Text from '../Text';
import { useSignOutMutation } from '../../../apis';
import MobileNavigation from '../MobileNavigation';
export type NavigationItemProps = {
  name: string;
  link: string;
  nested?: NavigationItemProps[];
};

const Navigation = ({ navList }: { navList: NavigationItemProps[] }) => {
  const accessToken = useAtomValue(accessTokenAtom);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoutMutation = useSignOutMutation();
  const renderNavLink = (to: string, label: string) => (
    <NavLink
      end
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? 'active' : isPending ? 'pending' : ''
      }
    >
      <Text color="White" typograph="lg_regular" style={{ lineHeight: '200%' }}>
        {label}
      </Text>
    </NavLink>
  );

  const renderNavItems = () =>
    navList.map((item, idx) => {
      const isHovered = hoveredItem === idx;

      if (!item.nested) {
        return (
          <S.NavItem key={idx}>
            {renderNavLink(`/${item.link}`, item.name)}
          </S.NavItem>
        );
      }

      return (
        <S.NavItem
          key={idx}
          onMouseEnter={() => setHoveredItem(idx)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link to="#">
            <Text
              color="White"
              typograph="lg_regular"
              style={{ lineHeight: '200%' }}
            >
              {item.name}
            </Text>
          </Link>
          {isHovered && (
            <S.NestedItemsContainer>
              {item.nested.map((nested) => (
                <S.NestedItem key={nested.name}>
                  {nested.link === '#' ? (
                    <Text color="White" typograph="lg_regular">
                      {nested.name}
                    </Text>
                  ) : (
                    renderNavLink(`/${nested.link}`, nested.name)
                  )}
                </S.NestedItem>
              ))}
            </S.NestedItemsContainer>
          )}
        </S.NavItem>
      );
    });

  const renderAuthItem = () => {
    return accessToken === null || accessToken === '' ? (
      <S.NavItem key="login">{renderNavLink('/login', '로그인')}</S.NavItem>
    ) : (
      <S.NavItem key="logout" onClick={() => setIsModalOpen(true)}>
        <Text
          color="White"
          typograph="lg_regular"
          style={{ lineHeight: '200%', cursor: 'pointer' }}
        >
          로그아웃
        </Text>
      </S.NavItem>
    );
  };
  return (
    <>
      <S.NavigationContainer className="layout-padding">
        <S.LogoContainer>
          <Link to="/">
            <img src={LogoWhiteSVG} alt="logo" style={{ width: '100%' }} />
          </Link>
        </S.LogoContainer>

        <S.NavItemsContainer>
          {renderNavItems()}
          {renderAuthItem()}
        </S.NavItemsContainer>

        <S.MobileMenuButton
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </S.MobileMenuButton>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onLogout={() => {
              logoutMutation.mutate();
              setIsModalOpen(false);
            }}
            onClose={() => setIsModalOpen(false)}
          ></Modal>
        )}

        <MobileNavigation
          navList={navList}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </S.NavigationContainer>
    </>
  );
};

export default Navigation;

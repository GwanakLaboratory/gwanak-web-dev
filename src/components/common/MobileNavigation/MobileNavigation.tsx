import { Dispatch, useState } from 'react';
import { NavigationItemProps } from '../Navigation/Navigation';
import { SetStateAction, useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../../store/auth';
import { S } from './style';
import { Link, NavLink } from 'react-router-dom';
import Text from '../Text';
import Modal from '../Modal';
import { useSignOutMutation } from '../../../apis';

type MobileNavigationProps = {
  navList: NavigationItemProps[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavigation = ({
  navList,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileNavigationProps) => {
  const [clickedItems, setClickedItems] = useState<boolean[]>(
    new Array(navList.length).fill(false),
  );
  const accessToken = useAtomValue(accessTokenAtom);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const logoutMutation = useSignOutMutation();

  const renderNavLink = (
    to: string,
    label: string,
    onClick?: (e: React.MouseEvent) => void,
  ) => (
    <NavLink
      end
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? 'active' : isPending ? 'pending' : ''
      }
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    >
      <Text color="White" typograph="lg_regular">
        {label}
      </Text>
    </NavLink>
  );

  const renderMainItem = (item: NavigationItemProps, idx: number) => {
    const isMainItemClicked = clickedItems[idx];
    return (
      <S.NavItem key={idx} onClick={() => toggleItemClick(idx)}>
        <Link to="#">
          <Text color="White" typograph="lg_regular">
            {item.name}
          </Text>
        </Link>
        {isMainItemClicked && item.nested && (
          <S.NestedItemsContainer>
            {item.nested.map(
              (nested) =>
                nested.link !== '#' && (
                  <S.NestedItem key={nested.name}>
                    {renderNavLink('/' + nested.link, nested.name, () =>
                      setIsMobileMenuOpen(false),
                    )}
                  </S.NestedItem>
                ),
            )}
          </S.NestedItemsContainer>
        )}
      </S.NavItem>
    );
  };

  const renderAuthItem = () => {
    return accessToken === null || accessToken === '' ? (
      <S.NavItem key="login">{renderNavLink('/login', '로그인')}</S.NavItem>
    ) : (
      <S.NavItem key="logout" onClick={() => setIsModalOpen(true)}>
        <Text
          color="White"
          typograph="lg_regular"
          style={{ cursor: 'pointer' }}
        >
          로그아웃
        </Text>
      </S.NavItem>
    );
  };
  const toggleItemClick = (index: number) => {
    const updatedClickedItems = [...clickedItems];
    updatedClickedItems[index] = !updatedClickedItems[index];
    setClickedItems(updatedClickedItems);
  };

  return (
    <S.MobileMenuContainer isOpen={isMobileMenuOpen} className="layout-padding">
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onLogout={() => {
            logoutMutation.mutate();
            setIsModalOpen(false);
            setIsMobileMenuOpen(false);
            window.dispatchEvent(new Event('FORCE_LOGOUT'));
          }}
          onClose={() => setIsModalOpen(false)}
        ></Modal>
      )}

      <S.Overlay
        isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <S.MobileMenuList>
        {navList.map((item, idx) =>
          item.nested ? (
            renderMainItem(item, idx)
          ) : (
            <S.NavItem key={idx}>
              {renderNavLink(`/${item.link}`, item.name, () =>
                setIsMobileMenuOpen(false),
              )}
            </S.NavItem>
          ),
        )}
        {renderAuthItem()}
      </S.MobileMenuList>
    </S.MobileMenuContainer>
  );
};

export default MobileNavigation;

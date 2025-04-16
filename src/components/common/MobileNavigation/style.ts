import styled from '@emotion/styled';
import { BREAKPOINT } from '../../../lib/constants';

export const S = {
  MobileMenuContainer: styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100%;
    background-color: #151515;
    transition: right 0.3s ease-in-out;
    z-index: 1;
    overflow: hidden;
    opacity: 0.8;
    padding-top: 20px;

    @media (min-width: ${BREAKPOINT.tablet}) {
      display: none;
    }
  `,
  MobileMenuList: styled.ul`
    width: 100%;
    list-style-type: none;
    padding: 0px;
  `,
  NavItem: styled.li`
    padding: 10px 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    a {
      text-decoration: none;
    }
  `,
  NestedItemsContainer: styled.ul`
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style-type: none;
    background-color: inherit;
  `,
  NestedItem: styled.li`
    padding: 10px 20px 0px 0px;
  `,
  Overlay: styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: ${(props) => (props.isOpen ? '100%' : '0')};
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // 반투명한 배경 추가

    transition: width 0.3s ease-in-out;
    pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  `,
};

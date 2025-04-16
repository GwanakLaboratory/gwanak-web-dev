import styled from '@emotion/styled';
import { BREAKPOINT } from '../../../lib/constants';

export const S = {
  NavigationContainer: styled.nav`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    user-select: none;
  `,
  LogoContainer: styled.div`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 150px;
    @media (max-width: ${BREAKPOINT.tablet}) {
      width: 100px;
    }
  `,
  NavItemsContainer: styled.ul`
    display: flex;
    list-style-type: none;

    @media (max-width: ${BREAKPOINT.tablet}) {
      display: none;
    }
  `,
  NavItem: styled.li`
    margin: 0px 16px;
    text-decoration-line: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    a {
      text-decoration: none;
    }
  `,
  NestedItemsContainer: styled.ul`
    position: absolute;
    transform: translate(-50%, 0px);
    left: 50%;

    display: flex;
    gap: 20px;
    width: max-content;
    height: 50px;
    padding: 5px 50px;

    list-style-type: none;

    border-radius: 30px;
    background-color: #151515;
  `,
  NestedItem: styled.li`
    display: flex;
    align-items: center;
  `,
  MobileMenuButton: styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
      width: 25px;
      height: 3px;
      background-color: #ffffff;
      margin: 3px 0;
      border-radius: 5px;
    }

    @media (max-width: ${BREAKPOINT.tablet}) {
      display: flex;
    }
  `,
};

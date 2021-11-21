import styled from 'styled-components';
import { maxDownMediaBreakpoints } from 'styles/_mediaQueries';

export const StyledNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${maxDownMediaBreakpoints.mobileL`
    height: 4rem;
  `}
`;

export const NavMenu = styled.div`
  margin-right: 1rem;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const NavMenuItem = styled.div`
  padding: 0.25rem 0;
  margin: 0 1rem;
  font-size: 1.25rem;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${(props) => props.styledBorder};
  }
`;

export const ThemeWand = styled.div`
  cursor: pointer;
  justify-self: flex-start;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    animation: bounce-xy 2s infinite;
  }

  @keyframes bounce-xy {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(0);
    }
    40% {
      transform: translateY(2px) translateX(2px);
    }
    60% {
      transform: translateY(1px) translateX(1px);
    }
  }
`;

export const ThemeWandContent = styled.div`
  text-align: center;
  font-size: 0.8rem;
  padding-top: 0.25rem;
`;

export const ThemeWandBtn = styled.button``;

import styled from 'styled-components';
import { maxDownMediaBreakpoints } from 'styles/_mediaQueries';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
  font-size: 3rem;

  ${maxDownMediaBreakpoints.mobileL`
    font-size: 2.5rem;
  `}

  a {
    padding: 0 0.625rem;
  }

  @keyframes icon-wobble {
    25% {
      transform: translateY(-8px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const StyledAnchorTag = styled.a<{ themeColor?: string }>`
  color: ${({ themeColor }) => themeColor};
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;

  &:hover,
  &:focus,
  &:active {
    animation-name: icon-wobble;
    animation-duration: 0.75s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
  }
`;

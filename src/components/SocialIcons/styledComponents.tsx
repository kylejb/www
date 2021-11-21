import styled from 'styled-components';
import { maxDownMediaBreakpoints } from 'styles/_mediaQueries';

export const StyledContainer = styled.div`
  padding: 0.25rem 0;
  font-size: 3rem;

  ${maxDownMediaBreakpoints.mobileL`
    font-size: 2.5rem;
  `}

  a {
    padding: 0 0.625rem;

    &#devto-icon svg {
      margin-bottom: -0.25rem;
      width: 2.7rem;
      height: 2.7rem;

      ${maxDownMediaBreakpoints.mobileL`
        margin-bottom: -0.225rem;
        width: 2.25rem;
        height: 2.25rem;
      `}
    }
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

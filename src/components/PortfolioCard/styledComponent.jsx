import styled, { css } from 'styled-components';
import { maxDownMediaBreakpoints } from 'styles/_mediaQueries';
import { perspectiveVal } from 'styles/_variables';

// Helper function to convert pixels to rems (remy)
const remy = (px) => `${px / 16}rem`;

export const CardWrapper = styled.div`
  margin: 20px;
  width: 300px;
`;

// Flipping card
export const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(380)};
  text-align: center;
  -webkit-transition: transform 0.1s;
  transition: transform 0.1s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  cursor: pointer;
  perspective: ${perspectiveVal};
  transition: all 0.25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0, 0, 0, 0.15);
  }

  &.flipped {
    & > div:first-of-type {
      // frontside of the card
      transform: perspective(${perspectiveVal}) rotateY(-180deg);
      transform-style: preserve-3d;
    }

    & > div:last-of-type {
      // backside of the card
      transform: perspective(${perspectiveVal}) rotateY(0deg);
      transform-style: preserve-3d;
    }
  }
`;

// Card sides
export const CardSide = css`
  --webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: ${remy(24)};
  transition: all 0.25s ease-in-out;
`;

// Card side - front
export const CardFront = styled.div`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  ${CardSide};

  font-weight: bold;
  text-align: center;
  ${maxDownMediaBreakpoints.mobileL`
    width: 15rem;
  `}
`;

// Card side - back
export const CardBack = styled.div`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  ${CardSide};

  transform: rotateY(-180deg);
  transform-style: preserve-3d;

  ${maxDownMediaBreakpoints.mobileL`
    width: 15rem;
  `}

  a:hover {
    color: #ffb727;
    border-bottom: 2px solid ${({ styledColor }) => styledColor};
  }
`;

export const CardTitle = styled.h2`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  font-size: ${remy(21)};
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;

  ${maxDownMediaBreakpoints.mobileL`
    font-size: 1.25rem;
  `}
`;

export const CardDescription = styled.span`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  font-size: ${remy(14)};
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.25rem;

  ${maxDownMediaBreakpoints.mobileL`
    font-size: 0.875rem;
  `}
`;

export const CardLinkWrapper = styled.div`
  padding: 0 0 0.75rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const CardLink = styled.a`
  padding-bottom: 0.25rem;
  border-bottom: 2px solid inherit;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid inherit;
  }
`;

export const CardIcon = styled.i`
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
`;

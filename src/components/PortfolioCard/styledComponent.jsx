import styled, { css } from 'styled-components';
import { maxDownMediaBreakpoints } from '../../styles/_mediaQueries';
import { perspectiveVal } from "../../styles/_variables";

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

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
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(${perspectiveVal}) rotateY(-180deg);
      transform-style: preserve-3d;
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(${perspectiveVal}) rotateY(0deg);
      transform-style: preserve-3d;
    }
  }
`

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
  transition: all .25s ease-in-out;
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
`;

export const CardTitle = styled.h2`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  font-size: ${remy(21)};
`;

export const CardDescription = styled.span`
  background-color: ${({ styledBackgroundColor }) => styledBackgroundColor};
  color: ${({ styledColor }) => styledColor};
  font-size: ${remy(16)};
`;

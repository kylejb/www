import styled, { css, keyframes } from 'styled-components';

const flip_duration = '1s';
const perspective = '1000px';
const degree = '90deg';

const back_flip_1 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
  100% {transform: rotateY(${degree}); z-index: -1}
`;

const back_flip_2 = keyframes`
  0% {transform: rotateY(-${degree}); z-index: -1}
  50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

const front_flip_1 = keyframes`
  0% {transform: rotateY(-${degree}); z-index: -1}
  50% {transform: rotateY(-${degree}) perspective(${perspective}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

const front_flip_2 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degree}) perspective(${perspective}); z-index: 1}
  100% {transform: rotateY(${degree}); z-index: -1}
`;

export const CardWrapper = styled.div`
    margin: 20px;
`;

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%;`
}

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 0 0 ${flex}%;`
}

// Grid container
export const GridContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: 10px;
  margin-left: 10px;
  width: 100%;

  // Breakpoint for tablets
  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  // Breakpoint for small desktops
  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  // Breakpoint for medium desktops
  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  // Breakpoint for large desktops and HD devices
  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`

// Grid row
export const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`

// Grid columns
export const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};

  // Columns for mobile
  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%;')}
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%;')}

  // Columns for tablets
  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  // Columns for small desktops
  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  // Columns for medium desktops
  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  // Columns for large desktops and HD devices
  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`
// Flipping card
export const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(380)};
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

// Card sides
export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: ${remy(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`

// Card side - front
export const CardFront = styled.div`
  background-color: ${({styledBackgroundColor}) => styledBackgroundColor};
  color: ${({styledColor}) => styledColor};
  ${CardSide};

  font-weight: bold;
  text-align: center;
`

// Card side - back
export const CardBack = styled.div`
  background-color: ${({styledBackgroundColor}) => styledBackgroundColor};
  color: ${({styledColor}) => styledColor};
  ${CardSide};

  transform: rotateY(-180deg);
`

// Card content
export const CardNumber = styled.span`
  display: block;
  font-size: ${remy(24)};
`

export const CardTitle = styled.h2`
  background-color: ${({styledBackgroundColor}) => styledBackgroundColor};
  color: ${({styledColor}) => styledColor};
  font-size: ${remy(21)};
`

export const CardDescription = styled.span`
  background-color: ${({styledBackgroundColor}) => styledBackgroundColor};
  color: ${({styledColor}) => styledColor};
  font-size: ${remy(16)};
`

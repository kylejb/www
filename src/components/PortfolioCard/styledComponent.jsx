import styled, { css, keyframes } from 'styled-components';

const border_radius = '2px';
const card_size = '25rem';
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

// Flipping card
export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-transition: transform 0.1s;
    transition: transform 0.1s;
  -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 40px rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
      transform-style: preserve-3d;
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
      transform-style: preserve-3d;
    }
  }
`;


// Card sides
export const CardSide = css`
  --webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: top;
  overflow: hidden;
  padding: 24px;
  transition: all .25s ease-in-out;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
`;

// Card content

export const CardTitle = styled.h2`
  font-size: 21px;
`;

export const CardDescription = styled.div`
  font-size: 16px;
`;

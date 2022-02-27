import { keyframes } from 'styled-components';

import { degreeVal, perspectiveVal } from './_variables';

export const back_flip_1 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degreeVal}) perspective(${perspectiveVal}); z-index: 1}
  100% {transform: rotateY(${degreeVal}); z-index: -1}
`;

export const back_flip_2 = keyframes`
  0% {transform: rotateY(-${degreeVal}); z-index: -1}
  50% {transform: rotateY(-${degreeVal}) perspective(${perspectiveVal}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

export const front_flip_1 = keyframes`
  0% {transform: rotateY(-${degreeVal}); z-index: -1}
  50% {transform: rotateY(-${degreeVal}) perspective(${perspectiveVal}); z-index: -1}
  100% {transform: rotateY(0deg); z-index: 1}
`;

export const front_flip_2 = keyframes`
  0% {transform: rotateY(0deg); z-index: 1}
  50% {transform: rotateY(${degreeVal}) perspective(${perspectiveVal}); z-index: 1}
  100% {transform: rotateY(${degreeVal}); z-index: -1}
`;

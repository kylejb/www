// @ts-nocheck
import { css } from 'styled-components';

export const mediaQuery =
  (...query) =>
  (...rules) => {
    return css`
      @media ${css(...query)} {
        ${css(...rules)}
      }
    `;
  };

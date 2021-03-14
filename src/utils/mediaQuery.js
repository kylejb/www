import { css } from 'styled-components';

export const mediaQuery = (...query) => (...rules) => css`
    @media ${css(...query)} {
        ${css(...rules)}
    }
`;

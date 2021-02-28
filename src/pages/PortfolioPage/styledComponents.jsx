import styled from 'styled-components';

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
`;

// Grid row
export const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

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
`;

export const Container = styled.div`
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;

  /* @include breakpoint-small-down {
    padding-top: 3rem;
  } */

  h1 {
    padding: 1rem 0;
    font-size: 3rem;
    text-align: center;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;

/* @include breakpoint-small-down {
  flex-direction: column;
  align-items: center;
} */
  // .content-grid {
  //   display: grid;
  // }

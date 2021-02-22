import styled from 'styled-components';


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

  .content-grid {
    display: grid;
  }

  .portfolio-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    /* @include breakpoint-small-down {
      flex-direction: column;
      align-items: center;
    } */
  }
`;

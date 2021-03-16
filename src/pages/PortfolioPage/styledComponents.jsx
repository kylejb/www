import styled from 'styled-components';
import { maxDownMediaBreakpoints } from '../../styles/_mediaQueries';


export const Container = styled.div`
  padding-top: 2rem;
  min-height: 100vh;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;

  ${maxDownMediaBreakpoints.mobileL`
    padding-top: 3rem;
  `}

  h1 {
    padding: 1rem 0;
    font-size: 3rem;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  ${maxDownMediaBreakpoints.mobileL`
    flex-direction: column;
    align-items: center;
  `}
`;

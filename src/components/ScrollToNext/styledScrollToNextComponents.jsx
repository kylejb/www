import styled from 'styled-components';


export const StyledScroll = styled.div`
  cursor: pointer;

  .arrow {
    text-align: center;
    margin: 0 auto;
    padding-bottom: 0.5rem;

  }
  .scroll-text {
    z-index: -99;
    text-align: center;
    font-size: 1.0rem;
    margin-top: -0.125rem;
  }

  .bounce {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
import { css, keyframes } from 'styled-components';

const pulse = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  0% {
    transform: scale(1);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 30px rgba(90, 153, 212, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
`;

export const pulseAnimation = css`
  animation: ${pulse} 1.5s infinite;
`;

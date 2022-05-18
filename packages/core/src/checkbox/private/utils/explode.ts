import { keyframes } from 'styled-components';

const explode = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: .4;
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;

export default explode;

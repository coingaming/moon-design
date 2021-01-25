import { keyframes } from 'styled-components';

export const slideUpFade: any = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
    display: block;
    visibility: visible;
  }

  to {
    visibility: hidden;
    display: none;
    transform: translateY(-1rem);
    opacity: 0;
  }
`;

export default slideUpFade;

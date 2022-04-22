import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { css, keyframes } from 'styled-components';

const pulse = keyframes`
  10%, 90% {
    transform: translate3d(${rem(-1)}, 0, 0);
  }
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 ${rem(30)} transparent;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 transparent;
  }
`;

const pulseAnimation = () => {
  const { colorNew } = useTheme();
  return css`
    box-shadow: 0 0 0 0 ${colorNew.piccolo};
    animation: ${pulse} 1.5s infinite;
  `;
};

export default pulseAnimation;

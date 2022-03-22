import { rem } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { Size } from '../private/Size';

const determineDimensions = (size?: Size) => {
  switch (size) {
    case 'small':
      return {
        width: rem(24),
        height: rem(24),
      };
    case 'medium':
      return {
        width: rem(32),
        height: rem(32),
      };
    case 'large':
      return {
        width: rem(40),
        height: rem(40),
      };
    case 'xlarge':
      return {
        width: rem(48),
        height: rem(48),
      };
    default:
      return {
        width: rem(16),
        height: rem(16),
      };
  }
};

/**
 * Animation
 */
const ring = keyframes`
 0% {
   transform: rotate(0deg);
 }
 100% {
   transform: rotate(360deg);
 }
`;

const animation = css`
  animation: ${ring} 2s linear infinite;
`;

export interface Props {
  size?: Size;
}

const OuterCircle = styled.div.attrs({
  role: 'progressbar',
})<Props>(({ size }) => [
  {
    padding: 0,
    ...determineDimensions(size),
    borderRadius: '50%',
    position: 'relative',
    margin: `0 ${rem(8)}`,
    overflow: 'hidden',
    display: 'inline-block',
  },
  // animation,
]);

export default OuterCircle;

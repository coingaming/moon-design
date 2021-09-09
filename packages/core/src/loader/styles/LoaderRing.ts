import styled, { css, keyframes } from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  animationDelay: string;
  color?: ColorProps;
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
  animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

const LoaderRing = styled.span<Props>(
  ({ theme: { color, borderStyle, borderWidth } }) => ({
    '--loader-color': color.bulma[100],
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxSizing: 'border-box',
    borderWidth: borderWidth * 2,
    borderStyle,
    borderColor: 'transparent',
    borderTopColor: 'var(--loader-color)',
  }),
  animation,
  ({ animationDelay }) => ({ animationDelay }),
  ({ color, theme }) => ({ '--loader-color': themed('color', color)(theme) })
);

export default LoaderRing;

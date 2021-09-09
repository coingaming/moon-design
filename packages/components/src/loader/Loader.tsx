import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

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

/**
 * Sub-components
 */
const LoaderContainer = styled.strong(({ theme: { space } }) => ({
  display: 'inline-block',
  position: 'relative',
  width: rem(space.default),
  height: rem(space.default),
}));

type LoaderRingProps = {
  animationDelay: string;
} & LoaderProps;

const LoaderRing = styled.span<LoaderRingProps>(
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

/**
 * Component
 */
type LoaderProps = {
  color?: ColorProps;
};

const Loader: React.FC<LoaderProps> = ({ color }) => (
  <LoaderContainer role="progressbar">
    {['-0.45s', '-0.3s', '-0.15s', '0s'].map((delay) => (
      <LoaderRing
        key={`loader-${delay}`}
        color={color}
        animationDelay={delay}
      />
    ))}
  </LoaderContainer>
);

export default Loader;

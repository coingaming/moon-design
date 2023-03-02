import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.654 17.462a3.654 3.654 0 11-7.308 0 3.654 3.654 0 017.308 0z"
      stroke="currentColor"
    />
    <path
      d="M6.5 22.5v-8.906a2.71 2.71 0 012.71-2.71 2.71 2.71 0 002.424-1.497l.614-1.229A3 3 0 0114.93 6.5h2.138a3 3 0 012.683 1.658l.614 1.229a2.71 2.71 0 002.424 1.498 2.71 2.71 0 012.71 2.71V22.5a3 3 0 01-3 3h-13a3 3 0 01-3-3z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPhoto =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default MediaPhoto;

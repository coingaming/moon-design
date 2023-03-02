import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
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
      d="M9.347 8.13a.5.5 0 10.675.739l-.675-.738zM21.79 24.678a.5.5 0 10-.577-.817l.577.817zm-5.72.822c-5.04 0-9.154-4.236-9.154-9.5h-1c0 5.783 4.53 10.5 10.155 10.5v-1zm0-18.999c5.04 0 9.156 4.236 9.156 9.5h1c0-5.782-4.53-10.5-10.155-10.5v1zm-6.048 2.369C11.637 7.393 13.754 6.5 16.07 6.5v-1c-2.58 0-4.935.996-6.724 2.63l.675.739zM21.213 23.86a8.88 8.88 0 01-5.142 1.64v1a9.88 9.88 0 005.72-1.823l-.578-.817zM25.226 16v3.572h1V16h-1zm-18.31 0v-2.251h-1v2.25h1z"
      fill="currentColor"
    />
    <path
      d="M22.876 16l2.85 3.8 2.85-3.8M9.266 17.074l-2.85-3.8-2.85 3.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsRefreshRound =
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
export default ArrowsRefreshRound;

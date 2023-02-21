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
      d="M6.843 18.472a20.934 20.934 0 006.68 6.685m-1.678-8.943c-1.237 1.944-1.553 3.845-.633 4.752.927.914 2.846.56 4.789-.728m2.458-13.391a20.934 20.934 0 016.68 6.685m-8.634-1.703c1.82-1.105 3.57-1.367 4.441-.507.85.838.644 2.525-.368 4.311m-7.055 2.836l4.676-4.587M8.068 25.261c1.605.328 4.92.622 8.821-1.313a15.707 15.707 0 007.06-7.065c1.934-3.886 1.64-7.203 1.312-8.827a1.699 1.699 0 00-1.329-1.33c-1.623-.31-4.937-.605-8.821 1.33a15.708 15.708 0 00-7.06 7.065c-1.934 3.887-1.64 7.203-1.312 8.827a1.702 1.702 0 001.329 1.313z"
      stroke="currentColor"
      strokeMiterlimit={10}
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
const SportRugby =
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
export default SportRugby;

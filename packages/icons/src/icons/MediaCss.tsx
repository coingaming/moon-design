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
      d="M14.188 5.01v4.781c0 1.178-.929 2.133-2.077 2.133H7.025M21.538 27H10.462C8.55 27 7 25.408 7 23.445V12.302c0-.785.317-1.536.875-2.074L12.42 5.77A2.73 2.73 0 0114.315 5h7.223C23.45 5 25 6.592 25 8.555v14.89C25 25.408 23.45 27 21.538 27z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M13.428 19.383c-.324.26-.656.417-1.241.417-1.261 0-2.187-.95-2.187-2.2 0-1.251.926-2.2 2.188-2.2.584 0 .917.157 1.24.417m3.921-.216c-1.248-.385-2.111-.004-2.111.758 0 1.294 2.538 1.107 2.538 2.365 0 1.116-1.458 1.334-2.744.602m6.541-3.726c-1.248-.384-2.111-.003-2.111.76 0 1.293 2.538 1.107 2.538 2.364 0 1.116-1.458 1.334-2.744.602"
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
const MediaCss =
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
export default MediaCss;

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
      d="M10 20.379V16h1.645c.932 0 1.337.622 1.337 1.182 0 .56-.404 1.181-1.337 1.181H10m6.585-2.211c-1.23-.385-2.083-.004-2.083.76 0 1.297 2.504 1.11 2.504 2.37 0 1.12-1.438 1.337-2.707.604M18.752 16v4.379h1.106c1.235 0 2.142-.944 2.142-2.19C22 16.945 21.094 16 19.858 16h-1.106z"
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
const MediaPsd =
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
export default MediaPsd;

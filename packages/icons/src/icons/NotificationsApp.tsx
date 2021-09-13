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
      d="M6.5 8.327c0-1.01.818-1.827 1.827-1.827h15.346a1.827 1.827 0 110 3.654H8.327A1.827 1.827 0 016.5 8.327zM6.5 15.077a2 2 0 012-2h15a2 2 0 012 2v1.846a2 2 0 01-2 2h-15a2 2 0 01-2-2v-1.846zM6.5 23.673c0-1.009.818-1.827 1.827-1.827h15.346a1.827 1.827 0 110 3.654H8.327A1.827 1.827 0 016.5 23.673z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsApp =
  styled(Svg) <
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
export default NotificationsApp;

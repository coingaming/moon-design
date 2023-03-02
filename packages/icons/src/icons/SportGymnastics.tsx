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
      d="M18.301 17.555v-5.543m-2.258 6.1l3.053 8.996c.204.654.86 1.032 1.463.844.605-.188.93-.87.727-1.525l-2.944-8.757m-4.637.066l-2.934 8.7c-.202.648.124 1.326.73 1.514.604.188 1.259-.187 1.461-.837l3.01-9m-2.272-.49v-5.61l-7.532-.59c-.715-.057-1.234-.588-1.16-1.185.072-.598.71-1.035 1.424-.978l6.557.56m6.022 0l6.557-.56c.714-.057 1.352.38 1.425.978.073.597-.446 1.128-1.16 1.186l-7.533.588m2.497 3.258c3.672.239 6.203.744 6.203 1.328 0 .815-4.925 1.475-11 1.475s-11-.661-11-1.476c0-.582 2.521-1.086 6.18-1.326m7.199-8.852c0 1.336-1.065 2.419-2.379 2.419s-2.379-1.083-2.379-2.42C13.621 5.084 14.686 4 16 4s2.379 1.083 2.379 2.419z"
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
const SportGymnastics =
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
export default SportGymnastics;

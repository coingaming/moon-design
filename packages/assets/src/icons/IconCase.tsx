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
      d="M7 29v-1 1zM2 11v14h2V11H2zm23 17H7v2h18v-2zm3-17v14h2V11h-2zm-3-5H7v2h18V6zm5 5a5 5 0 00-5-5v2a3 3 0 013 3h2zM4 11a3 3 0 013-3V6a5 5 0 00-5 5h2zM2 25a5 5 0 005 5v-2a3 3 0 01-3-3H2zm23 5a5 5 0 005-5h-2a3 3 0 01-3 3v2z"
      fill="currentColor"
    />
    <path
      d="M13 16H3v2h10v-2zM29 16H19v2h10v-2zM18 2h-4v2h4V2zm5 5a5 5 0 00-5-5v2a3 3 0 013 3h2zM11 7a3 3 0 013-3V2a5 5 0 00-5 5h2z"
      fill="currentColor"
    />
    <circle cx={16} cy={18} r={3} stroke="currentColor" strokeWidth={2} />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCase =
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
export default IconCase;

import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.615 22.12H25.5m-13.885-6.48H25.5M11.615 9.16H25.5M7.962 10.6V7L6.5 8.08m2.192 9.72H6.5c0-1.08 2.192-2.52 2.192-3.24 0-.72-.49-1.08-1.096-1.08-.605 0-1.096.483-1.096 1.08m0 6.12h2.192c0 .797-1.096 1.8-1.096 1.8.579.625 1.096 1.058 1.096 1.44 0 .72-.49 1.08-1.096 1.08A1.088 1.088 0 016.5 23.92"
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
const TextNumbersList =
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
export default TextNumbersList;

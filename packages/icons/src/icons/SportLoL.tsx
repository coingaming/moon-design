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
      d="M9.388 21.202a8.454 8.454 0 01-2.183-5.174 8.452 8.452 0 011.408-5.236m15.085 7.497a8.462 8.462 0 00.453-3.318 8.485 8.485 0 00-4.68-7.067m-6.518 5.17v6.578a3.918 3.918 0 01-1.377 2.982c-.693.591-.275 1.726.636 1.726h9.549c.388 0 .757-.172 1.007-.47l.667-.794c.72-.856.11-2.162-1.007-2.162h-4.496a1.316 1.316 0 01-1.315-1.316V8.175h-4.003c-.975 0-1.486 1.157-.83 1.878a4.489 4.489 0 011.17 3.021z"
      stroke="#000"
      strokeWidth={0.8}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportLoL =
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
export default SportLoL;

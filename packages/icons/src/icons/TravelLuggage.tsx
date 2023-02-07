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
      d="M9 14.5v-5m0 16v-3m14-13v16m-10.5-16v-2c0-.265.126-.52.351-.707.225-.188.53-.293.849-.293h4.6c.318 0 .623.105.848.293a.924.924 0 01.352.707v2m-12.864 0h18.728c.903 0 1.636.72 1.636 1.607v12.786c0 .887-.733 1.607-1.636 1.607H6.636C5.733 25.5 5 24.78 5 23.893V11.107C5 10.22 5.733 9.5 6.636 9.5zm.63 6.396l5.009 1.903-1.189 3.128-4.008-1.903.188-3.128zM18 17l-4-1.482L17.047 12 18 17zm2 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
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
const TravelLuggage =
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
export default TravelLuggage;

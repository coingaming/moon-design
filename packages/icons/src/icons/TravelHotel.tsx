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
      d="M13.944 27V12.142c0-.295.12-.579.332-.787.213-.209.501-.326.802-.326h9.788c.3 0 .59.117.802.326a1.1 1.1 0 01.332.787V27M6 27v-6.196c0-.295.12-.578.332-.787.213-.208.501-.326.802-.326h4.883"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.776 8.873V5m4.388 3.873V5m-.181 1.937h-4.01m-1.78 6.971h7.554m-7.554 2.872h7.554m-7.554 2.874h7.554m-7.554 2.872h7.554m-7.554 2.872h7.554M8.082 22.526h3.93m-3.93 2.872h3.93"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelHotel =
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
export default TravelHotel;

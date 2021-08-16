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
      d="M19 13.808c0 1.614-1.343 2.923-3 2.923s-3-1.309-3-2.923c0-1.615 1.343-2.923 3-2.923s3 1.308 3 2.923z"
      stroke="#000"
      strokeLinejoin="round"
    />
    <path
      d="M23.5 13.583C23.5 19.743 16 25.5 16 25.5s-7.5-5.757-7.5-11.917C8.5 9.67 11.858 6.5 16 6.5c4.142 0 7.5 3.171 7.5 7.083z"
      stroke="#000"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MapsMarker =
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
export default MapsMarker;

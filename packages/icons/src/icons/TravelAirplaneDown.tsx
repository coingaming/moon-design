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
      d="M27 25.5H5m7.181-11.032l-1.34 1.177-3.534 2.19 1.804.68 6.58-2.412 7.219 1.867c1.122.282 2.363.505 2.618-.19.255-.695-1.193-2.304-2.425-2.767L9.897 10.969 8.344 6.086l-1.103-.415-.493 4.77c-.55.012-.984.113-1.08.375-.275.75 2.036 2.204 3.776 2.859l.827.311m5.327-2.918l-1.76-2.863-1.805-.678.772 2.531"
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
const TravelAirplaneDown =
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
export default TravelAirplaneDown;

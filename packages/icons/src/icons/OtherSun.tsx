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
      d="M23.308 16A7.308 7.308 0 0116 23.308M23.308 16A7.308 7.308 0 0016 8.692M23.308 16H25.5M16 23.308A7.308 7.308 0 018.692 16M16 23.308V25.5M8.692 16A7.308 7.308 0 0116 8.692M8.692 16H6.5M16 8.692V6.5M9.282 9.282l1.55 1.55m10.335 10.335l1.55 1.55m0-13.435l-1.55 1.55M10.833 21.168l-1.55 1.55"
      stroke="#000"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherSun =
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
export default OtherSun;

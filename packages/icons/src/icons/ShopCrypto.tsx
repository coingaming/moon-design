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
      d="M8 8.5h10.91c.963 0 1.888.395 2.57 1.098a3.81 3.81 0 011.066 2.652 3.81 3.81 0 01-1.066 2.652A3.581 3.581 0 0118.91 16M8 23.5h12.364c.964 0 1.889-.395 2.57-1.098A3.81 3.81 0 0024 19.75a3.81 3.81 0 00-1.065-2.652A3.581 3.581 0 0020.364 16h-9.455m.001-7.5v15m2.908-15V4m4.364 4.5V4m-4.364 24v-4.5m4.364 4.5v-4.5"
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
const ShopCrypto =
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
export default ShopCrypto;

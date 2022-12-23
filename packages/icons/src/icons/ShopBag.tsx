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
      d="M21 25.5V25v.5zm-10 0v.5-.5zm14-15h-.5.5zm0 11h.5-.5zm-18-11h.5H7zm14-4V7v-.5zm-10 0V6v.5zm9.5 5.115H20h.5zm-9 0H11h.5zm.5-1.461a.5.5 0 10-1 0h1zm9 0a.5.5 0 10-1 0h1zM21 25H11v1h10v-1zm3.5-14.5v11h1v-11h-1zm-18 0v11h1v-11h-1zM21 6H11v1h10V6zm4.5 4.5A4.5 4.5 0 0021 6v1a3.5 3.5 0 013.5 3.5h1zm-18 0A3.5 3.5 0 0111 7V6a4.5 4.5 0 00-4.5 4.5h1zM11 25a3.5 3.5 0 01-3.5-3.5h-1A4.5 4.5 0 0011 26v-1zm10 1a4.5 4.5 0 004.5-4.5h-1A3.5 3.5 0 0121 25v1zm-1-14.385c0 2.134-1.779 3.885-4 3.885v1c2.75 0 5-2.175 5-4.885h-1zM16 15.5c-2.222 0-4-1.751-4-3.885h-1c0 2.71 2.25 4.885 5 4.885v-1zm-4-3.885v-1.461h-1v1.461h1zm9 0v-1.461h-1v1.461h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ShopBag =
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
export default ShopBag;

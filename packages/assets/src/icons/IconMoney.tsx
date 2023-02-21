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
      d="M21.7 2.4c-4.7 0-8.3 1.9-8.3 4.4v4.8c-1-.2-2-.3-3.2-.3-4.7 0-8.3 1.9-8.3 4.4v9.6c0 2.5 3.6 4.4 8.3 4.4 4.6 0 8-1.8 8.3-4.1 1 .2 2.1.3 3.2.3 4.7 0 8.3-1.9 8.3-4.4V6.7c0-2.5-3.6-4.3-8.3-4.3zm0 2c3.8 0 6.3 1.4 6.3 2.4s-2.4 2.4-6.3 2.4-6.3-1.4-6.3-2.4 2.5-2.4 6.3-2.4zm-11.4 8.9c3.8 0 6.3 1.4 6.3 2.4S14.1 18 10.3 18 4 16.6 4 15.6s2.5-2.3 6.3-2.3zM4 18.5c1.5.9 3.7 1.5 6.3 1.5 2.6 0 4.8-.6 6.3-1.5v1.6c0 1-2.4 2.4-6.3 2.4S4 21.1 4 20.1v-1.6zm6.3 9.1c-3.8 0-6.3-1.4-6.3-2.4V23c1.5.9 3.7 1.5 6.3 1.5 2.6 0 4.8-.6 6.3-1.5v2.3c0 .9-2.5 2.3-6.3 2.3zm11.4-3.8c-1.1 0-2.2-.1-3.2-.4v-3.1c1 .2 2.1.3 3.2.3 2.6 0 4.8-.6 6.3-1.5v2.3c0 1-2.5 2.4-6.3 2.4zm0-5.2c-1.1 0-2.2-.1-3.2-.4v-2.7-.4c1 .2 2 .3 3.2.3 2.6 0 4.8-.6 6.3-1.5v2.2c0 1.2-2.5 2.5-6.3 2.5zm0-5c-3.8 0-6.3-1.4-6.3-2.4V9.6c1.5.9 3.7 1.5 6.3 1.5 2.6 0 4.8-.6 6.3-1.5v1.6c0 1-2.5 2.4-6.3 2.4z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconMoney =
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
export default IconMoney;

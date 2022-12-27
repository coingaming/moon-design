import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.277 16.03c0 .448 0 .785-.111 1.234-.112 1.907-1.446 3.365-3.114 3.477a62.027 62.027 0 01-11.343 0c-1.668-.112-2.891-1.57-3.003-3.477-.11-2.132-.333-5.048-.11-7.628.11-1.907 1.445-3.365 3.002-3.59 2.446-.224 6.227-.449 11.454 0 1.668.112 3.002 1.57 3.114 3.478v.785"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M5.375 5.822v-.449c.111-1.234.89-2.243 1.89-2.243 1.446-.113 4.894-.225 8.23 0 1 .112 1.89 1.01 2.002 2.243l.11.785m2.893 9.647h-3.56a2.12 2.12 0 01-2.112-2.131v-.337c0-1.121.89-2.13 2.113-2.13h3.558a1 1 0 011 1.009v2.58c0 .56-.444 1.01-1 1.01z"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M18.164 13.786c.123 0 .222-.1.222-.224s-.1-.225-.222-.225c-.123 0-.223.1-.223.225 0 .124.1.224.223.224z"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconWallet =
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
export default IconWallet;

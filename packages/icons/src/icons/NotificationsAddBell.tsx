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
      d="M18.702 22.685c0 1.555-1.293 2.815-2.888 2.815-1.594 0-2.887-1.26-2.887-2.815h5.775z"
      stroke="currentColor"
    />
    <path
      d="M22.828 22.685H9.172c-.837 0-1.243-.683-1.162-1.461.02-.186.096-.359.19-.52l1.269-2.206a4 4 0 00.512-1.586l.306-2.978c.027-.264.066-.526.143-.78.275-.91 1.168-3.187 3.404-4.127v-.416c0-1.166.97-2.111 2.166-2.111s2.166.945 2.166 2.111v.416c2.161.909 3.067 3.066 3.374 4.03.101.317.145.646.17.978l.216 2.77a4 4 0 00.571 1.771l1.285 2.11c.105.173.192.36.21.563.07.768-.336 1.436-1.164 1.436z"
      stroke="currentColor"
    />
    <path d="M26.5 1.5v8m-4-4h8" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsAddBell =
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
export default NotificationsAddBell;

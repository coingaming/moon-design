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
      d="M19.308 25.5v.5-.5zm-8.808 0V25v.5zm-4-12.808H7h-.5zm0 8.808H6h.5zM18.923 9.192a.5.5 0 000-1v1zm-8.423-.5v-.5.5zm13.308 4.385a.5.5 0 00-1 0h1zm-.5 8.423h.5-.5zM25 9.788a2.788 2.788 0 01-2.788 2.789v1A3.788 3.788 0 0026 9.788h-1zm-2.788 2.789a2.788 2.788 0 01-2.789-2.789h-1a3.788 3.788 0 003.789 3.789v-1zm-2.789-2.789A2.788 2.788 0 0122.212 7V6a3.788 3.788 0 00-3.789 3.788h1zM22.212 7A2.788 2.788 0 0125 9.788h1A3.788 3.788 0 0022.212 6v1zm-2.904 18H10.5v1h8.808v-1zM6 12.692V21.5h1v-8.808H6zm12.923-4.5H10.5v1h8.423v-1zm3.885 4.885V21.5h1v-8.423h-1zM7 12.692a3.5 3.5 0 013.5-3.5v-1a4.5 4.5 0 00-4.5 4.5h1zM10.5 25A3.5 3.5 0 017 21.5H6a4.5 4.5 0 004.5 4.5v-1zm8.808 1a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsNotifications =
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
export default NotificationsNotifications;

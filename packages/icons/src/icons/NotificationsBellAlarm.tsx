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
      d="M16 19.167v.703m0-7.74v4.222m2.702 6.333c0 1.555-1.293 2.815-2.888 2.815-1.594 0-2.887-1.26-2.887-2.815h5.775zm-9.53 0h13.656c.828 0 1.235-.668 1.164-1.436a1.333 1.333 0 00-.21-.563l-1.285-2.11a4 4 0 01-.571-1.77l-.215-2.771a4.305 4.305 0 00-.17-.978c-.308-.964-1.214-3.121-3.375-4.03v-.416c0-1.166-.97-2.111-2.166-2.111s-2.166.945-2.166 2.111v.416c-2.236.94-3.129 3.217-3.404 4.126a4.137 4.137 0 00-.143.78l-.306 2.979a4 4 0 01-.512 1.586l-1.27 2.206c-.093.161-.17.334-.189.52-.081.778.325 1.461 1.162 1.461z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsBellAlarm =
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
export default NotificationsBellAlarm;

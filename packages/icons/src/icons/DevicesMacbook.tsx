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
      d="M24.071 23.5V23v.5zm-16.142 0v.5-.5zm16.142-2.857v.5-.5zm-16.142 0v-.5.5zM6.5 22.07H7h-.5zM24.093 10.5h-.5.5zm-.5 10.143a.5.5 0 001 0h-1zM7.907 10.5h.5-.5zm-.5 10.143a.5.5 0 001 0h-1zM22.093 8.5V9v-.5zm-12.186 0V8v.5zM24.071 23H7.93v1h16.14v-1zm0-2.857H7.93v1h16.14v-1zM26 22.07a1.929 1.929 0 00-1.929-1.928v1c.513 0 .929.416.929.928h1zm-19 0c0-.512.416-.928.929-.928v-1A1.929 1.929 0 006 22.07h1zm.929.93A.929.929 0 017 22.07H6C6 23.136 6.863 24 7.929 24v-1zm16.142 1A1.929 1.929 0 0026 22.07h-1a.929.929 0 01-.929.93v1zm-.479-13.5v10.143h1V10.5h-1zm-16.185 0v10.143h1V10.5h-1zM22.093 8H9.907v1h12.186V8zm2.5 2.5a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zm-16.186 0a1.5 1.5 0 011.5-1.5V8a2.5 2.5 0 00-2.5 2.5h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesMacbook =
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
export default DevicesMacbook;

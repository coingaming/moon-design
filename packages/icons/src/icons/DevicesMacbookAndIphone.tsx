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
      d="M7.929 23.5v.5-.5zm10.182-2.357a.5.5 0 000-1v1zm-10.182-.5v.5-.5zM24.093 10.5h-.5.5zm-16.186 0h-.5.5zm14.186-2V9v-.5zm-12.186 0V9v-.5zm13.593 5v.5-.5zm-2.442 0V13v.5zm-2 8h.5-.5zm0-6h.5-.5zm4.442 8V23v.5zm-2.442 0v.5-.5zm4.442-2h.5-.5zm0-6H25h.5zM19.87 23H7.93v1h11.94v-1zm-1.759-2.857H7.93v1h10.18v-1zM7 22.07c0-.513.416-.928.929-.928v-1A1.929 1.929 0 006 22.07h1zm.929.929A.929.929 0 017 22.07H6C6 23.137 6.863 24 7.929 24v-1zm15.664-12.5v3h1v-3h-1zm-16.186 0v10.143h1V10.5h-1zM22.093 8H9.907v1h12.186V8zm2.5 2.5a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zm-16.186 0a1.5 1.5 0 011.5-1.5V8a2.5 2.5 0 00-2.5 2.5h1zM23.5 13h-2.442v1H23.5v-1zm-3.942 8.5v-6h-1v6h1zM23.5 23h-2.442v1H23.5v-1zm2.5-1.5v-6h-1v6h1zM23.5 24a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm0-10a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-2.442-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5v-1zm-2.5 8.5a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesMacbookAndIphone =
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
export default DevicesMacbookAndIphone;

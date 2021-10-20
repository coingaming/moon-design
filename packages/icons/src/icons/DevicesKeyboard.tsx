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
      d="M6.5 11H7h-.5zm0 10H6h.5zm16 3v.5-.5zm-13 0v-.5.5zm16-13H25h.5zm0 10h.5-.5zm-3-13v.5V8zm-13 0v-.5.5zm12.346 12.864a.5.5 0 100-1v1zm-11.692-1a.5.5 0 100 1v-1zm.5-3.88v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm0-3.636v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm3.654 3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm0-3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm3.653 3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm0-3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm3.654 3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zm0-3.637v1a1 1 0 001-1h-1zm0 0h-1a1 1 0 001 1v-1zm0 0v-1a1 1 0 00-1 1h1zm0 0h1a1 1 0 00-1-1v1zM6 11v10h1V11H6zm16.5 12.5h-13v1h13v-1zM25 11v10h1V11h-1zm1 0a3.5 3.5 0 00-3.5-3.5v1A2.5 2.5 0 0125 11h1zM7 11a2.5 2.5 0 012.5-2.5v-1A3.5 3.5 0 006 11h1zM6 21a3.5 3.5 0 003.5 3.5v-1A2.5 2.5 0 017 21H6zm16.5 3.5A3.5 3.5 0 0026 21h-1a2.5 2.5 0 01-2.5 2.5v1zm-.654-4.636H10.154v1h11.692v-1zM22.5 7.5h-13v1h13v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesKeyboard =
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
export default DevicesKeyboard;

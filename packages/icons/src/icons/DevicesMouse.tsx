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
      d="M13.5 10l.354.354L13.5 10zm-4 4l-.354-.354L9.5 14zm13 5l.354.354L22.5 19zm-4 4l-.354-.354.354.354zm4-13l.354-.354L22.5 10zm-13 13l.354-.354L9.5 23zm3.646-13.354l-4 4 .707.707 4-4-.707-.707zm9 9l-4 4 .707.707 4-4-.707-.707zm.707.707a6.864 6.864 0 000-9.707l-.707.707a5.864 5.864 0 010 8.293l.707.707zm-9-9a5.864 5.864 0 018.293 0l.707-.707a6.864 6.864 0 00-9.707 0l.707.707zm-4.707 3.293a6.864 6.864 0 000 9.707l.707-.707a5.864 5.864 0 010-8.293l-.707-.707zm0 9.707a6.864 6.864 0 009.707 0l-.707-.707a5.864 5.864 0 01-8.293 0l-.707.707zm12.75-13.457l-5 5 .708.707 5-5-.707-.707zm-5 5.707l4.5 4.5.708-.707-4.5-4.5-.707.707zm.708-.707l-4.5-4.5-.707.707 4.5 4.5.707-.707z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesMouse =
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
export default DevicesMouse;

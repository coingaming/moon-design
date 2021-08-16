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
      d="M6.5 13.594H7h-.5zm0 8.906H6h.5zm16 3V25v.5zm-13 0v.5-.5zm16-11.905H25h.5zm0 8.905h.5-.5zM20.366 9.387l-.447.223.447-.223zm-.614-1.229l.448-.223-.448.223zM17.07 6.5V7v-.5zm-2.138 0V7v-.5zm-2.683 1.658l-.447-.223.447.223zm-.614 1.229l-.448-.224.448.224zM9.21 10.885v-.5.5zm13.58 0v.5-.5zm-3.636 6.577A3.154 3.154 0 0116 20.614v1a4.154 4.154 0 004.154-4.153h-1zM16 20.614a3.154 3.154 0 01-3.154-3.153h-1A4.154 4.154 0 0016 21.614v-1zm-3.154-3.153A3.154 3.154 0 0116 14.308v-1a4.154 4.154 0 00-4.154 4.154h1zM16 14.308a3.154 3.154 0 013.154 3.154h1A4.154 4.154 0 0016 13.308v1zm-10-.714V22.5h1v-8.906H6zM22.5 25h-13v1h13v-1zM25 13.595V22.5h1v-8.905h-1zm-4.186-4.432L20.2 7.935l-.895.447.614 1.228.895-.447zM17.069 6h-2.138v1h2.138V6zm-5.268 1.935l-.615 1.228.895.447.614-1.228-.895-.447zM14.93 6a3.5 3.5 0 00-3.13 1.935l.894.447A2.5 2.5 0 0114.931 7V6zM9.21 11.385a3.21 3.21 0 002.87-1.775l-.894-.447a2.21 2.21 0 01-1.976 1.222v1zm13.58-1a2.21 2.21 0 01-1.976-1.222l-.895.447a3.21 3.21 0 002.871 1.775v-1zm-2.59-2.45A3.5 3.5 0 0017.069 6v1a2.5 2.5 0 012.236 1.382l.895-.447zm5.8 5.66a3.21 3.21 0 00-3.21-3.21v1c1.22 0 2.21.989 2.21 2.21h1zm-19 0c0-1.221.99-2.21 2.21-2.21v-1A3.21 3.21 0 006 13.595h1zM6 22.5A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPhoto =
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
export default MediaPhoto;

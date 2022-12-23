import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M12.115 9.423a.5.5 0 00-1 0h1zm-1 2.192a.5.5 0 101 0h-1zM10.5 25.5V25v.5zm11 0v.5-.5zm-15-15H7h-.5zm0 11H6h.5zm4-15V6v.5zm8.959 0V6v.5zm6.041 6.041h.5-.5zm0 8.959H25h.5zM22.287 7.672l-.354.353.354-.353zm2.041 2.041l.354-.354-.354.354zm-5.174 8.48A3.154 3.154 0 0116 21.345v1a4.154 4.154 0 004.154-4.154h-1zM16 21.345a3.154 3.154 0 01-3.154-3.154h-1A4.154 4.154 0 0016 22.346v-1zm-3.154-3.154A3.154 3.154 0 0116 15.038v-1a4.154 4.154 0 00-4.154 4.154h1zM16 15.038a3.154 3.154 0 013.154 3.154h1A4.154 4.154 0 0016 14.038v1zm-4.885-5.615v2.192h1V9.423h-1zM10.5 26h11v-1h-11v1zM6 10.5v11h1v-11H6zM10.5 7h8.959V6H10.5v1zM25 12.541V21.5h1v-8.959h-1zm-3.067-4.516l2.042 2.042.707-.708-2.041-2.041-.708.707zM26 12.541a4.5 4.5 0 00-1.318-3.182l-.707.708A3.5 3.5 0 0125 12.54h1zM19.459 7a3.5 3.5 0 012.474 1.025l.707-.707A4.5 4.5 0 0019.46 6v1zM7 10.5A3.5 3.5 0 0110.5 7V6A4.5 4.5 0 006 10.5h1zM21.5 26a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1zm-11-1A3.5 3.5 0 017 21.5H6a4.5 4.5 0 004.5 4.5v-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesSave =
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
export default FilesSave;

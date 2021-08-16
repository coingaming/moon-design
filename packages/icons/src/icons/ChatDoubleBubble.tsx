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
      d="M6.5 10.5H6h.5zm0 3.134H7h-.5zM18.393 6.5V6v.5zm-7.894 0V7v-.5zm-.493 5.667v-.5H9.77l-.15.182.386.318zm-1.735 2.104l.386.318-.386-.319zm10.122-2.104v.5-.5zm2.834-2.833h-.5.5zM24.5 20.29h.5-.5zm0 2.777H24h.5zm-11.894-6.777v.5-.5zm7.894 0v-.5.5zm.493 5.667l.355-.352-.146-.148h-.209v.5zm1.796 1.814l.355-.352-.355.352zm-10.183-1.814v.5-.5zM6 10.5v3.134h1V10.5H6zM18.393 6H10.5v1h7.894V6zM9.62 11.85l-1.735 2.102.772.637 1.735-2.104-.772-.636zm8.773-.183h-8.387v1h8.387v-1zm3.334-2.333A3.334 3.334 0 0018.393 6v1a2.334 2.334 0 012.334 2.334h1zM7 10.5A3.5 3.5 0 0110.5 7V6A4.5 4.5 0 006 10.5h1zm-1 3.134c0 1.407 1.761 2.04 2.657.955l-.772-.637A.5.5 0 017 13.634H6zm14.727-4.3a2.334 2.334 0 01-2.334 2.333v1a3.334 3.334 0 003.334-3.333h-1zM24 20.29v2.777h1v-2.777h-1zm-11.394-3.5H20.5v-1h-7.894v1zm8.032 5.519l1.795 1.814.711-.704-1.796-1.814-.71.704zm-8.032.148h8.387v-1h-8.387v1zm-2.334-3.334a2.334 2.334 0 012.334-2.333v-1a3.334 3.334 0 00-3.334 3.333h1zM25 20.291a4.5 4.5 0 00-4.5-4.5v1a3.5 3.5 0 013.5 3.5h1zm-1 2.777a.5.5 0 01-.856.352l-.71.704c.942.952 2.566.285 2.566-1.056h-1zM9.272 19.124a3.334 3.334 0 003.334 3.334v-1a2.334 2.334 0 01-2.334-2.334h-1z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ChatDoubleBubble =
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
export default ChatDoubleBubble;

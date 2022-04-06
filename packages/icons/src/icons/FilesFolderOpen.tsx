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
      d="M22.5 10.154v-.5.5zm-5.77 0l-.428.257.146.243h.283v-.5zM14.54 6.5l.428-.257L14.822 6h-.283v.5zM9.5 6.5V6v.5zm-3 3H7h-.5zm19 3.654H25h.5zm-.5 6.134a.5.5 0 001 0h-1zM6.5 20H7h-.5zm0 2.5H6h.5zm16 3V25v.5zm-13 0v.5-.5zm16-5.5H25h.5zm0 2.5h.5-.5zm-4-6.5v-.5.5zm-11 0v.5-.5zm12-6.346h-5.77v1h5.77v-1zm-5.34.243l-2.193-3.654-.857.514 2.192 3.654.858-.514zM14.539 6H9.5v1h5.039V6zM6 9.5v9.788h1V9.5H6zm19 3.654v6.134h1v-6.134h-1zm-2.5-2.5a2.5 2.5 0 012.5 2.5h1a3.5 3.5 0 00-3.5-3.5v1zM9.5 6A3.5 3.5 0 006 9.5h1A2.5 2.5 0 019.5 7V6zM6 20v2.5h1V20H6zm16.5 5h-13v1h13v-1zm2.5-5v2.5h1V20h-1zm-3.5-4.5h-11v1h11v-1zM26 20a4.5 4.5 0 00-4.5-4.5v1A3.5 3.5 0 0125 20h1zM7 20a3.5 3.5 0 013.5-3.5v-1A4.5 4.5 0 006 20h1zm-1 2.5A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesFolderOpen =
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
export default FilesFolderOpen;

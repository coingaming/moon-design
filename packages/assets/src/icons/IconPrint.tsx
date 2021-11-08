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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 7v3a3 3 0 00-3 3v9a3 3 0 003 3h1v2a3 3 0 003 3h14a3 3 0 003-3v-2h1a3 3 0 003-3v-9a3 3 0 00-3-3V7a5 5 0 00-5-5H10a5 5 0 00-5 5zm5-3a3 3 0 00-3 3v3h18V7a3 3 0 00-3-3H10zm16 19h1a1 1 0 001-1v-9a1 1 0 00-1-1H5a1 1 0 00-1 1v9a1 1 0 001 1h1v-2a3 3 0 013-3h14a3 3 0 013 3v2zM8 21a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconPrint =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconPrint;

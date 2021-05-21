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
      d="M13 10V7a3 3 0 00-3-3H7a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3zm2-3v3a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5h3a5 5 0 015 5zM28 10V7a3 3 0 00-3-3h-3a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3zm2-3v3a5 5 0 01-5 5h-3a5 5 0 01-5-5V7a5 5 0 015-5h3a5 5 0 015 5zM13 25v-3a3 3 0 00-3-3H7a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3zm2-3v3a5 5 0 01-5 5H7a5 5 0 01-5-5v-3a5 5 0 015-5h3a5 5 0 015 5zM28 25v-3a3 3 0 00-3-3h-3a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3zm2-3v3a5 5 0 01-5 5h-3a5 5 0 01-5-5v-3a5 5 0 015-5h3a5 5 0 015 5z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCard =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconCard;

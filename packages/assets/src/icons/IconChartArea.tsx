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
      d="M29 3a1 1 0 00-1.581-.814l-13.405 9.575L10.6 9.2a1 1 0 00-1.24.032l-6 5A1 1 0 003 15v8.992a1 1 0 001 1h24a1 1 0 001-1V3zM14.581 13.814L27 4.944v18.048H5v-7.524l5.033-4.194L13.4 13.8a1 1 0 001.181.014z"
      fill="currentColor"
    />
    <path d="M3 28a1 1 0 100 2h26a1 1 0 100-2H3z" fill="currentColor" />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconChartArea =
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
export default IconChartArea;

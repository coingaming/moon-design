import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 1a1 1 0 00-1.581-.814L12.014 9.761 8.6 7.2a1 1 0 00-1.24.032l-6 5A1 1 0 001 13v8.992a1 1 0 001 1h24a1 1 0 001-1V1zM12.581 11.814L25 2.944v18.048H3v-7.524l5.033-4.194L11.4 11.8a1 1 0 001.181.014z"
      fill="currentColor"
    />
    <path d="M1 26a1 1 0 100 2h26a1 1 0 100-2H1z" fill="currentColor" />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconChart = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconChart;

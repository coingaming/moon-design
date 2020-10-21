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
    <path d="M19 16a2 2 0 114 0 2 2 0 01-4 0z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 25a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5h18a5 5 0 015 5v18zm-2-15V7a3 3 0 00-3-3H7a3 3 0 00-3 3v18a3 3 0 003 3h18a3 3 0 003-3v-3h-8a5 5 0 01-5-5v-2a5 5 0 015-5h8zm0 2h-8a3 3 0 00-3 3v2a3 3 0 003 3h8v-8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconWalletRounded = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconWalletRounded;

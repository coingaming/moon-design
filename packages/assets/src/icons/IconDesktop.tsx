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
      d="M3 5h1-1zm2 18v-1 1zm-2-2h1-1zm24 1H5v2h22v-2zm1-17v16h2V5h-2zM2 5v16h2V5H2zm25-3H5v2h22V2zm3 3a3 3 0 00-3-3v2a1 1 0 011 1h2zM4 5a1 1 0 011-1V2a3 3 0 00-3 3h2zm1 17a1 1 0 01-1-1H2a3 3 0 003 3v-2zm22 2a3 3 0 003-3h-2a1 1 0 01-1 1v2z"
      fill="currentColor"
    />
    <path
      d="M29 19a1 1 0 100-2v2zM3 17a1 1 0 100 2v-2zm26 0H3v2h26v-2zM22 30a1 1 0 100-2v2zm-12-2a1 1 0 100 2v-2zm12 0H10v2h12v-2z"
      fill="currentColor"
    />
    <path
      d="M11 29a1 1 0 102 0h-2zm2-6a1 1 0 10-2 0h2zm0 6v-6h-2v6h2zM19 29a1 1 0 102 0h-2zm2-6a1 1 0 10-2 0h2zm0 6v-6h-2v6h2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDesktop = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
export default IconDesktop;

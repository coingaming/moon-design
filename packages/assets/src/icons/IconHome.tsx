import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.147 10.78l.176-.18h1.717l.176.18v7.04l-.176.18H3.154l-.177-.18v-7.04l.177-.18H4.87l.177.18v5.114h10.1V10.78zm-13.722.194l-.25-.008L0 9.693l.008-.254L4.323 5.39V1.33l.177-.18h1.716l.177.18v2.003L9.879 0h.242l9.871 9.439.008.254-1.175 1.273-.25.008L10 2.774l-8.575 8.2z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconHome = styled(Svg)<IconProps>(
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
export default IconHome;

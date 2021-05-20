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
      d="M25.697 26a1.883 1.883 0 001.866-2.138L25.599 9.46A4 4 0 0021.636 6H10.365A4 4 0 006.4 9.46L4.437 23.862a1.884 1.884 0 003.513 1.17l3.604-6.489A3 3 0 0114.177 17h3.646a3 3 0 012.623 1.543l3.604 6.488c.332.598.963.969 1.647.969zm3.848-2.408a3.883 3.883 0 01-7.243 2.41l-3.605-6.488a1 1 0 00-.874-.514h-3.646a1 1 0 00-.874.514l-3.605 6.489a3.883 3.883 0 01-7.242-2.411L4.419 9.189A6 6 0 0110.365 4h11.27a6 6 0 015.946 5.19l1.963 14.402z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconGamepad = styled(Svg)<IconProps>(
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
export default IconGamepad;

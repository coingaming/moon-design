import * as React from 'react';
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
      d="M3 5v3a3 3 0 00-3 3v9a3 3 0 003 3h1v2a3 3 0 003 3h14a3 3 0 003-3v-2h1a3 3 0 003-3v-9a3 3 0 00-3-3V5a5 5 0 00-5-5H8a5 5 0 00-5 5zm5-3a3 3 0 00-3 3v3h18V5a3 3 0 00-3-3H8zm16 19h1a1 1 0 001-1v-9a1 1 0 00-1-1H3a1 1 0 00-1 1v9a1 1 0 001 1h1v-2a3 3 0 013-3h14a3 3 0 013 3v2zM6 19a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconPrint = styled(Svg)<IconProps>(
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
export default IconPrint;

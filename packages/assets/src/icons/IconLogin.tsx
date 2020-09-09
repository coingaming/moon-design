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
      d="M7 27a1 1 0 011-1h15a3 3 0 003-3V5a3 3 0 00-3-3H8a1 1 0 110-2h15a5 5 0 015 5v18a5 5 0 01-5 5H8a1 1 0 01-1-1z"
      fill="currentColor"
    />
    <path
      d="M18.586 15l-4.293 4.293a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 10-1.414 1.414L18.586 13H1a1 1 0 100 2h17.586z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconLogin = styled(Svg)<IconProps>(
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
export default IconLogin;

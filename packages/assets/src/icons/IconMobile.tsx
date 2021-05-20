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
      d="M21.5 4C22.9 4 24 5.1 24 6.5v19.1c0 1.4-1.1 2.5-2.5 2.5h-11C9.1 28 8 26.9 8 25.5v-19C8 5.1 9.1 4 10.5 4h11zm0-2h-11C8 2 6 4 6 6.5v19.1C6 28 8 30 10.5 30h11c2.4 0 4.5-2 4.5-4.5v-19C26 4 24 2 21.5 2z"
      fill="currentColor"
    />
    <path
      d="M20.3 25.4h-8.6c-.6 0-1-.4-1-1s.4-1 1-1h8.6c.6 0 1 .4 1 1s-.4 1-1 1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconMobile = styled(Svg)<IconProps>(
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
export default IconMobile;

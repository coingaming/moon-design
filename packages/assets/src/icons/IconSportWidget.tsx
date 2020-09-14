import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.565 12H.435C.174 12 0 11.84 0 11.6V.4C0 .16.174 0 .435 0h19.13c.261 0 .435.16.435.4v11.2c0 .24-.174.4-.435.4z"
      fill="#31373F"
    />
    <path
      d="M10 9c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path d="M10 0v12" stroke="#31373F" strokeMiterlimit={10} />
    <path
      d="M0 3h3.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H0M20 3h-3.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H20"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportWidget = styled(Svg)<IconProps>(
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
export default IconSportWidget;

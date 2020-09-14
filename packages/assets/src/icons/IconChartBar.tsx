import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.667 1a1 1 0 01-1 1H3a1 1 0 110-2h6.667a1 1 0 011 1zM0 25a1 1 0 011-1h26a1 1 0 110 2H1a1 1 0 01-1-1zM16.333 8a1 1 0 100-2H3a1 1 0 000 2h13.333zM17.333 19a1 1 0 01-1 1H3a1 1 0 110-2h13.333a1 1 0 011 1zM23 14a1 1 0 100-2c-7.81.075-12.19.088-20 0a1 1 0 100 2h20z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconChartBar = styled(Svg)<IconProps>(
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
export default IconChartBar;

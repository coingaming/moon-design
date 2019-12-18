import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.017 15.137a8.357 8.357 0 0 1-7.644 4.902 8.367 8.367 0 0 1-8.344-8.402 8.357 8.357 0 0 1 4.954-7.61 8.292 8.292 0 0 0-.759 3.443 8.374 8.374 0 0 0 8.345 8.402 8.293 8.293 0 0 0 3.448-.735zM3.548 6.005a.5.5 0 1 0 .003-1 .5.5 0 0 0-.003 1zM14.044 7.041a1 1 0 1 0 .007-2 1 1 0 0 0-.007 2zM18.53 11.056a.5.5 0 1 0 .004-1 .5.5 0 0 0-.003 1zM3.003 19.003a1 1 0 1 0 .007-2 1 1 0 0 0-.007 2z"
      fill="#8697A2"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconMoon = styled(Svg)<IconProps>(
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
export default IconMoon;

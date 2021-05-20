import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M21.017 15.137a8.357 8.357 0 01-7.644 4.902 8.367 8.367 0 01-8.344-8.402 8.357 8.357 0 014.954-7.61 8.292 8.292 0 00-.759 3.443 8.374 8.374 0 008.345 8.402 8.293 8.293 0 003.448-.735zM3.548 6.005a.5.5 0 10.003-1 .5.5 0 00-.003 1zM14.044 7.041a1 1 0 10.007-2 1 1 0 00-.007 2zM18.53 11.056a.5.5 0 10.004-1 .5.5 0 00-.003 1zM3.003 19.003a1 1 0 10.007-2 1 1 0 00-.007 2z"
      fill="currentColor"
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

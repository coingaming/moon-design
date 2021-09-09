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
      d="M13.23 7.67c.661.905.876 2.108.555 3.175-.342 1.182-1.264 2.136-1.714 3.284a4.589 4.589 0 00-.028 3.318c.392 1.058 1.023 1.878 2.2 2.448 1.164.563 2.198.55 3.286.207a4.666 4.666 0 002.585-2.08c.621-1.065.797-2.38 1.512-3.381a3.752 3.752 0 012.835-1.535m-.264 6.862a9.107 9.107 0 11-16.395-7.936 9.107 9.107 0 0116.395 7.936z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportSetTennis = styled(Svg)<IconProps>(
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
export default SportSetTennis;

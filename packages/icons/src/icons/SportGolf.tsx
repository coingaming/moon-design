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
      d="M14.222 22.221l2 3.221L18 22.222m2.843-11.243a1.255 1.255 0 00-1.613.112c-.448.448-.493 1.143-.112 1.613M17.55 14.25a1.255 1.255 0 00-1.613.112c-.448.448-.493 1.142-.112 1.613m-1.546 1.568a1.255 1.255 0 00-1.613.112c-.448.448-.492 1.142-.112 1.613m.926-9.089a1.255 1.255 0 00-1.613.112c-.448.448-.493 1.143-.112 1.613m1.384 2.252a1.255 1.255 0 00-1.613.112c-.448.449-.492 1.143-.112 1.614m3.92-3.92a1.255 1.255 0 01.113-1.614c.448-.448 1.142-.493 1.613-.112m-.9-3.63a7.84 7.84 0 11-.32 15.678 7.84 7.84 0 01.32-15.679z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportGolf = styled(Svg)<IconProps>(
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
export default SportGolf;

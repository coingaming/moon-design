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
      d="M11.452 17.667a13.896 13.896 0 012.595-3.616 13.888 13.888 0 013.613-2.596m-4.24 1.97l1.363 1.363m-3.18.91l1.666 1.06m3.332-3.485l-1.06-1.667M7.966 18.17a18.363 18.363 0 005.86 5.864m4.33-16.062a18.364 18.364 0 015.86 5.864M9.043 24.123c1.408.288 4.316.546 7.738-1.151a13.778 13.778 0 006.193-6.198c1.696-3.409 1.439-6.318 1.15-7.742a1.49 1.49 0 00-1.165-1.167c-1.423-.273-4.33-.53-7.738 1.167a13.778 13.778 0 00-6.193 6.197c-1.696 3.41-1.439 6.319-1.15 7.743.12.576.575 1.03 1.165 1.151z"
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
const SportAmericanFootball = styled(Svg)<IconProps>(
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
export default SportAmericanFootball;

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
      d="M13.923 23.37a3.08 3.08 0 01-1.846.622m3.139.956A5.054 5.054 0 0112.123 26C9.308 26 7 23.657 7 20.693c0-2.965 2.308-5.308 5.123-5.308 1.2 0 2.308.43 3.185 1.148m4.846-6.407c-.647 1.052-.97 2.056-1.062 2.965-.277 2.247.6 4.064.6 5.02m-7.385-.335c1.339-3.394 3.831-6.646 6.277-7.506 1.8-.622 3.693-.622 5.031-.622m-10.77 2.646c-2.67-.61-4.717-2.934-4.717-2.934S10.802 6.05 14.126 6c1.893-.021 3.635.96 4.777 1.836M25 20.645c0 2.905-2.273 5.26-5.077 5.26s-5.077-2.355-5.077-5.26 2.273-5.26 5.077-5.26S25 17.74 25 20.645z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportCasino =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default SportCasino;

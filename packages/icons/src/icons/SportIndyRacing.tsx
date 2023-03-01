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
      d="M9.461 9.455c1.823-1.71 4.223-2.955 7.35-2.955C16.81 6.5 28 6.296 28 16.547c0 0-.154 5.726-3.487 8.492 0 0-.522.46-1.928.46H7.088s-.701.038-1.481-.471c0 0-1.838-.91-1.583-4.34m.154.803s1.71.068 5.066-.298m-4.567 2.238s1.71.068 5.066-.298m-5.419-4.26c.281-1.14 1.328-4.843 3.75-7.9l.266.117s2.813 1.358 7.095.558c0 0 3.12-1.132 3.914 1.453 0 0 .98 2.706-2.26 3.94 0 0-5.441 2.031-12.6 1.835h-.165v-.004z"
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
const SportIndyRacing =
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
export default SportIndyRacing;

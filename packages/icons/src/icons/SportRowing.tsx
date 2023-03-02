import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M16.371 24.401a3.332 3.332 0 002.503-1.609 3.336 3.336 0 002.875 1.63 3.334 3.334 0 002.874-1.63 3.336 3.336 0 002.875 1.63m-22.998 0a3.334 3.334 0 002.875-1.63 3.336 3.336 0 002.874 1.63c.385 0 .753-.065 1.096-.182m13.437-6.468l-5.237-6.681a3.898 3.898 0 00-4.511-1.199L6.59 13.277a.984.984 0 00-.544 1.297c.212.5.811.722 1.324.525l7.147-2.745 2.824 3.402h-.902a5.93 5.93 0 00-4.16 1.697l-.322.317m-4.296-2.707l4.922 6.942m0 0l-.436 1.683.815 1.146a1.349 1.349 0 001.86.325 1.302 1.302 0 00.33-1.833l-.815-1.147-1.754-.174zm-3.872-3.27H4.5m23 0H10.358M16.15 6.343c0 1.294-1.066 2.344-2.38 2.344-1.315 0-2.381-1.05-2.381-2.344C11.39 5.049 12.456 4 13.77 4c1.315 0 2.38 1.05 2.38 2.344z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportRowing =
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
export default SportRowing;

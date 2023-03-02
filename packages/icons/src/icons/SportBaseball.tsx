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
      d="M18.44 15.21l1.842-.597m-.648 2.91l1.557-1.134m.275 3.02l1.15-1.595m-4.192-7.777l1.856.582m-2.244 1.987l1.927.004m-6.408 4.186l-1.91.62m2.334 2.054l-2.004-.016m1.581 2.706l-1.91-.64m-1.24-9.066l-1.182 1.605m3.092.29l-1.614 1.19m12.524-5.706A9.5 9.5 0 118.774 22.167 9.5 9.5 0 0123.226 9.833z"
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
const SportBaseball =
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
export default SportBaseball;

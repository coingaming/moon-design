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
      d="M21.444 7.553l1.694 1.406M5.05 22.225l5.38 4.628m15.267-22.67l1.67 1.387c.277.23.087.67-.275.638l-1.346-.121a.448.448 0 00-.385.159l-13.83 16.681-2.711-2.231L24.618 4.242a.797.797 0 011.08-.06zM8.587 20.442l3.37 2.874c.082.07.122.174.106.279-.065.434-.355 1.65-1.633 3.258 0 0-2.191 2.316-5.218.364A1.554 1.554 0 014.5 25.91V23.17c0-.485.27-.931.706-1.166L8.177 20.4a.367.367 0 01.41.043v0zm12.01 4.757c0 1.438-1.195 2.604-2.67 2.604-1.473 0-2.668-1.166-2.668-2.604 0-1.438 1.195-2.603 2.669-2.603s2.668 1.165 2.668 2.603z"
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
const SportGaelicHurling =
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
export default SportGaelicHurling;

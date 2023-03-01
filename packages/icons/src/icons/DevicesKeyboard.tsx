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
      d="M21.846 20.364H10.154m1-4.38a.5.5 0 11-1 0 .5.5 0 011 0zm0-3.636a.5.5 0 11-1 0 .5.5 0 011 0zm3.654 3.637a.5.5 0 11-1 0 .5.5 0 011 0zm0-3.637a.5.5 0 11-1 0 .5.5 0 011 0zm3.653 3.637a.5.5 0 11-1 0 .5.5 0 011 0zm0-3.637a.5.5 0 11-1 0 .5.5 0 011 0zm3.654 3.637a.5.5 0 11-1 0 .5.5 0 011 0zm0-3.637a.5.5 0 11-1 0 .5.5 0 011 0zM6.5 11v10a3 3 0 003 3h13a3 3 0 003-3V11a3 3 0 00-3-3h-13a3 3 0 00-3 3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesKeyboard =
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
export default DevicesKeyboard;

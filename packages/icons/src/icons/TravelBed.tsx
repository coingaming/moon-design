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
      d="M24.8 13.517v-3.31A2.203 2.203 0 0022.6 8H9.4c-1.215 0-2.2.988-2.2 2.207v3.31m0 8.276V24m17.6-2.207V24M9.95 13.517v-1.655c0-.61.493-1.103 1.1-1.103h2.2c.607 0 1.1.494 1.1 1.103v1.655m3.3 0v-1.655c0-.61.492-1.103 1.1-1.103h2.2c.608 0 1.1.494 1.1 1.103v1.655M6.1 21.241h19.8c.608 0 1.1-.494 1.1-1.103v-3.31c0-.61-.492-1.104-1.1-1.104H6.1c-.608 0-1.1.494-1.1 1.104v3.31c0 .61.492 1.103 1.1 1.103z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelBed =
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
export default TravelBed;

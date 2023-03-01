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
      d="M6 6.5a.5.5 0 000 1v-1zM19.333 21v-.5a.5.5 0 00-.5.5h.5zm2.5 0h.5a.5.5 0 00-.5-.5v.5zM15.5 14a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM14 15.5a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zM12.5 14a1.5 1.5 0 011.5-1.5v-1a2.5 2.5 0 00-2.5 2.5h1zm1.5-1.5a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zM9.5 14A1.5 1.5 0 018 15.5v1a2.5 2.5 0 002.5-2.5h-1zM8 15.5A1.5 1.5 0 016.5 14h-1A2.5 2.5 0 008 16.5v-1zM6.5 14A1.5 1.5 0 018 12.5v-1A2.5 2.5 0 005.5 14h1zM8 12.5A1.5 1.5 0 019.5 14h1A2.5 2.5 0 008 11.5v1zM21.5 14a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM20 15.5a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zM18.5 14a1.5 1.5 0 011.5-1.5v-1a2.5 2.5 0 00-2.5 2.5h1zm1.5-1.5a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zM25.5 9v10h1V9h-1zM6 7.5h18v-1H6v1zm18 13H6v1h18v-1zm1.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm1-10A2.5 2.5 0 0024 6.5v1A1.5 1.5 0 0125.5 9h1zm-7.167 12.5h2.5v-1h-2.5v1zm2-.5v5.833h1V21h-1zM21 27.167h-.833v1H21v-1zm-1.167-.334V21h-1v5.833h1zm.334.334a.333.333 0 01-.334-.334h-1c0 .737.597 1.334 1.334 1.334v-1zm1.166-.334c0 .184-.149.334-.333.334v1c.736 0 1.333-.597 1.333-1.334h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBiathlon =
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
export default SportBiathlon;

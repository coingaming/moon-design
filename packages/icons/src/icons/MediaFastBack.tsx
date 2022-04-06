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
      d="M21.84 22.455l-4.945-4.365c-1.193-1.053-1.193-3.127 0-4.18l4.944-4.365c1.5-1.323 3.661-.088 3.661 2.09v8.73c0 2.178-2.162 3.413-3.66 2.09z"
      stroke="currentColor"
    />
    <path
      d="M12.34 22.455L7.394 18.09c-1.193-1.053-1.193-3.127 0-4.18l4.944-4.365C13.84 8.222 16 9.457 16 11.635v8.73c0 2.178-2.162 3.413-3.66 2.09z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaFastBack =
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
export default MediaFastBack;

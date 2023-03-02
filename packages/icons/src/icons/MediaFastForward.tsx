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
      d="M10.16 22.455l4.945-4.365c1.193-1.053 1.193-3.127 0-4.18l-4.944-4.365C8.66 8.222 6.5 9.457 6.5 11.635v8.73c0 2.178 2.162 3.413 3.66 2.09z"
      stroke="currentColor"
    />
    <path
      d="M19.66 22.455l4.945-4.365c1.193-1.053 1.193-3.127 0-4.18l-4.944-4.365C18.16 8.222 16 9.457 16 11.635v8.73c0 2.178 2.162 3.413 3.66 2.09z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaFastForward =
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
export default MediaFastForward;

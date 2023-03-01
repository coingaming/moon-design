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
      d="M21.23 10.748c1.962 1.15 3.27 3.21 3.27 5.563 0 2.352-1.308 4.413-3.27 5.562m-.653-7.117c.392.322.654.898.654 1.555 0 .657-.262 1.233-.654 1.554M7.5 17.731v-3.462a2 2 0 012-2h.476a2 2 0 001.37-.543l4.93-4.64c.638-.6 1.686-.148 1.686.728v16.372c0 .876-1.048 1.328-1.686.728l-4.93-4.64a2 2 0 00-1.37-.543H9.5a2 2 0 01-2-2z"
      stroke="currentColor"
      strokeMiterlimit={16}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaVolume =
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
export default MediaVolume;

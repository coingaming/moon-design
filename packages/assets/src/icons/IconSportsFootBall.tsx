import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 01-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 01-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 01-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 013.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 013.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 011.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsFootBall =
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
export default IconSportsFootBall;

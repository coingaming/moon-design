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
      d="M25.258 16.804s-1.651.673-4.746 1.032m4.746-1.032l2.12.591c.633.176.834.944.363 1.389-.452.426-4.52 1.027-9.057.287m6.574-2.267C22.466 4.884 12.696 6.93 12.696 6.93c-7.702 1.48-8.87 7.073-8.677 11.023.075 1.514.394 3.01.921 4.439l.106.286m4.991-15.08a1.551 1.551 0 01-.368-1.002C9.67 5.715 10.413 5 11.33 5s1.661.715 1.661 1.597c0 .099-.01.195-.028.29M5.046 22.679c.809-.546 4.628-2.755 6.458-3.263 2.33-.648 4.789-.736 7.18-.345M5.046 22.679c.22.488.466.922.727 1.307C7.06 25.882 9.28 27 11.635 27c3.893 0 7.049-3.034 7.049-6.776v-1.153"
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
const SportEquestrian =
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
export default SportEquestrian;

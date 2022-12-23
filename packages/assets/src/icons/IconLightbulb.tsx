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
      d="M16 4c4.5 0 8.1 3.6 8.1 8.1 0 2-.8 3.7-2.4 5.3-.8.8-1.3 1.9-1.6 2.8C19.4 22 19 23 16 23c-3 0-3.4-1-4.1-2.8-.4-.9-.8-2-1.6-2.8-1.6-1.6-2.4-3.3-2.4-5.3C7.9 7.6 11.5 4 16 4zm0-2C10.4 2 5.9 6.5 5.9 12.1c0 2.8 1.1 4.9 3 6.7 1.8 1.8.9 6.3 7.1 6.3 6.3 0 5.3-4.4 7.1-6.3 1.8-1.8 3-4 3-6.7C26.1 6.5 21.6 2 16 2z"
      fill="currentColor"
    />
    <path
      d="M16 30c-2 0-3.6-1.4-3.6-3.2v-2.6h2v2.6c0 .7.7 1.2 1.6 1.2.9 0 1.6-.6 1.6-1.2v-2.6h2v2.6c0 1.7-1.6 3.2-3.6 3.2z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLightbulb =
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
export default IconLightbulb;

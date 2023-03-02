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
      d="M20.969 23.813l-1.708 1.492M5.865 14.052a4.62 4.62 0 002.286 1.784c1.836.657 3.387 1.635 4.602 2.917.722.76 1.91.835 2.74.192a2.054 2.054 0 00.479-2.726c-.924-1.448-1.487-3.199-1.618-5.083a4.615 4.615 0 00-.962-2.515M22 28.5L19 25l-2-2.5c-2 1-3.252.05-4.183-1.119a3.622 3.622 0 01-.199-.273c-1.179-1.794-2.974-3.068-4.997-3.79a6.194 6.194 0 01-3.061-2.387c-1.721-2.55-1.286-6.039 1.007-8.09a6.217 6.217 0 0110.356 4.184c.145 2.065.882 4.074 2.328 5.554a3.62 3.62 0 01.521 4.402L23.79 27M9.082 7.892l-.3 2.364m0 0l-.31 2.458m.31-2.458l2.459.31m-2.458-.31l-2.365-.3m2.054 2.758l-.2 1.574.001.001m.199-1.575l2.459.312m-2.46-.312l-2.045-.258m4.194 3.028l.31-2.458m0 0l.31-2.46m-.31 2.46l2.452.373m-2.141-2.832l.26-2.044m-.26 2.044l1.574.199m11.798-2.22a3.286 3.286 0 11-.825 6.52 3.286 3.286 0 01.825-6.52z"
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
const SportLacrosse =
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
export default SportLacrosse;

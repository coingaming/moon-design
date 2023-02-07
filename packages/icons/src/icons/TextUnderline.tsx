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
      d="M23.5 6.5a.5.5 0 00-1 0h1zm-.5 9.077h.5-.5zM9.5 6.5a.5.5 0 00-1 0h1zM9 15.577h-.5.5zm7 7v.5-.5zM9.737 25a.5.5 0 000 1v-1zm12.526 1a.5.5 0 000-1v1zM22.5 6.5v9.077h1V6.5h-1zm-14 0v9.077h1V6.5h-1zM16 22.077a6.5 6.5 0 01-6.5-6.5h-1a7.5 7.5 0 007.5 7.5v-1zm6.5-6.5a6.5 6.5 0 01-6.5 6.5v1a7.5 7.5 0 007.5-7.5h-1zM9.737 26h12.526v-1H9.737v1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextUnderline =
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
export default TextUnderline;

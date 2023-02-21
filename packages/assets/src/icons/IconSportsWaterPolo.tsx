import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
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
      d="M12.554 11.277c1.11 0 2-.89 2-2 0-1.109-.89-2-2-2-1.11 0-2 .891-2 2-.11 1.114.777 2 2 2zm-4.777 1.778s-1.555 2.554-2.332 3.668c.555-.11 1-.332 1.445-.778.668-.554 1.445-1.222 2.777-1.222 1.446 0 2.223.668 2.778 1.222.554.446 1 .778 1.777.778.668 0 1.11-.223 1.446-.555l-1.891-2-.445-.445-7.778-5.446v-4.5c.145.04.293.059.446.059 1.113 0 1.89-.89 1.89-1.89C7.89.945 7 .058 6 .058c-1 0-1.891.886-1.891 1.886 0 .051.004.102.008.153-.27.195-.45.52-.45.847v6.332l4.555 3.11-.445.668zM19.109 16.5c-1.445 0-2.223.668-2.778 1.11-.554.445-.89.777-1.777.777-.777 0-1.223-.332-1.777-.778-.668-.554-1.445-1.222-2.777-1.222-1.446 0-2.223.668-2.778 1.222-.555.446-1 .778-1.777.778-.778 0-1.223-.332-1.778-.778C3 17.055 2.335 16.5.89 16.5a.758.758 0 00-.777.777c0 .446.332.778.777.778.89 0 1.332.332 1.89.777.555.445 1.333 1.11 2.669 1.11s2.11-.669 2.777-1.223c.332-.446.777-.89 1.668-.89.89 0 1.332.331 1.89.89.669.554 1.333 1.222 2.778 1.222 1.332 0 2.11-.668 2.668-1.109.555-.445 1-.777 1.89-.777a.758.758 0 00.778-.778c-.121-.445-.453-.777-.79-.777z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsWaterPolo =
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
export default IconSportsWaterPolo;

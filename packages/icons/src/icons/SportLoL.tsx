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
      d="M8.962 21.546a9.143 9.143 0 01-2.443-5.66 9.09 9.09 0 011.575-5.727m16.88 8.2a9.065 9.065 0 00.507-3.628c-.218-3.424-2.308-6.298-5.236-7.731m-7.294 5.656v7.195a4.247 4.247 0 01-1.541 3.262c-.776.646-.308 1.887.711 1.887h10.686c.434 0 .847-.188 1.127-.513l.747-.869c.804-.936.123-2.365-1.128-2.365h-5.03c-.813 0-1.473-.644-1.473-1.44V7.298h-4.479c-1.09 0-1.663 1.265-.928 2.054a4.848 4.848 0 011.308 3.305z"
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
const SportLoL =
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
export default SportLoL;

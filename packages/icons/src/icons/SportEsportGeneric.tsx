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
      d="M11.012 12.596v1.973m0 0v1.972m0-1.972h-1.89m1.89 0h1.89M22.932 24c-1.001 0-1.933-.517-2.494-1.384l-.108-.166c-.872-1.347-2.323-2.152-3.882-2.152h-.896c-1.559 0-3.01.805-3.882 2.152l-.108.166C11.002 23.483 10.07 24 9.067 24a2.982 2.982 0 01-2.423-1.278l-.057-.08A3.213 3.213 0 016 20.778v-1.064c0-3.449.74-6.922 2.138-10.045C8.592 8.656 9.578 8 10.652 8h.284c.781 0 1.53.346 2.056.95.292.338.71.53 1.146.53h3.725c.435 0 .853-.192 1.145-.53A2.728 2.728 0 0121.065 8h.283c1.074 0 2.06.656 2.515 1.67A24.767 24.767 0 0126 19.715v1.064c0 .675-.203 1.32-.587 1.863l-.057.08A2.983 2.983 0 0122.933 24zm-6.405-6.267a.54.54 0 01-.527.55.54.54 0 01-.527-.55.54.54 0 01.527-.55.54.54 0 01.527.55zm5.067-4.887a.47.47 0 01-.46.48.47.47 0 01-.46-.48.47.47 0 01.46-.48.47.47 0 01.46.48zm0 3.445a.47.47 0 01-.46.48.47.47 0 01-.46-.48.47.47 0 01.46-.48.47.47 0 01.46.48zm-1.728-1.722a.47.47 0 01-.46.48.47.47 0 01-.459-.48.47.47 0 01.46-.48.47.47 0 01.46.48zm3.392 0a.47.47 0 01-.46.48.47.47 0 01-.46-.48.47.47 0 01.46-.48.47.47 0 01.46.48z"
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
const SportEsportGeneric =
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
export default SportEsportGeneric;

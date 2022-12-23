import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7.937h1.54V4.829h3.146v3.108h1.53V0h-1.53v3.432H1.54V0H0v7.937zM6.797 7.937h1.53v-2.27l.748-.916 2.061 3.186h1.888l-2.94-4.438L12.926 0h-1.942L8.348 3.476h-.021V0h-1.53v7.937zM13.448 7.937h2.582c2.473 0 3.97-1.621 3.97-3.958C20 1.632 18.438 0 15.997 0h-2.55v7.937zm1.508-1.398V1.397h1.063c1.4 0 2.386 1.096 2.386 2.582 0 1.454-.976 2.56-2.473 2.56h-.976z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyHkd =
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
export default IconCurrencyHkd;

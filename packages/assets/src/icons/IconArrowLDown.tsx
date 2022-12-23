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
      d="M16 30c-.8 0-1.7-.3-2.3-1L3.3 18.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l10.4 10.4c.5.5 1.4.5 1.8 0l10.4-10.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L18.3 29c-.6.6-1.5 1-2.3 1z"
      fill="currentColor"
    />
    <path
      d="M16 29.9c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1s1 .4 1 1v25.8c0 .6-.4 1.1-1 1.1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconArrowLDown =
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
export default IconArrowLDown;

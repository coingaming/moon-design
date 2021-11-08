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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.818 5H8.273A6.273 6.273 0 002 11.273V20a6.273 6.273 0 006.273 6.273h14.545A6.273 6.273 0 0029.091 20v-8.727A6.273 6.273 0 0022.818 5zM8.273 4h14.545a7.273 7.273 0 017.273 7.273V20a7.273 7.273 0 01-7.273 7.273H8.273A7.273 7.273 0 011 20v-8.727A7.273 7.273 0 018.273 4z"
      fill="currentColor"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconFullScreen =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconFullScreen;

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
      d="M15.5 26a.5.5 0 001 0h-1zm1-5.16a.5.5 0 00-1 0h1zm-7-9.487v-.5H9v.5h.5zm13 0h.5v-.5h-.5v.5zM12.437 6a.5.5 0 00-1 0h1zm-1 5.353a.5.5 0 101 0h-1zM20.563 6a.5.5 0 00-1 0h1zm-1 5.353a.5.5 0 101 0h-1zM16.5 26v-5.16h-1V26h1zm-3.75-4.66h6.5v-1h-6.5v1zM9 11.353v6.26h1v-6.26H9zm13 0v6.26h1v-6.26h-1zm-12.5.5h13v-1h-13v1zM11.438 6v5.353h1V6h-1zm8.124 0v5.353h1V6h-1zM9 17.613c0 .99.396 1.938 1.1 2.637l.704-.71A2.715 2.715 0 0110 17.613H9zm1.1 2.637a3.762 3.762 0 002.65 1.09v-1c-.73 0-1.43-.288-1.946-.8l-.704.71zM22 17.613c0 .722-.289 1.416-.804 1.927l.704.71a3.715 3.715 0 001.1-2.637h-1zm-.804 1.927c-.516.512-1.216.8-1.946.8v1c.993 0 1.947-.392 2.65-1.09l-.704-.71z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelPlug =
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
export default TravelPlug;

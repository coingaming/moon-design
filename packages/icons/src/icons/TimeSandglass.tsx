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
      d="M8.5 25a.5.5 0 000 1v-1zm15 1a.5.5 0 000-1v1zM8.5 6a.5.5 0 000 1V6zm15 1a.5.5 0 000-1v1zM9.25 25.5h-.5v.5h.5v-.5zm13.5 0v.5h.5v-.5h-.5zm0-19h.5V6h-.5v.5zm-13.5 0V6h-.5v.5h.5zM8.5 26h15v-1h-15v1zm.75-2.923h13.5v-1H9.25v1zm0-13.154h13.5v-1H9.25v1zM8.5 7h15V6h-15v1zm14.25 18H9.25v1h13.5v-1zm.5-2.423c0-3.92-3.258-7.077-7.25-7.077v1c3.464 0 6.25 2.733 6.25 6.077h1zm-13.5 0c0-3.344 2.786-6.077 6.25-6.077v-1c-3.992 0-7.25 3.156-7.25 7.077h1zM9.25 7h13.5V6H9.25v1zm-.5 2.423c0 3.92 3.258 7.077 7.25 7.077v-1c-3.464 0-6.25-2.733-6.25-6.077h-1zm13.5 0c0 3.344-2.786 6.077-6.25 6.077v1c3.992 0 7.25-3.156 7.25-7.077h-1zm0 13.154V25.5h1v-2.923h-1zM9.75 25.5v-2.923h-1V25.5h1zm0-16.077V6.5h-1v2.923h1zM22.25 6.5v2.923h1V6.5h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeSandglass =
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
export default TimeSandglass;

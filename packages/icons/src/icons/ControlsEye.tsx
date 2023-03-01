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
      d="M15.654 11.91C10.874 11.91 7 16.53 7 17.703c0 1.175 3.874 5.796 8.654 5.796 4.78 0 8.654-4.621 8.654-5.796 0-1.174-3.875-5.795-8.654-5.795zm0 0c-2.103 0-3.808 1.678-3.808 3.75 0 2.07 1.705 3.75 3.808 3.75 2.103 0 3.808-1.68 3.808-3.75 0-2.072-1.705-3.75-3.808-3.75zm9.346 0c-2.636-2.167-5.713-3.41-9-3.41s-6.364 1.243-9 3.41"
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
const ControlsEye =
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
export default ControlsEye;

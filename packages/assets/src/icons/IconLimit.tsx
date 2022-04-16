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
      d="M7.3 4c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3C5.5 10.6 4 9.2 4 7.3S5.5 4 7.3 4zm0-2C4.4 2 2 4.4 2 7.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3S10.3 2 7.3 2zM24.7 21.3c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.4-3.3 3.4-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.4-3.4 3.3-3.4zm0-2c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zM3.3 29.7c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L28 2.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L4 29.4c-.2.2-.4.3-.7.3z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLimit =
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
export default IconLimit;

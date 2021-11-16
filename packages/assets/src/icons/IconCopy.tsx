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
      d="M9.935 2.298A1 1 0 0110.647 2H17a5 5 0 015 5 5 5 0 015 5v13a5 5 0 01-5 5h-8a5 5 0 01-5-5 5 5 0 01-5-5V8.727a1 1 0 01.288-.702l5.647-5.727zM20 7v13a3 3 0 01-3 3H9a3 3 0 01-3-3v-9h6a1 1 0 001-1V4h4a3 3 0 013 3zm-9-2.934V9H6.135L11 4.066zM14 28a3 3 0 01-3-3h6a5 5 0 005-5V9a3 3 0 013 3v13a3 3 0 01-3 3h-8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCopy =
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
export default IconCopy;

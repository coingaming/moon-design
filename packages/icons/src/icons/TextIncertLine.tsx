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
      d="M20.385 25.5a.5.5 0 000-1v1zm-8.77-1a.5.5 0 100 1v-1zm8.77-17a.5.5 0 100-1v1zm-8.77-1a.5.5 0 100 1v-1zM21.5 21.25v-.5.5zm-11 0v-.5.5zm15-6.5h.5-.5zm0 2.5H25h.5zm-4-6.5v-.5.5zm-11 0v.5-.5zm9.885 13.75h-8.77v1h8.77v-1zm0-18h-8.77v1h8.77v-1zM6 14.75v2.5h1v-2.5H6zm15.5 6h-11v1h11v-1zm3.5-6v2.5h1v-2.5h-1zm-3.5-4.5h-11v1h11v-1zm4.5 4.5a4.5 4.5 0 00-4.5-4.5v1a3.5 3.5 0 013.5 3.5h1zm-19 0a3.5 3.5 0 013.5-3.5v-1a4.5 4.5 0 00-4.5 4.5h1zm-1 2.5a4.5 4.5 0 004.5 4.5v-1a3.5 3.5 0 01-3.5-3.5H6zm15.5 4.5a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextIncertLine =
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
export default TextIncertLine;

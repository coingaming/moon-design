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
      d="M23.308 6.5c-1.211 0-2.193.906-2.193 2.025v15.51c0 1.207-1.379 1.894-2.342 1.167l-4.085-3.084a1.461 1.461 0 00-1.76 0l-4.086 3.084c-.963.727-2.342.04-2.342-1.167V8.693c0-1.211.929-2.193 2.074-2.193h14.734zm0 0c1.21 0 2.192.906 2.192 2.025v3.093c0 .807-.654 1.462-1.462 1.462h-2.923"
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
const GenericBookmark =
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
export default GenericBookmark;

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
      d="M20.8 19.8c-.3 0-.5-.1-.7-.3l-3.6-3.6c-.4-.4-1.2-.4-1.6 0l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.6-3.6c1.2-1.2 3.3-1.2 4.5 0l3.6 3.6c.4.4.4 1 0 1.4-.2.2-.5.3-.8.3z"
      fill="currentColor"
    />
    <path
      d="M15.7 28c-.6 0-1-.4-1-1V14.6c0-.6.4-1 1-1s1 .4 1 1V27c0 .5-.4 1-1 1z"
      fill="currentColor"
    />
    <path
      d="M23 24.5c-.6 0-1-.4-1-1s.4-1 1-1c1.4 0 2.7-.6 3.7-1.6s1.4-2.4 1.3-3.8c-.2-2.5-2.5-4.5-5.2-4.5-1 0-1.7-.6-1.8-1.5-.5-2.9-3-5.1-6-5.1-3.1 0-5.4 2.5-5.6 5.9 0 .7-.5 1.2-1.1 1.3-1.2.2-4 1.1-4.1 4.6-.2 1.2.3 2.3 1.1 3.2.9 1 2.2 1.5 3.5 1.5.6 0 1 .4 1 1s-.4 1-1 1c-1.9 0-3.7-.8-5-2.1-1.2-1.3-1.9-3-1.8-4.7.2-3.8 2.7-5.7 5.3-6.4.5-4.2 3.6-7.3 7.6-7.3 3.9 0 7.2 2.8 8 6.6 3.7.1 6.7 2.8 7.1 6.3.2 2-.4 3.9-1.8 5.4-1.3 1.4-3.2 2.2-5.2 2.2z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconAttache =
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
export default IconAttache;

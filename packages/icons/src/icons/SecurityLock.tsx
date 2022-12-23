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
      d="M6.5 15.387H6h.5zm0 7.113H7h-.5zm16 3V25v.5zm-13 0v.5-.5zm16-10.113H25h.5zm0 7.113h.5-.5zm-3-10.113v-.5.5zm-13 0v.5-.5zm6 7.713a.5.5 0 101 0h-1zm1-3.085a.5.5 0 10-1 0h1zM6 15.387V22.5h1v-7.113H6zM22.5 25h-13v1h13v-1zm2.5-9.613V22.5h1v-7.113h-1zm-2.5-3.5h-13v1h13v-1zm3.5 3.5a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zm-19 0a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM6 22.5A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zM10.654 12.67C10.654 9.514 13.072 7 16 7V6c-3.53 0-6.346 3.012-6.346 6.67h1zM16 7c2.927 0 5.346 2.513 5.346 5.67h1C22.346 9.013 19.53 6 16 6v1zm.5 13.1v-3.085h-1V20.1h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityLock =
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
export default SecurityLock;

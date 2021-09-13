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
      d="M12.826 10.462v-.5h-.5v.5h.5zm0 3.461h-.5v.5h.5v-.5zm0 4.154v-.5h-.5v.5h.5zm0 3.461h-.5v.5h.5v-.5zm7.096-5.744l-.287-.41a.5.5 0 00.07.861l.217-.45zm-7.096-4.832h3.912v-1h-3.912v1zm3.912 2.461h-3.912v1h3.912v-1zm-3.412.5v-3.461h-1v3.461h1zm4.642-1.73c0 .68-.55 1.23-1.23 1.23v1a2.23 2.23 0 002.23-2.23h-1zm-1.23-1.231c.68 0 1.23.55 1.23 1.23h1a2.23 2.23 0 00-2.23-2.23v1zm-3.912 7.615h3.912v-1h-3.912v1zm3.912 2.461h-3.912v1h3.912v-1zm-3.412.5v-3.461h-1v3.461h1zm4.642-1.73c0 .68-.55 1.23-1.23 1.23v1a2.23 2.23 0 002.23-2.23h-1zm-1.23-1.231c.68 0 1.23.551 1.23 1.23h1a2.23 2.23 0 00-2.23-2.23v1zm.32-12.077h-7.053v1h7.053v-1zM8.8 7.692v16.616h1V7.692h-1zM10.005 25.5h7.758v-1h-7.758v1zM8.8 24.308c0 .667.548 1.192 1.205 1.192v-1a.2.2 0 01-.205-.192h-1zM10.005 6.5c-.657 0-1.205.525-1.205 1.192h1a.2.2 0 01.205-.192v-1zm11.49 5.346c0 1.456-.731 2.748-1.86 3.539l.573.819a5.314 5.314 0 002.287-4.358h-1zM17.058 7.5c2.46 0 4.437 1.955 4.437 4.346h1c0-2.961-2.443-5.346-5.437-5.346v1zM22.2 20.154c0 2.391-1.978 4.346-4.437 4.346v1c2.994 0 5.437-2.385 5.437-5.346h-1zm-2.494-3.909c1.481.708 2.494 2.196 2.494 3.909h1c0-2.12-1.254-3.947-3.063-4.811l-.431.902z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextBold =
  styled(Svg) <
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
export default TextBold;

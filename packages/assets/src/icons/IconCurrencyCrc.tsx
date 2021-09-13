import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 35 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.58 39.04c-.768 0-1.472-.064-2.176-.128l9.856-23.744 5.056-7.808c-.448-.32-.96-.576-1.408-.896L34.7 2.176 30.796.704 29.068 4.8a22.092 22.092 0 00-2.752-.768l.768-1.856L23.18.704l-1.216 2.88h-.384C7.5 3.584.46 12.928.46 26.304c0 7.04 1.984 12.352 5.312 16l-3.84 9.28 3.904 1.536 3.328-7.936c.768.512 1.6.96 2.496 1.344l-2.112 5.056 3.904 1.536 2.176-5.248c1.92.448 3.904.64 5.952.64 5.184 0 9.728-1.536 12.992-3.84l-5.76-7.616c-1.856 1.28-4.48 1.984-7.232 1.984zm-8.256-3.904L22.54 13.12c.896.064 1.92.256 2.88.512L15.5 37.376c-.896-.576-1.6-1.344-2.176-2.24zm-1.984-8.832c0-7.616 2.432-11.392 6.464-12.736L11.468 28.8c-.064-.768-.128-1.6-.128-2.496z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyCrc =
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
export default IconCurrencyCrc;

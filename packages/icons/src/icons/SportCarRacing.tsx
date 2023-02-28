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
      d="M27.557 21.194V16.82c0-.44-.08-.874-.24-1.285L24.79 9.319c-.445-1.096-1.56-1.819-2.8-1.819H10.117c-1.24 0-2.356.723-2.801 1.819L4.79 15.535c-.16.41-.24.845-.24 1.285v4.373m23.006 0c0 .52-.45.945-1 .945H5.55c-.55 0-1-.425-1-.945m23.006 0v2.362c0 .52-.45.945-1 .945h-1.5c-.551 0-1.001-.425-1.001-.945v-1.417M4.55 21.193v2.362c0 .52.45.945 1 .945h1.5c.55 0 1.001-.425 1.001-.945v-1.417m-2.5-8.03l.73.232c.51.16 1.045.24 1.58.24h16.384c.535 0 1.07-.08 1.58-.24l.73-.232m-6.501 6.14h-8.002m-2.5-1.416H7.551c-.83 0-1.5-.633-1.5-1.417 0-.26.225-.473.5-.473h2c.83 0 1.5.633 1.5 1.417 0 .26-.225.473-.5.473zm15.003 0h-2c-.276 0-.5-.213-.5-.473 0-.784.67-1.417 1.5-1.417h2c.275 0 .5.213.5.473 0 .784-.67 1.417-1.5 1.417zM5.501 13.636H3.75c-.69 0-1.251-.53-1.251-1.181 0-.392.335-.709.75-.709h1.5c.416 0 .75.317.75.709v1.18zm20.998 0h1.75c.69 0 1.251-.53 1.251-1.181 0-.392-.335-.709-.75-.709h-1.5c-.416 0-.75.317-.75.709v1.18z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportCarRacing =
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
export default SportCarRacing;

import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.933 0h6.134C18.667 0 20 1.333 20 6.933v6.134c0 5.6-1.333 6.933-6.933 6.933H6.933C1.333 20 0 18.667 0 13.067V6.933C0 1.333 1.333 0 6.933 0z"
      fill="#5181B8"
    />
    <path
      d="M16.484 6.955c.093-.309 0-.535-.44-.535h-1.46c-.37 0-.541.196-.634.411 0 0-.742 1.805-1.793 2.976-.34.34-.494.448-.68.448-.092 0-.226-.108-.226-.417V6.955c0-.37-.108-.535-.417-.535H8.542c-.232 0-.372.171-.372.334 0 .351.526.432.58 1.419v2.143c0 .47-.085.555-.27.555-.495 0-1.698-1.812-2.411-3.885-.14-.403-.28-.566-.653-.566H3.957c-.417 0-.5.196-.5.411 0 .386.495 2.298 2.303 4.827 1.205 1.727 2.903 2.663 4.449 2.663.927 0 1.042-.208 1.042-.566V12.45c0-.416.087-.5.381-.5.216 0 .587.109 1.453.941.989.987 1.152 1.43 1.708 1.43h1.459c.416 0 .625-.208.505-.618-.132-.41-.604-1.003-1.23-1.706-.34-.4-.85-.833-1.005-1.049-.217-.277-.155-.4 0-.647 0 0 1.777-2.498 1.962-3.346z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconVkontakte =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconVkontakte;

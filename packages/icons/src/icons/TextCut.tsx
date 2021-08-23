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
      d="M17.773 21.388a.5.5 0 00.838-.545l-.838.545zM9.112 6.228a.5.5 0 10-.839.544l.839-.544zm4.277 14.615a.5.5 0 00.838.545l-.838-.545zm10.338-14.07a.5.5 0 00-.838-.545l.838.544zM25 21.845A3.154 3.154 0 0121.846 25v1A4.154 4.154 0 0026 21.846h-1zM21.846 25a3.154 3.154 0 01-3.154-3.154h-1A4.154 4.154 0 0021.846 26v-1zm-3.154-3.154a3.154 3.154 0 013.154-3.154v-1a4.154 4.154 0 00-4.154 4.154h1zm3.154-3.154A3.154 3.154 0 0125 21.846h1a4.154 4.154 0 00-4.154-4.154v1zm-8.538 3.154A3.154 3.154 0 0110.154 25v1a4.154 4.154 0 004.154-4.154h-1zM10.154 25A3.154 3.154 0 017 21.846H6A4.154 4.154 0 0010.154 26v-1zM7 21.846a3.154 3.154 0 013.154-3.154v-1A4.154 4.154 0 006 21.846h1zm3.154-3.154a3.154 3.154 0 013.154 3.154h1a4.154 4.154 0 00-4.154-4.154v1zm8.457 2.15l-9.5-14.614-.838.544 9.5 14.616.838-.545zm-4.384.546l9.5-14.616-.838-.544-9.5 14.615.838.545z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextCut =
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
export default TextCut;

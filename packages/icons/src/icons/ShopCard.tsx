import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 12H6h.5zm0 8H7h-.5zm15 4v.5-.5zm-11 0v.5-.5zm15-12H25h.5zm0 8h.5-.5zm-4-12v-.5.5zm-11 0v-.5.5zm-3.27 3.864a.5.5 0 000 1v-1zm17.54 1a.5.5 0 100-1v1zM7.23 16.227a.5.5 0 100 1v-1zm17.54 1a.5.5 0 100-1v1zM6 12v8h1v-8H6zm15.5 11.5h-11v1h11v-1zM25 12v8h1v-8h-1zm-3.5-4.5h-11v1h11v-1zM26 12a4.5 4.5 0 00-4.5-4.5v1A3.5 3.5 0 0125 12h1zM7 12a3.5 3.5 0 013.5-3.5v-1A4.5 4.5 0 006 12h1zm-1 8a4.5 4.5 0 004.5 4.5v-1A3.5 3.5 0 017 20H6zm15.5 4.5A4.5 4.5 0 0026 20h-1a3.5 3.5 0 01-3.5 3.5v1zM7.23 12.864h17.54v-1H7.23v1zm0 4.363h17.54v-1H7.23v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ShopCard =
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
export default ShopCard;

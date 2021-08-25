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
      d="M10.885 7a.5.5 0 100-1v1zM6 10.885a.5.5 0 101 0H6zM21.115 6a.5.5 0 100 1V6zM25 10.885a.5.5 0 101 0h-1zM10.885 26a.5.5 0 100-1v1zM7 21.115a.5.5 0 10-1 0h1zM21.115 25a.5.5 0 100 1v-1zM26 21.115a.5.5 0 10-1 0h1zM12.577 14.54a.5.5 0 001 0h-1zm1-2.193a.5.5 0 10-1 0h1zm4.846 2.193a.5.5 0 101 0h-1zm1-2.193a.5.5 0 10-1 0h1zm-6.73 6.948a.5.5 0 00-.694.72l.694-.72zM16 21.115v.5-.5zm4.001-1.101a.5.5 0 00-.695-.72l.695.72zM10.5 7h.385V6H10.5v1zM7 10.885V10.5H6v.385h1zM10.5 6A4.5 4.5 0 006 10.5h1A3.5 3.5 0 0110.5 7V6zm11 0h-.385v1h.385V6zm4.5 4.885V10.5h-1v.385h1zM21.5 7a3.5 3.5 0 013.5 3.5h1A4.5 4.5 0 0021.5 6v1zm-11 19h.385v-1H10.5v1zM6 21.115v.385h1v-.385H6zM10.5 25A3.5 3.5 0 017 21.5H6a4.5 4.5 0 004.5 4.5v-1zm11 0h-.385v1h.385v-1zm3.5-3.885v.385h1v-.385h-1zM21.5 26a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1zm-7.923-11.461v-2.193h-1v2.193h1zm5.846 0v-2.193h-1v2.193h1zM12 20.014A5.762 5.762 0 0016 21.614v-1a4.762 4.762 0 01-3.306-1.32l-.695.718zM16 21.614a5.762 5.762 0 004.001-1.601l-.695-.72A4.762 4.762 0 0116 20.615v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityVerifiedFace =
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
export default SecurityVerifiedFace;

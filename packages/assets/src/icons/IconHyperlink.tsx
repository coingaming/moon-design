import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.742 9.992c.21 0 .398-.082.533-.217l4.5-4.5A.752.752 0 008.71 4.21l-4.5 4.5a.752.752 0 00.532 1.283zM7.63 8.477l-1.83 1.83-.75.75-.008-.007c-.27.27-.637.45-1.05.45-.825 0-1.5-.675-1.5-1.5 0-.413.18-.78.45-1.05l-.007-.008.75-.75 1.83-1.83a2.64 2.64 0 00-.773-.12c-.825 0-1.567.345-2.107.893L2.62 7.12l-.75.75.015.015a2.952 2.952 0 00-.893 2.107 3 3 0 003 3c.825 0 1.568-.345 2.108-.892l.015.015.75-.75-.015-.015c.547-.54.892-1.283.892-2.108 0-.262-.045-.517-.112-.765zm5.362-4.485a3 3 0 00-3-3c-.825 0-1.567.345-2.107.893L7.87 1.87l-.75.75.015.015a2.983 2.983 0 00-.893 2.107c0 .27.045.518.113.765l1.83-1.83.75-.75.007.008c.27-.27.638-.45 1.05-.45.825 0 1.5.675 1.5 1.5 0 .412-.18.78-.45 1.05l.008.007-.75.75L8.477 7.63c.248.067.503.112.765.112.825 0 1.568-.345 2.108-.892l.015.015.75-.75L12.1 6.1a2.94 2.94 0 00.892-2.108z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconHyperlink =
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
export default IconHyperlink;

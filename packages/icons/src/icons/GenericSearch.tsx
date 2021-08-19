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
      d="M25.147 25.854a.5.5 0 10.706-.708l-.706.708zm-4.305-5.003l-.353-.354.353.354zm-5.938 1.957A7.904 7.904 0 017 14.904H6a8.904 8.904 0 008.904 8.904v-1zM7 14.904A7.904 7.904 0 0114.904 7V6A8.904 8.904 0 006 14.904h1zM14.904 7a7.904 7.904 0 017.904 7.904h1A8.904 8.904 0 0014.904 6v1zm7.904 7.904a7.878 7.878 0 01-2.32 5.593l.707.707a8.878 8.878 0 002.613-6.3h-1zm-2.32 5.593a7.878 7.878 0 01-5.584 2.31v1a8.878 8.878 0 006.291-2.603l-.706-.707zm0 .707l4.659 4.65.706-.708-4.658-4.65-.706.708z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericSearch =
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
export default GenericSearch;

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
      d="M26.7 14.2v3.6H5.3v-3.6h21.4zm0-2H5.3c-1.1 0-2 .9-2 2v3.6c0 1.1.9 2 2 2h21.4c1.1 0 2-.9 2-2v-3.6c0-1.1-.9-2-2-2zM16 4c6.4 0 8.4.5 8.4.5h.2c1 .3 2.2.8 2.2 1.9v1.1H5.3v-1c0-.9.7-1.5 2.2-1.9h.1S9.5 4 16 4zm0-2c-7.1 0-9.1.7-9.1.7-1.9.5-3.6 1.7-3.6 3.8v1.3c0 1 .8 1.8 1.7 1.8h22c1 0 1.7-.8 1.7-1.8V6.5c0-2.1-1.7-3.3-3.7-3.9.1.1-1.9-.6-9-.6zM26.7 24.4v1.1c0 .9-.7 1.5-2.2 1.9h-.1s-2 .6-8.5.6c-6.4 0-8.4-.5-8.4-.5h-.2c-1-.3-2.2-.8-2.2-1.9v-1.1h21.6v-.1zm.3-2H5c-1 0-1.7.8-1.7 1.8v1.3c0 2.1 1.7 3.3 3.7 3.9 0 0 1.9.7 9.1.7 7.2 0 9.1-.7 9.1-.7 2-.5 3.7-1.7 3.7-3.9v-1.3c-.2-1-1-1.8-1.9-1.8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconMenu =
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
export default IconMenu;

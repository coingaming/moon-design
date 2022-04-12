import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M11.968 6C7.053 6 6 7.053 6 11.968v.432A1.6 1.6 0 007.6 14h16.8a1.6 1.6 0 001.6-1.6v-.432C26 7.053 24.947 6 20.032 6h-8.064zM20.032 26C24.947 26 26 24.947 26 20.032V19.6a1.6 1.6 0 00-1.6-1.6h-5a1.4 1.4 0 00-1.4 1.4v5.2a1.4 1.4 0 001.4 1.4h.632zM6 20.032C6 24.947 7.053 26 11.968 26h.632a1.4 1.4 0 001.4-1.4v-5.2a1.4 1.4 0 00-1.4-1.4h-5A1.6 1.6 0 006 19.6v.432z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextCards =
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
export default TextCards;

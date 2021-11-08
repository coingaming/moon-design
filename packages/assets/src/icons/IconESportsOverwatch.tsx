import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.527 18.19l-4.842-4.647L14.491 8.6v7.577l4.801 4.608A8.577 8.577 0 0114 22.607a8.577 8.577 0 01-5.292-1.82l4.8-4.608V8.6l-2.193 4.942-4.843 4.648a8.68 8.68 0 01-1.115-4.27 8.679 8.679 0 012.672-6.28L5.907 5a12.047 12.047 0 00-2.89 4.044A12.119 12.119 0 002 13.92C2 20.591 7.373 26 14 26s12-5.409 12-12.08c0-3.533-1.506-6.712-3.907-8.92L19.97 7.64a8.655 8.655 0 011.978 2.863c.46 1.08.696 2.242.694 3.416a8.677 8.677 0 01-1.116 4.271z"
      fill="#E2B100"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2c3.018 0 5.795.921 8 2.466L19.707 7C18.072 5.872 16.065 5.262 14 5.265c-2.149 0-4.128.648-5.708 1.735L6 4.467C8.282 2.865 11.1 1.997 14 2"
      fill="#E2B100"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsOverwatch =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconESportsOverwatch;

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
      d="M5 10c0-1.105.86-2 1.92-2h18.16c1.06 0 1.92.895 1.92 2v2c0 .552-.462.983-.979 1.178-1.108.417-1.901 1.523-1.901 2.822 0 1.299.793 2.405 1.901 2.822.517.195.979.626.979 1.178v2c0 1.105-.86 2-1.92 2H6.92C5.86 24 5 23.105 5 22v-2c0-.552.462-.983.979-1.178C7.088 18.405 7.88 17.3 7.88 16c0-1.299-.792-2.405-1.901-2.822C5.462 12.983 5 12.552 5 12v-2z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeDasharray="2.6 3.2"
      d="M11.5 8.5v15"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericTicket =
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
export default GenericTicket;

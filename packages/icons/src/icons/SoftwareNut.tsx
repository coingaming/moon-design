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
      d="M20.325 16a4.38 4.38 0 01-4.375 4.385A4.38 4.38 0 0111.575 16a4.38 4.38 0 014.375-4.385A4.38 4.38 0 0120.325 16z"
      stroke="#000"
    />
    <path
      d="M14.623 6.843a2.737 2.737 0 012.654 0l6.096 3.452a2.63 2.63 0 011.327 2.253v6.904a2.63 2.63 0 01-1.327 2.253l-6.096 3.452a2.737 2.737 0 01-2.654 0l-6.096-3.452A2.63 2.63 0 017.2 19.452v-6.904a2.63 2.63 0 011.327-2.253l6.096-3.452z"
      stroke="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareNut =
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
export default SoftwareNut;

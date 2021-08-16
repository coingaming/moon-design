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
      d="M19.663 6.5h4.482c.752 0 1.36.614 1.355 1.367l-.062 8.143a1.356 1.356 0 01-1.355 1.347h-4.42m0-10.857h-9.326c-.635 0-1.185.442-1.322 1.063L6.533 17.27a1.357 1.357 0 001.323 1.652h3.781c.854 0 1.524.573 1.359 1.412l-.7 3.545a1.357 1.357 0 001.33 1.62h.266c.482 0 .928-.256 1.17-.673l4.6-7.47m0-10.857v10.857"
      stroke="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericDislike =
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
export default GenericDislike;

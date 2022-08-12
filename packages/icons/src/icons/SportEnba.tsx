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
      d="M24.922 15.204v.869c0 2.605-.965 5.018-2.799 6.852-1.834 1.833-4.246 2.799-6.852 2.799s-5.018-.966-6.852-2.8c-1.834-1.833-2.799-4.246-2.799-6.851v-.29c.097-2.51 1.062-4.825 2.799-6.563 1.737-1.737 4.053-2.702 6.563-2.798h.289c.458 0 .91.03 1.354.089m-2.512.2c-1.085 1.726-1.236 2.777-.58 3.957 0 0 .194.386.58.58.817.628 1.717.806 2.672.827m-.549 13.649c-3.764-1.93-3.86-4.15-3.957-6.274 0-1.447-.096-2.895-1.35-4.15l-.194-.193c-.096-.096-.675-.482-.675-.482-1.159-.676-2.606-.58-4.44.386m16.793 7.624L8.805 9.027M7.09 21.43c.682-4.577 3.506-8.668 7.889-10.81.539-.282 1.09-.524 1.646-.727m3.79-1.957c0 1.893 1.13 3.212 2.964 3.212.976 0 1.962-.187 2.86-1.31m-5.823-1.902c0-1.893 1.129-3.191 2.963-3.191s3.001 1.298 3.001 3.19h-5.964z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportEnba =
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
export default SportEnba;

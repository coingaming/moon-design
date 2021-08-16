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
      d="M13.115 22.204l.823-2.13a.915.915 0 00-.043-.702l-2.446-4.916a2.04 2.04 0 01.955-2.758l5.515-2.632m2.517 2.898l.874 1.893c.088.183.249.331.439.398l1.872.66c.529.185.81.772.624 1.301-.187.53-.773.81-1.302.624l-2.808-.988a.786.786 0 01-.44-.399l-1.22-2.594-3.31 1.61a.513.513 0 00-.235.71l1.673 3.302a.873.873 0 01.056.706l-1.358 3.891m-8.558-2.69l15.374 5.01c.42.148.895.055 1.205-.262.31-.318.496-.847.001-1.692m-1.367-6.914L8.962 11.712m14.227-3.938a1.912 1.912 0 11-3.449 1.654 1.912 1.912 0 013.45-1.654z"
      stroke="#000"
      strokeWidth={0.8}
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
const SportCrossCountry =
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
export default SportCrossCountry;

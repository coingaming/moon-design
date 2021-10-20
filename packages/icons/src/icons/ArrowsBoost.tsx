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
      d="M6.676 22.486a.5.5 0 00.806.591l-.806-.591zm4.602-5.426l-.403-.296.403.296zm1.71-.367l.247-.435-.246.435zm4.26 2.415l-.247.435a.5.5 0 00.648-.137l-.401-.298zm7.258-8.93a.5.5 0 00-.803-.596l.803.597zm-5.661-.63a.5.5 0 00.139.99l-.14-.99zm5.802-.309l.493-.087a.5.5 0 00-.562-.408l.07.495zm.486 5.576a.5.5 0 00.984-.176l-.985.176zm-17.65 8.262l4.199-5.722-.807-.591-4.199 5.722.806.591zm5.26-5.949L17 19.543l.493-.87-4.259-2.415-.493.87zm4.906 2.278l6.857-9.227-.803-.597-6.857 9.228.803.596zm-5.968-2.05a.82.82 0 011.061-.228l.493-.87a1.82 1.82 0 00-2.36.506l.806.591zm7.303-6.818l5.733-.804-.139-.99-5.733.803.139.99zm5.171-1.211l.977 5.488.985-.176-.977-5.487-.985.175z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsBoost =
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
export default ArrowsBoost;

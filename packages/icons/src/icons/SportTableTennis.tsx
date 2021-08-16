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
      d="M15.908 17.91s.029.014.072.058a3.882 3.882 0 011.426 3.012v4.002c0 .218.175.393.393.393h1.543a.391.391 0 00.393-.393v-4.016c0-1.165.524-2.27 1.426-3.013.043-.029.072-.058.072-.058m-5.325.015s-1.66-.379-2.343-2.401c-.146-.408-.204-.83-.233-1.252-.088-1.79 0-7.625 5.238-7.625 5.24 0 5.326 5.835 5.24 7.625-.03.422-.103.844-.234 1.252-.684 2.022-2.343 2.4-2.343 2.4h-5.325zm-4.533 2.338a2.356 2.356 0 11-1.083 4.586 2.356 2.356 0 011.083-4.585z"
      stroke="#000"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportTableTennis =
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
export default SportTableTennis;

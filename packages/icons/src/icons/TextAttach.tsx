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
      d="M13.608 19.255a.5.5 0 00.707.707l-.707-.707zm-4.446-4.982a.5.5 0 10.707.707l-.707-.707zm.669 4.753l-.352-.356-.002.002.354.354zm6.01-5.949l.351.356.002-.002-.353-.354zm-1.526 6.885l4.205-4.205-.707-.707-4.205 4.205.707.707zM9.87 14.98l5.916-5.916-.707-.707-5.916 5.916.707.707zm5.03 9.113l7.957-7.958-.707-.707-7.958 7.958.707.707zm-4.717-4.712l6.01-5.948-.703-.711-6.01 5.948.703.71zm6.012-5.95c.517-.517 1.25-.517 1.678-.09l.707-.707c-.874-.873-2.242-.76-3.092.09l.707.707zm1.678-.09c.44.44.445 1.205-.059 1.709l.707.707c.863-.862.92-2.26.059-3.123l-.707.708zm-2.087-4.277c1.87-1.87 4.798-1.916 6.54-.175l.706-.707c-2.163-2.164-5.725-2.053-7.953.175l.707.707zm6.54-.175c1.74 1.742 1.695 4.669-.176 6.539l.707.707c2.228-2.228 2.339-5.79.175-7.953l-.707.707zM14.19 23.386c-1.187 1.187-3.033 1.207-4.123.117l-.707.707c1.512 1.513 3.992 1.428 5.537-.117l-.707-.707zm-4.123.117c-1.091-1.091-1.07-2.937.116-4.124l-.707-.707c-1.545 1.545-1.63 4.025-.116 5.538l.707-.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextAttach =
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
export default TextAttach;

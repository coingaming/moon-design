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
      d="M15.072 7.567c-1.011 1.687-1.433 2.614-.59 3.71 0 0 .169.338.506.507 1.096.843 2.361.758 3.71.674 2.024-.168 4.132-.337 5.735 2.867m-7.59 9.107c-3.288-1.686-3.373-3.626-3.457-5.48 0-1.266-.084-2.53-1.18-3.627l-.17-.168c-.084-.085-.59-.422-.59-.422-1.011-.59-2.276-.506-3.878.337m14.672 6.662L10.35 9.844m11.522.029c-2.043-.085-4.17.34-6.127 1.361-3.83 1.873-6.298 5.447-6.893 9.446m15.58-5.44c-.168-2.023-1.011-3.794-2.445-5.227C20.385 8.41 18.277 7.567 16 7.567h-.253c-2.192.085-4.216.928-5.734 2.446-1.518 1.518-2.361 3.541-2.446 5.734V16c0 2.277.844 4.385 2.446 5.987 1.602 1.602 3.71 2.445 5.987 2.445s4.385-.843 5.987-2.445c1.602-1.602 2.446-3.71 2.446-5.987v-.76z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBasketball =
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
export default SportBasketball;

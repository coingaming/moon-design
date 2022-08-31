import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M13 23.316L16.26 28l2.815-4.71m2.608-12.68c-.579-.419-1.394-.367-1.893.13-.526.524-.578 1.335-.131 1.884m-1.84 1.806c-.578-.42-1.393-.367-1.893.13-.526.524-.578 1.335-.131 1.884m-1.814 1.831c-.578-.418-1.393-.366-1.892.131-.526.523-.579 1.334-.132 1.884m1.086-10.614c-.579-.419-1.393-.367-1.893.13-.526.524-.578 1.335-.131 1.884m1.624 2.63c-.578-.418-1.393-.366-1.892.131-.526.524-.579 1.335-.132 1.884m4.6-4.578c-.42-.576-.368-1.387.132-1.884.525-.523 1.34-.575 1.892-.13m-1.056-4.241c5.08.103 9.114 4.285 9.01 9.341-.102 5.056-4.305 9.072-9.384 8.968-5.08-.102-9.115-4.285-9.011-9.34.103-5.057 4.305-9.072 9.385-8.97z"
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
const SportGolf =
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
export default SportGolf;

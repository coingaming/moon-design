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
      d="M12.64 13.474l-6.413-3.365a1.355 1.355 0 01-.59-1.797 1.29 1.29 0 011.752-.604l6.915 3.62s1.08 5.414-2.165 10.07m-.546-12.761a1.614 1.614 0 01.038-1.318c.343-.707.916-.87 1.355-.807.052 0 .073.011.115.032.449.095.846.351 1.14.714.534.62 1.664 1.73 3.555 2.4 1.097.371 1.6.948 2.187 1.996.356.663.765 1.432 1.09 2.213 0 0 .58 1.765 1.96 2.468l3.467 1.72m-15.734-2.542l-4.33-2.205a1.355 1.355 0 01-.589-1.797l.543-1.123m2.764 7.272l-2.37-1.208a1.355 1.355 0 01-.59-1.797l.56-1.154M23.435 25.5l-3.703-1.863c-2.111-1.13-2.612-1.17-2.612-1.17s-.575-.16-1.368-.297c-2.454-.368-4.386-.898-6.633-1.962l-1.64-.836c-.649-.33-1.125-1.24-.804-1.906l.412-.85m18.467 1.019l-3.477 7.184m-5.614-13.19c.268-.66.758-1.578 2.282-1.39"
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
const SportMma =
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
export default SportMma;

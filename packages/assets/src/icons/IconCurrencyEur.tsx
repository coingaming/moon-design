import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.86 15.407L16 18.288C14.563 19.287 12.76 20 10.62 20c-3.944 0-7.662-1.969-8.76-6.847H0V10.87h1.577c-.028-.257-.028-.513-.028-.799 0-.342 0-.656.028-.97H0v-2.31h1.915C2.93 2.481 6.056 0 10.62 0c1.774 0 3.605.514 5.24 1.655l-2.226 2.853c-.902-.6-1.916-.942-3.014-.942-1.972 0-3.719.97-4.535 3.224h6.422v2.311H5.606c-.029.314-.029.628-.029.97 0 .286 0 .542.029.8h6.901v2.282h-6.45c.788 2.254 2.563 3.252 4.563 3.252 1.267 0 2.31-.342 3.24-.998z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyEur =
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
export default IconCurrencyEur;

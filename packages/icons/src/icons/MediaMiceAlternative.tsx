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
      d="M7.213 20.558l-.412-.284.412.284zm12.51-1.386a.5.5 0 00-.593-.805l.593.805zm-8.284 5.483l-.297-.402.296.402zm-3.88-.292l-.354.354.354-.354zm7.89-16.412a.5.5 0 00-.707.707l.707-.707zm7.6 9.015a.5.5 0 00.708-.707l-.707.707zM12.52 11.99L6.8 20.274l.823.568 5.718-8.284-.823-.568zm6.61 6.377l-7.987 5.886.593.805 7.988-5.886-.593-.805zM6.802 20.274a3.484 3.484 0 00.404 4.442l.707-.707a2.484 2.484 0 01-.288-3.167l-.823-.568zm.404 4.442a3.484 3.484 0 004.53.342l-.593-.805a2.484 2.484 0 01-3.23-.244l-.707.707zM24.7 12.636a5.635 5.635 0 01-5.635 5.635v1a6.635 6.635 0 006.635-6.635h-1zm-5.635 5.635a5.635 5.635 0 01-5.635-5.635h-1a6.635 6.635 0 006.635 6.635v-1zm-5.635-5.635A5.635 5.635 0 0119.065 7V6a6.635 6.635 0 00-6.635 6.635h1zM19.065 7a5.635 5.635 0 015.635 5.635h1A6.635 6.635 0 0019.065 6v1zm-4.323 1.658l8.308 8.308.707-.707-8.308-8.308-.707.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaMiceAlternative =
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
export default MediaMiceAlternative;

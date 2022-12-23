import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.543 20l-1.144-6.919H0v-2.073h2.064L1.73 8.992H0V6.919h1.395L.25 0h3.152l1.06 6.919h2.566L8.23 0h3.542l1.172 6.919h2.594L16.569 0h3.152l-1.144 6.919H20v2.073h-1.757l-.335 2.016H20v2.073h-2.427L16.43 20h-3.906l-1.255-6.919H8.703L7.476 20H3.543zM9.707 6.919h.558l-.279-2.577-.279 2.577zm-4.63 4.09h1.255l.335-2.017H4.77l.307 2.016zm4.016 0h1.786l-.363-2.017h-1.06l-.363 2.016zm4.575 0h1.283l.28-2.017h-1.926l.363 2.016zm-8.006 4.873l.335-2.8h-.641l.306 2.8zm8.675 0l.307-2.8h-.67l.364 2.8z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyKrw =
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
export default IconCurrencyKrw;

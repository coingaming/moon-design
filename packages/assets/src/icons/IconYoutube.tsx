import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.572 3.137a2.52 2.52 0 00-1.761-1.783C16.247.92 9.99.92 9.99.92s-6.254 0-7.818.416c-.84.234-1.531.934-1.761 1.8C0 4.721 0 8.004 0 8.004s0 3.3.412 4.867a2.52 2.52 0 001.76 1.783c1.581.433 7.82.433 7.82.433s6.255 0 7.819-.416a2.52 2.52 0 001.761-1.784c.412-1.583.412-4.866.412-4.866s.016-3.3-.412-4.884z"
      fill="red"
    />
    <path d="M8 11.037l5.202-3.033L8 4.97v6.066z" fill="#fff" />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconYoutube =
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
export default IconYoutube;

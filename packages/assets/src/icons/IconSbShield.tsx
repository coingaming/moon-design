import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#icon-sb-shield_svg__clip0)"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M16.998 2.497a.307.307 0 00-.224-.282L8.647.01a.303.303 0 00-.155 0L.365 2.215a.308.308 0 00-.225.282C-.094 7.342.613 11.17 2.3 14.2c1.37 2.462 3.377 4.349 6.135 5.767a.297.297 0 00.274 0c2.767-1.433 4.775-3.313 6.14-5.75 1.692-3.026 2.395-6.859 2.15-11.72z"
        fill="currentColor"
      />
      <path
        d="M8.711 5.192a3.868 3.868 0 013.87 3.869 3.868 3.868 0 01-3.87 3.869 3.868 3.868 0 110-7.738zm-.014.735a3.161 3.161 0 013.166 3.159 3.161 3.161 0 01-3.166 3.158 3.161 3.161 0 01-3.166-3.158 3.161 3.161 0 013.166-3.159z"
        fill="#fff"
      />
      <path
        d="M7.422 4.455a2.579 2.579 0 110 5.16 2.579 2.579 0 010-5.16z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="icon-sb-shield_svg__clip0">
        <path fill="#fff" d="M0 0h17.143v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSbShield =
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
export default IconSbShield;

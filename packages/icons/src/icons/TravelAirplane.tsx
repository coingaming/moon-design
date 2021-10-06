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
      d="M19.37 14.963L13.793 5.78a.724.724 0 00-1.126-.14v0a.724.724 0 00-.186.72l1.405 4.768a5 5 0 01.204 1.414v2.423m5.263 3.072l-5.579 9.181a.724.724 0 01-1.126.14v0a.724.724 0 01-.187-.72l1.405-4.765c.136-.461.205-.94.205-1.42l-.003-2.416m-4.337-.07l-2.152 2.749a.714.714 0 01-.807.23v0a.714.714 0 01-.446-.846l.66-2.596m2.745-2.473l-2.152-2.749a.713.713 0 00-.807-.23v0a.713.713 0 00-.446.846l.66 2.596M27 16.5c0-.845-2.274-1.544-3.126-1.538l-13.25-.01c-.929 0-5.62.628-5.624 1.539-.003.91 4.695 1.537 5.624 1.537h13.26c.852.006 3.132-.668 3.116-1.528z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelAirplane =
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
export default TravelAirplane;

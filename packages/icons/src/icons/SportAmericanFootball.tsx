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
      d="M11.088 17.8a15.006 15.006 0 012.802-3.905 14.996 14.996 0 013.903-2.804m-4.579 2.128l1.472 1.473m-3.434.981l1.799 1.146m3.597-3.764l-1.144-1.8m-8.18 7.087a19.833 19.833 0 006.33 6.333M18.33 7.33a19.833 19.833 0 016.329 6.333M8.486 24.774c1.52.31 4.66.589 8.356-1.244a14.882 14.882 0 006.689-6.693c1.832-3.682 1.553-6.825 1.243-8.363a1.61 1.61 0 00-1.26-1.26c-1.537-.294-4.677-.573-8.356 1.26a14.881 14.881 0 00-6.689 6.693c-1.831 3.682-1.553 6.825-1.243 8.363.131.622.622 1.113 1.26 1.244z"
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
const SportAmericanFootball =
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
export default SportAmericanFootball;

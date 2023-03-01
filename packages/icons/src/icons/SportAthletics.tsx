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
      d="M17.895 13.174l3.22 2.049a1.046 1.046 0 001.418-.065l3.158-3.186a1.067 1.067 0 000-1.502 1.045 1.045 0 00-1.488 0l-2.489 2.17-3.785-2.866m-6.327 6.08L9.071 22.06l-2.887 4.278a1.068 1.068 0 00.273 1.476 1.049 1.049 0 001.463-.276l6.71-8.352m6.422-13.062a2.115 2.115 0 01-2.105 2.124 2.115 2.115 0 01-2.105-2.124c0-1.173.943-2.124 2.105-2.124 1.163 0 2.105.95 2.105 2.124zm-.044 14.045a2.118 2.118 0 00-.631-.987 3.087 3.087 0 00-.304-.236l-4.389-2.554 2.58-3.756c.387-.616.46-1.388.194-2.066a2.277 2.277 0 00-1.543-1.37l-6.443-1.663a1.045 1.045 0 00-1.006.279L6.31 11a1.067 1.067 0 000 1.502c.41.415 1.078.415 1.488 0l2.734-2.758 3.31.854-2.204 5.167a2.15 2.15 0 00.007 1.695 2.12 2.12 0 001.235 1.15l5.016 2.275-2.19 4.009a1.07 1.07 0 00.163 1.493 1.045 1.045 0 001.479-.166l3.281-4.137a2.142 2.142 0 00.38-1.915h0z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportAthletics =
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
export default SportAthletics;

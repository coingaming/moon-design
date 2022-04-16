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
      d="M10 4a1 1 0 100-2v2zm12-2a1 1 0 100 2V2zM2 10a1 1 0 102 0H2zm2 12a1 1 0 10-2 0h2zm24-12a1 1 0 102 0h-2zm2 12a1 1 0 10-2 0h2zm-8 6a1 1 0 100 2v-2zm-12 2a1 1 0 100-2v2zm-7-5h1-1zm7-23H7v2h3V2zm15 0h-3v2h3V2zM2 7v3h2V7H2zm0 15v3h2v-3H2zM28 7v3h2V7h-2zm0 15v3h2v-3h-2zm-3 6h-3v2h3v-2zm-15 0H7v2h3v-2zM25 4a3 3 0 013 3h2a5 5 0 00-5-5v2zM7 2a5 5 0 00-5 5h2a3 3 0 013-3V2zM2 25a5 5 0 005 5v-2a3 3 0 01-3-3H2zm26 0a3 3 0 01-3 3v2a5 5 0 005-5h-2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconDetails =
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
export default IconDetails;

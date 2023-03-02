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
      d="M23.853 25.5h.013m0 0c.902-.007 1.634-.755 1.634-1.673V12.348c0-.923-.736-1.672-1.644-1.672H22.12c-.908 0-1.644-.748-1.644-1.67 0-1.384-1.104-2.506-2.466-2.506-1.363 0-2.467 1.122-2.467 2.505 0 .923-.736 1.67-1.644 1.67h-1.644c-.908 0-1.644.749-1.644 1.671v1.566c0 .922-.737 1.67-1.645 1.67-1.362 0-2.466 1.122-2.466 2.506 0 1.384 1.104 2.505 2.466 2.505.908 0 1.645.748 1.645 1.67v1.567c0 .922.738 1.67 1.646 1.67h3.286v-1.67c0-1.384 1.105-2.506 2.467-2.506s2.466 1.122 2.466 2.506v1.67h3.39z"
      stroke="currentColor"
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
const SoftwarePuzzle =
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
export default SoftwarePuzzle;

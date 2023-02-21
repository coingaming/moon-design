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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.45 4.056c1.024-2.464 4.514-2.464 5.54 0l2.18 5.243a1 1 0 00.843.613l5.66.454c2.66.213 3.74 3.532 1.713 5.268l-4.313 3.695a1 1 0 00-.322.991l1.317 5.524c.62 2.596-2.204 4.647-4.481 3.256l-4.847-2.96a1 1 0 00-1.042 0l-4.846 2.96c-2.278 1.391-5.101-.66-4.482-3.256l1.317-5.524a1 1 0 00-.322-.991l-4.312-3.695c-2.027-1.736-.948-5.055 1.712-5.268l5.66-.454a1 1 0 00.843-.613l2.181-5.243zm3.692.768c-.341-.821-1.505-.821-1.846 0l-2.18 5.243a3 3 0 01-2.531 1.838l-5.66.454c-.887.071-1.247 1.178-.571 1.757l4.312 3.694a3 3 0 01.967 2.974l-1.318 5.524c-.206.865.735 1.549 1.494 1.085l4.846-2.96a3 3 0 013.128 0l4.846 2.96c.76.464 1.7-.22 1.494-1.085l-1.318-5.524a3 3 0 01.967-2.974l4.313-3.694c.675-.58.316-1.686-.571-1.757l-5.66-.454a3 3 0 01-2.53-1.838l-2.182-5.243z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconStarEmpty =
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
export default IconStarEmpty;

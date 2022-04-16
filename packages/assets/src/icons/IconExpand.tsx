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
      d="M2 11a1 1 0 102 0V5.41L14.586 16 4 26.59V21a1 1 0 10-2 0v8a1 1 0 001 1h8a1 1 0 100-2H5.419L16 17.415 26.581 28H21a1 1 0 100 2h8a1 1 0 001-1v-8a1 1 0 10-2 0v5.59L17.414 16 28 5.41V11a1 1 0 102 0V3a1 1 0 00-1-1h-8a1 1 0 100 2h5.581L16 14.585 5.419 4H11a1 1 0 100-2H3a1 1 0 00-1 1v8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconExpand =
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
export default IconExpand;

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
      d="M7.977 6.5h7.065a.74.74 0 01.536.23l9.114 9.575a2.923 2.923 0 01-.057 4.094l-4.267 4.241a2.966 2.966 0 01-4.143.033l-9.5-9.15a.732.732 0 01-.225-.527V7.968c0-.81.661-1.468 1.477-1.468z"
      stroke="currentColor"
    />
    <path
      d="M13.145 11.27a1.84 1.84 0 00-1.846-1.834 1.84 1.84 0 00-1.846 1.835 1.84 1.84 0 001.846 1.834 1.84 1.84 0 001.846-1.834z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericTag =
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
export default GenericTag;

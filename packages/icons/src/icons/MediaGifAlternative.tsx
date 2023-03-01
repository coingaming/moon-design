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
      d="M19.654 25.5H9.424A2.923 2.923 0 016.5 22.577V9.423A2.923 2.923 0 019.423 6.5h13.154A2.923 2.923 0 0125.5 9.423v10.23M19.654 25.5v-5.846H25.5M19.654 25.5c.468 0 .916-.186 1.247-.517l4.082-4.082c.331-.33.517-.78.517-1.247m-8.897-8.603V17m2.776 0v-5.578c0-.247.121-.371.362-.371H23m-.483 2.974H19.38m-7.241.248h1.569c.241 0 .362.124.362.372v1.116c0 .371-.241.743-.604.867-.361.124-.844.248-1.81.248-1.93 0-2.655-1.363-2.655-2.603 0-1.24.362-2.85 2.293-3.222 1.69-.248 2.535.495 2.535.495"
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
const MediaGifAlternative =
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
export default MediaGifAlternative;

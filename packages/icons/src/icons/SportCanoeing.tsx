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
      d="M20.37 12.331A18.81 18.81 0 0120.74 16c0 7.181-4.459 13-4.459 13s-2.749-3.587-3.931-8.605m-.371-2.014a18.103 18.103 0 01-.157-2.378c0-7.18 4.46-13.003 4.46-13.003s2.343 3.063 3.634 7.481m-6.2 6.085a4.387 4.387 0 01-.037-.566c0-1.874 1.165-3.393 2.599-3.393.398 0 .777.116 1.114.327m1.117 1.315c.239.511.375 1.11.375 1.751 0 1.874-1.165 3.393-2.6 3.393-.715 0-1.362-.378-1.832-.988M25.919 6.768L6.69 25.903M23.282 10.41l-1.046-1.05.957-2.613 2.681-2.67 1.591 1.045 1.097 1.656-2.739 2.729-2.541.903zM9.284 22.306l1.042 1.05-.957 2.615-2.681 2.668-1.591-1.043L4 25.937l2.739-2.725 2.545-.906z"
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
const SportCanoeing =
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
export default SportCanoeing;

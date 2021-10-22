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
      d="M20.552 14.96l3.322.002c.852-.006 3.126.694 3.126 1.538.016.86-2.264 1.534-3.116 1.528h-4.098l-.434.01-5.579 9.181a.724.724 0 01-1.126.14v0a.724.724 0 01-.187-.72l1.405-4.765c.136-.461.205-.94.205-1.42l-.003-2.416-.351-.01H10.194a1 1 0 00-.783.38L7.579 20.72a.715.715 0 01-.807.227v0a.715.715 0 01-.447-.848l.601-2.36a.251.251 0 00-.172-.303v0C5.772 17.183 5 16.86 5 16.491c.001-.36.736-.676 1.682-.927v0c.416-.11.222-.467.116-.884l-.473-1.86a.714.714 0 01.446-.846v0a.714.714 0 01.807.23L9.43 14.57a1 1 0 00.787.384h.407l2.466.002 1 .01v-2.422a5 5 0 00-.205-1.414L12.48 6.36a.724.724 0 01.186-.72v0a.724.724 0 011.126.14l5.579 9.181h1.18"
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

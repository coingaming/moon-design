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
      d="M13.562 8.731l-1.724-1.73a3.42 3.42 0 10-4.836 4.837l1.729 1.73 4.831-4.837zm0 0l11.402 5.872L26 17.021l-3.107-.347m0 0l.342 3.107h-3.454m3.112-3.107L18.4 13.567m1.382 6.214v3.454l-3.107-.342m3.107-3.112l-3.795-3.8m.688 6.912L17.021 26l-2.765-1.383-5.525-11.055m7.943 9.331L13.567 18.4m4.837-6.908v2.071h-2.765l.342 2.419-2.419-.342.005 2.765-2.418-.347m4.49-4.49l-3.801-3.111m1.73 5.183l-3.112-3.801"
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
const SportBadminton =
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
export default SportBadminton;

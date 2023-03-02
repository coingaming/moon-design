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
      d="M19.254 6.144l.89-.891c1.67-1.67 4.404-1.67 6.07 0l.53.53a4.303 4.303 0 010 6.07l-.89.89m-15.818 2.622l5.33-5.333m-2.569 15.767l-.948.948a4.303 4.303 0 01-6.07 0l-.53-.53a4.31 4.31 0 01.004-6.073l.948-.948m15.764-2.565l-5.33 5.334m1.116-12.391l4.697 4.697M8.562 18.762l4.697 4.697m1.323-14.264l2.796-2.794 1.707 1.707-2.796 2.795-1.707-1.708zm6.51 6.508l2.794-2.795 1.707 1.708-2.795 2.795-1.707-1.708zm-2.403-1.999a.28.28 0 01-.394 0 .277.277 0 010-.393.277.277 0 01.394 0 .28.28 0 010 .393zM5.393 18.39l2.796-2.795 1.707 1.708L7.1 20.096 5.393 18.39zm6.513 6.508L14.7 22.1l1.708 1.707-2.795 2.796-1.707-1.707zm.845-5.257a.277.277 0 01-.394 0 .28.28 0 010-.394.277.277 0 01.394 0 .28.28 0 010 .394z"
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
const SportSkateboarding =
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
export default SportSkateboarding;

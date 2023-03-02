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
      d="M11.5 13.028c0 2.501-2.015 4.528-4.5 4.528s-4.5-2.027-4.5-4.528C2.5 10.528 4.515 8.5 7 8.5s4.5 2.027 4.5 4.528zm0 0c0 2.501 2.015 4.528 4.5 4.528s4.5-2.027 4.5-4.528m-9 0c0-2.5 2.015-4.528 4.5-4.528s4.5 2.027 4.5 4.528m0 0c0 2.501 2.015 4.528 4.5 4.528s4.5-2.027 4.5-4.528c0-2.5-2.015-4.528-4.5-4.528s-4.5 2.027-4.5 4.528zm-5.082 5.944c0 2.5-2.014 4.528-4.5 4.528-2.485 0-4.5-2.027-4.5-4.528 0-2.501 2.015-4.528 4.5-4.528 2.486 0 4.5 2.027 4.5 4.528zm10.225 0c0 2.5-2.015 4.528-4.5 4.528s-4.5-2.027-4.5-4.528c0-2.501 2.015-4.528 4.5-4.528s4.5 2.027 4.5 4.528z"
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
const SportOlympics =
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
export default SportOlympics;

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
      d="M13.79 22.503l-1.548 3.066a.296.296 0 00.12.393.296.296 0 00.146.038h9.778a.296.296 0 00.265-.431l-1.548-3.066m-8.593-8.27h5.527a.356.356 0 01.357.357v1.129a.356.356 0 01-.357.356h-5.111m-4.25-8.537l1.121-1.171a1.188 1.188 0 011.97.4l1.398 3.679a.594.594 0 01-.291.742l-.825.41a.594.594 0 00-.302.715l1.981 6.11a1.307 1.307 0 001.244.904h8.141a.892.892 0 01.747 1.378l-.816 1.25a1.188 1.188 0 01-.996.54h-8.335a1.783 1.783 0 01-1.694-1.228L8.103 9.623a2.08 2.08 0 01.474-2.085z"
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
const TravelSeats =
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
export default TravelSeats;

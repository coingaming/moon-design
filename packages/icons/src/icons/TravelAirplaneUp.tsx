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
      d="M27 25.5H5m9.274-10.617l-.178 1.775-1.088 4.012 1.783-.734 3.163-6.252 6.551-3.562c1.013-.56 2.072-1.244 1.785-1.926-.288-.682-2.445-.87-3.662-.368l-12.412 6.057-4.467-2.51-1.09.449 2.895 3.824c-.394.384-.642.754-.534 1.011.311.736 2.992.221 4.712-.488l.817-.336m1.902-5.769l-3.241-.89-1.782.735 2.292 1.323"
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
const TravelAirplaneUp =
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
export default TravelAirplaneUp;

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
      d="M18.521 8.736a9.125 9.125 0 00-6.33-.473c-4.905 1.417-7.737 6.562-6.33 11.5 1.407 4.94 6.517 7.79 11.423 6.374 4.905-1.417 7.737-6.562 6.33-11.501a8.896 8.896 0 00-.514-1.38m-5.718-2.165a6.549 6.549 0 00-4.473-.307c-3.522 1.017-5.555 4.71-4.544 8.256 1.01 3.546 4.679 5.593 8.2 4.576 3.522-1.017 5.555-4.711 4.545-8.257a6.566 6.566 0 00-.286-.81m-2.213 1.514c.615 2.158-.622 4.406-2.766 5.026-2.144.619-4.377-.627-4.992-2.786-.615-2.158.623-4.407 2.766-5.026a3.955 3.955 0 012.097-.028m-.979 3.95l5.747-5.672m.204-.21l2.882-.064a.489.489 0 00.34-.15l2.562-2.654a.099.099 0 00-.073-.168l-2.583.083a.174.174 0 01-.178-.158l-.252-2.617a.098.098 0 00-.167-.06l-2.455 2.536a.496.496 0 00-.14.356l.064 2.896z"
      stroke="#000"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportDarts =
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
export default SportDarts;

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
      d="M7 15a.5.5 0 000 1v-1zm18 1a.5.5 0 000-1v1zm-8-5.5h.5a.5.5 0 00-.63-.483l.13.483zm-4.13.588a.5.5 0 00.26.966l-.26-.966zM16.5 20.5a.5.5 0 101 0h-1zM11 7h10V6H11v1zm13.5 3.5v10h1v-10h-1zM21 24H11v1h10v-1zM7.5 20.5v-10h-1v10h1zM11 24a3.5 3.5 0 01-3.5-3.5h-1A4.5 4.5 0 0011 25v-1zm13.5-3.5A3.5 3.5 0 0121 24v1a4.5 4.5 0 004.5-4.5h-1zM21 7a3.5 3.5 0 013.5 3.5h1A4.5 4.5 0 0021 6v1zM11 6a4.5 4.5 0 00-4.5 4.5h1A3.5 3.5 0 0111 7V6zM7 16h18v-1H7v1zm9.87-5.983l-4 1.071.26.966 4-1.071-.26-.966zm-.37.483v10h1v-10h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeCalendarAlternative =
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
export default TimeCalendarAlternative;

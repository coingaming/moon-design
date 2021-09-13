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
      d="M16.5 21a.5.5 0 10-1 0h1zm-1 .7a.5.5 0 001 0h-1zm1-8.4a.5.5 0 00-1 0h1zm-1 5.25a.5.5 0 101 0h-1zm7.652 6.65v-.5.5zm-14.304 0v.5-.5zm8.184-17.584l.44-.237-.44.237zm7.88 14.636l.44-.237-.44.237zM14.969 7.616l-.44-.237.44.237zm-7.88 14.636l.44.237-.44-.237zM15.5 21v.7h1V21h-1zm0-7.7v5.25h1V13.3h-1zm7.652 11.4H8.848v1h14.304v-1zm-6.56-16.847l7.88 14.636.88-.474-7.88-14.636-.88.474zm-2.064-.474l-7.88 14.636.88.474 7.88-14.636-.88-.474zM16 6.5c-.615 0-1.18.338-1.472.88l.88.473A.672.672 0 0116 7.5v-1zm1.472.88A1.672 1.672 0 0016 6.5v1c.247 0 .474.136.592.353l.88-.474zM8.848 24.7a1.5 1.5 0 01-1.32-2.211l-.88-.474c-.898 1.665.309 3.685 2.2 3.685v-1zm14.304 1c1.891 0 3.098-2.02 2.2-3.685l-.88.474a1.5 1.5 0 01-1.32 2.211v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericAlarm =
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
export default GenericAlarm;

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
      d="M6.5 10.885H7h-.5zm0 11.692H6h.5zM22.577 25.5V25v.5zm-13.154 0v.5-.5zM25.5 10.885H25h.5zm0 11.692h.5-.5zM22.577 7.962v.5-.5zm-13.154 0v-.5.5zM25.5 13.577a.5.5 0 100-1v1zm-19-1a.5.5 0 000 1v-1zm4.615-3.154a.5.5 0 101 0h-1zm1-2.923a.5.5 0 00-1 0h1zm7.77 2.923a.5.5 0 001 0h-1zm1-2.923a.5.5 0 10-1 0h1zm-10 10.462a.5.5 0 000 1v-1zm1.461 1a.5.5 0 100-1v1zm2.923-1a.5.5 0 000 1v-1zm1.462 1a.5.5 0 100-1v1zm2.923-1a.5.5 0 000 1v-1zm1.461 1a.5.5 0 100-1v1zm-10.23 2.653a.5.5 0 100 1v-1zm1.461 1a.5.5 0 000-1v1zm2.923-1a.5.5 0 100 1v-1zm1.462 1a.5.5 0 000-1v1zm2.923-1a.5.5 0 100 1v-1zm1.461 1a.5.5 0 000-1v1zM6 10.885v11.692h1V10.885H6zM22.577 25H9.423v1h13.154v-1zM25 10.885v11.692h1V10.885h-1zm-2.423-3.423H9.423v1h13.154v-1zM26 10.885a3.423 3.423 0 00-3.423-3.423v1A2.423 2.423 0 0125 10.885h1zm-19 0a2.423 2.423 0 012.423-2.423v-1A3.423 3.423 0 006 10.885h1zM6 22.577A3.423 3.423 0 009.423 26v-1A2.423 2.423 0 017 22.577H6zM22.577 26A3.423 3.423 0 0026 22.577h-1A2.423 2.423 0 0122.577 25v1zM25.5 12.577h-19v1h19v-1zM12.115 9.423V6.5h-1v2.923h1zm8.77 0V6.5h-1v2.923h1zm-10 8.539h1.461v-1h-1.461v1zm4.384 0h1.462v-1h-1.462v1zm4.385 0h1.461v-1h-1.461v1zm-8.77 3.653h1.462v-1h-1.461v1zm4.385 0h1.462v-1h-1.462v1zm4.385 0h1.461v-1h-1.461v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeCalendarDate =
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
export default TimeCalendarDate;

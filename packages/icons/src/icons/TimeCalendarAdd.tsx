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
      d="M6.5 10.385H6h.5zM22.577 25v-.5.5zM9.423 25v.5-.5zM25.5 10.385H25h.5zm0 11.692h.5-.5zM22.577 7.462v.5-.5zm-13.154 0v-.5.5zM25.5 13.077a.5.5 0 100-1v1zm-18.27-1a.5.5 0 000 1v-1zm3.885-3.154a.5.5 0 101 0h-1zm1-2.923a.5.5 0 00-1 0h1zm7.77 2.923a.5.5 0 001 0h-1zm1-2.923a.5.5 0 10-1 0h1zM16.5 15.5a.5.5 0 00-1 0h1zm-1 5.846a.5.5 0 001 0h-1zm-2.423-3.423a.5.5 0 000 1v-1zm5.846 1a.5.5 0 100-1v1zM6 10.385v11.692h1V10.385H6zM22.577 24.5H9.423v1h13.154v-1zM25 10.385v11.692h1V10.385h-1zm-2.423-3.423H9.423v1h13.154v-1zM26 10.385a3.423 3.423 0 00-3.423-3.423v1A2.423 2.423 0 0125 10.385h1zm-19 0a2.423 2.423 0 012.423-2.423v-1A3.423 3.423 0 006 10.385h1zM6 22.077A3.423 3.423 0 009.423 25.5v-1A2.423 2.423 0 017 22.077H6zM22.577 25.5A3.423 3.423 0 0026 22.077h-1a2.423 2.423 0 01-2.423 2.423v1zM25.5 12.077H7.23v1H25.5v-1zM12.115 8.923V6h-1v2.923h1zm8.77 0V6h-1v2.923h1zM15.5 15.5v2.923h1V15.5h-1zm0 2.923v2.923h1v-2.923h-1zm-2.423.5H16v-1h-2.923v1zm2.923 0h2.923v-1H16v1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeCalendarAdd =
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
export default TimeCalendarAdd;

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
      d="M6.5 10.885H7h-.5zm0 11.692H6h.5zM22.577 25.5V25v.5zm-13.154 0v.5-.5zM25.5 10.885H25h.5zm0 11.692h.5-.5zM22.577 7.962v.5-.5zm-13.154 0v-.5.5zM25.5 13.577a.5.5 0 100-1v1zm-19-1a.5.5 0 000 1v-1zm4.615-3.154a.5.5 0 101 0h-1zm1-2.923a.5.5 0 00-1 0h1zm7.77 2.923a.5.5 0 001 0h-1zm1-2.923a.5.5 0 10-1 0h1zm-7.482 12.349a.5.5 0 10-.652.757l.652-.757zm1.866 2.266l-.326.38a.5.5 0 00.71-.06l-.384-.32zm4.038-4.064a.5.5 0 00-.768-.64l.768.64zM6 10.885v11.692h1V10.885H6zM22.577 25H9.423v1h13.154v-1zM25 10.885v11.692h1V10.885h-1zm-2.423-3.423H9.423v1h13.154v-1zM26 10.885a3.423 3.423 0 00-3.423-3.423v1A2.423 2.423 0 0125 10.885h1zm-19 0a2.423 2.423 0 012.423-2.423v-1A3.423 3.423 0 006 10.885h1zM6 22.577A3.423 3.423 0 009.423 26v-1A2.423 2.423 0 017 22.577H6zM22.577 26A3.423 3.423 0 0026 22.577h-1A2.423 2.423 0 0122.577 25v1zM25.5 12.577h-19v1h19v-1zM12.115 9.423V6.5h-1v2.923h1zm8.77 0V6.5h-1v2.923h1zM12.75 19.606l2.192 1.888.652-.758-2.192-1.887-.652.757zm2.902 1.83l3.654-4.385-.768-.64-3.654 4.384.768.64z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeCalendarSucsess =
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
export default TimeCalendarSucsess;

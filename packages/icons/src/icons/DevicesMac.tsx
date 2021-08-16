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
      d="M23.5 21.115v-.5.5zm-15 0v.5-.5zM25.5 8.5H25h.5zm0 10.615h.5-.5zM6.5 8.5H6h.5zm0 10.615H7h-.5zM23.5 6.5V7v-.5zm-15 0V6v.5zm17 11.462a.5.5 0 100-1v1zm-19-1a.5.5 0 000 1v-1zM20.385 26a.5.5 0 100-1v1zm-8.77-1a.5.5 0 100 1v-1zm.962.5a.5.5 0 001 0h-1zm1-4.385a.5.5 0 10-1 0h1zm4.846 4.385a.5.5 0 101 0h-1zm1-4.385a.5.5 0 10-1 0h1zm4.077-.5h-15v1h15v-1zM25 8.5v10.615h1V8.5h-1zm-19 0v10.615h1V8.5H6zM23.5 6h-15v1h15V6zM26 8.5A2.5 2.5 0 0023.5 6v1A1.5 1.5 0 0125 8.5h1zm-19 0A1.5 1.5 0 018.5 7V6A2.5 2.5 0 006 8.5h1zm1.5 12.115a1.5 1.5 0 01-1.5-1.5H6a2.5 2.5 0 002.5 2.5v-1zm15 1a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm2-4.653h-19v1h19v-1zM20.385 25h-8.77v1h8.77v-1zm-6.808.5v-4.385h-1V25.5h1zm5.846 0v-4.385h-1V25.5h1z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesMac =
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
export default DevicesMac;

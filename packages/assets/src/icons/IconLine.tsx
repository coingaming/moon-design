import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.382 0H3.645C1.645-.003.003 1.617 0 3.617v12.737c-.003 2 1.617 3.643 3.617 3.646h12.737c2 .003 3.642-1.617 3.645-3.618V3.645c.003-2-1.616-3.642-3.617-3.645z"
      fill="#00B900"
    />
    <path
      d="M17.249 9.12c0-3.258-3.267-5.908-7.282-5.908-4.015 0-7.281 2.65-7.281 5.909 0 2.92 2.59 5.367 6.09 5.83.237.05.56.156.64.358.074.185.049.473.024.659l-.103.623c-.032.184-.147.72.63.393.777-.328 4.194-2.47 5.721-4.228 1.055-1.157 1.56-2.331 1.56-3.635z"
      fill="#fff"
    />
    <path
      d="M8.488 7.546h-.511a.142.142 0 00-.142.142v3.172c0 .079.064.142.142.142h.51a.142.142 0 00.143-.142V7.688a.142.142 0 00-.142-.142zM12.003 7.546h-.51a.142.142 0 00-.142.142v1.885L9.897 7.609a.156.156 0 00-.011-.014l-.001-.001a.13.13 0 00-.009-.009l-.002-.002a.083.083 0 00-.008-.007l-.004-.003-.007-.005a.104.104 0 00-.012-.007L9.84 7.56a.083.083 0 00-.008-.003l-.005-.002-.009-.002-.004-.002-.008-.002h-.006l-.008-.001h-.007l-.005-.001h-.51a.142.142 0 00-.143.142v3.172c0 .079.064.142.142.142h.51a.142.142 0 00.143-.142V8.976l1.455 1.966c.01.014.023.026.036.035l.002.001a.208.208 0 00.009.006l.004.002a.24.24 0 00.027.011h.002a.14.14 0 00.037.005h.51a.142.142 0 00.142-.142V7.688a.142.142 0 00-.142-.142zM7.257 10.207H5.869v-2.52a.142.142 0 00-.142-.141h-.51a.142.142 0 00-.143.142v3.172a.141.141 0 00.042.1l.002.002a.14.14 0 00.098.04h2.04a.142.142 0 00.142-.142v-.51a.142.142 0 00-.141-.143zM14.824 8.34a.141.141 0 00.141-.141v-.511a.142.142 0 00-.141-.142h-2.04a.141.141 0 00-.1.04v.002c-.002 0-.002.001-.003.002a.14.14 0 00-.04.098v3.172a.141.141 0 00.142.142h2.04a.142.142 0 00.142-.142v-.51a.142.142 0 00-.141-.143h-1.388v-.536h1.388a.142.142 0 00.141-.142v-.51a.142.142 0 00-.141-.142h-1.388V8.34h1.388z"
      fill="#00B900"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLine =
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
export default IconLine;

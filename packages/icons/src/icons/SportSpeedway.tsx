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
      d="M6.804 20.21a.493.493 0 01-.214.048.51.51 0 01-.479-.348m3.062.917c-.409.962-1.344 1.633-2.431 1.633-1.466 0-2.653-1.22-2.653-2.723s1.188-2.723 2.653-2.723c1.017 0 1.902.588 2.347 1.452m1.49 2.663C10.017 22.799 8.47 24 6.652 24 4.36 24 2.5 22.092 2.5 19.738c0-2.354 1.859-4.262 4.152-4.262 1.944 0 3.576 1.37 4.028 3.222m14.668 1.04l-2.873-6.76m-4.166 4.55l1.077.258-.773 2.189a1.01 1.01 0 01-.992.682l-4.326-.2-1.387-.3m-1.667-2.562s-.974-2.396-2.543-3.567c-1.253-.936-2.991-.984-3.64-.965a.305.305 0 01-.31-.272c-.048-.428-.007-1.206.859-1.398 1.213-.268 3.637-.244 4.541 0 .903.244 1.496 2.245 3.873 1.293 2.377-.951.421-2.033 4.274-2.757 1.687-.317 2.662.244 3.186 1.39.523 1.148.974 1.66.974 1.66s-.782.987-1.201 1.922c-.559 1.245-.559 1.667-.559 1.667m-5.536-4.57s.693.493.93.98c.238.488-.906 1.744-3.186 1.582-1.527-.11-1.63-.416-2.581-.993-1.65-1-1.211-2.325-1.211-2.325m13.63 1.425l3.12.11s.82-2.104-.98-3.477c-1.801-1.372-2.14-.604-2.14-.604s-1.028 1.28-2.609 1.3M19.298 8c.393.055.517.212.731.48m0 0c.214.27-.178.984-.178.984m.178-.983l.785.837m-3.87 7.27c-.769-1.312-3.309-.38-3.626 1.232m12.499 1.718a.526.526 0 01-.275.68.503.503 0 01-.664-.281.526.526 0 01.275-.68.503.503 0 01.664.281zm2.184.2c0 1.504-1.188 2.722-2.652 2.722-1.465 0-2.654-1.22-2.654-2.723s1.189-2.723 2.654-2.723c1.464 0 2.652 1.22 2.652 2.723zm1.499 0c0 2.353-1.859 4.261-4.152 4.261-2.294 0-4.152-1.908-4.152-4.262 0-2.354 1.858-4.262 4.152-4.262 2.293 0 4.152 1.908 4.152 4.262zm-17.745.407c.16-.745-.586-1.14-.586-1.14l-4.712-1.129-.503 1.885 4.835 1.149s.806-.02.966-.765z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSpeedway =
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
export default SportSpeedway;

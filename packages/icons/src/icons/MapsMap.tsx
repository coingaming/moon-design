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
      d="M13.1 6.5l.185-.464-.685-.274V6.5l.5.001zm10.342.825l-.186-.464.186.464zm-3.017 1.21l-.186-.465.186.465zm4.447 14.735l.185.464-.185-.464zm-4.46 1.785l-.185-.465.185.465zM18.196 8.536L18.01 9l.186-.464zm-.01 16.52l.186-.464-.186.464zM13.077 6.5h.5v-.724l-.677.256.177.468zM7.804 8.493l-.177-.468.177.468zm.727 16.24l.177.468-.177-.467zm-2.02-14.37h-.5.5zM6.5 23.328h-.5.5zM19.424 9.423a.5.5 0 00-1 0h1zm-1 15.346a.5.5 0 101 0h-1zM25 8.717v13.625h1V8.717h-1zM12.6 6.5l-.023 16.519 1 .001.022-16.518-1-.002zm10.656.362l-3.017 1.21.372.928 3.017-1.21-.372-.928zm1.43 15.945l-4.46 1.784.372.929 4.46-1.785-.372-.928zM18.38 8.072l-5.096-2.036-.371.928L18.01 9l.371-.928zm-.01 16.52l-5.109-2.038-.37.93 5.11 2.036.37-.928zm1.856-.002a2.5 2.5 0 01-1.855.002l-.37.928a3.5 3.5 0 002.596-.001l-.371-.928zM25 22.342a.5.5 0 01-.314.464l.371.928A1.5 1.5 0 0026 22.342h-1zM20.24 8.07a2.5 2.5 0 01-1.859 0l-.37.93a3.5 3.5 0 002.6-.002l-.372-.929zm5.76.646a2 2 0 00-2.744-1.856l.372.928A1 1 0 0125 8.717h1zM12.577 6.5v16.519h1V6.5h-1zm.323-.468L7.627 8.025l.354.936 5.273-1.993-.354-.936zm0 16.519l-4.545 1.715.353.936 4.545-1.716-.353-.935zM6.01 10.362L6.003 23.33h1l.009-12.966h-1zm1.617-2.337a2.5 2.5 0 00-1.616 2.337h1a1.5 1.5 0 01.97-1.401l-.354-.936zm.728 16.24a1 1 0 01-1.353-.935l-1-.001A2 2 0 008.708 25.2l-.353-.935zM18.423 9.424V24.77h1V9.423h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MapsMap =
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
export default MapsMap;

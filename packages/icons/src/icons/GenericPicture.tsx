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
      d="M6.5 9.423H6h.5zm0 13.154H6h.5zM22.577 25.5V25v.5zm-13.154 0v.5-.5zM25.5 9.423h.5-.5zm0 13.154H25h.5zM22.577 6.5V6v.5zm-13.154 0V7v-.5zm1.462 8.77l.353-.354a.5.5 0 00-.707 0l.354.353zm9.877 10.584a.5.5 0 00.707-.708l-.707.708zm4.384-3.654a.5.5 0 10.708-.707l-.707.707zm-4.03-4.738l.353-.354a.5.5 0 00-.707 0l.353.354zM7.23 18.922l-.354-.353.354.353zM22.577 25H9.423v1h13.154v-1zM25 9.423v13.154h1V9.423h-1zM22.577 6H9.423v1h13.154V6zM26 9.423A3.423 3.423 0 0022.577 6v1A2.423 2.423 0 0125 9.423h1zm-19 0A2.423 2.423 0 019.423 7V6A3.423 3.423 0 006 9.423h1zM6 22.577A3.423 3.423 0 009.423 26v-1A2.423 2.423 0 017 22.577H6zM22.577 26A3.423 3.423 0 0026 22.577h-1A2.423 2.423 0 0122.577 25v1zm-.5-14.385c0 .935-.758 1.693-1.692 1.693v1a2.692 2.692 0 002.692-2.693h-1zm-1.692 1.693a1.692 1.692 0 01-1.693-1.693h-1a2.692 2.692 0 002.693 2.693v-1zm-1.693-1.693c0-.934.758-1.692 1.693-1.692v-1a2.692 2.692 0 00-2.693 2.692h1zm1.693-1.692c.934 0 1.692.758 1.692 1.692h1a2.692 2.692 0 00-2.692-2.692v1zm5.469 11.57l-4.385-4.385-.707.707 4.384 4.385.708-.707zm-15.323-5.87l6.212 6.211.707-.707-6.212-6.211-.707.707zm6.212 6.211l4.019 4.02.707-.708-4.02-4.019-.706.707zm4.019-4.726l-4.02 4.02.708.706 4.019-4.019-.707-.707zM7.584 19.277l3.654-3.654-.707-.707-3.654 3.654.707.707zM6 9.423v10.23h1V9.424H6zm0 10.23v2.924h1v-2.923H6zm.877-1.083l-.73.73.707.707.73-.73-.707-.707z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericPicture =
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
export default GenericPicture;

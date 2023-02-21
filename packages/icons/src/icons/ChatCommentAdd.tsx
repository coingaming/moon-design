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
      d="M7 10.5h.5H7zm0 13.038h-.5.5zM25 10.5h-.5.5zm0 7.482h.5-.5zM21 6.5V6v.5zm-10 0V7v-.5zm.846 15.482v-.5h-.162l-.132.095.294.404zm-3.258 2.365l-.294-.404.294.404zM21 21.981v-.5.5zM13 14a.5.5 0 100 1v-1zm6 1a.5.5 0 100-1v1zm-2.5-3.5a.5.5 0 10-1 0h1zm-1 6a.5.5 0 001 0h-1zm-9-7v13.038h1V10.5h-1zm18 0v7.482h1V10.5h-1zM21 6H11v1h10V6zm-9.448 15.577l-3.258 2.366.587.809 3.259-2.366-.588-.81zM21 21.48h-9.154v1H21v-1zM25.5 10.5A4.5 4.5 0 0021 6v1a3.5 3.5 0 013.5 3.5h1zm-18 0A3.5 3.5 0 0111 7V6a4.5 4.5 0 00-4.5 4.5h1zm-1 13.038c0 1.226 1.39 1.934 2.381 1.214l-.587-.81a.5.5 0 01-.794-.404h-1zm18-5.556a3.5 3.5 0 01-3.5 3.5v1a4.5 4.5 0 004.5-4.5h-1zM13 15h6v-1h-6v1zm2.5-3.5v6h1v-6h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ChatCommentAdd =
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
export default ChatCommentAdd;

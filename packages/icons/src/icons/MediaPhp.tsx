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
      d="M14.188 5.01v4.781c0 1.178-.929 2.133-2.077 2.133H7.025M21.538 27H10.462C8.55 27 7 25.408 7 23.445V12.302c0-.785.317-1.536.875-2.074L12.42 5.77A2.73 2.73 0 0114.315 5h7.223C23.45 5 25 6.592 25 8.555v14.89C25 25.408 23.45 27 21.538 27z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M14.163 16v4m.154-2h3.121m.06-2v4M10 20v-4h1.501c.852 0 1.22.568 1.22 1.08 0 .51-.368 1.079-1.22 1.079H10M19.279 20v-4h1.501c.85 0 1.22.568 1.22 1.08 0 .51-.369 1.079-1.22 1.079h-1.501"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPhp =
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
export default MediaPhp;

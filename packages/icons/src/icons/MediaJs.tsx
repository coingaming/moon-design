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
      d="M14.188 5.01v4.781c0 1.178-.929 2.133-2.077 2.133H7.025M21.538 27H10.462C8.55 27 7 25.408 7 23.445V12.302c0-.785.317-1.536.875-2.074L12.42 5.77A2.73 2.73 0 0114.315 5h7.223C23.45 5 25 6.592 25 8.555v14.89C25 25.408 23.45 27 21.538 27z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M12 19.543c.385.464.895.857 1.552.857.503 0 1.295-.343 1.295-1.54V15.4h-.833m5.505.174c-1.407-.44-2.382-.004-2.382.867 0 1.481 2.863 1.268 2.863 2.707 0 1.277-1.645 1.526-3.095.689"
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
const MediaJs =
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
export default MediaJs;

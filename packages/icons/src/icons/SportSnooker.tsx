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
      d="M12.5 21.312c0 .987-.784 1.788-1.75 1.788-.967 0-1.75-.8-1.75-1.788s.783-1.788 1.75-1.788c.966 0 1.75.8 1.75 1.788zm0 0c0 .987.784 1.788 1.75 1.788.967 0 1.75-.8 1.75-1.788m-3.5 0c0-.988.784-1.788 1.75-1.788.967 0 1.75.8 1.75 1.788m-1.75-3.155c0 .987-.784 1.788-1.75 1.788s-1.75-.8-1.75-1.788.784-1.788 1.75-1.788 1.75.8 1.75 1.788zm0 0c0 .987.784 1.788 1.75 1.788s1.75-.8 1.75-1.788m-3.5 0c0-.988.784-1.788 1.75-1.788s1.75.8 1.75 1.788m0 0c0 .987.784 1.788 1.75 1.788s1.75-.8 1.75-1.788-.784-1.788-1.75-1.788-1.75.8-1.75 1.788zM16 15.022c0 .988-.783 1.788-1.75 1.788-.966 0-1.75-.8-1.75-1.788 0-.987.784-1.788 1.75-1.788.967 0 1.75.8 1.75 1.788zm0 0c0 .988.784 1.788 1.75 1.788.967 0 1.75-.8 1.75-1.788 0-.987-.783-1.788-1.75-1.788-.966 0-1.75.8-1.75 1.788zm0 6.29c0 .987.784 1.788 1.75 1.788.967 0 1.75-.8 1.75-1.788m-3.5 0c0-.988.784-1.788 1.75-1.788.967 0 1.75.8 1.75 1.788m0 0c0 .987.784 1.788 1.75 1.788S23 22.3 23 21.312s-.784-1.788-1.75-1.788-1.75.8-1.75 1.788zm-1.75-9.424c0 .988-.784 1.788-1.75 1.788s-1.75-.8-1.75-1.788S15.034 10.1 16 10.1s1.75.8 1.75 1.788zM8.5 25h14.992c.9 0 1.724-.472 2.174-1.268.45-.796.45-1.715-.025-2.486L17.92 8.094C17.52 7.398 16.794 7 15.994 7s-1.524.398-1.924 1.094l-7.72 13.152a2.505 2.505 0 00-.026 2.51A2.51 2.51 0 008.5 25z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSnooker =
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
export default SportSnooker;

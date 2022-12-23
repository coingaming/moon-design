import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M15 11.247c0-2.16-1.182-4.04-2.927-5.014.197-.387.31-.825.31-1.292 0-.904-.42-1.683-1.073-2.194-.636-.5-1.274-.814-2.465-.735-1.21.08-1.891.828-1.891.828a1.908 1.908 0 00-.55 1.33 1.908 1.908 0 00.91 1.643c.12.074.279.016.328-.119l.167-.461.02-.058.003-.008a1.304 1.304 0 01-.086-.04 1.458 1.458 0 01-.497-1.933c.06-.104.562-.878 1.966-.752.215.026.443.08.679.173.109.04.213.09.313.147l.01.006a2.112 2.112 0 011.049 1.83c0 .628-.211 1.26-.642 1.647l-.006.006c-.06.059-.13.117-.208.173-.249.152-.55.244-.848.299V5.125l-.001-.02v-.767a.273.273 0 00-.192-.262l-.702-.216v2.916h-.612c-.158 0-.298.1-.352.249l-.18.497 1.061.01c.668.031 1.301.167 1.875.389a4.036 4.036 0 012.644 3.802c0 .218-.018.43-.051.637a4.4 4.4 0 01-.369 1.26 4.333 4.333 0 01-3.929 2.531 4.28 4.28 0 01-2.811-1.047 3.378 3.378 0 01-.393-.382 2.985 2.985 0 01-.756-1.96c0-1.64 1.311-2.86 2.93-2.86.383 0 .75.074 1.085.21.314.133.583.329.797.573.228.293.364.662.364 1.063 0 .391-.13.752-.346 1.04-.286.33-.688.378-.871.382a2.107 2.107 0 01-.607-.113.242.242 0 00-.307.149l-.107.298c.245.127.518.207.807.23.006.002.011.002.017.002.027.002.055.002.082.003l.046.002h.021c.031 0 .062 0 .093-.002h.01c.04-.002.078-.005.116-.009 1.27-.124 2.298-1.318 2.298-2.682A2.715 2.715 0 009.41 8.476a3.968 3.968 0 00-4.456 1.166 4.064 4.064 0 00-.951 2.714v-.002.025l.004.096v.003c.004.078.01.156.02.233.245 2.4 2.24 4.262 4.642 4.277V18l.726-.186a.223.223 0 00.167-.217v-.458l.002-.039v-.063c3.02-.103 5.437-2.613 5.437-5.695v-.095z"
      fill="url(#icon-bombay-club_svg__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="icon-bombay-club_svg__paint0_linear"
        x1={9.5}
        y1={2}
        x2={9.5}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CDAE81" />
        <stop offset={1} stopColor="#B29265" />
      </linearGradient>
    </defs>
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconBombayClub =
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
export default IconBombayClub;

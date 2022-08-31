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
      d="M23.815 13.808a.5.5 0 10-1 0h1zm-14.615 0a.5.5 0 10-1 0h1zm7.308 9.5a.5.5 0 10-1 0h1zM18.93 26a.5.5 0 100-1v1zm-5.846-1a.5.5 0 100 1v-1zm6.807-14.115v4.384h1v-4.384h-1zm-7.769 4.384v-4.384h-1v4.384h1zm3.885 3.885a3.885 3.885 0 01-3.885-3.885h-1a4.885 4.885 0 004.885 4.885v-1zm3.884-3.885a3.885 3.885 0 01-3.884 3.885v1a4.885 4.885 0 004.884-4.885h-1zM16.008 7a3.885 3.885 0 013.884 3.885h1A4.885 4.885 0 0016.008 6v1zm0-1a4.885 4.885 0 00-4.885 4.885h1A3.885 3.885 0 0116.008 7V6zm6.807 7.808v1.461h1v-1.461h-1zM9.2 15.269v-1.461h-1v1.461h1zm6.808 6.808A6.808 6.808 0 019.2 15.269h-1a7.808 7.808 0 007.808 7.808v-1zm6.807-6.808a6.808 6.808 0 01-6.807 6.808v1a7.808 7.808 0 007.807-7.808h-1zm-7.307 8.039V25.5h1v-2.192h-1zm.5 2.692h2.923v-1h-2.923v1zm0-1h-2.923v1h2.923v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaMice =
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
export default MediaMice;

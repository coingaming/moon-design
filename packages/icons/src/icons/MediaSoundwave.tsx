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
      d="M15.5 25.5a.5.5 0 101 0h-1zm1-19a.5.5 0 10-1 0h1zm-5.75 15.133a.5.5 0 001 0h-1zm1-11.266a.5.5 0 10-1 0h1zM6 18.54a.5.5 0 101 0H6zm1-5.078a.5.5 0 00-1 0h1zm13.25 8.172a.5.5 0 001 0h-1zm1-11.266a.5.5 0 10-1 0h1zM25 18.54a.5.5 0 101 0h-1zm1-5.078a.5.5 0 00-1 0h1zM16.5 25.5v-19h-1v19h1zm-4.75-3.867V10.367h-1v11.266h1zM7 18.539v-5.078H6v5.078h1zm14.25 3.094V10.367h-1v11.266h1zM26 18.539v-5.078h-1v5.078h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaSoundwave =
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
export default MediaSoundwave;

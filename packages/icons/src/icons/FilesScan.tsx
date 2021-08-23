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
      d="M24.944 6.971a.5.5 0 10-.334-.942l.334.942zM23.5 25H8.71v1H23.5v-1zm1.5-9.192V23.5h1v-7.692h-1zm-12.858-1.5H23.5v-1H12.142v1zm-3.433-2.193h1.24v-1H8.71v1zM7.21 23.5v-9.885h-1V23.5h1zm2.74-11.385c.33 0 .597.267.597.596h1c0-.881-.715-1.596-1.597-1.596v1zm-1.24-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5v-1zm3.433 2.193a.596.596 0 01-.596-.597h-1c0 .882.714 1.597 1.596 1.597v-1zM26 15.808a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zM8.71 25a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm14.79 1a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm-17-5.5h18.486v-1H6.5v1zm3.99-8.413L24.944 6.97l-.334-.942-14.454 5.115.334.943z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesScan =
  styled(Svg) <
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
export default FilesScan;

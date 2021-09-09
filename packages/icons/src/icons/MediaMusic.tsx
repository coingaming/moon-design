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
      d="M11.846 22.212a.5.5 0 101 0h-1zm.5-12.058l-.134-.482a.5.5 0 00-.366.482h.5zM25.5 6.5h.5a.5.5 0 00-.634-.482l.134.482zM25 19.654a.5.5 0 101 0h-1zm-13.154 2.923A2.423 2.423 0 019.423 25v1a3.423 3.423 0 003.423-3.423h-1zM9.423 25A2.423 2.423 0 017 22.577H6A3.423 3.423 0 009.423 26v-1zM7 22.577a2.423 2.423 0 012.423-2.423v-1A3.423 3.423 0 006 22.577h1zm2.423-2.423a2.423 2.423 0 012.423 2.423h1a3.423 3.423 0 00-3.423-3.423v1zm15.577.23a2.423 2.423 0 01-2.423 2.424v1A3.423 3.423 0 0026 20.385h-1zm-2.423 2.424a2.423 2.423 0 01-2.423-2.423h-1a3.423 3.423 0 003.423 3.423v-1zm-2.423-2.423a2.423 2.423 0 012.423-2.424v-1a3.423 3.423 0 00-3.423 3.424h1zm2.423-2.424A2.423 2.423 0 0125 20.386h1a3.423 3.423 0 00-3.423-3.424v1zm-9.73 4.25V10.155h-1v12.058h1zm-.367-11.575l13.154-3.654-.268-.964-13.154 3.654.268.964zM25 6.5v13.154h1V6.5h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const MediaMusic = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default MediaMusic;

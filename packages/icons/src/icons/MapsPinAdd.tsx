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
      d="M13 14a.5.5 0 000 1v-1zm6 1a.5.5 0 000-1v1zm-2.5-3.5a.5.5 0 00-1 0h1zm-1 6a.5.5 0 001 0h-1zm.5 8l-.304.397a.5.5 0 00.608 0L16 25.5zM13 15h6v-1h-6v1zm2.5-3.5v6h1v-6h-1zm7.5 2.083c0 2.894-1.774 5.756-3.631 7.945a27.99 27.99 0 01-3.365 3.327 15.806 15.806 0 01-.305.245l-.003.003.304.397c.304.397.305.396.305.396l.002-.001.005-.004.017-.014.066-.052a25.901 25.901 0 001.112-.95 29.023 29.023 0 002.624-2.7C22.024 19.945 24 16.85 24 13.583h-1zM16 25.5c.304-.397.305-.397.305-.396l-.001-.001-.003-.003a1.746 1.746 0 01-.074-.058 24.934 24.934 0 01-1.063-.909 27.99 27.99 0 01-2.533-2.605C10.774 19.339 9 16.478 9 13.583H8c0 3.266 1.976 6.362 3.869 8.592a29.023 29.023 0 003.49 3.451c.105.087.188.154.246.2.028.022.05.04.066.051l.018.014.004.004.002.001L16 25.5zM9 13.583C9 9.973 12.107 7 16 7V6c-4.39 0-8 3.368-8 7.583h1zM16 7c3.893 0 7 2.974 7 6.583h1C24 9.368 20.39 6 16 6v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MapsPinAdd =
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
export default MapsPinAdd;

import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.44 16.11v-1.967c.114-.216.885-1.77.87-4.1l.001-.044.002-.034-.003-.039c.008-2.313-.756-3.853-.87-4.069V3.889A8.169 8.169 0 0118.194 10a8.17 8.17 0 01-2.754 6.111zm-7.215 1.884v-2.37c.54.088 1.122.151 1.776.151.63 0 1.19-.06 1.717-.143v2.377a8.159 8.159 0 01-1.717.184c-.61 0-1.204-.072-1.776-.199zM1.805 10a8.167 8.167 0 012.726-6.083v1.997c-.191.389-.857 1.896-.841 4.055h.003a.48.48 0 00-.003.107c-.008 2.136.65 3.626.841 4.012v1.997a8.167 8.167 0 01-2.725-6.085zm9.94-8v2.373a10.9 10.9 0 00-1.744-.148c-.643 0-1.214.063-1.747.148V1.998a8.195 8.195 0 011.747-.192c.6 0 1.182.07 1.745.192zm2.89 3.287a9.221 9.221 0 00-2.095-.76c.003-.02.012-.039.012-.06V2.218a8.22 8.22 0 012.082 1.03v2.037zm-9.94 2.699a7.71 7.71 0 01.553-1.702C5.607 6.044 7.292 5.03 10 5.03c2.665 0 4.354.994 4.737 1.244.008.009.014.018.023.027.104.22.36.815.545 1.684H4.694zm10.81 1.977V10.039c.002.42-.027.807-.07 1.17H4.565a9.215 9.215 0 01-.07-1.17v-.038-.04a9.28 9.28 0 01.07-1.17h10.87c.043.363.072.752.07 1.17zM5.336 5.302v-2.03a8.19 8.19 0 012.111-1.053v2.31a9.209 9.209 0 00-2.111.772zM7.419 17.77a8.167 8.167 0 01-2.082-1.043v-2.03a9.222 9.222 0 002.11.772.397.397 0 00-.028.138v2.163zm7.333-4.055c-.359.24-2.044 1.253-4.752 1.253-2.693 0-4.392-1.015-4.753-1.254-.1-.206-.367-.81-.554-1.7h10.613a7.671 7.671 0 01-.554 1.701zm-.118.998v2.037a8.144 8.144 0 01-2.11 1.04V15.48a9.229 9.229 0 002.11-.765zM12.33 1.317a.397.397 0 00-.181-.048h-.003A8.953 8.953 0 0010 1c-4.963 0-9 4.037-9 9s4.037 8.999 9 8.999 9-4.036 9-9c0-4.155-2.835-7.652-6.67-8.682z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsVolleyBall =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconSportsVolleyBall;

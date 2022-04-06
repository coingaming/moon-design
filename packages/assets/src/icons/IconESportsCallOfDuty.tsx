import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.856 3.2c.907.01 1.811.111 2.699.3.915.22 3.05.9 3.713 2.628.516 1.613.516 3.35.498 5.182h-4.358v-.84c.037-1.22.006-2.442-.093-3.659a2.046 2.046 0 00-.576-1.412 2.4 2.4 0 00-1.725-.7 2.444 2.444 0 00-1.745.697 2.079 2.079 0 00-.6 1.433c-.153 1.92-.135 3.852-.114 5.717 0 1.044.021 2.124 0 3.174v.056c.018.6 0 1.2 0 1.84-.057 1.33.003 2.662.18 3.982v.099c.24.972 1.11 1.599 2.21 1.599a2.95 2.95 0 001.155-.231l.12-.051.105-.075c.873-.62.957-1.59 1.005-2.169v-.179c.048-.918.042-1.836.036-2.721v-.354h4.35v.03c0 1.662-.025 3.233-.619 4.595-1.008 1.659-3.227 2.655-5.909 2.655h-.323c-1.911-.018-4.448-.402-5.726-2.127-.771-1.224-.831-2.79-.9-4.448 0-.195 0-.39-.024-.582v-2.9c-.018-2.367-.036-4.8.129-7.199v-.02c.069-1.407 1.077-2.802 2.516-3.477a9.151 9.151 0 013.996-.843zm0-1.2a10.33 10.33 0 00-4.53.963c-1.745.82-3.095 2.544-3.194 4.5-.237 3.395-.105 6.802-.12 10.197.084 1.917.048 4.007 1.125 5.68 1.5 2.076 4.28 2.631 6.704 2.652h.348c2.66 0 5.584-.948 7.018-3.299.9-1.989.71-4.256.777-6.386h-6.767c-.02 1.404.036 2.808-.036 4.2-.048.506-.057 1.106-.519 1.433-.212.095-.44.147-.671.156-.468 0-.924-.192-1.044-.687-.3-1.871-.111-3.782-.165-5.665.057-2.958-.13-5.921.114-8.867 0-.65.558-.977 1.13-.977.573 0 1.128.32 1.11.965.195 1.875.045 3.765.09 5.642h6.76c0-2.261.15-4.595-.56-6.784-.708-1.896-2.7-2.955-4.583-3.402-.98-.199-1.976-.3-2.975-.3l-.012-.02z"
      fill="#FD9041"
    />
    <path
      d="M12.77 14c.054 1.841-.139 5.665.165 7.494.183.73 1.133.789 1.73.54.463-.32.472-.906.52-1.402.072-1.37 0-2.741.036-4.105H22c-.066 2.082.123 4.299-.778 6.242-1.503 2.408-4.624 3.31-7.38 3.226-2.428-.021-5.207-.563-6.715-2.592C6.048 21.767 6.084 19.723 6 17.85V14h6.77z"
      fill="#FD9041"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsCallOfDuty =
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
export default IconESportsCallOfDuty;

import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M8.003 4.789v17.854s-.288 4.27 6.312 4.125c0 0 5.937.716 6.685-3.983V11.438s-.46-2.32-4.505-2.32c0 0-2.782-.058-2.925.831l-.03-4.471s.891-1.003 2.038.029l-.029 2.666H21V4.789S20.987.262 14.582.518c-.003 0-6.09-.515-6.58 4.27z"
      fill="#FDDC01"
    />
    <path
      d="M12.278 15.307v8.196h-.167v.441h.436v.161h1.308v-.18h.175v-4.262s.473-.62 1.567-.483v-2.228s.95-.488 2.713-.488v-2.038s-.655-.932-2.177.108c0 0-1.739.95-2.106-.116h-1.435v.143h-.322v.3h-.156v.333h.159l.005.113z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.224}
      strokeMiterlimit={10}
    />
    <path
      d="M14.167 17.746V19h1.281v-1.737l-.18-.314h-.295l.008.296s.304.053.34.243l-.113.108c.003-.003-.325-.494-1.041.15z"
      fill="#FDDC01"
      stroke="#000"
      strokeWidth={0.224}
      strokeMiterlimit={10}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsRainbow =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconESportsRainbow;

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
      d="M7 10.662h-.5.5zM7 22h.5H7zm14.338 3v-.5.5zM10 25v.5-.5zm3.668-16.838a.5.5 0 000-1v1zM10 7.662v.5-.5zm14.838 10.67a.5.5 0 00-1 0h1zm-.5 3.668h.5-.5zm-10.356-4.689a.5.5 0 00.707.707l-.707-.707zm10.71-9.295a.5.5 0 10-.708-.707l.707.707zm-5.688-.854a.5.5 0 10-.002 1l.002-1zm5.333.51h.5a.5.5 0 00-.499-.5v.5zm-.5 5.325a.5.5 0 001 0h-1zM6.5 10.662V22h1V10.662h-1zM21.338 24.5H10v1h11.338v-1zm-7.67-17.338H10v1h3.668v-1zm10.17 11.17V22h1v-3.668h-1zM7.5 10.662a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM6.5 22a3.5 3.5 0 003.5 3.5v-1A2.5 2.5 0 017.5 22h-1zm14.838 3.5a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zm-6.65-7.482L24.692 8.016l-.707-.707L13.982 17.31l.707.707zm4.314-9.856l5.335.01.001-1-5.334-.01-.002 1zm4.835-.49v5.325h1V7.672h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesExternalLink =
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
export default FilesExternalLink;

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
      d="M8.5 11.615l-.349-.358a.5.5 0 00-.151.358h.5zM13.75 6.5V6a.5.5 0 00-.349.142l.349.358zm9.75 2.923H23h.5zm0 13.154h.5-.5zm-15 0H9h-.5zm6-10.23v.5a.5.5 0 00.5-.5h-.5zm-6 0H8h.5zm3.75 5.845l-.349-.358a.5.5 0 000 .716l.349-.358zm2.599-1.834a.5.5 0 10-.698-.716l.698.716zm-.698 4.385a.5.5 0 10.698-.716l-.698.716zm5.599-1.09l.349.359a.5.5 0 000-.716l-.349.358zm-1.901-2.55a.5.5 0 10-.698.717l.698-.717zm-.698 4.385a.5.5 0 00.698.716l-.698-.716zM8.85 11.974l5.25-5.116-.698-.716-5.25 5.115.698.716zM11.5 26h9v-1h-9v1zM23 9.423v13.154h1V9.423h-1zM11.5 25C10.107 25 9 23.903 9 22.577H8C8 24.48 9.58 26 11.5 26v-1zm9 1c1.92 0 3.5-1.52 3.5-3.423h-1C23 23.903 21.893 25 20.5 25v1zm0-19C21.893 7 23 8.097 23 9.423h1C24 7.52 22.42 6 20.5 6v1zm-6.75 0h.75V6h-.75v1zm.75 0h6V6h-6v1zM8 11.615v.731h1v-.73H8zm0 .731v10.23h1v-10.23H8zM14 6.5v5.846h1V6.5h-1zm.5 5.346h-6v1h6v-1zm-1.901 6.704l2.25-2.192-.698-.716-2.25 2.192.698.716zm-.698 0l2.25 2.193.698-.716-2.25-2.193-.698.716zm8.198.746l-2.25-2.193-.698.717 2.25 2.192.698-.716zm-.698 0l-2.25 2.192.698.716 2.25-2.192-.698-.716z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesCode =
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
export default FilesCode;

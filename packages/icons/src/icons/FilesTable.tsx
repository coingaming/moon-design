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
      d="M8.5 11.615l-.349-.358-.151.148v.21h.5zM13.75 6.5V6h-.203l-.146.142.349.358zm9.75 2.923H23h.5zm0 13.154h.5-.5zm-15 0H9h-.5zm6-10.23v.5h.5v-.5h-.5zm-6 0H8h.5zm.349-.373l5.25-5.116-.698-.716-5.25 5.115.698.716zM11.5 26h9v-1h-9v1zM23 9.423v13.154h1V9.423h-1zM11.5 25C10.107 25 9 23.903 9 22.577H8C8 24.48 9.58 26 11.5 26v-1zm9 1c1.92 0 3.5-1.52 3.5-3.423h-1C23 23.903 21.893 25 20.5 25v1zm0-19C21.893 7 23 8.097 23 9.423h1C24 7.52 22.42 6 20.5 6v1zm-6.75 0h.75V6h-.75v1zm.75 0h6V6h-6v1zM8 11.615v.731h1v-.73H8zm0 .731v10.23h1v-10.23H8zM14 6.5v5.846h1V6.5h-1zm.5 5.346h-6v1h6v-1zm-2 3.923H16v-1h-3.5v1zm3.5 0h3.5v-1H16v1zm-3.5 7.308H16v-1h-3.5v1zm3.5 0h3.5v-1H16v1zm-.5-7.808v3.654h1V15.27h-1zm0 3.654v3.654h1v-3.654h-1zm5.5 2.654v-2.654h-1v2.654h1zm0-2.654V16.27h-1v2.654h1zM11 16.27v2.654h1V16.27h-1zm0 2.654v2.654h1v-2.654h-1zm9.5-.5H16v1h4.5v-1zm-4.5 0h-4.5v1H16v-1zm3.5 4.654a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-7-1a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5v-1zm7-6.308a.5.5 0 01.5.5h1a1.5 1.5 0 00-1.5-1.5v1zm-7-1a1.5 1.5 0 00-1.5 1.5h1a.5.5 0 01.5-.5v-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesTable =
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
export default FilesTable;

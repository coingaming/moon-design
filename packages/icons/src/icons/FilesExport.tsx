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
      d="M8.5 11.615l-.349-.358a.5.5 0 00-.151.358h.5zM13.75 6.5V6a.5.5 0 00-.349.142l.349.358zM8.5 22.577H9h-.5zm15.5 0a.5.5 0 00-1 0h1zm-.5-13.154H23h.5zm-15 2.923H8h.5zm6 0v.5a.5.5 0 00.5-.5h-.5zm8.5 0a.5.5 0 001 0h-1zm-.25 5.616a.5.5 0 100-1v1zm-8.25-.5l-.349-.359a.5.5 0 000 .717l.349-.358zm3.349-2.565a.5.5 0 00-.698-.717l.698.717zm-.698 5.846a.5.5 0 10.698-.716l-.698.716zm-8.302-8.77l5.25-5.115-.698-.716-5.25 5.115.698.716zM11.5 26h9v-1h-9v1zm0-1C10.107 25 9 23.903 9 22.577H8C8 24.48 9.58 26 11.5 26v-1zm9 1c1.92 0 3.5-1.52 3.5-3.423h-1C23 23.903 21.893 25 20.5 25v1zm0-19C21.893 7 23 8.097 23 9.423h1C24 7.52 22.42 6 20.5 6v1zm-6.75 0h.75V6h-.75v1zm.75 0h6V6h-6v1zM8 11.615v.731h1v-.73H8zm0 .731v10.23h1v-10.23H8zM14 6.5v5.846h1V6.5h-1zm.5 5.346h-6v1h6v-1zM23 9.423v2.923h1V9.423h-1zm-.25 7.539H14.5v1h8.25v-1zm-7.901.858l3-2.923-.698-.717-3 2.923.698.717zm-.698 0l3 2.923.698-.716-3-2.924-.698.717z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesExport =
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
export default FilesExport;

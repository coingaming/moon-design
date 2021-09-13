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
      d="M8.692 11.615l-.353-.353-.147.146v.207h.5zM13.808 6.5V6H13.6l-.147.146.354.354zm9.5 2.923h-.5.5zm0 9.5v.5h.5v-.5h-.5zm-14.616 0h-.5v.5h.5v-.5zm5.847-6.577v.5h.5v-.5h-.5zM6.5 18.423a.5.5 0 000 1v-1zm19 1a.5.5 0 000-1v1zM9.654 23.308a.5.5 0 101 0h-1zm1-1.462a.5.5 0 00-1 0h1zm2.654 3.654a.5.5 0 101 0h-1zm1-3.654a.5.5 0 10-1 0h1zm2.654 1.462a.5.5 0 101 0h-1zm1-1.462a.5.5 0 10-1 0h1zm2.653 3.654a.5.5 0 101 0h-1zm1-3.654a.5.5 0 10-1 0h1zM9.045 11.97l5.116-5.115-.707-.708-5.115 5.116.707.707zm13.763-2.546v9.5h1v-9.5h-1zM20.385 7a2.423 2.423 0 012.423 2.423h1A3.423 3.423 0 0020.385 6v1zm-6.577 0h.73V6h-.73v1zm.73 0h5.847V6h-5.847v1zm-6.346 4.615v.731h1v-.73h-1zm0 .731v6.577h1v-6.577h-1zM14.04 6.5v5.846h1V6.5h-1zm.5 5.346H8.692v1h5.847v-1zm-5.847 7.577h14.616v-1H8.692v1zm-2.192 0h19v-1h-19v1zm4.154 3.885v-1.462h-1v1.462h1zm3.654 2.192v-3.654h-1V25.5h1zm3.654-2.192v-1.462h-1v1.462h1zm3.653 2.192v-3.654h-1V25.5h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesDelete =
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
export default FilesDelete;

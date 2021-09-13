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
      d="M7.23 11.885h-.5.5zm0 9.615h.5-.5zm13.54 4v.5-.5zm-9.54 0V25v.5zm13.54-13.615h-.5.5zm0 9.615h.5-.5zm-1-10.615v.5-.5zm-15.54 0v-.5.5zM6.5 8.5H6h.5zm0 .385H7h-.5zm17 2v-.5.5zm-15 0v.5-.5zm17-2.385H25h.5zm0 .385h.5-.5zm-2-2.385V7v-.5zm-15 0V6v.5zm9.692 9.27a.5.5 0 100-1v1zm-4.384-1a.5.5 0 100 1v-1zM6.73 11.884V21.5h1v-9.615h-1zM20.769 25h-9.538v1h9.538v-1zm3.5-13.115V21.5h1v-9.615h-1zm-.5-1.5H8.231v1h15.538v-1zm1.5 1.5a1.5 1.5 0 00-1.5-1.5v1a.5.5 0 01.5.5h1zm-17.538 0a.5.5 0 01.5-.5v-1a1.5 1.5 0 00-1.5 1.5h1zm-1 9.615a4.5 4.5 0 004.5 4.5v-1a3.5 3.5 0 01-3.5-3.5h-1zM20.769 26a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1zM6 8.5v.385h1V8.5H6zm17.5 1.885h-15v1h15v-1zM25 8.5v.385h1V8.5h-1zM23.5 6h-15v1h15V6zM26 8.5A2.5 2.5 0 0023.5 6v1A1.5 1.5 0 0125 8.5h1zm-19 0A1.5 1.5 0 018.5 7V6A2.5 2.5 0 006 8.5h1zm-1 .385a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5H6zm17.5 2.5a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zm-5.308 3.384h-4.384v1h4.384v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailBox =
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
export default MailBox;

import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 12.423H6h.5zm0 10.077H7h-.5zm16 3V25v.5zm-13 0v.5-.5zm16-13.077H25h.5zm0 10.077h.5-.5zm-3-13.077v.5-.5zm-13 0v-.5.5zM17.462 6.5V6v.5zm-2.923 0V7v-.5zM6 12.423V22.5h1V12.423H6zM22.5 25h-13v1h13v-1zM25 12.423V22.5h1V12.423h-1zm-2.5-3.5h-13v1h13v-1zm3.5 3.5a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zm-19 0a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM6 22.5A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zm-8.692-9.77H6.5v1h7.308v-1zm11.692 0h-7.308v1H25.5v-1zM17.462 6h-2.923v1h2.923V6zm3.423 3.423A3.423 3.423 0 0017.462 6v1a2.423 2.423 0 012.423 2.423h1zm-8.77 0A2.423 2.423 0 0114.54 7V6a3.423 3.423 0 00-3.424 3.423h1zm5.577 8.039c0 .934-.757 1.692-1.692 1.692v1a2.692 2.692 0 002.692-2.692h-1zM16 19.154a1.692 1.692 0 01-1.692-1.692h-1A2.692 2.692 0 0016 20.154v-1zm-1.692-1.692c0-.935.757-1.693 1.692-1.693v-1a2.692 2.692 0 00-2.692 2.693h1zM16 15.769c.935 0 1.692.758 1.692 1.693h1A2.692 2.692 0 0016 14.769v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesCase =
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
export default FilesCase;

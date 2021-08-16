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
      d="M23.5 10.692H23h.5zm0 12.808h.5-.5zm-13 2v.5-.5zm11 0V25v.5zm-13-14.808H9h-.5zm0 12.808H8h.5zm12-15.308a.5.5 0 000 1v-1zm-9 1a.5.5 0 000-1v1zm3.335-2.151l.384.32-.384-.32zm2.33 0l-.384.32.384-.32zM23 10.692V23.5h1V10.692h-1zM10.5 26h11v-1h-11v1zM8 10.692V23.5h1V10.692H8zm12.5-1.5h1v-1h-1v1zm-10 0h1v-1h-1v1zm-1.5 1.5a1.5 1.5 0 011.5-1.5v-1a2.5 2.5 0 00-2.5 2.5h1zM10.5 25A1.5 1.5 0 019 23.5H8a2.5 2.5 0 002.5 2.5v-1zM23 23.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm1-12.808a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zM16 7c.318 0 .599.142.78.36l.769-.64A2.012 2.012 0 0016 6v1zm-.78.36c.181-.218.462-.36.78-.36V6c-.622 0-1.181.28-1.549.72l.768.64zM12.5 8.463h1v-1h-1v1zM12 9.885v-.923h-1v.923h1zm7.5.5h-7v1h7v-1zm.5-1.423v.923h1v-.923h-1zm-1.5-.5h1v-1h-1v1zm2.5.5a1.5 1.5 0 00-1.5-1.5v1a.5.5 0 01.5.5h1zm-1.5 2.423a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-8.5-1.5a1.5 1.5 0 001.5 1.5v-1a.5.5 0 01-.5-.5h-1zm1.5-2.423a1.5 1.5 0 00-1.5 1.5h1a.5.5 0 01.5-.5v-1zm1.951-.742c-.18.216-.346.409-.522.55-.173.14-.31.192-.429.192v1c.434 0 .787-.197 1.055-.412.265-.213.49-.48.664-.69l-.768-.64zm2.33.64c.174.21.399.477.664.69.268.215.621.412 1.055.412v-1c-.119 0-.256-.053-.429-.192a3.957 3.957 0 01-.522-.55l-.768.64z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesClipboard =
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
export default FilesClipboard;

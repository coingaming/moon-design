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
      d="M10.154 22.577v.5-.5zm0-7.308v.5-.5zm.192 7.308v.5-.5zm0-7.308v.5-.5zm11.5 7.308v.5-.5zm0-7.308v.5-.5zm-.192 7.308v.5-.5zm0-7.308v.5-.5zm1.323 7.608a.5.5 0 00-.8-.6l.8.6zM21.285 24.3l-.4-.3.4.3zM16 25a.5.5 0 000 1v-1zM9.192 13.681C9.192 10 12.232 7 16 7V6c-4.304 0-7.808 3.43-7.808 7.681h1zM16 7c3.768 0 6.808 3 6.808 6.681h1C23.808 9.431 20.304 6 16 6v1zm6.808 6.681v2.035h1V13.68h-1zm-14.616 0v2.035h1V13.68h-1zm1.962 8.396A3.154 3.154 0 017 18.923H6a4.154 4.154 0 004.154 4.154v-1zM7 18.923a3.154 3.154 0 013.154-3.154v-1A4.154 4.154 0 006 18.923h1zm3.154-3.154h.192v-1h-.192v1zm1.692 1.5v3.308h1v-3.308h-1zm-1.5 4.808h-.192v1h.192v-1zm1.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zm-1.5-4.808a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm11.5 7.308A4.154 4.154 0 0026 18.923h-1a3.154 3.154 0 01-3.154 3.154v1zM26 18.923a4.154 4.154 0 00-4.154-4.154v1A3.154 3.154 0 0125 18.923h1zm-4.154-4.154h-.192v1h.192v-1zm-2.692 2.5v3.308h1v-3.308h-1zm2.5 5.808h.192v-1h-.192v1zm-2.5-2.5a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5h-1zm2.5-5.808a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5v-1zm.523 7.508L20.885 24l.8.6 1.292-1.723-.8-.6zM18.885 25H16v1h2.885v-1zm2-1a2.5 2.5 0 01-2 1v1a3.5 3.5 0 002.8-1.4l-.8-.6z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaHeadphones =
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
export default MediaHeadphones;

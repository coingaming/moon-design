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
      d="M21.5 6.5V6v.5zm-11 0V7v-.5zm-4 15H7h-.5zm0-11H6h.5zm15 15V25v.5zm-11 0v.5-.5zm15-4H25h.5zm0-11h.5-.5zm-14.646 2.625a.5.5 0 100 1v-1zm3.959 1a.5.5 0 000-1v1zm-2.48 4.25a.5.5 0 001 0h-1zm4.92-4.942a.5.5 0 10-.923.384l.923-.384zm1.518 4.942l-.462.192a.5.5 0 00.923 0l-.461-.192zm2.44-4.558a.5.5 0 10-.922-.384l.922.384zM21.5 6h-11v1h11V6zM7 21.5v-11H6v11h1zM21.5 25h-11v1h11v-1zm4.5-3.5v-11h-1v11h1zM21.5 26a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1zm0-19a3.5 3.5 0 013.5 3.5h1A4.5 4.5 0 0021.5 6v1zm-11-1A4.5 4.5 0 006 10.5h1A3.5 3.5 0 0110.5 7V6zM6 21.5a4.5 4.5 0 004.5 4.5v-1A3.5 3.5 0 017 21.5H6zm4.854-7.375h1.98v-1h-1.98v1zm1.98 0h1.979v-1h-1.98v1zm-.5-.5v4.75h1v-4.75h-1zm3.996.192l1.98 4.75.922-.384-1.979-4.75-.923.384zm2.902 4.75l1.98-4.75-.924-.384-1.979 4.75.923.384z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesTvBox =
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
export default DevicesTvBox;

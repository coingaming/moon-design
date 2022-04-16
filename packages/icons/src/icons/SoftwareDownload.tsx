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
      d="M16.5 15.27a.5.5 0 00-1 0h1zM16 25.5l-.354.354a.5.5 0 00.708 0L16 25.5zm4.007-3.3a.5.5 0 10-.707-.707l.707.707zm-7.307-.707a.5.5 0 10-.707.707l.707-.707zm-1.76-3.534a.5.5 0 00-.11-.994l.11.994zm-1.152-7.074l.002-.5h-.002v.5zm.01 0l-.002.5h.355l.118-.334-.472-.166zm12.095-.73l-.447.222.136.273.305.004.006-.5zm-1.508 6.807a.5.5 0 000 1v-1zM15.5 15.269V25.5h1V15.27h-1zm3.8 6.224l-3.654 3.653.708.708 3.653-3.654-.707-.707zm-2.946 3.653L12.7 21.493l-.707.707 3.653 3.654.708-.708zm-5.524-8.181a25.734 25.734 0 01-.488.002l-.554-.005v1l.546.005h.35c.087 0 .194-.002.256-.008l-.11-.994zm-1.042-.003A2.788 2.788 0 017 14.173H6a3.788 3.788 0 003.788 3.789v-1zM7 14.173a2.788 2.788 0 012.788-2.788v-1A3.788 3.788 0 006 14.173h1zm2.787-2.788h.009l.003-1h-.01l-.002 1zm.482-.334A6.08 6.08 0 0116 7V6a7.08 7.08 0 00-6.674 4.718l.943.333zM16 7a6.077 6.077 0 015.446 3.377l.895-.445A7.077 7.077 0 0016 6v1zm5.887 3.654A3.154 3.154 0 0125 13.808h1a4.154 4.154 0 00-4.1-4.154l-.013 1zM25 13.808a3.154 3.154 0 01-3.154 3.154v1A4.154 4.154 0 0026 13.808h-1zm-3.154 3.154h-1.461v1h1.461v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareDownload =
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
export default SoftwareDownload;

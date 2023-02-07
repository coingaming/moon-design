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
      d="M15.5 19a.5.5 0 101 0h-1zM16 4l.332-.373a.5.5 0 00-.665 0L16 4zm-4.375 3.227a.5.5 0 10.665.746l-.665-.746zm8.084.746a.5.5 0 00.666-.746l-.666.746zM12.16 11.5a.5.5 0 100-1v1zm7.68-1a.5.5 0 100 1v-1zM16.5 19V4h-1v15h1zM12.29 7.973l4.043-3.6-.666-.746-4.042 3.6.665.746zm3.377-3.6l4.042 3.6.666-.746-4.043-3.6-.665.746zm9.433 8.341v13.572h1V12.714h-1zM23.886 27.5H8.114v1h15.772v-1zM6.9 26.286V12.714h-1v13.572h1zM8.114 11.5h4.046v-1H8.114v1zm11.726 0h4.046v-1H19.84v1zm-11.726 16c-.67 0-1.214-.544-1.214-1.214h-1c0 1.223.991 2.214 2.214 2.214v-1zM25.1 26.286c0 .67-.544 1.214-1.214 1.214v1a2.214 2.214 0 002.214-2.214h-1zm1-13.572a2.214 2.214 0 00-2.214-2.214v1c.67 0 1.214.544 1.214 1.214h1zm-19.2 0c0-.67.544-1.214 1.214-1.214v-1A2.214 2.214 0 005.9 12.714h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericShareIosBig =
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
export default GenericShareIosBig;

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
      d="M19.425 23.103a.5.5 0 10-.421-.907l.42.907zm3.46-3.907a.5.5 0 10.769.64l-.77-.64zm-12.396-5.025a.5.5 0 10-.59-.808l.59.808zm5.165 5.69a.5.5 0 100-1v1zm-3.308-4.277a.5.5 0 00-1 0h1zm6.616 0a.5.5 0 101 0h-1zm5.72-3.391a.5.5 0 10.637-.77l-.638.77zM12.404 8.365a.5.5 0 10.267.963l-.267-.963zm-5.724 3.057a.5.5 0 00.638.77l-.638-.77zm1.36.205a.5.5 0 00-.594-.804l.595.804zm-.686-4.979a.5.5 0 00-.71.704l.71-.704zM23.36 24.227a.5.5 0 10.71-.704l-.71.704zm-7.705-1.245c-2.23 0-4.283-1.09-5.798-2.358a10.786 10.786 0 01-1.771-1.862 4.963 4.963 0 01-.458-.743c-.105-.22-.127-.34-.127-.374h-1c0 .261.1.545.225.806.132.275.32.58.55.899.464.638 1.127 1.36 1.939 2.04 1.617 1.355 3.89 2.592 6.44 2.592v-1zm0-10.675c2.23 0 4.283 1.09 5.798 2.359a10.787 10.787 0 011.771 1.862c.207.284.36.536.458.743.105.22.127.34.127.374h1c0-.261-.1-.546-.225-.807a5.948 5.948 0 00-.55-.898 11.783 11.783 0 00-1.939-2.04c-1.617-1.355-3.89-2.593-6.44-2.593v1zm3.35 9.89c-1.034.48-2.168.785-3.35.785v1c1.356 0 2.633-.35 3.77-.879l-.42-.907zm4.804-4.552c0 .051-.04.226-.21.534a6.699 6.699 0 01-.713 1.017l.769.64a7.68 7.68 0 00.821-1.176c.184-.335.333-.698.333-1.015h-1zm-16.308 0c0-.043.03-.192.17-.459.128-.25.326-.554.59-.89a11.489 11.489 0 012.229-2.125l-.59-.808a12.485 12.485 0 00-2.426 2.316 6.887 6.887 0 00-.692 1.047c-.156.3-.28.627-.28.919h1zm8.154 1.217c-1.83 0-3.308-1.471-3.308-3.277h-1c0 2.366 1.933 4.277 4.308 4.277v-1zm0-6.555c1.83 0 3.308 1.471 3.308 3.277h1c0-2.365-1.933-4.277-4.308-4.277v1zM16 8.874c3.154 0 6.121 1.2 8.681 3.319l.638-.77C22.607 9.177 19.42 7.872 16 7.872v1zm-3.328.454A12.424 12.424 0 0116 8.874v-1c-1.23 0-2.433.169-3.595.49l.267.964zM7.32 12.193a16.7 16.7 0 01.723-.566l-.595-.804c-.259.191-.514.391-.766.6l.638.77zm-.674-4.841l16.714 16.875.71-.704L7.355 6.648l-.71.704z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ControlsEyeCrossed =
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
export default ControlsEyeCrossed;

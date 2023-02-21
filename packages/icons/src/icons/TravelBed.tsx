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
      d="M24.3 13.517a.5.5 0 101 0h-1zm-17.6 0a.5.5 0 101 0h-1zm1 8.276a.5.5 0 00-1 0h1zM6.7 24a.5.5 0 001 0h-1zm18.6-2.207a.5.5 0 00-1 0h1zM24.3 24a.5.5 0 001 0h-1zM9.45 13.517a.5.5 0 101 0h-1zm4.4 0a.5.5 0 101 0h-1zm3.3 0a.5.5 0 101 0h-1zm4.4 0a.5.5 0 101 0h-1zM6.1 16.224h19.8v-1H6.1v1zm20.4.604v3.31h1v-3.31h-1zm-.6 3.913H6.1v1h19.8v-1zm-20.4-.603v-3.31h-1v3.31h1zm.6.603c-.33 0-.6-.268-.6-.603h-1c0 .884.715 1.603 1.6 1.603v-1zm20.4-.603c0 .335-.27.603-.6.603v1c.885 0 1.6-.719 1.6-1.603h-1zm-.6-3.914c.33 0 .6.269.6.604h1c0-.884-.715-1.604-1.6-1.604v1zm-19.8-1c-.885 0-1.6.72-1.6 1.604h1c0-.335.27-.604.6-.604v-1zM9.4 8.5h13.2v-1H9.4v1zm14.9 1.707v3.31h1v-3.31h-1zm-16.6 3.31v-3.31h-1v3.31h1zM22.6 8.5c.937 0 1.7.763 1.7 1.707h1A2.703 2.703 0 0022.6 7.5v1zm-13.2-1a2.703 2.703 0 00-2.7 2.707h1c0-.944.763-1.707 1.7-1.707v-1zM6.7 21.793V24h1v-2.207h-1zm17.6 0V24h1v-2.207h-1zm-13.85-8.276v-1.655h-1v1.655h1zm.6-2.258h2.2v-1h-2.2v1zm2.8.603v1.655h1v-1.655h-1zm-.6-.603c.33 0 .6.268.6.603h1c0-.884-.715-1.603-1.6-1.603v1zm-2.8.603c0-.335.27-.603.6-.603v-1c-.885 0-1.6.719-1.6 1.603h1zm7.7 1.655v-1.655h-1v1.655h1zm.6-2.258h2.2v-1h-2.2v1zm2.8.603v1.655h1v-1.655h-1zm-.6-.603c.33 0 .6.268.6.603h1c0-.884-.715-1.603-1.6-1.603v1zm-2.8.603c0-.335.27-.603.6-.603v-1c-.885 0-1.6.719-1.6 1.603h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelBed =
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
export default TravelBed;

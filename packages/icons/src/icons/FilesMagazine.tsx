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
      d="M6.53 9.084l.5.001-.5-.001zM6.502 21.47l.5.001-.5-.001zm16.49-14.313l-.127-.483.127.483zm-6.2 1.625l.128.484-.127-.484zm7.213 14.628l-.126-.484.127.484zm-7.23 1.892l.126.483-.127-.483zM15.274 8.783l.126-.484-.126.484zm-6.24-1.63l.126-.484-.126.484zm6.224 18.15l-.126.483.126-.484zm-7.26-1.894l.126-.483-.126.483zM16.5 9.423a.5.5 0 10-1 0h1zm-1 15.346a.5.5 0 101 0h-1zM25 9.092v12.383h1V9.092h-1zm-18.97-.01L6.002 21.47l1 .002.026-12.386-1-.002zm16.836-2.408l-6.199 1.625.253.967 6.2-1.625-.254-.967zm1.014 16.252l-7.231 1.892.253.967 7.231-1.892-.253-.967zM15.4 8.299l-6.24-1.63-.253.968 6.24 1.63.253-.968zm-.016 16.52l-7.26-1.893-.252.967 7.26 1.893.252-.968zm1.282-16.52a2.5 2.5 0 01-1.266 0l-.252.968a3.5 3.5 0 001.772-.001l-.254-.967zm-.018 16.519a2.5 2.5 0 01-1.264 0l-.252.968a3.5 3.5 0 001.769 0l-.253-.968zM7.029 9.085a1.5 1.5 0 011.88-1.448l.252-.968a2.5 2.5 0 00-3.132 2.414l1 .002zM6.003 21.469a2.5 2.5 0 001.87 2.424l.252-.968a1.5 1.5 0 01-1.122-1.454l-1-.002zM25 21.475a1.5 1.5 0 01-1.12 1.45l.253.968A2.5 2.5 0 0026 21.475h-1zm1-12.383a2.5 2.5 0 00-3.134-2.418l.254.967A1.5 1.5 0 0125 9.09h1zm-10.5.331V24.77h1V9.423h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesMagazine =
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
export default FilesMagazine;

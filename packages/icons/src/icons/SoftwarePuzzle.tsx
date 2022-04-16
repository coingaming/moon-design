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
      d="M25.5 23.827H25h.5zm0-11.479H25h.5zM23.853 25a.5.5 0 100 1v-1zm-11.596.5v.5-.5zm3.286 0v.5a.5.5 0 00.5-.5h-.5zm4.933 0h-.5a.5.5 0 00.5.5v-.5zm-9.365-1.67v-1.566h-1v1.566h1zm-2.145-3.737c-1.078 0-1.966-.89-1.966-2.005H6c0 1.652 1.32 3.005 2.966 3.005v-1zM7 18.088c0-1.115.888-2.006 1.966-2.006v-1C7.321 15.082 6 16.436 6 18.088h1zm9.043-9.083C16.043 7.89 16.931 7 18.01 7V6c-1.646 0-2.967 1.353-2.967 3.005h1zM18.01 7c1.078 0 1.966.89 1.966 2.005h1C20.976 7.353 19.656 6 18.01 6v1zm-4.111 3.176h-1.644v1h1.644v-1zm8.221 1h1.736v-1H22.12v1zm-11.01 2.736v-1.566h-1v1.566h1zM26 23.827V12.348h-1v11.48h1zM12.255 10.176c-1.192 0-2.144.98-2.144 2.17h1c0-.654.52-1.17 1.144-1.17v-1zm11.6 1A1.16 1.16 0 0125 12.348h1c0-1.19-.952-2.172-2.144-2.172v1zM8.967 16.082c1.192 0 2.145-.979 2.145-2.17h-1c0 .654-.52 1.17-1.145 1.17v1zm11.01-7.077c0 1.192.953 2.17 2.144 2.17v-1a1.157 1.157 0 01-1.144-1.17h-1zm-8.865 13.259c0-1.191-.953-2.17-2.145-2.17v1c.625 0 1.145.516 1.145 1.17h1zm3.932-13.258c0 .653-.52 1.17-1.144 1.17v1c1.192 0 2.144-.98 2.144-2.17h-1zM10.111 23.83c0 1.192.956 2.17 2.146 2.17v-1a1.16 1.16 0 01-1.146-1.17h-1zm5.932 0c0-1.115.888-2.006 1.967-2.006v-1c-1.646 0-2.967 1.353-2.967 3.006h1zm1.967-2.006c1.078 0 1.966.89 1.966 2.006h1c0-1.653-1.32-3.006-2.966-3.006v1zm1.966 2.006v1.67h1v-1.67h-1zm-4.933 0v1.67h1v-1.67h-1zM12.257 26h3.286v-1h-3.286v1zM25 23.827c0 .65-.518 1.168-1.138 1.173l.008 1c1.183-.01 2.13-.987 2.13-2.173h-1zM23.862 25h-.01v1h.018l-.008-1zm-3.386 1h3.39v-1h-3.39v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwarePuzzle =
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
export default SoftwarePuzzle;

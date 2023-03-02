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
      d="M20.522 15.914L15.56 8.468a1.131 1.131 0 00-1.336-.387l-5.652 2.26a1.13 1.13 0 10.84 2.1l4.554-1.822 1.536 2.609-4.249 2.684M29 18.875c-.528.478-1.248 1.04-2.601 1.04s-2.073-.562-2.599-1.037v-.004c-.526-.476-1.246-1.038-2.599-1.038-1.353 0-2.073.562-2.601 1.04-.528.479-1.248 1.04-2.601 1.04s-2.073-.561-2.599-1.037v-.004c-.526-.476-1.246-1.038-2.599-1.038-1.353 0-2.073.562-2.601 1.04-.528.479-1.248 1.04-2.601 1.04S3.526 19.357 3 18.88m26 3.115c-.528.478-1.248 1.04-2.601 1.04s-2.073-.562-2.599-1.038v-.003c-.526-.476-1.246-1.038-2.599-1.038-1.353 0-2.073.562-2.601 1.04-.528.479-1.248 1.04-2.601 1.04S13.926 22.475 13.4 22v-.004c-.526-.476-1.246-1.038-2.599-1.038-1.353 0-2.073.562-2.601 1.04-.528.479-1.248 1.04-2.601 1.04S3.526 22.477 3 22m22.948-10.608a2.826 2.826 0 11-5.652 0 2.826 2.826 0 015.652 0z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSwimming =
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
export default SportSwimming;

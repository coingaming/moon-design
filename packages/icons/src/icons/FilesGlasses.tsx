import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.423 9.423l.486.118.002-.01.002-.01-.49-.098zM12.346 7a.5.5 0 000-1v1zM6.014 21.363a.5.5 0 10.972.236l-.972-.236zm16.563-11.94l-.49.098.002.01.002.01.486-.118zM19.654 6a.5.5 0 000 1V6zm5.36 15.599a.5.5 0 10.972-.236l-.972.236zm-11.706.247A3.154 3.154 0 0110.154 25v1a4.154 4.154 0 004.154-4.154h-1zM10.154 25A3.154 3.154 0 017 21.846H6A4.154 4.154 0 0010.154 26v-1zM7 21.846a3.154 3.154 0 013.154-3.154v-1A4.154 4.154 0 006 21.846h1zm3.154-3.154a3.154 3.154 0 013.154 3.154h1a4.154 4.154 0 00-4.154-4.154v1zM25 21.846A3.154 3.154 0 0121.846 25v1A4.154 4.154 0 0026 21.846h-1zM21.846 25a3.154 3.154 0 01-3.154-3.154h-1A4.154 4.154 0 0021.846 26v-1zm-3.154-3.154a3.154 3.154 0 013.154-3.154v-1a4.154 4.154 0 00-4.154 4.154h1zm3.154-3.154A3.154 3.154 0 0125 21.846h1a4.154 4.154 0 00-4.154-4.154v1zm-3.654 2.654h-4.384v1h4.384v-1zM9.913 9.521c.172-.858.469-1.488.864-1.898.382-.397.887-.623 1.57-.623V6c-.933 0-1.707.322-2.291.93-.572.594-.93 1.426-1.123 2.395l.98.196zm-.976-.216L6.014 21.363l.972.236L9.909 9.54l-.972-.236zm14.13.02c-.194-.969-.55-1.8-1.123-2.395-.584-.608-1.357-.93-2.29-.93v1c.682 0 1.187.226 1.57.623.394.41.691 1.04.863 1.898l.98-.196zm-.976.216l2.923 12.058.972-.236-2.923-12.058-.972.236z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesGlasses =
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
export default FilesGlasses;

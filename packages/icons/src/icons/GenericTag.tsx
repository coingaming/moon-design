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
      d="M15.042 6.5V7v-.5zm-7.065 0V7v-.5zM6.5 7.968H7h-.5zm0 7.028H6h.5zm9.078-8.266l-.362.344.362-.344zm9.114 9.575l-.362.345.362-.345zm-.057 4.094l-.353-.355.353.355zm-4.267 4.241l.353.355-.352-.355zM6.726 15.524l-.347.36.347-.36zm9.5 9.149l-.347.36.347-.36zM15.042 7H7.977V6h7.065v1zM7 7.968v7.028H6V7.968h1zm8.94-1.583l9.114 9.576-.724.69-9.114-9.577.725-.69zm9.048 14.368l-4.267 4.242-.705-.71 4.267-4.24.704.708zM7.07 15.163l9.501 9.15-.693.72-9.501-9.15.693-.72zm13.65 9.832a3.466 3.466 0 01-4.842.038l.693-.72a2.466 2.466 0 003.444-.027l.705.709zm4.333-9.034a3.423 3.423 0 01-.066 4.792l-.706-.709a2.423 2.423 0 00.048-3.394l.724-.69zM7.977 7A.972.972 0 007 7.968H6C6 6.878 6.888 6 7.977 6v1zm7.065-1c.34 0 .664.139.899.385l-.725.69A.24.24 0 0015.042 7V6zM7 14.996c0 .063.025.123.071.167l-.693.72A1.232 1.232 0 016 14.997h1zm5.645-3.725c0-.735-.6-1.335-1.346-1.335v-1a2.34 2.34 0 012.346 2.335h-1zm-1.346-1.335c-.746 0-1.346.6-1.346 1.335h-1A2.34 2.34 0 0111.3 8.936v1zM9.953 11.27c0 .734.6 1.334 1.346 1.334v1a2.34 2.34 0 01-2.346-2.334h1zm1.346 1.334c.746 0 1.346-.6 1.346-1.334h1a2.34 2.34 0 01-2.346 2.334v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericTag =
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
export default GenericTag;

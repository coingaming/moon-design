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
      d="M9.423 25.5v.5-.5zM6.5 22.577H7h-.5zm0-13.154H6h.5zm19 0H25h.5zm-5.846 10.23v-.5a.5.5 0 00-.5.5h.5zm0 5.847v.5a.5.5 0 00.5-.5h-.5zm5.33-4.599l.353.354-.354-.354zm-.354-.353l-4.082 4.082.707.707 4.082-4.082-.707-.707zM22.577 6H9.423v1h13.154V6zM7 22.577V9.423H6v13.154h1zM22.577 7A2.423 2.423 0 0125 9.423h1A3.423 3.423 0 0022.577 6v1zM9.423 6A3.423 3.423 0 006 9.423h1A2.423 2.423 0 019.423 7V6zm0 19A2.423 2.423 0 017 22.577H6A3.423 3.423 0 009.423 26v-1zm10.23 0H9.424v1h10.23v-1zM26 19.654V9.424h-1v10.23h1zM20.154 25.5v-5.846h-1V25.5h1zm-.5-5.346H25.5v-1h-5.846v1zm.894 4.476c-.237.237-.559.37-.894.37v1c.6 0 1.176-.238 1.6-.663l-.706-.707zm4.789-3.375c.424-.425.663-1 .663-1.601h-1c0 .335-.133.657-.37.894l.707.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesSticker =
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
export default FilesSticker;

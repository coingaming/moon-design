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
      d="M15.563 25.583a.5.5 0 00.553.834l-.553-.834zm3.992-2.048l.03-.5a.5.5 0 00-.307.083l.277.417zm4.445.27l-.03.498a.5.5 0 00.502-.664l-.472.165zm-1.879-6.877a.5.5 0 10-.943.33l.943-.33zm-3.166 6.683a.5.5 0 10.946-.325l-.946.325zm-.399-4.25a.5.5 0 10-.946.325l.946-.325zm-3.077 7.047a.5.5 0 10.553-.834l-.553.834zm-3.034-2.613l.277-.416a.5.5 0 00-.307-.083l.03.5zM8 24.066l-.477-.149a.5.5 0 00.507.648L8 24.065zm2.853-7.487a.5.5 0 00-.955-.297l.955.297zm1.3 7.049a.5.5 0 00.965.262l-.965-.262zm2.188-4.24a.5.5 0 00-.965-.262l.965.263zm8.09-6.562c0 3.496-2.82 6.326-6.293 6.326v1c4.03 0 7.294-3.282 7.294-7.326h-1zm-6.293 6.326c-3.473 0-6.293-2.83-6.293-6.326h-1c0 4.044 3.263 7.326 7.293 7.326v-1zm-6.293-6.326c0-3.495 2.82-6.325 6.293-6.325v-1c-4.03 0-7.293 3.282-7.293 7.325h1zM16.138 6.5c3.474 0 6.294 2.83 6.294 6.325h1c0-4.043-3.263-7.325-7.294-7.325v1zm-2.37 6.325a.09.09 0 01.09-.088v1a.91.91 0 00.91-.912h-1zm.09-.088a.09.09 0 01.091.088h-1a.91.91 0 00.91.912v-1zm.091.088a.09.09 0 01-.09.089v-1a.91.91 0 00-.91.911h1zm-.09.089a.09.09 0 01-.091-.089h1a.91.91 0 00-.91-.911v1zm2.153-.089a.09.09 0 01.09-.088v1a.91.91 0 00.91-.912h-1zm.09-.088a.09.09 0 01.09.088h-1a.91.91 0 00.91.912v-1zm.09.088a.09.09 0 01-.09.089v-1a.91.91 0 00-.91.911h1zm-.09.089a.09.09 0 01-.09-.089h1a.91.91 0 00-.91-.911v1zm2.154-.089a.09.09 0 01.09-.088v1a.91.91 0 00.91-.912h-1zm.09-.088a.09.09 0 01.09.088h-1a.91.91 0 00.91.912v-1zm.09.088a.09.09 0 01-.09.089v-1a.91.91 0 00-.91.911h1zm-.09.089a.09.09 0 01-.09-.089h1a.91.91 0 00-.91-.911v1zm-2.23 13.503l3.715-2.466-.553-.833-3.715 2.465.553.834zm3.408-2.383l4.446.27.06-.999-4.445-.27-.06.999zm4.948-.395l-2.35-6.711-.944.33 2.35 6.712.944-.331zm-4.57-.353l-1.346-3.925-.946.325 1.345 3.925.946-.325zm-3.87 2.288l-3.31-2.195-.553.833 3.31 2.196.553-.834zm-3.617-2.278l-4.445.27.06.998 4.446-.27-.06-.998zm-3.938.918l2.376-7.636-.955-.297-2.375 7.635.954.297zm4.64-.325l1.224-4.501-.965-.263-1.223 4.502.965.262z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSpecials =
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
export default SportSpecials;

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
      d="M15.105 18.09l-.33-.375.33.375zm-4.944 4.365l.33.375-.33-.375zm0-12.91l.33-.375-.33.375zm4.944 4.365l-.33.375.33-.375zM6.5 20.365H6h.5zm0-8.73H7h-.5zm18.105 6.455l-.33-.375.33.375zm-4.944 4.365l-.331-.375.33.375zm0-12.91l.33-.375-.33.375zm4.944 4.365l-.33.375.33-.375zM16 20.365h-.5.5zm0-8.73h.5-.5zm-1.225 6.08L9.83 22.08l.662.75 4.944-4.365-.661-.75zM9.83 9.92l4.945 4.365.661-.75-4.944-4.365-.662.75zM7 20.365v-8.73H6v8.73h1zm8.436-1.9c1.419-1.252 1.419-3.678 0-4.93l-.661.75c.967.854.967 2.576 0 3.43l.661.75zM9.83 22.08c-.58.512-1.261.524-1.814.209C7.453 21.967 7 21.285 7 20.365H6c0 1.258.628 2.283 1.52 2.792.903.516 2.053.483 2.972-.328l-.662-.75zm.662-12.91c-.92-.81-2.069-.843-2.972-.327-.892.51-1.52 1.534-1.52 2.792h1c0-.92.453-1.602 1.016-1.924.553-.315 1.234-.303 1.814.21l.662-.75zm13.783 8.545L19.33 22.08l.662.75 4.944-4.365-.661-.75zM19.33 9.92l4.945 4.365.661-.75-4.944-4.365-.662.75zM16.5 20.365v-8.73h-1v8.73h1zm8.436-1.9c1.419-1.252 1.419-3.678 0-4.93l-.661.75c.967.854.967 2.576 0 3.43l.661.75zM19.33 22.08c-.58.512-1.261.524-1.814.209-.563-.322-1.016-1.004-1.016-1.924h-1c0 1.258.628 2.283 1.52 2.792.903.516 2.053.483 2.972-.328l-.662-.75zm.662-12.91c-.92-.81-2.069-.843-2.972-.327-.892.51-1.52 1.534-1.52 2.792h1c0-.92.453-1.602 1.016-1.924.553-.315 1.234-.303 1.814.21l.662-.75z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaFastForward =
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
export default MediaFastForward;

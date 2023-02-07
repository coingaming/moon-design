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
      d="M16.895 18.09l.33-.375-.33.375zm4.944 4.365l-.33.375.33-.375zm0-12.91l-.33-.375.33.375zm-4.944 4.365l.33.375-.33-.375zm8.605 6.455h.5-.5zm0-8.73H25h.5zM7.395 18.09l.33-.375-.33.375zm4.944 4.365l.331-.375-.33.375zm0-12.91l-.33-.375.33.375zM7.395 13.91l.33.375-.33-.375zM16 20.365h.5-.5zm0-8.73h-.5.5zm.564 6.83l4.944 4.364.662-.75-4.945-4.364-.661.75zm4.944-9.295l-4.944 4.365.661.75L22.17 9.92l-.662-.75zM26 20.365v-8.73h-1v8.73h1zm-8.775-2.65c-.967-.854-.967-2.576 0-3.43l-.661-.75c-1.419 1.252-1.419 3.678 0 4.93l.661-.75zm4.283 5.114c.92.811 2.069.844 2.972.328.892-.51 1.52-1.534 1.52-2.792h-1c0 .92-.453 1.602-1.016 1.924-.553.315-1.234.303-1.814-.21l-.662.75zM22.17 9.92c.58-.512 1.261-.524 1.814-.209.563.322 1.016 1.004 1.016 1.924h1c0-1.258-.628-2.283-1.52-2.792-.903-.516-2.053-.483-2.972.327l.662.75zM7.064 18.465l4.944 4.364.662-.75-4.945-4.364-.661.75zm4.944-9.295l-4.944 4.365.661.75L12.67 9.92l-.662-.75zM16.5 20.365v-8.73h-1v8.73h1zm-8.775-2.65c-.967-.854-.967-2.576 0-3.43l-.661-.75c-1.419 1.252-1.419 3.678 0 4.93l.661-.75zm4.283 5.114c.92.811 2.069.844 2.972.328.892-.51 1.52-1.534 1.52-2.792h-1c0 .92-.453 1.602-1.016 1.924-.553.315-1.234.303-1.814-.21l-.662.75zM12.67 9.92c.58-.512 1.261-.524 1.814-.209.563.322 1.016 1.004 1.016 1.924h1c0-1.258-.628-2.283-1.52-2.792-.903-.516-2.053-.483-2.972.327l.662.75z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaFastBack =
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
export default MediaFastBack;

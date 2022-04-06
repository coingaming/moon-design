import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.202 3c.914 0 1.713.222 2.398.667.696.434 1.233 1.09 1.61 1.97.387.878.582 1.957.582 3.237v2.853H0V9.691h5.497v-.6c0-1.447-.28-2.476-.84-3.087-.559-.623-1.226-.935-2.003-.935H.924l-.17-1.752c.353-.078.753-.15 1.198-.217.457-.067.874-.1 1.25-.1zM8.806 8.957h2.466v2.77H8.806v-2.77zM16.85 14.998c.273 0 .678-.023 1.215-.067.537-.045 1.09-.111 1.661-.2l.24 1.735c-.571.145-1.188.267-1.85.367a10.62 10.62 0 01-1.73.167c-1.255 0-2.225-.361-2.91-1.085-.685-.712-1.028-1.69-1.028-2.936 0-1.569.554-2.62 1.661-3.154a5.265 5.265 0 01-.633-2.52c0-.979.21-1.774.633-2.386.434-.623.965-1.068 1.593-1.335.628-.267 1.25-.4 1.866-.4.343 0 .731.038 1.165.116.445.078.867.19 1.267.334l-.103 2.086c-.879-.334-1.587-.5-2.123-.5-.525 0-.993.166-1.404.5-.4.334-.6.895-.6 1.685 0 .823.251 1.508.754 2.053.434.01.879.055 1.335.133.457.067.8.14 1.028.217v1.92a8.022 8.022 0 00-1.13-.218 7.67 7.67 0 00-1.182-.117c-.57 0-1.022.145-1.353.434-.32.3-.48.734-.48 1.302 0 .567.172 1.018.515 1.351.354.345.884.518 1.592.518z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyIqd =
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
export default IconCurrencyIqd;

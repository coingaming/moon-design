import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.508 8.696c.103-.085.268-.128.492-.128.222 0 .388.043.491.128.094.08.138.173.138.294a.383.383 0 01-.137.288c-.094.09-.26.135-.492.135-.233 0-.4-.045-.493-.135a.383.383 0 01-.137-.288c0-.12.044-.214.138-.294zm-.333 2.214c0-.181.065-.311.21-.411.165-.116.366-.171.615-.171.247 0 .45.055.615.17.143.1.21.23.21.412a.433.433 0 01-.074.215.618.618 0 01-.251.212c-.246.129-.756.128-1 0a.623.623 0 01-.253-.213.427.427 0 01-.072-.214zm2-1.072c.065-.052.124-.11.179-.175.161-.19.243-.43.243-.709 0-.204-.056-.409-.167-.608a1.266 1.266 0 00-.536-.494c-.239-.125-.538-.188-.894-.188s-.657.063-.895.188a1.232 1.232 0 00-.703 1.103c0 .28.082.518.243.708.054.064.114.123.18.175-.5.311-.617.768-.617 1.13 0 .233.064.457.19.662.129.209.33.38.6.513.263.128.599.193 1.002.193.407 0 .735-.063 1-.193.27-.131.472-.304.6-.513.127-.207.191-.43.191-.662 0-.362-.117-.819-.616-1.13zM10 6.104A3.899 3.899 0 006.104 10 3.899 3.899 0 0010 13.896 3.9 3.9 0 0013.896 10 3.9 3.9 0 0010 6.104zm0 8.598A4.707 4.707 0 015.299 10 4.707 4.707 0 0110 5.299 4.707 4.707 0 0114.701 10 4.707 4.707 0 0110 14.701zm0-12.896c-4.519 0-8.194 3.676-8.194 8.194 0 4.518 3.675 8.194 8.194 8.194 4.518 0 8.194-3.676 8.194-8.194 0-4.518-3.676-8.194-8.194-8.194zM10 19c-4.964 0-9-4.037-9-9s4.036-9 9-9c4.963 0 9 4.037 9 9s-4.037 9-9 9z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsPool =
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
export default IconSportsPool;

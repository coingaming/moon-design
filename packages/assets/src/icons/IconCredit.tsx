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
      d="M18.4 30H9.3c-1.3 0-3.2-.7-4.1-4 0-.1-.6-1.9-.6-9.9s.5-9.8.6-10c.7-2.4 2-3.7 4.1-3.9.1 0 2.1-.3 6.6-.3s7.1.3 7.2.3c2.2.2 3.9 1.8 4.1 4.1 0 .1.3 2.8.3 9.6 0 3.7-.3 4.9-.3 5l-.1.3-8.7 8.8zM15.9 4c-4.4 0-6.4.2-6.4.3-.8 0-1.8.4-2.4 2.5 0 .1-.5 1.8-.5 9.4 0 7.6.5 9.3.5 9.3C7.8 28 9 28 9.3 28h8.3l7.6-7.6c.1-.5.2-1.8.2-4.3 0-6.7-.3-9.4-.3-9.4-.1-1.3-1-2.2-2.3-2.3 0-.1-2.5-.4-6.9-.4z"
      fill="currentColor"
    />
    <path
      d="M17.2 29h-2v-7c0-1.8 1.5-3.3 3.3-3.3h7v2h-7c-.7 0-1.3.6-1.3 1.3v7zM16.1 10.5c-.5-.2-1-.5-1-1.1 0-.6.4-1 1-1s.8.2 1.2.6c.1.1.4.2.5.2.4 0 .7-.4.7-.7 0-.2-.1-.4-.2-.5-.5-.6-1.1-.8-1.8-1v-.7c0-.2-.2-.5-.5-.5-.2 0-.5.2-.5.5v.8c-1.3.2-2.2 1.1-2.2 2.5 0 1.6 1.3 2.2 2.5 2.8.5.2 1.1.5 1.1 1.2 0 .6-.5 1.2-1.1 1.2-.7 0-1-.4-1.4-.7-.1-.1-.4-.2-.5-.2-.5 0-.7.4-.7.7 0 .2.1.5.2.6.6.6 1.3 1 2.2 1.1v1c0 .2.2.5.5.5.2 0 .5-.2.5-.5v-1c1.3-.2 2.2-1.4 2.2-2.8 0-1.9-1.4-2.5-2.7-3z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCredit =
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
export default IconCredit;

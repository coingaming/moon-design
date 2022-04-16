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
      d="M25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1zM20.053 12.7a.5.5 0 00-.707-.707l.707.707zm-8.106 6.691a.5.5 0 10.707.707l-.707-.707zm7.399.707a.5.5 0 10.707-.707l-.707.707zm-6.692-8.105a.5.5 0 00-.707.707l.707-.707zm6.692 0l-3.7 3.699.707.707 3.7-3.7-.707-.706zm-3.7 3.699l-3.699 3.7.707.706 3.7-3.699-.708-.707zm4.407 3.7l-3.7-3.7-.707.707 3.7 3.7.707-.708zm-3.7-3.7l-3.699-3.7-.707.708 3.7 3.699.707-.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericClose =
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
export default GenericClose;

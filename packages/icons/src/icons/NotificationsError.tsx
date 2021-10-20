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
      d="M13.43 12.723a.5.5 0 00-.707.707l.707-.707zm5.14 6.554a.5.5 0 10.707-.707l-.707.707zm.707-5.847a.5.5 0 00-.707-.707l.707.707zm-6.554 5.14a.5.5 0 10.707.707l-.707-.707zm0-5.14l2.923 2.924.708-.708-2.923-2.923-.708.707zm2.923 2.924l2.924 2.923.707-.707-2.923-2.924-.708.707zm2.924-3.63l-2.924 2.922.708.707 2.923-2.923-.707-.707zm-2.924 2.922l-2.923 2.924.707.707 2.924-2.924-.708-.707zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsError =
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
export default NotificationsError;

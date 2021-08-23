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
      d="M25.5 18.154a.5.5 0 010 1v-1zm-19 1a.5.5 0 110-1v1zm13.47-6.156l.495.066-.495-.066zm-9.53 3.988l.492.083-.493-.083zm4.761 5.59l-.89-13.687.997-.065.891 13.688-.998.065zm2.987.003l1.286-9.647.991.132-1.285 9.647-.992-.132zm3.444-9.768l1.051 4.207-.97.242-1.052-4.207.97-.242zm2.506 5.343H25.5v1h-1.361v-1zM12.327 8.788l-1.394 8.28-.986-.165 1.394-8.28.986.165zM8.467 19.154H6.5v-1h1.967v1zm14.216-2.136a1.5 1.5 0 001.456 1.136v1a2.5 2.5 0 01-2.426-1.894l.97-.242zm-3.209-4.086c.16-1.202 1.863-1.298 2.157-.121l-.97.242c-.01-.042-.026-.054-.034-.06a.112.112 0 00-.068-.015.114.114 0 00-.066.023c-.008.006-.022.02-.028.063l-.991-.132zm-8.542 4.137a2.5 2.5 0 01-2.465 2.085v-1a1.5 1.5 0 001.48-1.251l.985.166zm5.267 5.443c.079 1.205 1.83 1.264 1.99.067l.99.132c-.319 2.394-3.82 2.276-3.978-.134l.998-.065zM14.31 8.889c-.077-1.184-1.786-1.271-1.984-.1l-.986-.167c.395-2.341 3.814-2.167 3.968.202l-.998.065z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsActivity =
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
export default NotificationsActivity;

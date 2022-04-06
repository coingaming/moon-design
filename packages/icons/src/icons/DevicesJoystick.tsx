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
      d="M18.895 18.301l.424-.265-.424.265zm-1.694-.937v-.5.5zm-2.402 0v-.5.5zm-8.402 3.558l-.495-.076.495.076zm17.453-8.106l1.26 8.182.988-.152-1.26-8.182-.988.152zm-16.689-.152l-1.259 8.182.989.152 1.259-8.182-.989-.152zM19.403 8h-6.806v1h6.806V8zM12.68 18.036l-2.6 4.15.846.53 2.601-4.149-.847-.531zm9.239 4.15l-2.6-4.15-.848.531 2.6 4.15.848-.532zm-4.72-5.322h-2.4v1h2.4v-1zm2.12 1.172a2.5 2.5 0 00-2.12-1.172v1a1.5 1.5 0 011.272.703l.847-.531zm-9.24 4.15A1.737 1.737 0 018.608 23v1c.943 0 1.819-.485 2.32-1.284l-.848-.53zM23.392 23a1.737 1.737 0 01-1.472-.815l-.847.531A2.738 2.738 0 0023.392 24v-1zm-9.864-4.433a1.5 1.5 0 011.271-.703v-1a2.5 2.5 0 00-2.118 1.172l.847.531zm11.31-5.903A5.5 5.5 0 0019.404 8v1a4.5 4.5 0 014.447 3.816l.989-.152zm-16.688.152A4.5 4.5 0 0112.597 9V8a5.5 5.5 0 00-5.436 4.664l.989.152zm-2.248 8.03A2.737 2.737 0 008.608 24v-1c-1.065 0-1.88-.95-1.717-2.002l-.989-.152zm19.207.152A1.737 1.737 0 0123.392 23v1a2.737 2.737 0 002.706-3.154l-.989.152z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesJoystick =
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
export default DevicesJoystick;

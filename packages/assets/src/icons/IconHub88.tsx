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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.617 2a8.537 8.537 0 11-8.568 8.537A8.553 8.553 0 0112.617 2z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.366 29.317a8.537 8.537 0 100-17.073 8.537 8.537 0 000 17.073z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.83 30c3.771 0 6.829-2.905 6.829-6.488 0-3.583-3.058-6.488-6.83-6.488C5.058 17.024 2 19.93 2 23.512 2 27.095 5.058 30 8.83 30zM25.236 14.976a4.78 4.78 0 11-4.797 4.78 4.789 4.789 0 014.797-4.78z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconHub88 =
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
export default IconHub88;

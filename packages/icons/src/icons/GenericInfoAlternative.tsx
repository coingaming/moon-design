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
      d="M16.5 19.8a.5.5 0 00-1 0h1zm-1 .95a.5.5 0 001 0h-1zm.5-3.087l-.374-.332a.5.5 0 00-.126.332h.5zm-.5 2.137v.95h1v-.95h-1zm-1.85-5.7A2.35 2.35 0 0116 11.75v-1a3.35 3.35 0 00-3.35 3.35h1zM16 11.75a2.35 2.35 0 012.35 2.35h1c0-1.85-1.5-3.35-3.35-3.35v1zm-.5 5.913v.237h1v-.237h-1zm2.85-3.563c0 .53-.346 1.038-.934 1.603-.286.275-.599.535-.916.805a8.94 8.94 0 00-.874.823l.748.663a8.03 8.03 0 01.776-.725c.302-.258.645-.544.959-.845.612-.588 1.241-1.352 1.241-2.324h-1zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericInfoAlternative =
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
export default GenericInfoAlternative;

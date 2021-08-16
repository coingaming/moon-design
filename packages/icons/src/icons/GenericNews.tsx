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
      d="M12.446 16.707h2.262m-2.262 2.975h2.262m-2.262-6.006h9.651m-9.65-2.707h9.65M7.96 24.41h15.155A1.864 1.864 0 0025 22.529V8.376C25 8.15 24.85 8 24.623 8H9.921c-.227 0-.377.15-.377.376v14.153c0 1.053-.792 1.88-1.772 1.88S6 23.582 6 22.529V10.443m15.909 11.345h-4.26c-.227 0-.377-.15-.377-.376v-4.616c0-.226.15-.376.377-.376h4.26c.226 0 .377.15.377.376v4.616c0 .225-.151.376-.377.376z"
      stroke="#000"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericNews =
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
export default GenericNews;

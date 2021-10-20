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
      d="M24.647 25.354a.5.5 0 10.706-.708l-.706.708zm-9.685-2.93A7.462 7.462 0 017.5 14.96h-1a8.462 8.462 0 008.461 8.462v-1zM7.5 14.96c0-4.12 3.34-7.461 7.461-7.461v-1A8.462 8.462 0 006.5 14.961h1zm7.461-7.46a7.461 7.461 0 017.462 7.461h1A8.462 8.462 0 0014.962 6.5v1zm7.462 7.461a7.436 7.436 0 01-2.19 5.28l.707.708a8.437 8.437 0 002.483-5.988h-1zm-2.19 5.28a7.436 7.436 0 01-5.272 2.182v1a8.437 8.437 0 005.98-2.474l-.707-.708zm0 .708l4.414 4.405.706-.708-4.413-4.405-.706.708z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericSearch =
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
export default GenericSearch;

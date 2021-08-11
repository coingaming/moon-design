import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M15.695 8.48a.737.737 0 00-.41-.125h-2.25L14.254 6.5a.71.71 0 00.101-.555.967.967 0 00-.878-.922c-4.825-.449-7.418 1.836-7.528 1.93a.967.967 0 00-.125 1.305l.406.539a4.523 4.523 0 00-1.675-.324 4.53 4.53 0 00-4.516 4.523 4.524 4.524 0 004.52 4.52c1.605 0 3.015-.84 3.82-2.106l.004.54a.967.967 0 00.969.96h.007a.969.969 0 00.961-.976l-.039-4.676c0-.207-.07-.41-.195-.578L7.988 7.902c.793-.437 2.219-1.004 4.258-1l-1.168 1.782a.73.73 0 00.61 1.129h.59a4.507 4.507 0 00-1.317 3.183 4.525 4.525 0 004.52 4.52A4.524 4.524 0 0020 12.996a4.524 4.524 0 00-4.305-4.516zM4.56 16.3a3.312 3.312 0 01-3.309-3.304 3.313 3.313 0 013.309-3.309 3.313 3.313 0 013.308 3.31A3.312 3.312 0 014.56 16.3zm10.921 0a3.308 3.308 0 01-3.304-3.304 3.31 3.31 0 012.422-3.184h.691a.737.737 0 00.39-.113A3.31 3.31 0 0118.79 13c0 1.82-1.484 3.3-3.309 3.3zm.395-10.366c.941 0 1.707-.766 1.707-1.707 0-.942-.766-1.707-1.707-1.707-.941 0-1.707.765-1.707 1.707 0 .941.766 1.707 1.707 1.707z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsCycling =
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
export default IconSportsCycling;

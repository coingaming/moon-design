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
      d="M20.885 12.346a.5.5 0 10-1 0h1zM16 26a.5.5 0 000-1v1zm0-6.115A3.885 3.885 0 0112.115 16h-1A4.885 4.885 0 0016 20.885v-1zM19.885 16A3.885 3.885 0 0116 19.885v1A4.885 4.885 0 0020.885 16h-1zM16 12.115A3.885 3.885 0 0119.885 16h1A4.885 4.885 0 0016 11.115v1zm0-1A4.885 4.885 0 0011.115 16h1A3.885 3.885 0 0116 12.115v-1zm3.885 1.231v6.942h1v-6.942h-1zm2.692 9c-.624 0-1.012-.16-1.255-.429-.253-.28-.437-.773-.437-1.629h-1c0 .972.205 1.758.695 2.3.5.553 1.209.758 1.997.758v-1zM16 25a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1zm9 9c0 .963-.177 2.362-.607 3.502-.448 1.186-1.065 1.844-1.816 1.844v1c1.44 0 2.286-1.257 2.751-2.49.483-1.28.672-2.804.672-3.856h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericMention =
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
export default GenericMention;

import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M17.956 13.93a2.743 2.743 0 01.01-3.887l2.105-2.084c.531-.526.306-1.41-.44-1.45a6.21 6.21 0 00-6.542 6.203c0 .566.075 1.114.217 1.635L7.398 20.26a3.071 3.071 0 000 4.341 3.065 3.065 0 004.337 0l5.898-5.903a6.209 6.209 0 007.844-6.543c-.065-.731-.936-.94-1.454-.421l-2.194 2.195a2.737 2.737 0 01-3.873 0z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareWrench =
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
export default SoftwareWrench;

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
      d="M24.438 5c-1.33 2.825-4.947 9.916-5.343 10.702-.58 1.153-1.089 1.412-2.828 1.412H6.37c-2.946 0-.678 6.59 2.465 6.59h3.191m9.452-.992c-2.482.696-5.11.696-7.592 0m7.397-1.9L27 7.258M17.681 20.41c-3.158 0-5.656.894-5.656 1.883v2.824c0 .989 2.498 1.883 5.656 1.883 3.158 0 5.656-.894 5.656-1.883v-2.825c0-.988-2.498-1.883-5.656-1.883z"
      stroke="currentColor"
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
const SportIceHockey =
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
export default SportIceHockey;

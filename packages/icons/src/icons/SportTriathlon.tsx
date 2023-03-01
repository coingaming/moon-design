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
      d="M14.742 17.894c-2.137-1.77-3.145-2.08-3.145-2.08-3.226-1.075-.807-3.581-.807-3.581l4.025-3.409c1.286-.991 2.044-1.003 2.629-1.056 1.108-.1 1.41.319 1.41.319s.763.604 1.057 1.845c.186.774.194 2.849.86 3.473 0 0 1.177.355 4.25 1.257m-7.275-3.203l-3.698 2.486 3.496 2.752s-.068.907-1.846 7.623m-3.057-2.385A4.565 4.565 0 018.073 26.5a4.565 4.565 0 11-.004-9.13 4.565 4.565 0 014.568 4.565h.004zm15.859 0a4.565 4.565 0 01-4.569 4.565 4.565 4.565 0 110-9.13 4.565 4.565 0 014.569 4.565zM25.524 7.547a2.048 2.048 0 11-4.095-.002 2.048 2.048 0 014.095.002z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportTriathlon =
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
export default SportTriathlon;

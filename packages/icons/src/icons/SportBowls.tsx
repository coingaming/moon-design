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
      d="M26.5 16c0 5.799-4.701 10.5-10.5 10.5S5.5 21.799 5.5 16 10.201 5.5 16 5.5 26.5 10.201 26.5 16z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M24.531 15.625c0 2.744-2.14 4.969-4.781 4.969-2.64 0-4.781-2.225-4.781-4.969s2.14-4.969 4.781-4.969c2.64 0 4.781 2.225 4.781 4.969z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M26.313 15.625c0 4.608-3.421 8.344-7.641 8.344-4.22 0-7.64-3.736-7.64-8.344 0-4.608 3.42-8.344 7.64-8.344s7.64 3.736 7.64 8.344z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M20.031 13.375l.505 1.555h1.635l-1.322.96.505 1.555-1.323-.96-1.322.96.505-1.554-1.323-.961h1.635l.505-1.555z"
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
const SportBowls =
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
export default SportBowls;

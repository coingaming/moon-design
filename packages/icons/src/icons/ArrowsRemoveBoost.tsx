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
      d="M25.967 9.138a.5.5 0 00-.807-.592l.807.592zm-4.603 5.426l.403.296-.403-.296zm-1.71.366l-.247.435.247-.435zm-4.26-2.415l.248-.435a.5.5 0 00-.649.137l.402.298zm-7.257 8.93a.5.5 0 00.803.596l-.803-.596zm5.66.631a.5.5 0 10-.138-.99l.139.99zm-5.802.308l-.492.088a.5.5 0 00.562.407l-.07-.495zm-.485-5.575a.5.5 0 00-.984.175l.984-.175zm17.65-8.263l-4.199 5.722.806.591 4.2-5.721-.807-.592zm-5.26 5.949l-4.258-2.415-.494.87 4.26 2.415.492-.87zm-4.906-2.278l-6.857 9.228.803.596 6.856-9.228-.803-.596zm5.967 2.05a.82.82 0 01-1.06.228l-.494.87a1.82 1.82 0 002.36-.505l-.806-.592zm-7.302 6.819l-5.733.803.139.99 5.733-.803-.139-.99zm-5.172 1.21L7.51 16.81l-.984.175.977 5.488.984-.176z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsRemoveBoost =
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
export default ArrowsRemoveBoost;

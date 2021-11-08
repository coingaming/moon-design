import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.633 0l-.516 1.755v50.914l.516.515 23.634-13.97L23.633 0z"
      fill="currentColor"
    />
    <path
      d="M23.634 0L0 39.214l23.634 13.97V0zM23.634 57.659l-.291.355V76.15l.29.85 23.649-33.304-23.648 13.963z"
      fill="currentColor"
    />
    <path
      d="M23.634 77V57.659L0 43.696 23.634 77zM23.634 53.184l23.633-13.97-23.633-10.742v24.712zM0 39.214l23.633 13.97V28.472L0 39.214z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyEth =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconCurrencyEth;

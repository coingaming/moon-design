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
      d="M10.001 10.618h5.703M10 15.203h12.166m-12.166 4.584h12.166m.854-14.46c-3.493-.297-9.166-.542-14.02-.032a2.128 2.128 0 00-1.888 1.876c-.565 4.685-1.088 12.42.12 20.352a.376.376 0 00.618.227l1.687-1.452a.757.757 0 01.951-.031l2.097 1.58c.27.204.642.204.913 0l2.129-1.604a.758.758 0 01.912 0l2.13 1.604c.27.204.641.204.912 0l2.097-1.58a.757.757 0 01.951.03l1.679 1.447a.375.375 0 00.618-.232c.951-6.963.53-15.083.08-20.193a2.18 2.18 0 00-1.986-1.991z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericBet =
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
export default GenericBet;

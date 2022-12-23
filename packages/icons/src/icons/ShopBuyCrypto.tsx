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
      d="M21.209 10.41h1.404c.321.003.636.087.914.243s.51.38.674.65m.253 11.552v2.347a1.798 1.798 0 01-.546 1.265 1.885 1.885 0 01-1.295.533H7.837a1.885 1.885 0 01-1.293-.534A1.799 1.799 0 016 25.202V11.59m2.62-1.146H7.1a1.14 1.14 0 00-.787.351 1.087 1.087 0 00-.294.795 1.04 1.04 0 00.305.767 1.09 1.09 0 00.775.324h15.533c.49.006.958.2 1.303.54.345.341.538.801.538 1.28v.779M12.249 8.117h3.591a1.49 1.49 0 011.033.418 1.425 1.425 0 01.428 1.009 1.398 1.398 0 01-.428 1.008 1.462 1.462 0 01-1.033.418m0 0H13.55m2.291 0c.667 0 1.49.68 1.713 1.361m-4.06-5.45v5.738M15.47 6.88v1.215M8.74 12.45a6.085 6.085 0 011.709-5.645A6.381 6.381 0 0114.904 5c1.672 0 3.275.649 4.458 1.803a6.085 6.085 0 011.846 4.354c0 .434-.047.867-.142 1.292m-3.178 10.33a1.885 1.885 0 01-1.291-.533 1.798 1.798 0 01-.546-1.261v-2.274c.006-.475.201-.928.544-1.264a1.885 1.885 0 011.293-.534h6.993c.297 0 .581.115.79.32.21.205.328.482.328.772v3.682c0 .29-.118.567-.327.772-.21.205-.494.32-.79.32h-6.994z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={18.836} cy={19.884} r={0.8} fill="currentColor" />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ShopBuyCrypto =
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
export default ShopBuyCrypto;

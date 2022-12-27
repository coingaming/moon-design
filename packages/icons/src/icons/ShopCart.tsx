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
      d="M7.934 8.692h15.118a2 2 0 011.96 2.4l-.559 2.738a2 2 0 01-1.753 1.59l-12.663 1.31M7.934 8.693L6.5 6.5m1.434 2.192l2.103 8.039m12.954 2.923h-9.168a3.914 3.914 0 01-3.786-2.923m3.633 7.307c0 .808-.642 1.462-1.434 1.462-.792 0-1.434-.654-1.434-1.462 0-.807.642-1.461 1.434-1.461.792 0 1.434.654 1.434 1.461zm9.32 0c0 .808-.641 1.462-1.433 1.462s-1.434-.654-1.434-1.462c0-.807.642-1.461 1.434-1.461.792 0 1.434.654 1.434 1.461z"
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
const ShopCart =
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
export default ShopCart;

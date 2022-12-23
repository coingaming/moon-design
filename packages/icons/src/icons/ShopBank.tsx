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
      d="M16 5L4 9.947v.55l.522 1.099h22.956l.522-1.1v-.55L16 5zM20.174 23.688v-7.145c0-.438.165-.857.458-1.166.294-.31.692-.483 1.107-.483.415 0 .813.174 1.107.483.293.309.458.728.458 1.166v7.145M14.435 23.688v-7.145c0-.438.165-.857.459-1.166.293-.31.692-.483 1.107-.483.415 0 .813.174 1.107.483.293.309.458.728.458 1.166v7.145M8.695 23.688v-7.145c0-.438.165-.857.459-1.166.293-.31.691-.483 1.107-.483v0c.415 0 .813.174 1.106.483.294.309.459.728.459 1.166v7.145M5.043 13.245v1.1l1.043.549v9.344M25.913 24.238v-9.344l1.044-.55v-1.1M4.521 24.238h22.957M4.521 27h22.957"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ShopBank =
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
export default ShopBank;

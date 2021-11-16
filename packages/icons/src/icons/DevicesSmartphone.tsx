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
      d="M19.177 23.077a.5.5 0 000-1v1zm-6.354-1a.5.5 0 000 1v-1zM20 6.5V7v-.5zm-8 0V6v.5zm-2 17h.5-.5zm0-15h-.5.5zm10 17V25v.5zm-8 0v.5-.5zm10-2h.5-.5zm0-15h-.5.5zM20 6h-8v1h8V6zm-9.5 17.5v-15h-1v15h1zM20 25h-8v1h8v-1zm2.5-1.5v-15h-1v15h1zM20 26a2.5 2.5 0 002.5-2.5h-1A1.5 1.5 0 0120 25v1zm0-19a1.5 1.5 0 011.5 1.5h1A2.5 2.5 0 0020 6v1zm-8-1a2.5 2.5 0 00-2.5 2.5h1A1.5 1.5 0 0112 7V6zM9.5 23.5A2.5 2.5 0 0012 26v-1a1.5 1.5 0 01-1.5-1.5h-1zm3.323-.423h6.354v-1h-6.354v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesSmartphone =
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
export default DevicesSmartphone;

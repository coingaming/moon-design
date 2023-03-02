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
      d="M4 17.733c.03-.189.133-.271.21-.365 1.74-2.079 3.948-3.104 6.606-3.106 4.463-.002 3.42-.003 7.882-.004 1.506 0 3.012.004 4.518-.002a1.364 1.364 0 001.345-1.19c.071-.591-.263-1.035-.835-1.099-.145-.016-.294-.01-.44-.01H9.427c-.046-.152.063-.21.126-.28 1.8-2.023 3.986-3.183 6.697-3.176 2.684.006 5.369-.009 8.053.005 1.848.01 3.286 1.22 3.617 3.018.203 1.1.01 2.151-.517 3.113-1.087 1.983-2.716 3.093-4.968 3.094-7.849.007-10.191.003-18.04.003H4v0zM27.943 20.075c-.224.352-.503.624-.785.89-1.736 1.647-3.757 2.545-6.149 2.535-4.564-.018-2.942-.004-7.505-.007-1.741-.002-3.27-.564-4.507-1.861a5.92 5.92 0 01-.933-1.33c-.12-.225-.053-.288.169-.273.079.005.158 0 .238 0l19.023.001c.142 0 .29-.028.449.044v0z"
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
const SportFormulaE =
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
export default SportFormulaE;

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
      d="M6.275 21.244a1.99 1.99 0 003.948.502l.249-1.898a1 1 0 01.991-.87h4.457a1.896 1.896 0 000-3.793h-3.75a1 1 0 01-.992-1.124l.102-.821a1 1 0 01.993-.876h4.438a1.932 1.932 0 100-3.864H9.614a2 2 0 00-1.985 1.755l-1.354 10.99zM21.207 10.267A2 2 0 0123.193 8.5h.558a2 2 0 011.986 2.233l-1.293 11a2 2 0 01-1.986 1.767H21.9a2 2 0 01-1.987-2.233l1.294-11z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportFormula1 =
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
export default SportFormula1;

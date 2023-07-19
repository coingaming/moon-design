import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.008 4.237a.44.44 0 01.265-.217c.079-.019 5.478-.024 5.478-.005 0 .008-.608 1.584-1.351 3.502-.744 1.918-1.352 3.518-1.352 3.557 0 .111.088.257.186.308.082.043.277.048 2.086.06l1.996.015-2.732 4.855c-1.502 2.671-2.76 4.884-2.793 4.919-.17.173-.497.119-.617-.104-.052-.096-.04.069-.654-8.822-.487-7.04-.547-7.988-.512-8.068zM13.509 6.31l.834-2.15.063-.16h2.629c2.168 0 2.646.007 2.725.038.113.045.21.155.236.265.02.086.03.042-1.762 7.458-.593 2.45-1.095 4.495-1.116 4.544a.372.372 0 01-.135.145c-.095.055-.14.056-2.37.056-1.252 0-2.275-.006-2.275-.013 0-.007.933-1.672 2.074-3.7 1.14-2.029 2.108-3.753 2.15-3.833.092-.171.098-.294.02-.414-.115-.18-.042-.174-2.051-.174-1.445 0-1.819-.008-1.808-.035l.786-2.027z"
      stroke="#8D9DA8"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLivespins =
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
export default IconLivespins;

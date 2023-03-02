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
      d="M22.26 26H9.74C6.571 26 4 23.464 4 20.342c0-3.123 2.572-5.659 5.74-5.659h12.52c3.168 0 5.74 2.536 5.74 5.659C28 23.464 25.428 26 22.26 26zM21.337 8.783A4.081 4.081 0 0017.445 6h-4.643c-1.002 0-1.821.802-1.821 1.795 0 .993.819 1.796 1.82 1.796h4.326c.376 0 1.017.072 1.064.884.047.813-.683.86-1.064.86h-5.463c-1.633 0-2.958.91-2.958 2.52v.828h14.395l-1.764-5.9z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportCurling =
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
export default SportCurling;

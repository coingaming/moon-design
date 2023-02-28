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
      d="M25.358 11.455C23.782 7.932 20.431 5.5 16.552 5.5v3.437c2.018 0 3.824.978 5.029 2.519m-1.049 10.163a6.25 6.25 0 01-3.98 1.444V26.5c4.16 0 7.713-2.797 9.12-6.737M11.2 21.607c1.107.913 2.492 1.456 3.995 1.456V26.5c-4.16 0-7.713-2.797-9.12-6.737m.33-8.346C7.99 7.914 11.33 5.5 15.196 5.5v3.437c-2.04 0-3.864 1-5.07 2.57m-2.58 2.836l-.605 3.003h3.771m9.821-3.003h3.611l.49 2.621m-4.289 4.088l.983 1.669 3.288-2.959H29.5l-1.416-3.224-.665.683-.664-3.604 1.33-2.162H18.12L15.96 8.288l-2.158 3.13H3.916l1.329 2.162-.664 3.603-.665-.683L2.5 19.724h6.415l1.796 2.959.983-1.669 8.65.038zm-6.541-7.626h4.364l1.062 4.348h-6.3l.874-4.348z"
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
const SportKingOfGlory =
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
export default SportKingOfGlory;

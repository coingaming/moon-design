import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.955 6.5c-1.14 1.9-1.615 2.945-.665 4.18 0 0 .19.38.57.57 1.235.95 2.66.855 4.18.76 2.28-.19 4.655-.38 6.46 3.23M16.95 25.5c-3.705-1.9-3.8-4.085-3.895-6.175 0-1.425-.095-2.85-1.33-4.085l-.19-.19c-.095-.095-.665-.475-.665-.475-1.14-.665-2.565-.57-4.37.38m16.53 7.505L9.635 9.065m12.98.032c-2.3-.096-4.697.384-6.903 1.534-4.314 2.11-7.094 6.136-7.765 10.642M25.5 15.145c-.19-2.28-1.14-4.275-2.755-5.89C20.94 7.45 18.565 6.5 16 6.5h-.285c-2.47.095-4.75 1.045-6.46 2.755s-2.66 3.99-2.755 6.46V16c0 2.565.95 4.94 2.755 6.745C11.06 24.55 13.435 25.5 16 25.5c2.565 0 4.94-.95 6.745-2.755C24.55 20.94 25.5 18.565 25.5 16v-.855z"
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
const SportBasketball =
  styled(Svg) <
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
export default SportBasketball;

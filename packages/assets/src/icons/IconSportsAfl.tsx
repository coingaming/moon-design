import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.65 42.452c.937.903 2.287 1.2 3.58 1.357 3.757.456 9.767.333 16.642-3.076a33.068 33.068 0 0014.863-14.874c3.445-6.925 3.532-12.99 3.059-16.764-.151-1.203-.306-2.005-1.148-2.878v0c-.966-1.003-2.664-1.905-4.049-2.056-3.786-.413-9.719-.247-16.469 3.115A33.069 33.069 0 007.265 22.15c-3.371 6.776-3.527 12.73-3.088 16.517.16 1.384.469 2.818 1.473 3.785v0zM25.503 27.448l-3.273-3.27M27.775 25.021l-3.273-3.27M22.888 30.035l-3.256-3.444M26.83 19.363l3.344 3.36"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.902 6.434C40.3 9.638 26.208 23.142 23.673 25.679 21.138 28.216 9.203 40.398 6 42"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsAfl = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
  ]
);
export default IconSportsAfl;

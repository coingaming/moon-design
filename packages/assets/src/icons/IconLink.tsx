import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.531 3.318a4.5 4.5 0 00-6.364 0l-4.083 4.084h-.001c-1.156 1.164-1.335 2.136-1.18 3.03.176 1.016.798 2.048 1.573 3.278l.097.154c.7 1.108 1.517 2.4 1.796 3.76.152.745.151 1.531-.107 2.34-.256.802-.747 1.566-1.485 2.3v.002l-3.68 3.68a6.5 6.5 0 01-9.193-9.193l2.475-2.475a1 1 0 111.414 1.414l-2.475 2.475a4.5 4.5 0 106.364 6.364l3.682-3.682.002-.002c.56-.557.851-1.054.991-1.492.138-.433.147-.867.052-1.33-.202-.99-.84-2.005-1.624-3.248l-.008-.011c-.727-1.153-1.59-2.52-1.844-3.992-.278-1.599.168-3.208 1.732-4.782l.002-.002 4.086-4.086a6.5 6.5 0 119.192 9.192l-3.181 3.182a1 1 0 01-1.415-1.414l3.182-3.182a4.5 4.5 0 000-6.364z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconLink = styled(Svg)<IconProps>(
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
export default IconLink;

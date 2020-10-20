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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 2.134a1 1 0 011.039.023l20.33 12.998a1 1 0 01-.218 1.79l-6.51 2.202 3.755 6.502a1 1 0 01-.367 1.366l-5.496 3.173a1 1 0 01-1.366-.366l-3.754-6.501-5.161 4.536a1 1 0 01-1.66-.706L5.001 3.045a1 1 0 01.499-.911zm1.586 2.747l.91 20.098 4.513-3.966a1 1 0 011.526.251l3.864 6.692 3.764-2.173L17.8 19.09a1 1 0 01.545-1.448l5.691-1.925L7.086 4.881z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCursor = styled(Svg)<IconProps>(
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
export default IconCursor;

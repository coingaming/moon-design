import React from 'react';
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
      d="M0 9a1 1 0 002 0V3.41L12.586 14 2 24.59V19a1 1 0 10-2 0v8a1 1 0 001 1h8a1 1 0 100-2H3.419L14 15.415 24.581 26H19a1 1 0 100 2h8a1 1 0 001-1v-8a1 1 0 10-2 0v5.59L15.414 14 26 3.41V9a1 1 0 102 0V1a1 1 0 00-1-1h-8a1 1 0 100 2h5.581L14 12.585 3.419 2H9a1 1 0 100-2H1a1 1 0 00-1 1v8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconExpand = styled(Svg)<IconProps>(
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
export default IconExpand;

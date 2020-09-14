import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 23 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.935.298A1 1 0 016.647 0H13a5 5 0 015 5 5 5 0 015 5v13a5 5 0 01-5 5h-8a5 5 0 01-5-5 5 5 0 01-5-5V6.727a1 1 0 01.288-.702L5.935.298zM16 5v13a3 3 0 01-3 3H5a3 3 0 01-3-3V9h6a1 1 0 001-1V2h4a3 3 0 013 3zM7 2.066V7H2.135L7 2.066zM10 26a3 3 0 01-3-3h6a5 5 0 005-5V7a3 3 0 013 3v13a3 3 0 01-3 3h-8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCopy = styled(Svg)<IconProps>(
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
export default IconCopy;

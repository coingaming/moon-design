import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.707 13.293a1 1 0 010 1.414L7.414 17l2.293 2.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zM12.293 15.293a1 1 0 000 1.414L14.586 19l-2.293 2.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0a1 1 0 00-.707.293l-7 7A1 1 0 000 8v15a5 5 0 005 5h12a5 5 0 005-5V5a5 5 0 00-5-5H8zm0 8V2.414L2.414 8H8zm1 2H2v13a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3h-7v7a1 1 0 01-1 1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCode = styled(Svg)<IconProps>(
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
export default IconCode;

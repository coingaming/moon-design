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
      d="M11 18a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM11 23a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 2a1 1 0 00-.707.293l-7 7A1 1 0 005 10v15a5 5 0 005 5h12a5 5 0 005-5V7a5 5 0 00-5-5h-9zm0 8V4.414L7.414 10H13zm1 2H7v13a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3h-7v7a1 1 0 01-1 1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconText = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
export default IconText;

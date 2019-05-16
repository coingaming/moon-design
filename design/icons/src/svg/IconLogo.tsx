import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.955 4.274c5.424 0 9.821 4.387 9.821 9.8 0 5.411-4.397 9.798-9.821 9.798-5.424 0-9.821-4.387-9.821-9.799s4.397-9.799 9.82-9.799M14 2c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12-6.628 0-12-5.372-12-12C2 7.373 7.372 2 14 2"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconLogo = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);

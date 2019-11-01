import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.217 1.565a8.215 8.215 0 018.218 8.218A8.215 8.215 0 018.217 18 8.215 8.215 0 010 9.783a8.22 8.22 0 018.217-8.218zm-.03 1.562c3.716 0 6.724 3.002 6.724 6.709s-3.008 6.708-6.724 6.708c-3.717 0-6.725-3.001-6.725-6.708 0-3.707 3.008-6.71 6.725-6.71z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.478 0A5.477 5.477 0 110 5.478 5.472 5.472 0 015.478 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconLogoPlain = styled(Svg)<IconProps>(
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

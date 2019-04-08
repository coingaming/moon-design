import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 8 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.08h3.2V20h1.6V5.08H8L4 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconArrowTop = styled(Svg)(
  ({
    backgroundColor,
    circleColor,
  }: {
    backgroundColor?: string;
    circleColor?: string;
  }) => [
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

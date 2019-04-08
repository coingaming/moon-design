import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 4 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12H0V0h4v12zm0 8H0v-4h4v4z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export const IconWarning = styled(Svg)(
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

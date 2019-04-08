import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.902 18H9.098V8.423l-2.78 2.69L5 9.838 10 5l5 4.838-1.318 1.275-2.78-2.69V18zM1.81 1.861V6H0V0h20v6h-1.84V1.861H1.81z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export const IconUpload = styled(Svg)(
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

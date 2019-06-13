import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 52 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M43.846 47.68c-2.718 1.824-5.708 2.827-9.15 2.827-5.707 0-10.418-2.644-12.774-8.57h18.572V34.37H20.473c-.09-.638-.09-1.276-.09-2.005 0-1.003 0-1.915.09-2.827h20.02v-7.567h-18.39c2.537-6.108 7.338-8.478 12.593-8.478 3.08 0 5.888 1.003 8.334 2.644l8.516-10.758C46.292 1.732 40.313 0 34.696 0 19.476 0 9.42 8.023 6.159 21.971H0v7.567h5.164c-.09.912-.09 1.824-.09 2.827v2.005H-.002v7.567h6.07C9.42 57.71 21.56 64 34.696 64c6.794 0 12.683-2.188 17.303-5.47l-8.153-10.85z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyEur = styled(Svg)<IconProps>(
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

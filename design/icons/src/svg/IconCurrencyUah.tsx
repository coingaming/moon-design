import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 46 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M38.235 45.937c-4.86 4.951-10.544 6.51-15.037 6.51-6.51 0-9.261-2.659-9.261-5.593 0-1.834.917-3.484 2.384-4.86h27.874v-7.152H25.857c3.392-1.467 6.877-3.117 10.086-4.4h8.252v-7.06h-5.777c3.026-1.835 5.502-4.769 5.502-9.17C43.92 6.418 36.126 0 23.748 0 16.046 0 7.978 2.934 1.742 7.702l7.244 9.72c4.584-3.76 9.444-5.777 14.12-5.777 3.76 0 6.968 1.283 6.968 4.951 0 2.659-2.2 4.951-4.4 6.785H0v7.06h19.988c-3.209 1.376-6.693 3.026-9.81 4.401H0v7.152h5.868c-2.475 1.834-4.676 4.676-4.676 8.894C1.192 58.224 8.711 64 21.822 64c8.344 0 16.963-2.292 23.656-8.619l-7.243-9.444z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyUah = styled(Svg)<IconProps>(
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

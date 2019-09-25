import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.291 2.78L0 0l7.52 20L18 6.507 14.291 2.78zm-.23 1.224L16.247 6.2l-5.98 1.144 3.794-3.34zM8.97 7.115L2.667 1.592l10.3 2.002L8.97 7.115zm-.45.977L7.493 17.07 1.953 2.335 8.52 8.092zm.952.477l6.62-1.267-7.594 9.778.974-8.511z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyTrx = styled(Svg)<IconProps>(
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

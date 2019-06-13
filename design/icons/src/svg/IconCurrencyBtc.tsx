import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 49 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M39.934 31.937c3.626-1.879 5.895-5.189 5.365-10.703-.714-7.535-7.11-10.062-15.183-10.782L30.115 0h-6.256l-.001 10.177c-1.646 0-3.324.033-4.994.067L18.862.001h-6.25v10.45c-1.355.028-2.685.054-3.984.054v-.03L0 10.47l.001 6.794s4.62-.088 4.544-.003c2.532.002 3.36 1.498 3.597 2.79l.002 11.907v16.726c-.111.81-.58 2.106-2.352 2.108.08.073-4.55 0-4.55 0L.002 58.39H8.14c1.517.002 3.007.026 4.469.038l.005 10.57 6.248.002-.001-10.46c1.719.036 3.378.051 4.999.05L23.858 69h6.255l.004-10.553c10.514-.614 17.875-3.309 18.79-13.355.738-8.087-3.003-11.697-8.973-13.155zm-20.92-14.213c3.527 0 14.623-1.143 14.624 6.354-.001 7.188-11.093 6.348-14.625 6.348V17.724zm-.003 33.121l.002-14.006c4.24-.001 17.534-1.24 17.536 7 .002 7.903-13.297 7.003-17.538 7.006z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyBtc = styled(Svg)<IconProps>(
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

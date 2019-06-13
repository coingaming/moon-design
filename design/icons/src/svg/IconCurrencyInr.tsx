import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.112 7.2V.032H.648V6.88h7.488c3.52 0 5.12 1.536 5.76 3.904H.648v5.824h13.248c-.64 2.432-2.368 4.032-5.952 4.032H.648v7.552L16.904 44h12.928l-16-15.424v-.128c6.336-1.28 10.752-5.12 11.392-11.264h5.888v-6.656h-6.848a12.968 12.968 0 0 0-2.048-3.2V7.2h8.896z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyInr = styled(Svg)<IconProps>(
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

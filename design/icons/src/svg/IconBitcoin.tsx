import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 15 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.724 9.257c1.065-.545 1.73-1.504 1.575-3.102-.21-2.184-2.087-2.917-4.457-3.125V0H7.004v2.95c-.484 0-.976.01-1.467.02V0H3.703v3.03c-.398.007-.789.015-1.17.015v-.009H0v1.968s1.357-.025 1.334 0c.744 0 .987.434 1.056.808l.001 3.452v4.848c-.033.235-.17.61-.69.61.023.022-1.336 0-1.336 0L0 16.926h2.39c.445 0 .883.007 1.312.01L3.703 20 5.538 20v-3.032c.504.01.991.015 1.467.014V20H8.84v-3.059c3.088-.178 5.25-.959 5.518-3.87.216-2.345-.882-3.391-2.635-3.814zm-6.142-4.12c1.036 0 4.293-.331 4.294 1.842 0 2.084-3.257 1.84-4.294 1.84V5.137zm0 9.6v-4.059c1.245 0 5.148-.36 5.148 2.029 0 2.29-3.903 2.03-5.149 2.03z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconBitcoin = styled(Svg)<IconProps>(
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

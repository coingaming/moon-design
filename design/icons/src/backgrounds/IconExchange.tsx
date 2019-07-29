import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M21.778 4.347a.487.487 0 01.038.192v7a.5.5 0 11-1 0V5.744L2.056 25.661a.499.499 0 01-.707 0 .5.5 0 010-.707L20.11 5.038h-5.793a.5.5 0 010-1h7a.5.5 0 01.462.309z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.932.5a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h5.794L9.079 15.146a.5.5 0 10.707.707L23.933 1.707V7.5a.5.5 0 101 0v-7zm-6.146 14.354a.5.5 0 10-.707-.707L3.933 28.293V22.5a.5.5 0 00-1 0v7.004l.001.005a.502.502 0 00.498.491h7a.5.5 0 000-1H4.64l14.146-14.146z"
      fill="#8697A2"
    />
  </svg>
);

export const IconExchange = styled(Svg)({
  verticalAlign: 'middle',
});

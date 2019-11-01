import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 10 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.934 1.879a.436.436 0 010 .633.48.48 0 01-.66 0L3.253 1.53V14.3h-.933V1.53l-1.023.982a.48.48 0 01-.66 0 .438.438 0 010-.633L2.457.13a.48.48 0 01.66 0L4.933 1.88zm4.43 16.242l-1.82 1.748a.48.48 0 01-.66 0L5.067 18.12a.438.438 0 010-.633.48.48 0 01.66 0l1.022.982V5.7h.933v12.77l1.023-.982a.48.48 0 01.66 0 .436.436 0 010 .633z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconArrowUpDown = styled(Svg)<IconProps>(
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

import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 119 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.025 3.912c-.447 0-.821-.16-1.123-.48a1.54 1.54 0 0 1-.47-1.146c0-.43.156-.813.47-1.12A1.555 1.555 0 0 1 2.025.696c.447 0 .822.16 1.136.468.301.308.458.69.458 1.134 0 .455-.157.837-.458 1.145a1.562 1.562 0 0 1-1.136.468z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSportsbetCaption = styled(Svg)<IconProps>(
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

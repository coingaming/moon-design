import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 2.623L7.014 10 0 17.376 2.5 20 12 10 2.498 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconChevronRight = styled(Svg)<IconProps>(
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

import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.566 12.613a4.267 4.267 0 01-2.975 1.22c-1.289 0-1.833-.498-1.833-1.048 0-.344.182-.653.472-.911h5.516v-1.341h-3.63c.672-.275 1.362-.585 1.997-.825h1.633V8.384h-1.143c.599-.344 1.088-.894 1.088-1.72C14.691 5.205 13.15 4 10.7 4c-1.525 0-3.121.55-4.355 1.444l1.433 1.822c.907-.704 1.87-1.083 2.795-1.083.743 0 1.379.241 1.379.929 0 .498-.436.928-.871 1.272H6v1.324h3.956c-.635.258-1.325.567-1.942.825H6v1.34h1.161c-.49.345-.925.878-.925 1.668 0 1.376 1.488 2.459 4.083 2.459 1.65 0 3.356-.43 4.681-1.616l-1.434-1.77z"
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

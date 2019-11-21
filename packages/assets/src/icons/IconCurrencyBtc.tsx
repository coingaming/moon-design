import * as React from 'react';
import styled from 'styled-components';

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
      d="M8.764 10.187v1.122h1.85v.804h-1.85v1.127h1.725c.58 0 1.01-.124 1.286-.374.28-.253.42-.638.42-1.155 0-.521-.14-.904-.42-1.15-.277-.25-.705-.374-1.286-.374H8.764zm0-3.427v2.512h1.595c.525 0 .916-.103 1.173-.307.26-.209.391-.525.391-.95 0-.42-.13-.734-.391-.942-.257-.209-.648-.313-1.173-.313H8.764zm-1.078-.926h2.75c.821 0 1.453.178 1.896.535.446.358.67.865.67 1.524 0 .51-.115.915-.344 1.217-.225.301-.56.49-1.002.564.534.119.946.368 1.239.748.292.375.438.846.438 1.412 0 .744-.243 1.319-.729 1.724-.481.406-1.169.609-2.062.609H7.686v-2.054h-1.02v-.804h1.02V5.834"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
const IconCurrencyBtc = styled(Svg)<IconProps>(
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
export default IconCurrencyBtc;

import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M11.544 11.527a5.464 5.464 0 0 1-7.71 0 5.445 5.445 0 0 1 0-7.699 5.464 5.464 0 0 1 7.71 0 5.445 5.445 0 0 1 0 7.7m8.063 6.184l-5.614-5.635a7.641 7.641 0 0 0 1.385-4.4 7.64 7.64 0 0 0-2.252-5.428A7.672 7.672 0 0 0 7.69 0a7.672 7.672 0 0 0-5.437 2.249A7.641 7.641 0 0 0 0 7.678a7.641 7.641 0 0 0 2.252 5.429 7.672 7.672 0 0 0 5.437 2.249 7.672 7.672 0 0 0 4.406-1.384l5.614 5.635a1.344 1.344 0 0 0 1.898 0 1.339 1.339 0 0 0 0-1.895"
        id="icon-search_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      xlinkHref="#icon-search_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
const IconSearch = styled(Svg)<IconProps>(
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
export default IconSearch;

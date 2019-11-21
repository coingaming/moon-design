import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8} r={7.5} stroke="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8 8a.59.59 0 0 0-.276-.492l.006-.012-3.6-2.4-.006.012A.581.581 0 0 0 6.6 5c-.33 0-.6.27-.6.6v4.8c0 .33.27.6.6.6a.581.581 0 0 0 .324-.108l.006.012 3.6-2.4-.006-.012A.59.59 0 0 0 10.8 8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
const IconPlay = styled(Svg)<IconProps>(({ backgroundColor, circleColor }) => [
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
]);
export default IconPlay;

import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width="1em"
    height="1em"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 9h-5V4c0-.55-.45-1-1-1s-1 .45-1 1v5H4c-.55 0-1 .45-1 1s.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
const IconAdd = styled(Svg)<IconProps>(({ backgroundColor, circleColor }) => [
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
export default IconAdd;

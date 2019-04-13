import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M4.577 6.934l-.004-.002a.377.377 0 0 1 .018-.658L7.68 4.53a.44.44 0 0 1 .437.004l.237.14 4.338-2.612a.44.44 0 0 1 .446-.003l6.667 3.903c.26.152.261.507.002.66l-4.39 2.604v1.028l3.944-2.34a.434.434 0 0 1 .575.121.376.376 0 0 1-.129.538l-4.39 2.604v1.028l3.944-2.34a.434.434 0 0 1 .575.121.376.376 0 0 1-.129.539l-4.39 2.604v.594a.385.385 0 0 1-.19.328l-3.333 2.014c-.278.167-.643-.02-.643-.328V15.6l-3.944 2.34a.44.44 0 0 1-.443 0L.196 14.039a.376.376 0 0 1-.133-.538.433.433 0 0 1 .575-.124l6.444 3.773 4.168-2.473V13.65l-3.944 2.34a.44.44 0 0 1-.443 0L.196 12.087a.376.376 0 0 1-.133-.538.433.433 0 0 1 .575-.124l6.444 3.772 4.168-2.472v-1.027l-3.944 2.339a.44.44 0 0 1-.443.001L.196 10.136a.378.378 0 0 1 .001-.663l4.38-2.539zm.757.48L1.206 9.806l5.876 3.44 3.855-2.286-5.603-3.546zm6.75 3.58V15.021l2.5-1.51v-.59V9.256L9.485 6.26 7.89 5.322 5.58 6.627a.415.415 0 0 1 .012.008l6.308 3.992a.384.384 0 0 1 .183.324v.043zM9.132 5.132l.796.468 5.045 2.965 3.827-2.27-5.881-3.443-3.787 2.28z"
        id="icon-freebet_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="nonzero"
      xlinkHref="#icon-freebet_svg__a"
      transform="translate(0 -2)"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconFreebet = styled(Svg)<IconProps>(
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

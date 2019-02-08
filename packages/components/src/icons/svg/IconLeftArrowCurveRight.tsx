import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M14.4 15.822H7.956v1.867H14.4c3.089.022 5.6-2.511 5.6-5.6a5.629 5.629 0 0 0-5.622-5.622H3.556L5.689 4.31 4.356 3 0 7.4l4.378 4.4 1.333-1.311-2.133-2.133h10.8a3.741 3.741 0 0 1 3.733 3.733 3.694 3.694 0 0 1-3.711 3.733z"
        id="icon-left-arrow-curve-right_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      transform="matrix(-1 0 0 1 20 -3)"
      xlinkHref="#icon-left-arrow-curve-right_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

export const IconLeftArrowCurveRight = styled(Svg)(iconStyles);

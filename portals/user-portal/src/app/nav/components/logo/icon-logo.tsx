import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.945 5.245c6.54 0 11.84 5.371 11.84 11.997 0 6.625-5.3 11.996-11.84 11.996-6.539 0-11.84-5.371-11.84-11.996 0-6.626 5.301-11.997 11.84-11.997zM15 2.461c7.99 0 14.467 6.577 14.467 14.69 0 8.114-6.477 14.691-14.467 14.691S.533 25.265.533 17.152C.533 9.038 7.01 2.46 15 2.46z"
      fill={colors.neutral[10]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.037.326c5.248 0 9.503 4.32 9.503 9.647s-4.255 9.646-9.503 9.646C4.788 19.619.533 15.3.533 9.973c0-5.328 4.255-9.647 9.504-9.647z"
      fill={colors.brand}
    />
  </svg>
);

export const IconLogo = styled(Svg)({
  fontSize: '2rem',
  verticalAlign: 'middle',
});

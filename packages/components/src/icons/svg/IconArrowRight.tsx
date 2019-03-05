import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 8"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.92 0v3.2H0v1.6h14.92V8L20 4z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconArrowRight = styled(Svg)(iconStyles);

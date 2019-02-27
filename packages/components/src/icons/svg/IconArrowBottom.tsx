import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 8 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 14.92H4.8V0H3.2v14.92H0L4 20z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconArrowBottom = styled(Svg)(iconStyles);

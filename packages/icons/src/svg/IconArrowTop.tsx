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
      d="M0 5.08h3.2V20h1.6V5.08H8L4 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconArrowTop = styled(Svg)(iconStyles);

import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.377 0L10 7.014 2.624 0 0 2.5 10 12l10-9.502z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconChevronDown = styled(Svg)(iconStyles);

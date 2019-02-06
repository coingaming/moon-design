import * as React from 'react';
import styled from '@emotion/styled';
import { iconStyles } from '../config/styles';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.73 13L13 14.146 6.5 20 0 14.148 1.271 13l5.23 4.712L11.729 13zm0-6L6.5 2.288 1.272 7 0 5.852 6.5 0 13 5.854 11.73 7z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const IconChevronUpDown = styled(Svg)(iconStyles);

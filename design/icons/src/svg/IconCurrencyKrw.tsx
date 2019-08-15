import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.126 16l-.687-4.151H4v-1.244h1.238l-.2-1.21H4V8.151h.837L4.15 4h1.89l.637 4.151h1.54L8.938 4h2.125l.703 4.151h1.556L13.942 4h1.89l-.686 4.151H16v1.244h-1.054l-.201 1.21H16v1.244h-1.456L13.858 16h-2.343l-.754-4.151h-1.54L8.486 16h-2.36zm3.698-7.849h.335l-.167-1.546-.168 1.546zm-2.778 2.454h.753L8 9.395H6.862l.184 1.21zm2.41 0h1.071l-.217-1.21h-.636l-.218 1.21zm2.745 0h.77l.167-1.21h-1.155l.218 1.21zm-4.804 2.924l.201-1.68h-.385l.184 1.68zm5.205 0l.185-1.68h-.402l.217 1.68z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyKrw = styled(Svg)<IconProps>(
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

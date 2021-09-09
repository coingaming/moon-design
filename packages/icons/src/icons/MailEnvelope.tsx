import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.822 15.753l-.272.42.272-.42zM6.5 11H6h.5zm11.678 4.753l-.272-.42.272.42zM23.5 23v-.5.5zm-15 0v.5-.5zm17-2h.5-.5zm-19 0H7h-.5zm17-12v.5V9zm-15 0v-.5.5zm5.594 6.334L6.772 10.58l-.544.838 7.322 4.753.544-.838zm4.356.838l7.322-4.753-.544-.838-7.322 4.753.544.838zm-4.9 0a4.5 4.5 0 004.9 0l-.544-.838a3.5 3.5 0 01-3.812 0l-.544.838zM23.5 22.5h-15v1h15v-1zM25 11v10h1V11h-1zM6 11v10h1V11H6zm17.5-2.5h-15v1h15v-1zM26 11a2.5 2.5 0 00-2.5-2.5v1A1.5 1.5 0 0125 11h1zM7 11a1.5 1.5 0 011.5-1.5v-1A2.5 2.5 0 006 11h1zm1.5 11.5A1.5 1.5 0 017 21H6a2.5 2.5 0 002.5 2.5v-1zm15 1A2.5 2.5 0 0026 21h-1a1.5 1.5 0 01-1.5 1.5v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const MailEnvelope = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]
);
export default MailEnvelope;

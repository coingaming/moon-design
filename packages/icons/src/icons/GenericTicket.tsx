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
      d="M4 10c0-1.105.86-2 1.92-2h20.16c1.06 0 1.92.895 1.92 2v2c0 .552-.462.983-.979 1.178-1.108.417-1.901 1.523-1.901 2.822 0 1.299.793 2.405 1.901 2.822.517.195.979.626.979 1.178v2c0 1.105-.86 2-1.92 2H5.92C4.86 24 4 23.105 4 22v-2c0-.552.462-.983.979-1.178C6.088 18.405 6.88 17.3 6.88 16c0-1.299-.792-2.405-1.901-2.822C4.462 12.983 4 12.552 4 12v-2z"
      stroke="#1A212A"
      strokeLinecap="round"
    />
    <path
      stroke="#1A212A"
      strokeLinecap="round"
      strokeDasharray="2.6 3.2"
      d="M10.5 8.5v15"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const GenericTicket = styled(Svg)<IconProps>(
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
export default GenericTicket;

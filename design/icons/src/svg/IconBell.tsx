import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.502 9.918a1.146 1.146 0 0 0 .419-1.561L6.94 9.5a1.146 1.146 0 0 0 1.561.418zm1.541-4.189a.573.573 0 0 1-.78-.209L8.12 3.54a2.852 2.852 0 0 0-3.39-1.276c-.011-.02-.007-.035-.019-.055A.573.573 0 0 0 3.931 2a.573.573 0 0 0-.21.78c.012.02.028.025.04.044a2.852 2.852 0 0 0-.59 3.574l1.143 1.98a.573.573 0 0 1-.21.78.573.573 0 0 0-.209.78.573.573 0 0 0 .781.21l5.938-3.429a.573.573 0 0 0 .21-.78.573.573 0 0 0-.781-.21z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconBell = styled(Svg)<IconProps>(
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

import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.313 19a2.382 2.382 0 0 0 2.374-2.375h-4.75A2.382 2.382 0 0 0 8.313 19zm7.124-5.938a1.191 1.191 0 0 1-1.187-1.187v-4.75a5.928 5.928 0 0 0-4.774-5.819c0-.047.024-.071.024-.119C9.5.534 8.966 0 8.312 0 7.66 0 7.125.534 7.125 1.188c0 .047.024.07.024.118a5.928 5.928 0 0 0-4.774 5.819v4.75c0 .653-.534 1.188-1.188 1.188-.653 0-1.187.534-1.187 1.187s.534 1.188 1.188 1.188h14.25c.653 0 1.187-.535 1.187-1.188 0-.653-.534-1.188-1.188-1.188z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconNotification = styled(Svg)<IconProps>(
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

import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.609 10L20 17.391 17.391 20 10 12.609 2.609 20 0 17.391 7.391 10 0 2.609 2.609 0 10 7.391 17.391 0 20 2.609z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconClose = styled(Svg)<IconProps>(
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

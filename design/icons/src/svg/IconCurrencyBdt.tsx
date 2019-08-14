import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 51 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.77 0c3.672 0 6.454.94 8.346 2.82 1.113 1.082 1.976 2.592 2.588 4.528.612 1.937.918 4.672.918 8.203v5.554H51v9.4H23.622v19.482c0 1.595.223 2.79.668 3.588.445.741 1.447 1.111 3.005 1.111 1.669 0 3.31-.37 4.924-1.11 1.614-.741 2.922-1.71 3.923-2.906 1.058-1.196 1.586-2.478 1.586-3.845 0-.513-.222-.997-.667-1.453-.446-.455-1.308-.683-2.588-.683-1.002 0-1.892.085-2.671.256l-1.336-8.715c2.004-.513 4.424-.77 7.262-.77 3.283 0 5.927.77 7.93 2.308 2.003 1.538 3.005 3.93 3.005 7.177 0 3.076-.696 5.81-2.087 8.203a18.667 18.667 0 01-5.509 5.981 27.238 27.238 0 01-7.512 3.675C30.884 63.6 28.268 64 25.709 64c-2.337 0-4.313-.285-5.927-.855-1.558-.57-2.81-1.31-3.756-2.221a16.83 16.83 0 01-1.753-2.136c-.5-.798-.918-1.909-1.252-3.333-.278-1.424-.417-3.332-.417-5.725V30.505H5.592v-9.4h7.012V15.98c0-2.165-.278-3.788-.835-4.87-.556-1.083-1.836-1.624-3.84-1.624-1.502 0-3.088.341-4.757 1.025L0 2.307C2.17 1.51 4.118.94 5.843.598 7.568.2 9.543 0 11.769 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyBdt = styled(Svg)<IconProps>(
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

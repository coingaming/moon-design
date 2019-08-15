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
      d="M7.308 4c.72 0 1.265.176 1.636.529.219.203.388.486.508.849s.18.876.18 1.538v1.041H15V9.72H9.632v3.652c0 .3.043.524.13.673.088.14.284.209.59.209.327 0 .65-.07.966-.209.316-.139.572-.32.769-.544.207-.225.31-.465.31-.721a.38.38 0 00-.13-.273c-.087-.085-.257-.128-.508-.128a2.57 2.57 0 00-.523.048l-.262-1.634c.393-.096.867-.144 1.424-.144.643 0 1.162.144 1.555.432.392.289.589.737.589 1.346 0 .577-.137 1.09-.41 1.538a3.566 3.566 0 01-1.08 1.122 5.449 5.449 0 01-3.011.913c-.458 0-.846-.053-1.162-.16a2.09 2.09 0 01-.737-.417 3.192 3.192 0 01-.343-.4 2.035 2.035 0 01-.246-.625 5.593 5.593 0 01-.082-1.074V9.72H6.097V7.957H7.47v-.961c0-.406-.054-.71-.163-.913-.11-.203-.36-.305-.753-.305a2.56 2.56 0 00-.933.193L5 4.433c.426-.15.807-.257 1.146-.32A5.415 5.415 0 017.308 4z"
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

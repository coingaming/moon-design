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
      d="M7.8 18.214a18.747 18.747 0 005.982 5.987m-1.503-8.01c-1.108 1.742-1.39 3.444-.567 4.257.83.819 2.549.501 4.289-.652m2.201-11.993a18.747 18.747 0 015.983 5.987m-7.733-1.525c1.63-.99 3.197-1.225 3.978-.455.76.751.577 2.262-.33 3.862m-6.318 2.54l4.187-4.108m-9.073 10.19c1.438.294 4.406.557 7.9-1.175a14.068 14.068 0 006.323-6.328c1.732-3.48 1.469-6.45 1.175-7.905a1.521 1.521 0 00-1.19-1.191c-1.453-.279-4.422-.542-7.9 1.19a14.068 14.068 0 00-6.323 6.328c-1.732 3.481-1.469 6.451-1.175 7.906a1.524 1.524 0 001.19 1.175z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportRugby = styled(Svg)<IconProps>(
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
export default SportRugby;

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
      d="M14.078 22.237a2.917 2.917 0 01-1.709.555m2.905.854a4.787 4.787 0 01-2.862.94 4.73 4.73 0 01-4.74-4.741 4.73 4.73 0 014.74-4.741c1.11 0 2.136.384 2.947 1.025m4.485-5.724c-.598.94-.897 1.837-.983 2.648-.256 2.008.556 3.631.556 4.485m-6.834-.299c1.239-3.032 3.545-5.937 5.809-6.706 1.666-.555 3.417-.555 4.655-.555m-9.967 2.364c-2.47-.546-4.365-2.622-4.365-2.622s2.475-2.956 5.551-3c1.752-.02 3.363.856 4.42 1.64m5.643 11.442a4.698 4.698 0 11-9.397 0 4.698 4.698 0 019.397 0z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportCasino = styled(Svg)<IconProps>(
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
export default SportCasino;

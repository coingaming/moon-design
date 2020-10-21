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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.336 19.79c.242-.96.37-1.964.37-2.997 0-5.223-3.279-9.678-7.889-11.421a4.45 4.45 0 00-8.634 0c-4.61 1.743-7.89 6.198-7.89 11.421 0 1.033.129 2.037.37 2.996a4.448 4.448 0 005.165 7.228A12.154 12.154 0 0015.5 29c2.46 0 4.754-.73 6.671-1.983a4.448 4.448 0 005.165-7.228zM13.052 6.447a2.448 2.448 0 114.896 0 2.448 2.448 0 01-4.896 0zM11.187 7.54a10.209 10.209 0 00-5.894 9.254c0 .726.076 1.434.22 2.116a4.448 4.448 0 014.747 6.645A10.155 10.155 0 0015.5 27c1.917 0 3.709-.528 5.24-1.446a4.448 4.448 0 014.747-6.645 10.209 10.209 0 00-5.674-11.37 4.45 4.45 0 01-8.627 0zM6.448 20.81a2.448 2.448 0 100 4.897 2.448 2.448 0 000-4.897zm15.655 2.449a2.448 2.448 0 114.897 0 2.448 2.448 0 01-4.896 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconShare = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconShare;

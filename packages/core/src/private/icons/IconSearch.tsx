import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M11.544 11.527a5.464 5.464 0 01-7.71 0 5.445 5.445 0 010-7.699 5.464 5.464 0 017.71 0 5.445 5.445 0 010 7.7m8.063 6.184l-5.614-5.635a7.641 7.641 0 001.385-4.4 7.64 7.64 0 00-2.252-5.428A7.672 7.672 0 007.69 0a7.672 7.672 0 00-5.437 2.249A7.641 7.641 0 000 7.678a7.641 7.641 0 002.252 5.429 7.672 7.672 0 005.437 2.249 7.672 7.672 0 004.406-1.384l5.614 5.635a1.344 1.344 0 001.898 0 1.339 1.339 0 000-1.895"
        id="icon-search_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      xlinkHref="#icon-search_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSearch = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconSearch;

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
      d="M13.21 14.31l2.596-1.496m-2.597 1.496v2.978m0-2.978l-2.582-1.496m5.179 0l2.582 1.496m-2.582-1.496V9.822m2.582 4.488v2.978m0-2.978l2.583-1.496m-2.583 4.474l-2.582 1.496m2.582-1.496l2.583 1.496m-5.165 0l-2.597-1.496m2.597 1.496v2.991m-2.597-4.487l-2.582 1.496m-.819-9.427l.819.465v2.992m0 0L8.03 14.31l-.804-.48m0 3.938l.804-.48 2.597 1.496m0 0v2.991l-.819.48m3.401 1.962v-.946l2.597-1.496m0 0l2.582 1.496v.946m3.401-1.976l-.818-.466v-2.991m0 0l2.596-1.496.819.48m-.014-3.938l-.804.48-2.597-1.496m0 0V9.823l.819-.466m-3.401-1.962v.931l-2.583 1.496m0 0l-2.597-1.495V7.38M8.095 25.109H27m-2.388-9.303a8.806 8.806 0 11-17.612 0 8.806 8.806 0 0117.612 0z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportFutsal = styled(Svg)<IconProps>(
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
export default SportFutsal;

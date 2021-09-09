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
      d="M13.638 16.075l2.01 1.922 3.348-4.464m-7.457-4.618a2.018 2.018 0 002.606-1.08c.698-1.631 3.012-1.631 3.71 0a2.018 2.018 0 002.606 1.08c1.648-.66 3.284.976 2.624 2.624a2.018 2.018 0 001.08 2.606c1.631.698 1.631 3.012 0 3.71a2.018 2.018 0 00-1.08 2.606c.66 1.648-.976 3.284-2.624 2.624a2.018 2.018 0 00-2.606 1.08c-.698 1.631-3.012 1.631-3.71 0a2.018 2.018 0 00-2.606-1.08c-1.648.66-3.284-.976-2.624-2.624a2.018 2.018 0 00-1.08-2.606c-1.631-.698-1.631-3.012 0-3.71a2.018 2.018 0 001.08-2.606c-.66-1.648.976-3.284 2.624-2.624z"
      stroke="currentColor"
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
const SecurityVerified = styled(Svg)<IconProps>(
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
export default SecurityVerified;

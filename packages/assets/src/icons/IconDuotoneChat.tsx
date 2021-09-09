import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        d="M16.352 15.51h-3.206v2.566a.32.32 0 01-.547.227L9.807 15.51H1.603C.72 15.51 0 14.79 0 13.908V3.648c0-.885.72-1.604 1.603-1.604h14.75c.883 0 1.603.72 1.603 1.603v10.26c0 .885-.72 1.604-1.604 1.604z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <path
        d="M15.19 13.467h3.207c.884 0 1.603-.72 1.603-1.604V1.604C20 .72 19.28 0 18.396 0H3.647c-.884 0-1.603.72-1.603 1.603v10.26c0 .885.72 1.604 1.603 1.604h8.204l2.792 2.792a.321.321 0 00.547-.227v-2.565zM18.398.64c.53 0 .961.432.961.962v10.26c0 .53-.43.962-.962.962H14.87a.32.32 0 00-.32.321v2.112l-2.338-2.339a.32.32 0 00-.227-.094H3.647a.963.963 0 01-.962-.961V1.604c0-.531.432-.963.962-.963h14.75zm-4.81 5.772a1.284 1.284 0 002.565 0c0-.708-.575-1.283-1.283-1.283-.707 0-1.282.575-1.282 1.283zm.641 0a.642.642 0 111.284.001.642.642 0 01-1.284-.001zm-4.489 0a1.284 1.284 0 002.565 0c0-.708-.575-1.283-1.282-1.283-.707 0-1.283.575-1.283 1.283zm.642 0a.642.642 0 111.284.001.642.642 0 01-1.284-.001zm-4.49 0a1.284 1.284 0 002.565 0c0-.708-.574-1.283-1.282-1.283-.707 0-1.282.575-1.282 1.283zm.642 0a.642.642 0 111.284.001.642.642 0 01-1.284-.001z"
        fill="currentColor"
      />
    </g>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDuotoneChat = styled(Svg)<IconProps>(
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
export default IconDuotoneChat;

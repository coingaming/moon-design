import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      d="M18.897 0H1.103C.494 0 0 .494 0 1.103v17.794C0 19.506.494 20 1.103 20h9.587v-7.735H8.086V9.238h2.604V7.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H15.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V20h5.104c.609 0 1.103-.494 1.103-1.103V1.103C20 .494 19.506 0 18.897 0z"
      fill="#4267B2"
    />
    <path
      d="M13.793 20v-7.735h2.61l.39-3.027h-3V7.31c0-.876.245-1.469 1.5-1.469h1.603V3.138a22.14 22.14 0 00-2.327-.117c-2.307 0-3.88 1.407-3.88 3.99v2.227H8.087v3.027h2.604V20h3.103z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconFacebook = styled(Svg)<IconProps>(
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
export default IconFacebook;

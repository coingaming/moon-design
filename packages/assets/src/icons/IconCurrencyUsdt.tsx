import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12c0-6.627-5.373-12-12-12C5.372 0 0 5.371 0 12s5.373 12 12 12 12-5.373 12-12zM13.481 8.616v1.785h.001c3.312.154 5.802.81 5.802 1.597 0 .786-2.49 1.443-5.802 1.596v5.718H10.53v-5.718c-3.317-.153-5.813-.81-5.813-1.598 0-.787 2.495-1.444 5.813-1.596V8.616H6.447v-2.72h11.116v2.72h-4.082zm.001 4.492v.001c2.925-.131 5.11-.642 5.11-1.251 0-.609-2.184-1.12-5.11-1.25v1.993c-.083.008-.541.046-1.451.046a22.7 22.7 0 01-1.5-.046v-1.993c-2.93.13-5.119.64-5.119 1.25 0 .611 2.188 1.122 5.12 1.252v-.003c.188.01.724.032 1.486.032.953 0 1.38-.026 1.464-.031z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyUsdt = styled(Svg)<IconProps>(
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
export default IconCurrencyUsdt;

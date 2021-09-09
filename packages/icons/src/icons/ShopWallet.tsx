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
      d="M6.5 10.5H6h.5zm0 11H7h-.5zm15 4V25v.5zm-11 0v.5-.5zm15-15H25h.5zm0 11h.5-.5zm-4-15V7v-.5zm-11 0V7v-.5zm15 13.154v.5a.5.5 0 00.5-.5h-.5zm-5.846 0v.5-.5zm5.846-7.308h.5v-.5h-.5v.5zm-5.846 0v-.5.5zm.23 3.654a.23.23 0 01-.23.23v1c.68 0 1.23-.55 1.23-1.23h-1zm-.23.23a.23.23 0 01-.23-.23h-1c0 .68.55 1.23 1.23 1.23v-1zm-.23-.23a.23.23 0 01.23-.23v-1c-.68 0-1.23.55-1.23 1.23h1zm.23-.23a.23.23 0 01.23.23h1c0-.68-.55-1.23-1.23-1.23v1zM6 10.5v11h1v-11H6zM21.5 25h-11v1h11v-1zM25 10.5v11h1v-11h-1zM21.5 6h-11v1h11V6zm4.5 4.5A4.5 4.5 0 0021.5 6v1a3.5 3.5 0 013.5 3.5h1zm-19 0A3.5 3.5 0 0110.5 7V6A4.5 4.5 0 006 10.5h1zm-1 11a4.5 4.5 0 004.5 4.5v-1A3.5 3.5 0 017 21.5H6zM21.5 26a4.5 4.5 0 004.5-4.5h-1a3.5 3.5 0 01-3.5 3.5v1zm4-6.846h-5.846v1H25.5v-1zm-.5-6.808v7.308h1v-7.308h-1zm.5-.5h-5.846v1H25.5v-1zM16.5 16a3.154 3.154 0 013.154-3.154v-1A4.154 4.154 0 0015.5 16h1zm-1 0a4.154 4.154 0 004.154 4.154v-1A3.154 3.154 0 0116.5 16h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const ShopWallet = styled(Svg)<IconProps>(
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
export default ShopWallet;

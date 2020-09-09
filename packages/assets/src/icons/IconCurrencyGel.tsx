import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 16.908h3.97c-1.092-.638-2.018-1.522-2.78-2.65C.448 13.113.075 11.68.075 9.963c0-1.881.488-3.452 1.464-4.711.976-1.277 2.349-2.12 4.119-2.528V0h1.662v2.503a13.05 13.05 0 011.886.025V0h1.662v2.748c.662.148 1.34.36 2.035.638v3.117a14.652 14.652 0 00-2.035-.638v4H9.205V5.62a9.832 9.832 0 00-.968-.05c-.314 0-.62.025-.918.074v4.221H5.657V6.258c-1.24.818-1.86 2.167-1.86 4.049 0 1.227.255 2.34.768 3.337.53.998 1.315 1.792 2.357 2.38 1.042.59 2.332.884 3.87.884h2.333V20H0v-3.092z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyGel = styled(Svg)<IconProps>(
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
export default IconCurrencyGel;

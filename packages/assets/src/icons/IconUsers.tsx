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
      d="M22.066 24.005h0a2.708 2.708 0 01-1.628 3.033c-1.836.751-4.652 1.112-8.453 1.112-3.803 0-6.618-.36-8.455-1.112a2.703 2.703 0 01-1.628-3.034h0l.497-2.489 19.667 2.49zm0 0l-.497-2.49s0 0 0 0a4.623 4.623 0 00-4.134-3.701h0m4.63 6.19l-4.63-6.19m0 0c-1.457-.125-3.273-.186-5.45-.186s-3.995.061-5.452.186h0m10.902 0H6.533m0 0a4.611 4.611 0 00-2.684 1.16m2.684-1.16l-2.684 1.16m0 0a4.623 4.623 0 00-1.45 2.54l1.45-2.54zm8.284-14.122V4.85h-.15 0a5.252 5.252 0 00-3.712 1.542 5.268 5.268 0 00-1.54 3.719v0c.002 1.395.555 2.732 1.54 3.718a5.252 5.252 0 003.712 1.543h0a5.252 5.252 0 003.714-1.542 5.268 5.268 0 001.54-3.719h0a5.268 5.268 0 00-1.54-3.719 5.253 5.253 0 00-3.564-1.54zm-.15 8.941a3.683 3.683 0 010-7.365 3.682 3.682 0 013.677 3.683 3.682 3.682 0 01-3.677 3.682zM22.34 8.687v-.004h-.15a3.982 3.982 0 00-3.976 3.982 3.983 3.983 0 003.976 3.984 3.982 3.982 0 003.977-3.983c0-2.147-1.7-3.9-3.827-3.98zm-.15 8.94v0h-.006a.788.788 0 000 1.577l.006-.15v.15c1.69 0 3.377.138 5.045.41h0a1.125 1.125 0 01.902.804h0l.397 1.395v.002a.99.99 0 01.017.066c.125.572-.266 1.18-.895 1.352-1.207.327-2.581.58-3.668.699h0-.004a.788.788 0 00.173 1.569h.005a27.21 27.21 0 003.906-.746h0c1.404-.38 2.336-1.78 2.022-3.212v-.002a3.265 3.265 0 00-.04-.159h0l-.397-1.395s0 0 0 0a2.706 2.706 0 00-2.166-1.93h0a33.022 33.022 0 00-5.297-.43zm-2.348 7.951h0c-1.593.652-4.214.994-7.858.994-3.643 0-6.264-.342-7.857-.994a1.126 1.126 0 01-.678-1.265h0l.495-2.49s0 0 0 0a3.046 3.046 0 012.724-2.437h0c1.406-.12 3.178-.18 5.316-.18 2.14 0 3.912.06 5.317.179a3.038 3.038 0 012.724 2.439h0l.497 2.49a1.13 1.13 0 01-.68 1.264zm-7.858-6.523c-2.14 0-3.917.061-5.329.181h10.659c-1.41-.12-3.188-.18-5.33-.18zm10.206-3.983a2.406 2.406 0 010-4.811 2.405 2.405 0 010 4.81z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.3}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconUsers = styled(Svg)<IconProps>(
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
export default IconUsers;

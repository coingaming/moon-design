import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.31 10.927L14.864 6.58c-.25-.319-.564-.575-.878-.639-.25-.063-.502 0-.753.192-.25.192-.376.447-.439.767l2.258 4.09c1.568 2.875 1.067 5.622-1.442 8.178-.188.192-.314.32-.502.448a4.537 4.537 0 002.822-1.47c2.572-2.62 2.446-5.431 1.38-7.22zm-3.01.51l-2.258-4.025c-.188-.255-.44-.447-.753-.511-.188-.064-.376 0-.564.128-.377.32-.502.767-.188 1.342l1.128 2.492a.504.504 0 01-.125.51c-.125.129-.376.065-.502-.063L5.143 5.24a.86.86 0 00-1.192 0 .828.828 0 00-.25.639c0 .255.062.447.25.575l3.512 3.578a.342.342 0 01.063.511.328.328 0 01-.502.064s-.062 0-.062-.064L3.449 7.03 2.446 6.006c-.376-.383-.878-.383-1.192 0-.313.32-.313.895 0 1.214l1.004 1.023L5.77 11.82c.125.128.125.383 0 .575-.125.192-.376.128-.564 0L1.693 8.818a.86.86 0 00-1.191 0 .788.788 0 00-.251.575c0 .256.063.447.25.575l1.506 1.534 2.195 2.236c.126.192.126.383-.063.511-.125.128-.313.128-.501 0l-2.195-2.236a.797.797 0 00-.628-.256c-.439 0-.815.384-.815.83 0 .256.063.448.25.64l4.266 4.345c2.32 2.364 5.832 3.578 8.467.895 2.195-2.237 2.634-4.537 1.317-7.03zM6.146 4.92c.063-.192.126-.383.314-.575a1.129 1.129 0 011.505 0L9.972 6.39c-.502.511-.69 1.214-.502 1.917L6.146 4.92zm.941-4.6L5.895.894l1.506 1.789L7.087.319zm5.268.575L11.164.319l-.251 2.365 1.442-1.79zm-3.26 1.214L8.466 0H9.72l-.627 2.109z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconClaps = styled(Svg)<IconProps>(
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
export default IconClaps;

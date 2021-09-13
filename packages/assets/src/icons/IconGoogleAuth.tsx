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
      d="M3.168 16.948h0l.004.003c1.798 1.707 4.09 2.549 6.834 2.549 1.408 0 2.76-.206 4.052-.62 2.415-.774 3.442-3.274 3.442-5.605v-.149a4.198 4.198 0 00-4.198-4.198h-2.356a1.843 1.843 0 000 3.685h2.535v.32c0 1.226-.594 2.297-1.595 2.58a6.887 6.887 0 01-1.88.252c-1.636 0-2.913-.54-3.88-1.6-.963-1.073-1.456-2.432-1.456-4.115 0-1.772.504-3.14 1.472-4.155.991-1.04 2.225-1.56 3.738-1.56 1.357 0 2.538.34 3.559 1.011.76.5 1.845.59 2.618-.074.816-.703.957-2.046-.003-2.769a9.22 9.22 0 00-2.19-1.221A10.441 10.441 0 009.907.5c-2.814 0-5.116.886-6.851 2.69h0l-.002.001C1.343 4.987.5 7.288.5 10.05c0 2.845.877 5.163 2.668 6.898z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconGoogleAuth =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconGoogleAuth;

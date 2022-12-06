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
    <g filter="url(#TypeMove_svg__filter0_d_4798_4675)">
      <path
        d="M16 8l-8 8 5.23 5.22L16 24l8-8-8-8zm-2 11h-1v-1h1v1zm0-5h-1v-1h1v1zm5 5h-1v-1h1v1zm-1-6h1v1h-1v-1z"
        fill="#fff"
      />
      <path
        d="M22.56 15.99L20 13.18v1.83h-8.01v-1.83l-2.57 2.81 2.57 2.81v-1.81H20v1.81l2.56-2.81z"
        fill="currentColor"
      />
      <path
        d="M16.98 16h.01v-4h1.81L16 9.43 13.19 12H15v8h-1.82l2.8 2.57L18.79 20h-1.81v-4z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="TypeMove_svg__filter0_d_4798_4675"
        x={-2}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4798_4675"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4798_4675"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TypeMove =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
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
export default TypeMove;

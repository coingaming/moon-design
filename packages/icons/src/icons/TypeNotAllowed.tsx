import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#TypeNotAllowed_svg__filter0_d_4798_4680)">
      <path
        d="M17 13.59a9 9 0 109 9 9.01 9.01 0 00-9-9zm-3.212 3.79A6.073 6.073 0 0117 16.431a6.168 6.168 0 016.158 6.158 6.073 6.073 0 01-.948 3.211l-8.422-8.422zM17 28.747a6.168 6.168 0 01-6.158-6.158 6.1 6.1 0 01.947-3.24l8.47 8.47a6.101 6.101 0 01-3.24.947"
        fill="url(#TypeNotAllowed_svg__paint0_linear_4798_4680)"
      />
      <path d="M7 16.02V0l11.59 11.62h-7.04l-.15.12L7 16.02z" fill="#fff" />
      <path
        d="M8 2.41V13.6l2.97-2.87.16-.14h5.03L8 2.41z"
        fill="currentColor"
      />
    </g>
    <defs>
      <linearGradient
        id="TypeNotAllowed_svg__paint0_linear_4798_4680"
        x1={17}
        y1={13.59}
        x2={17}
        y2={31.59}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F1F1" />
        <stop offset={1} stopColor="#D6D6D6" />
      </linearGradient>
      <filter
        id="TypeNotAllowed_svg__filter0_d_4798_4680"
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
          result="effect1_dropShadow_4798_4680"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4798_4680"
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
const TypeNotAllowed =
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
export default TypeNotAllowed;

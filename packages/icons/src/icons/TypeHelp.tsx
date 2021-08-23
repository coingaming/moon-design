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
    <g filter="url(#TypeHelp_svg__filter0_d)">
      <path
        clipRule="evenodd"
        d="M14.752 19.803h2.473v2.395h-2.474v-2.395z"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <path
        clipRule="evenodd"
        d="M13.315 10.881c.606-.488 1.73-.875 2.686-.88 1.514-.01 2.31.455 3.026 1.15.688.67 1.004 1.352.953 2.4-.041.853-.267 1.348-.604 1.811-.198.281-.577.641-1.138 1.078l-.533.43c-.33.32-.474.463-.6.82-.094.266-.116.506-.121.922h-1.977c-.003-1.016-.02-1.375.09-1.813.107-.426.502-.734 1.063-1.17l.568-.447c.188-.14.494-.414.608-.58.208-.287.334-.683.35-1.026a1.53 1.53 0 00-.343-1.027c-.312-.39-.703-.638-1.465-.604a2.014 2.014 0 00-1.342.622c-.33.34-.474.904-.498 1.35H12.06c.062-1.484.354-2.312 1.254-3.036v0z"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M15.012 19.956h1.98v1.984h-1.98v-1.984zM13.515 10.86c.697-.448 1.342-.793 2.426-.793 1.617 0 1.983.242 2.812.904.75.599 1.207 1.376 1.207 2.48 0 .677-.364 1.408-.702 1.87-.197.282-.459.56-1.02.999l-.612.47c-.3.234-.598.588-.697.9-.062.198-.058.623-.062 1.039h-1.86c.031-.88.034-1.605.169-1.941.135-.336.483-.723 1.044-1.16l.547-.446c.187-.14.475-.354.589-.521.208-.286.389-.701.389-1.045 0-.396.022-.676-.209-1.002-.27-.378-.516-.794-1.678-.814-.905-.016-1.291.447-1.542.847-.252.402-.338.858-.338 1.29H12c.063-1.484.541-2.456 1.515-3.076z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="TypeHelp_svg__filter0_d"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TypeHelp =
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
export default TypeHelp;

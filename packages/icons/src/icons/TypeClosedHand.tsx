import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#TypeClosedHand_svg__filter0_d_4798_4678)">
      <path
        d="M11.164 10.815c.51-.19 1.52-.074 1.785.5.266.573.425 1.317.436 1.137a6.628 6.628 0 01.138-1.68 1.189 1.189 0 01.733-.732c.316-.101.652-.123.978-.064.325.072.612.261.807.531.244.621.384 1.278.415 1.945.03-.57.13-1.134.297-1.68.182-.245.44-.424.733-.51a2.987 2.987 0 011.063 0c.287.098.539.28.722.521.225.564.361 1.159.404 1.764 0 .149.074-.414.308-.786a1.065 1.065 0 112.019.68v2.412c-.041.621-.126 1.24-.255 1.849a6.44 6.44 0 01-.701 1.466 7.681 7.681 0 00-1.265 1.934c-.083.347-.12.705-.106 1.062 0 .33.043.659.127.978a5.972 5.972 0 01-1.306 0c-.415-.064-.935-.893-1.063-1.148a.405.405 0 00-.733 0c-.234.404-.744 1.137-1.116 1.18-.7.084-2.178 0-3.336 0 0 0 .202-1.063-.234-1.446-.435-.382-.882-.828-1.222-1.126l-.881-.977A4.76 4.76 0 018.593 16.5c-.223-.999-.202-1.488 0-1.88.218-.307.539-.525.903-.617.309-.055.626-.033.925.064.208.087.388.23.52.414.245.33.33.489.234.127-.096-.36-.35-.626-.468-1.062a4.847 4.847 0 01-.403-1.615 1.212 1.212 0 01.882-1.063"
        fill="#fff"
      />
      <path
        d="M11.164 10.815c.51-.19 1.52-.074 1.785.5.266.573.425 1.317.436 1.137a6.628 6.628 0 01.138-1.68 1.189 1.189 0 01.733-.732c.316-.101.652-.123.978-.064.325.072.612.261.807.531.244.621.384 1.278.415 1.945.03-.57.13-1.134.297-1.68.182-.245.44-.424.733-.51a2.987 2.987 0 011.063 0c.287.098.539.28.722.521.225.564.361 1.159.404 1.764 0 .149.074-.414.308-.786a1.065 1.065 0 112.019.68v2.412c-.041.621-.126 1.24-.255 1.849a6.44 6.44 0 01-.701 1.466 7.681 7.681 0 00-1.265 1.934c-.083.347-.12.705-.106 1.062 0 .33.043.659.127.978a5.972 5.972 0 01-1.306 0c-.415-.064-.935-.893-1.063-1.148a.405.405 0 00-.733 0c-.234.404-.744 1.137-1.116 1.18-.7.084-2.178 0-3.336 0 0 0 .202-1.063-.234-1.446-.435-.382-.882-.828-1.222-1.126l-.881-.977A4.76 4.76 0 018.593 16.5c-.223-.999-.202-1.488 0-1.88.218-.307.539-.525.903-.617.309-.055.626-.033.925.064.208.087.388.23.52.414.245.33.33.489.234.127-.096-.36-.35-.626-.468-1.062a4.847 4.847 0 01-.403-1.615 1.212 1.212 0 01.86-1.116v0z"
        stroke="currentColor"
        strokeWidth={0.75}
        strokeLinejoin="round"
      />
      <path
        d="M18.602 19.04v-3.677M16.456 19.05l-.01-3.687M14.341 15.395l.022 3.634"
        stroke="currentColor"
        strokeWidth={0.75}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="TypeClosedHand_svg__filter0_d_4798_4678"
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
          result="effect1_dropShadow_4798_4678"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4798_4678"
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
const TypeClosedHand =
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
export default TypeClosedHand;

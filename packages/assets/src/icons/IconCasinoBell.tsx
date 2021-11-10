import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.27 18.11a.605.605 0 01-.555-.365.586.586 0 01-.045-.227V12.18c0-4.252-3.518-7.858-7.815-7.778a7.706 7.706 0 00-5.337 2.274A7.53 7.53 0 002.33 12v5.518a.587.587 0 01-.37.547.606.606 0 01-.23.046 1.096 1.096 0 00-.729.25 1.072 1.072 0 00-.377.665 1.02 1.02 0 00.26.81 1.044 1.044 0 00.788.341h16.655a1.053 1.053 0 00.784-.343 1.029 1.029 0 00.259-.808 1.073 1.073 0 00-.376-.663 1.096 1.096 0 00-.725-.252z"
      fill="url(#icon-casino-bell_svg__paint0_linear)"
    />
    <path
      opacity={0.7}
      d="M9.998 24a2.999 2.999 0 002.101-.858 2.931 2.931 0 00.87-2.076H7.03c0 .778.313 1.524.87 2.075.556.55 1.31.859 2.098.859z"
      fill="url(#icon-casino-bell_svg__paint1_linear)"
    />
    <path
      d="M18.413 18.11H1.587a.957.957 0 00-.962.952v.164c0 .525.43.951.962.951h16.826a.957.957 0 00.962-.951v-.164a.957.957 0 00-.962-.951z"
      fill="url(#icon-casino-bell_svg__paint2_linear)"
    />
    <path
      d="M14.523 11.848a1.4 1.4 0 100-2.802 1.4 1.4 0 000 2.802zM10.66 23.322a.658.658 0 00.662-.654.658.658 0 00-.662-.654.658.658 0 00-.662.654c0 .361.296.654.662.654z"
      fill="#fff"
    />
    <path
      d="M9.998 5.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
      fill="url(#icon-casino-bell_svg__paint3_linear)"
    />
    <path
      d="M11.306 2.457a.694.694 0 100-1.388.694.694 0 000 1.388z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="icon-casino-bell_svg__paint0_linear"
        x1={14.504}
        y1={2.996}
        x2={4.501}
        y2={19.706}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.052} stopColor="#CACEEE" />
        <stop offset={1} stopColor="#CFD3F1" stopOpacity={0.2} />
      </linearGradient>
      <linearGradient
        id="icon-casino-bell_svg__paint1_linear"
        x1={6.5}
        y1={21}
        x2={8.372}
        y2={26.562}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6C570" />
        <stop offset={1} stopColor="#F4E1AC" stopOpacity={0.5} />
      </linearGradient>
      <linearGradient
        id="icon-casino-bell_svg__paint2_linear"
        x1={-4.98}
        y1={20.177}
        x2={-0.101}
        y2={28.173}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.052} stopColor="#CCBCE4" />
        <stop offset={1} stopColor="#D3C1F2" stopOpacity={0.3} />
      </linearGradient>
      <linearGradient
        id="icon-casino-bell_svg__paint3_linear"
        x1={8.115}
        y1={5.135}
        x2={12.527}
        y2={2.041}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.052} stopColor="#C9CDF4" />
        <stop offset={1} stopColor="#CDCCF8" stopOpacity={0.2} />
      </linearGradient>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCasinoBell =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconCasinoBell;

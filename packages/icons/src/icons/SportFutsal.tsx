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
      d="M7.2 25H27M12.329 11.952s-.951 2.15-1.096 3.515c0 0 1.323 1.778 2.543 2.833l3.7-.807s.91-1.592 1.057-3.547m-6.204-1.994c2.005-.744 3.741-.827 3.741-.827m-3.741.827c-1.089-1.11-2.495-1.564-2.495-1.564m8.699 3.558s-.974-1.787-2.463-2.82m2.463 2.82l2.49-.64m-4.953-2.18l1.014-2.275m3.94 4.455s-.011-1.974-.704-3.08c0 0-.59-.941-3.236-1.375m3.94 4.455s1.135.98 1.409 2.981c0 0-.51 3.667-3.68 4.135M17.083 8.851c-.896-1.482-2.591-1.838-2.591-1.838m-3.096.37s-1.218 1.433-1.563 3.005m0 0s-2.025 1.065-2.631 2.456c0 0-.098 1.475.756 3.154l3.274-.532M7.959 16s-.923 1.638-.661 3.113c0 0 .799 2.109 2.425 2.895m0 0s1.543.096 3.225-.538m-3.225.538s-.248.79-.088 1.865m3.313-2.403s.483-2.44.827-3.171m-.827 3.171s1.903 1.254 3.006 1.337M5.664 12.6s.555-.05 1.535.075m-1.642 6.447l1.694-.117m8.703 3.8s2.164-.937 2.798-2.384m-2.798 2.385s.041 1.386-.103 2.002m2.901-4.387s-.703-2.136-1.274-2.93m3.423 1.874s.466.79.206 2.157M23 16a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportFutsal =
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
export default SportFutsal;

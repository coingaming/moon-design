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
      d="M14.236 11.727s-1.004 2.27-1.157 3.71c0 0 1.397 1.877 2.685 2.99l3.905-.85s.96-1.681 1.116-3.745c0 0-1.028-1.887-2.6-2.978.001 0-1.832.088-3.95.873zm0 0c-1.15-1.171-2.634-1.651-2.634-1.651m9.183 3.756l2.628-.675m0 0s-.01-2.085-.742-3.252c0 0-.623-.993-3.415-1.452m4.157 4.704s1.2 1.033 1.488 3.146c0 0-.538 3.87-3.885 4.365m-1.76-12.215l-1.07 2.401m1.07-2.4c-.946-1.565-2.736-1.94-2.736-1.94m-3.268.39s-1.286 1.513-1.65 3.172m0 0S9.466 11.2 8.825 12.668c0 0-.103 1.558.799 3.33l3.455-.562M9.624 16s-.975 1.729-.699 3.286c0 0 .844 2.226 2.56 3.055 0 0 1.63.102 3.405-.567 0 0 .51-2.576.873-3.347M7.2 12.412s.586-.052 1.62.08m-1.733 6.805l1.788-.123m2.61 3.167s-.263.834-.094 1.97m3.499-2.537s2.007 1.324 3.172 1.41c0 0 2.284-.989 2.953-2.516m0 0s-.742-2.255-1.345-3.092m3.613 1.977s.492.833.218 2.276m-5.44 1.356s.044 1.463-.109 2.114M25.5 16a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSoccer =
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
export default SportSoccer;

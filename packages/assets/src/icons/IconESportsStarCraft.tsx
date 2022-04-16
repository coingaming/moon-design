import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.17 8.132c0-.617.717-.883.717-.883h10.676l-2.607 3.047-1.108-1.028H2.169V8.132zM13.787 19.074s.515 1.684-.945 1.684H.97l2.662-2.936a2.63 2.63 0 001.731.778h4.258L2.333 9.736h3.695l7.759 9.338zM27 7.074H16.449l-2.155 2.28h8.662l.446.856L27 7.074zM24.086 19.636c-7.906.191-5.873-9.903-5.873-9.903h-3.725s-1.878 4.313.155 7.648c3.858 6.333 9.731 2.244 9.731 2.244l-.288.011z"
      fill="#0070FF"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsStarCraft =
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
export default IconESportsStarCraft;

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
      d="M7.265 15.91v11.44a1.21 1.21 0 001.215 1.088h17.43a.991.991 0 00.964-1.089V15.911m-19.609 0h19.609m-19.609 0l-.357-1.756m19.966 1.756l1.116-8.75a.506.506 0 00-.468-.659H11.778m.39 16.49a1.634 1.634 0 001.634-1.635v-.544a1.634 1.634 0 00-3.268 0v.544a1.634 1.634 0 001.634 1.634zm0 0c.926 0 2.723.457 2.723 1.633v1.09m-2.723-2.724c-.926 0-2.724.458-2.724 1.634v1.09m7.081-6.536h1.63m-1.63 1.634h2.99m1.912 0h2.991m-11.161-7.626h7.08m-3.812 10.35h1.63M16.52 25.17h2.724m2.183 0h2.991"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M6.62 5.243v3.334m0 1.65v.641m-5-2.612V4.931a2.5 2.5 0 012.5-2.5h5a2.5 2.5 0 012.5 2.5v3.325c0 2.247-1.547 4.142-3.62 5.366a2.715 2.715 0 01-2.758 0c-2.074-1.224-3.621-3.12-3.621-5.366z"
      stroke="currentColor"
      strokeWidth={0.833}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityPassportAlert =
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
export default SecurityPassportAlert;

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
    <path
      d="M13.185 17.504l2.33-3.368v3.368h-2.33zm-4.764-.944h0l-.004.004a4.894 4.894 0 00-.917 2.868v1.027c0 .523.2.982.572 1.355a1.87 1.87 0 001.356.573h6.088v1.328c0 .523.199.983.572 1.356a1.87 1.87 0 001.355.572h1.904c.523 0 .983-.2 1.356-.572a1.87 1.87 0 00.572-1.356v-1.328h.577c.523 0 .983-.2 1.356-.573a1.87 1.87 0 00.572-1.355v-1.027c0-.523-.2-.983-.572-1.356a1.87 1.87 0 00-1.356-.572h-.577V8.285c0-.523-.2-.983-.572-1.356a1.87 1.87 0 00-1.356-.572h-1.904c-1.111 0-2.014.46-2.66 1.36v.001L8.42 16.56zm12.854 5.55v.001zm0-4.331v0s0 .001 0 0z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const Other43Free =
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
export default Other43Free;

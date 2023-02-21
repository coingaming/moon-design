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
      d="M11.683 11.126a.5.5 0 10-.7-.714l.7.714zM7.427 14.6l-.35-.357.35.357zm3.556 6.988a.5.5 0 00.7-.714l-.7.714zM7.427 17.4l-.35.357.35-.357zm13.717-6.863a.5.5 0 10-.7.714l.7-.714zm3.428 4.063l.35-.357-.35.357zm-4.129 6.149a.5.5 0 00.7.714l-.7-.714zm4.129-3.349l.35.357-.35-.357zm-5.678-9.768a.5.5 0 10-.965-.264l.965.264zm-5.631 16.736a.5.5 0 00.964.264l-.964-.264zm-2.28-13.956l-3.906 3.83.7.715 3.906-3.83-.7-.715zm.7 10.462l-3.906-3.83-.7.713 3.906 3.83.7-.713zm-4.606-6.631a2.454 2.454 0 000 3.514l.7-.713a1.454 1.454 0 010-2.087l-.7-.714zm13.366-2.992l3.778 3.706.7-.714-3.777-3.706-.7.714zm.7 10.212l3.779-3.706-.7-.714-3.779 3.706.7.714zm3.078-6.507c.59.578.59 1.51 0 2.087l.7.714a2.454 2.454 0 000-3.514l-.7.713zM17.93 7.369l-4.666 17 .964.264 4.667-17-.965-.264z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareCode =
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
export default SoftwareCode;

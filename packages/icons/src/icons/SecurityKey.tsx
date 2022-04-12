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
      d="M22.472 8.717l.35.357-.35-.357zm-1.526 1.498l-.35-.356.35.356zm1.25 3.33a.5.5 0 10.7-.714l-.7.713zm-1.25-1.929l.35-.357-.35.357zm4.204-.97a.5.5 0 10.7-.714l-.7.713zM23.9 8.716l-.35.357.35-.357zm.584-1.36a.5.5 0 10-.7-.714l.7.714zm-8.812 7.248a.5.5 0 00.7.713l-.7-.713zm6.45-6.245L20.596 9.86l.7.713 1.526-1.498-.7-.714zm.775 4.47l-1.601-1.57-.7.713 1.6 1.571.7-.713zm2.953-2.898l-1.6-1.572-.7.714 1.6 1.571.7-.713zm-3.028-.858a.523.523 0 01.727 0l.7-.714a1.523 1.523 0 00-2.127 0l.7.714zm-2.226.785a1.478 1.478 0 000 2.114l.7-.714a.478.478 0 010-.687l-.7-.713zm-3.31 9.603c0 2.773-2.294 5.038-5.143 5.038v1c3.383 0 6.142-2.695 6.142-6.038h-1zM12.142 24.5C9.293 24.5 7 22.235 7 19.462H6c0 3.343 2.759 6.038 6.143 6.038v-1zM7 19.462c0-2.774 2.294-5.039 5.143-5.039v-1C8.759 13.423 6 16.118 6 19.462h1zm5.143-5.039c2.849 0 5.142 2.265 5.142 5.039h1c0-3.344-2.759-6.039-6.142-6.039v1zm11.64-7.78l-8.111 7.962.7.713 8.112-7.961-.7-.714z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityKey =
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
export default SecurityKey;

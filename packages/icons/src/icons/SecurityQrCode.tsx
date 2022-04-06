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
      d="M15.252 13.253a.5.5 0 101 0h-1zm1-3.457a.5.5 0 00-1 0h1zm-.375 9.815v-.5h-.5v.5h.5zm3.011 0v.5h.5v-.5h-.5zm-3.01-4.197h.5v-.5h-.5v.5zm-5.102.623a.5.5 0 000-1v1zm-1.72-1a.5.5 0 100 1v-1zm10.693 1a.5.5 0 000-1v1zm-1.721-1a.5.5 0 100 1v-1zm4.916 1a.5.5 0 100-1v1zm-1.72-1a.5.5 0 100 1v-1zM9.117 18.5V18h-.5v.5h.5zm4.302 0h.5V18h-.5v.5zm0 4.321v.5h.5v-.5h-.5zm-4.302 0h-.5v.5h.5v-.5zm0-13.765v-.5h-.5v.5h.5zm4.302 0h.5v-.5h-.5v.5zm0 4.32v.5h.5v-.5h-.5zm-4.302 0h-.5v.5h.5v-.5zm9.403-4.32v-.5h-.5v.5h.5zm4.302 0h.5v-.5h-.5v.5zm0 4.32v.5h.5v-.5h-.5zm-4.302 0h-.5v.5h.5v-.5zM11 6.5a.5.5 0 000-1v1zM5.5 11a.5.5 0 001 0h-1zM11 26.5a.5.5 0 000-1v1zM6.5 21a.5.5 0 00-1 0h1zM21 5.5a.5.5 0 000 1v-1zm4.5 5.5a.5.5 0 001 0h-1zM21 25.5a.5.5 0 000 1v-1zm5.5-4.5a.5.5 0 00-1 0h1zm-10.248-7.747V9.796h-1v3.457h1zm.125 9.691v-3.333h-1v3.333h1zm-.5-2.833h3.011v-1h-3.01v1zm3.511-.5v-1.728h-1v1.728h1zm2.065-1.111v-1.728h-1V18.5h1zm1.77 2.778v-3.025h-1v3.025h1zm-1.77 1.666v-1.728h-1v1.728h1zm-8.157-7.03h2.581v-1h-2.581v1zm2.081-.5v2.53h1v-2.53h-1zm-4.6-.377H9.055v1h1.72v-1zm8.972 0h-1.721v1h1.72v-1zm3.195 0h-1.72v1h1.72v-1zM9.117 19h4.302v-1H9.117v1zm3.802-.5v4.321h1V18.5h-1zm.5 3.821H9.117v1h4.302v-1zm-3.802.5V18.5h-1v4.321h1zm-.5-13.265h4.302v-1H9.117v1zm3.802-.5v4.32h1v-4.32h-1zm.5 3.82H9.117v1h4.302v-1zm-3.802.5v-4.32h-1v4.32h1zm8.903-3.82h4.302v-1H18.52v1zm3.802-.5v4.32h1v-4.32h-1zm.5 3.82H18.52v1h4.302v-1zm-3.802.5v-4.32h-1v4.32h1zM7.667 6.5H11v-1H7.667v1zM6.5 11V7.667h-1V11h1zm1.167-5.5C6.47 5.5 5.5 6.47 5.5 7.667h1c0-.645.522-1.167 1.167-1.167v-1zm0 21H11v-1H7.667v1zM5.5 21v3.333h1V21h-1zm2.167 4.5A1.167 1.167 0 016.5 24.333h-1c0 1.197.97 2.167 2.167 2.167v-1zm16.666-20H21v1h3.333v-1zM26.5 11V7.667h-1V11h1zm-2.167-4.5c.645 0 1.167.522 1.167 1.167h1c0-1.197-.97-2.167-2.167-2.167v1zm0 19H21v1h3.333v-1zM25.5 21v3.333h1V21h-1zm-1.167 5.5c1.197 0 2.167-.97 2.167-2.167h-1c0 .645-.522 1.167-1.167 1.167v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityQrCode =
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
export default SecurityQrCode;

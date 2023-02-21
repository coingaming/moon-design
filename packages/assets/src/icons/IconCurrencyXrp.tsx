import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.961 14.083c-.69-.398-1.467-.514-2.237-.54-.646-.023-1.61-.437-1.61-1.612 0-.876.71-1.58 1.61-1.612.77-.027 1.547-.143 2.237-.541a4.077 4.077 0 10-6.116-3.531c0 .79.28 1.517.64 2.191.3.567.454 1.62-.58 2.217-.77.444-1.73.163-2.21-.605-.405-.648-.894-1.255-1.579-1.65a4.077 4.077 0 100 7.062c.685-.396 1.174-1.002 1.579-1.65.332-.532 1.162-1.21 2.21-.606.767.444 1.005 1.417.579 2.217-.358.675-.64 1.402-.64 2.191a4.077 4.077 0 106.117-3.53z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyXrp =
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
export default IconCurrencyXrp;

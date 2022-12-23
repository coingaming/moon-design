import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.061 11.613l-7.941 3.222c-.759.297-1.67-.05-1.973-.793L4.86 6.26c-.303-.744.051-1.636.81-1.933l7.941-3.222c.759-.297 1.67.05 1.973.793L18.87 9.68c.354.744-.05 1.586-.809 1.933z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.684 7.38a.801.801 0 00.805-.796c0-.44-.36-.797-.805-.797a.801.801 0 00-.806.797c0 .44.36.797.806.797zM12.995 5.25a.801.801 0 00.806-.797c0-.44-.361-.797-.806-.797a.801.801 0 00-.806.797c0 .44.361.796.806.796zM11.684 8.598a.801.801 0 00.806-.797c0-.44-.36-.797-.806-.797a.801.801 0 00-.805.797c0 .44.36.797.806.797zM9.832 12.335a.801.801 0 00.806-.797c0-.44-.361-.797-.806-.797a.801.801 0 00-.806.797c0 .44.361.797.806.797zM15.143 10.03a.801.801 0 00.806-.796c0-.44-.36-.797-.806-.797a.801.801 0 00-.806.797c0 .44.361.797.806.797z"
      fill="currentColor"
    />
    <path
      d="M4.698 11.713l-3.445 3.403M7.075 16.323l-2.541 2.521M5.71 14.34L1 19.03"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCasino =
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
export default IconCasino;

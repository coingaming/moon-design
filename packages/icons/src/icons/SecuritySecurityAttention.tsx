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
      d="M13.794 24.405l.254-.43-.254.43zm4.412 0l-.254-.43.254.43zM16.5 11a.5.5 0 00-1 0h1zm-1 5.333a.5.5 0 101 0h-1zm1 2.64a.5.5 0 00-1 0h1zM15.5 20a.5.5 0 001 0h-1zM12 7h8V6h-8v1zm11.5 3.5v5.32h1V10.5h-1zm-15 5.32V10.5h-1v5.32h1zm5.548 8.155C10.81 22.065 8.5 19.168 8.5 15.82h-1c0 3.84 2.641 7.01 6.04 9.015l.508-.861zM23.5 15.82c0 3.347-2.311 6.244-5.548 8.154l.508.861c3.399-2.005 6.04-5.174 6.04-9.015h-1zm-9.96 9.015a4.844 4.844 0 004.92 0l-.508-.861a3.845 3.845 0 01-3.904 0l-.508.861zM20 7a3.5 3.5 0 013.5 3.5h1A4.5 4.5 0 0020 6v1zm-8-1a4.5 4.5 0 00-4.5 4.5h1A3.5 3.5 0 0112 7V6zm3.5 5v5.333h1V11h-1zm0 7.972V20h1v-1.028h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecuritySecurityAttention =
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
export default SecuritySecurityAttention;

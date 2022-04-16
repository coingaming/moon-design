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
      d="M7.962 12.346v-.5a.5.5 0 00-.5.5h.5zm16.076 0h.5a.5.5 0 00-.5-.5v.5zm-17.538-.5a.5.5 0 100 1v-1zm19 1a.5.5 0 000-1v1zM11.385 6.5a.5.5 0 10-1 0h1zm-1 5.846a.5.5 0 001 0h-1zM21.615 6.5a.5.5 0 00-1 0h1zm-1 5.846a.5.5 0 101 0h-1zM15.5 25.5a.5.5 0 001 0h-1zM7.962 12.846h16.076v-1H7.962v1zm15.576-.5v2.923h1v-2.923h-1zM8.462 15.27v-2.923h-1v2.923h1zM16 22.808a7.538 7.538 0 01-7.538-7.539h-1A8.538 8.538 0 0016 23.808v-1zm7.538-7.539A7.538 7.538 0 0116 22.808v1a8.538 8.538 0 008.538-8.539h-1zM6.5 12.846h19v-1h-19v1zM10.385 6.5v5.846h1V6.5h-1zm10.23 0v5.846h1V6.5h-1zM15.5 23.308V25.5h1v-2.192h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherPlug =
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
export default OtherPlug;

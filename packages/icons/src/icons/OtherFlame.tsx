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
      d="M16 4c0 8.977-9 9.256-9 15.788C7 24.324 11.03 28 16 28c-2.766 0-5.009-2.046-5.009-4.57 0-1.04.41-2.206.997-3.338.424.804.943 1.563 1.548 2.264l-.019-.106c-.469-2.627.36-5.31 2.239-7.347.155-.168.244-.26.244-.26 0 4.997 5.008 5.152 5.008 8.787 0 2.524-2.242 4.57-5.008 4.57 4.971 0 9-3.677 9-8.212 0-1.87-.738-3.963-1.79-6a21.723 21.723 0 01-2.783 4.07l.035-.19c.843-4.721-.648-9.541-4.023-13.2A27.143 27.143 0 0016 4.001"
      stroke="currentColor"
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
const OtherFlame =
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
export default OtherFlame;

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
      d="M6.5 9.5H7h-.5zm0 2.039H6h.5zm5.039 3v-.5.5zm-2.039 0v.5-.5zM14.539 9.5h-.5.5zm0 2.039h.5-.5zm-3-5.039V6v.5zM9.5 6.5V6v.5zm7.962 3h-.5.5zm0 2.039h.5-.5zm5.038 3v-.5.5zm-2.038 0v.5-.5zM25.5 9.5H25h.5zm0 2.039h.5-.5zm-3-5.039V6v.5zm-2.038 0V7v-.5zM6.5 20.462H7h-.5zm0 2.038H6h.5zm5.039 3V25v.5zm-2.039 0v.5-.5zm5.039-5.038h-.5.5zm0 2.038h.5-.5zm-3-5.038v.5-.5zm-2.039 0v-.5.5zm7.962 3h-.5.5zm0 2.038h.5-.5zm5.038 3V25v.5zm-2.038 0v.5-.5zm5.038-5.038H25h.5zm0 2.038h.5-.5zm-3-5.038v.5-.5zm-2.038 0v-.5.5zM6 9.5v2.039h1V9.5H6zm5.539 4.539H9.5v1h2.039v-1zm2.5-4.539v2.039h1V9.5h-1zm-2.5-3.5H9.5v1h2.039V6zm3.5 3.5a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zM7 9.5A2.5 2.5 0 019.5 7V6A3.5 3.5 0 006 9.5h1zm-1 2.039a3.5 3.5 0 003.5 3.5v-1a2.5 2.5 0 01-2.5-2.5H6zm5.539 3.5a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zM16.962 9.5v2.039h1V9.5h-1zm5.538 4.539h-2.038v1H22.5v-1zM25 9.5v2.039h1V9.5h-1zM22.5 6h-2.038v1H22.5V6zM26 9.5A3.5 3.5 0 0022.5 6v1A2.5 2.5 0 0125 9.5h1zm-8.038 0a2.5 2.5 0 012.5-2.5V6a3.5 3.5 0 00-3.5 3.5h1zm-1 2.039a3.5 3.5 0 003.5 3.5v-1a2.5 2.5 0 01-2.5-2.5h-1zm5.538 3.5a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zM6 20.462V22.5h1v-2.038H6zM11.539 25H9.5v1h2.039v-1zm2.5-4.538V22.5h1v-2.038h-1zm-2.5-3.5H9.5v1h2.039v-1zm3.5 3.5a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zm-8.039 0a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM6 22.5A3.5 3.5 0 009.5 26v-1A2.5 2.5 0 017 22.5H6zm5.539 3.5a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1zm5.423-5.538V22.5h1v-2.038h-1zM22.5 25h-2.038v1H22.5v-1zm2.5-4.538V22.5h1v-2.038h-1zm-2.5-3.5h-2.038v1H22.5v-1zm3.5 3.5a3.5 3.5 0 00-3.5-3.5v1a2.5 2.5 0 012.5 2.5h1zm-8.038 0a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zm-1 2.038a3.5 3.5 0 003.5 3.5v-1a2.5 2.5 0 01-2.5-2.5h-1zM22.5 26a3.5 3.5 0 003.5-3.5h-1a2.5 2.5 0 01-2.5 2.5v1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwarePlate =
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
export default SoftwarePlate;

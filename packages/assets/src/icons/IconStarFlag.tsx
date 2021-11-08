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
    <path d="M2 0h20v24l-10-3-10 3V0z" fill="currentColor" />
    <path
      d="M10.705 9.121c-.049.2-.194.3-.388.35-.824.05-1.454.15-1.94.249-.339.05-.484.5-.29.749.34.399.776.948 1.406 1.447.145.1.242.3.194.5-.097.448-.291 1.247-.388 2.045-.049.35.34.6.63.5.63-.25 1.552-.7 2.036-1.098.485.399 1.455.798 2.037 1.098.34.15.678-.15.63-.5a8.923 8.923 0 00-.388-2.046c-.048-.2 0-.4.194-.499.582-.45 1.067-1.048 1.406-1.447.29-.25.146-.65-.194-.749-.436-.1-1.115-.2-1.94-.25-.193 0-.339-.15-.436-.299-.096-.45-.387-1.198-.824-1.946a.49.49 0 00-.824 0 9.685 9.685 0 00-.921 1.896z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconStarFlag =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconStarFlag;

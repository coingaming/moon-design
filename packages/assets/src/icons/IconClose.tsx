import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.609 10L20 17.391 17.391 20 10 12.609 2.609 20 0 17.391 7.391 10 0 2.609 2.609 0 10 7.391 17.391 0 20 2.609z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconClose =
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
export default IconClose;

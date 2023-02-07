import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.773.56c.67-.67 1.755-.67 2.424 0l9.213 9.213c.67.67.67 1.755 0 2.424l-9.213 9.213c-.67.67-1.755.67-2.424 0L.56 12.197a1.714 1.714 0 010-2.424L9.773.56zm1.33 16.42a1.176 1.176 0 11.002-2.352 1.176 1.176 0 01-.002 2.353zm1.176-4.701c0 .646-.53 1.175-1.176 1.175a1.179 1.179 0 01-1.175-1.175V6.4c0-.647.529-1.176 1.175-1.176.647 0 1.176.53 1.176 1.176v5.878z"
      fill="#FFB319"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconWarning =
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
export default IconWarning;

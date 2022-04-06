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
      d="M7.893 19.603A8.521 8.521 0 0113.38 8.876m-2.457 14.946A8.478 8.478 0 0016 25.5c1.903 0 3.66-.624 5.078-1.678m3.028-4.219A8.521 8.521 0 0018.62 8.876m0 .245a2.62 2.62 0 11-5.24 0 2.62 2.62 0 015.24 0zm-6.879 12.775a2.62 2.62 0 11-5.24 0 2.62 2.62 0 015.24 0zm13.76 0a2.62 2.62 0 11-5.242 0 2.62 2.62 0 015.241 0z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const FilesShare =
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
export default FilesShare;

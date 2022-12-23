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
      d="M14.743 8.327c.465-1.103 2.05-1.103 2.514 0l1.485 3.517c.196.465.64.782 1.149.823l3.854.304c1.207.095 1.697 1.58.777 2.357l-2.936 2.478a1.33 1.33 0 00-.439 1.33l.897 3.707c.281 1.16-1 2.078-2.034 1.456l-3.3-1.986a1.379 1.379 0 00-1.42 0l-3.3 1.986c-1.033.622-2.315-.295-2.034-1.456l.897-3.706a1.33 1.33 0 00-.439-1.33l-2.936-2.48c-.92-.776-.43-2.26.777-2.356l3.854-.304a1.36 1.36 0 001.149-.823l1.485-3.517z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportFeatured =
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
export default SportFeatured;

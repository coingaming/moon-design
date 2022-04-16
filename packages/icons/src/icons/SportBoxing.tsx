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
      d="M21.15 20.301c-1.067 0-2.469.99-2.469 2.066 0 1.076.867 1.95 1.934 1.95h.984m-8.632-2.814l-.042 2.649c-.016 1.024.84 1.86 1.895 1.848l5.293-.056c1.033-.011 1.863-.832 1.854-1.835l-.034-3.936m-10.741-6.927c0-.67-.508-1.285-1.206-1.35-.806-.078-1.486.523-1.486 1.276v1.8c0 3.798 3.444 4.577 5.352 5.303h8.075c.245-.791 1.59-4.641 1.573-9.953V8.099m-10.717 7.15s2.138.848 2.138 4.936m8.542-11.84c-.512 7.648-12.294 7.644-12.802-.004-.027-.372.015.189-.018-.805C10.64 6.688 11.36 6 12.247 6h9.635c.888 0 1.604.688 1.604 1.531 0 .7.005.433-.023.814z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBoxing =
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
export default SportBoxing;

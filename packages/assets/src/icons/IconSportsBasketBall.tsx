import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.403 12.841v-2.438h7.77a8.143 8.143 0 01-1.96 4.924 8.89 8.89 0 00-5.81-2.486zm0 .806a8.1 8.1 0 015.257 2.263 8.157 8.157 0 01-5.257 2.265v-4.528zm-.806 0v4.528a8.16 8.16 0 01-5.26-2.266 8.115 8.115 0 015.26-2.262zm0-7.293A8.094 8.094 0 014.339 4.09a8.165 8.165 0 015.258-2.265v4.528zm.806 0V1.826a8.166 8.166 0 015.26 2.266 8.115 8.115 0 01-5.26 2.262zm7.77 3.243h-7.77V7.16a8.912 8.912 0 005.813-2.484 8.141 8.141 0 011.958 4.921zM3.786 4.674A8.887 8.887 0 009.597 7.16v2.437h-7.77a8.145 8.145 0 011.958-4.923zm-1.959 5.729h7.771v2.438a8.904 8.904 0 00-5.813 2.485 8.15 8.15 0 01-1.958-4.923zm14.716 5.759A8.962 8.962 0 0019 10c0-4.963-4.037-9-9-9a8.967 8.967 0 00-6.501 2.794c-.006.004-.012.002-.017.006-.007.007-.004.018-.01.023A8.96 8.96 0 001 10c0 4.964 4.037 9 9 9 2.55 0 4.85-1.07 6.49-2.78.01-.008.023-.004.032-.013.013-.013.01-.031.02-.045z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsBasketBall =
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
export default IconSportsBasketBall;

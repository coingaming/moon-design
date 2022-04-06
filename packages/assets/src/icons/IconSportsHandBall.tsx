import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M17.262 10.438a.85.85 0 00-.871-.872h-3.356L10.707 8.11a.88.88 0 00-.402-.406.803.803 0 00-.45-.125L7.076 5.84V2.61a.85.85 0 00-.872-.872.85.85 0 00-.87.871v3.727c0 .25.124.621.495.746l2.774 1.777-5.75 9.774c-.25.37-.125.992.37 1.242.126.125.372.125.497.125.371 0 .621-.125.746-.496l1.46-2.485h5.122c.371 0 .621-.25.867-.624.125-.372.125-.743-.125-.993l-2.777-3.625 1.133-1.925 2.27 1.457c.124.125.37.125.495.125h3.477c.5-.004.996-.5.875-.996zm-8.082 4.84H6.95l.96-1.633 1.27 1.632zm.5-9.813c0 1.117.87 2.113 1.988 1.988a1.964 1.964 0 001.988-1.988 1.964 1.964 0 00-1.988-1.988A1.964 1.964 0 009.68 5.465zm-.746-2.73c.746 0 1.367-.622 1.367-1.368C10.3.621 9.68 0 8.934 0S7.567.621 7.567 1.367s.62 1.367 1.367 1.367z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsHandBall =
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
export default IconSportsHandBall;

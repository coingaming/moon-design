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
      d="M12.993 14.268l-5.777-2.954a1.175 1.175 0 01-.531-1.578c.29-.584.994-.821 1.578-.531l6.23 3.179s.972 4.755-1.95 8.844m-.492-11.207a1.384 1.384 0 01.034-1.157c.309-.621.825-.764 1.22-.709a.19.19 0 01.104.028c.405.084.762.309 1.027.628.48.544 1.499 1.519 3.203 2.106.988.327 1.44.833 1.97 1.753.321.582.69 1.258.983 1.944 0 0 .521 1.55 1.764 2.167l3.124 1.511M11.306 16.06l-3.901-1.937a1.176 1.176 0 01-.53-1.578l.488-.986m2.49 6.385l-2.135-1.06a1.176 1.176 0 01-.53-1.578l.503-1.013M22.72 24.83l-3.336-1.637c-1.902-.991-2.354-1.028-2.354-1.028s-.517-.14-1.232-.26c-2.21-.323-3.951-.788-5.976-1.723l-1.478-.733c-.583-.29-1.013-1.09-.723-1.674l.37-.747m16.638.895l-3.133 6.308M16.44 12.65c.241-.58.683-1.386 2.055-1.22"
      stroke="#000"
      strokeWidth={0.8}
      strokeMiterlimit={10}
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
const SportMma =
  styled(Svg) <
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
export default SportMma;

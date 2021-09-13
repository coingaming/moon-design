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
      d="M23.049 22.475l-4.006-3.981-1.121 1.12 4.006 3.982m-3.555-11.254l4.46-4.46m-3.11 5.617l4.364-4.365m-13.9-2.528l9.837 10.554c.28.3.272.77-.018 1.06a1.271 1.271 0 01-1.798 0l-4.486-4.488a.15.15 0 00-.212 0l-.311.312a.15.15 0 000 .211l4.446 4.448a1.327 1.327 0 010 1.877.796.796 0 01-1.119.006L6.236 10.545a.6.6 0 01-.114-.705l1.071-2.068a.6.6 0 01.26-.258L9.476 6.48a.6.6 0 01.71.125zm11.991 16.336l-.51 1.375a.3.3 0 00.072.32l.817.79a.3.3 0 00.42-.004l1.855-1.855a.3.3 0 00-.004-.427l-.816-.79a.3.3 0 00-.309-.067l-1.345.48a.3.3 0 00-.18.178zm2.423-12.16a3.232 3.232 0 11-6.464 0 3.232 3.232 0 016.464 0z"
      stroke="currentColor"
      strokeWidth={0.8}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportCricket =
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
export default SportCricket;

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
      d="M24.1 10.9c-.3 0-.5-.1-.7-.3l-6-6c-.8-.8-2-.8-2.8 0l-6 6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l6-6c1.5-1.5 4.1-1.5 5.6 0l6 6c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM16 30c-1 0-2-.4-2.8-1.2l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.8.8 2 .8 2.8 0l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-6 6C18 29.6 17 30 16 30z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDouble = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconDouble;

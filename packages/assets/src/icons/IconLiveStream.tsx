import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.646 11c.196 0 .354.229.354.514 0 .286-.158.486-.354.486H2.413C2.177 12 2 11.857 2 11.514c0-.4.177-.514.433-.514h9.213zM5.254 3c.055.032.128.064.2.096 1.09.563 2.199 1.11 3.29 1.672.345.176.345.305-.019.482-1.09.562-2.162 1.109-3.253 1.655-.345.177-.472.113-.472-.241V3.305c0-.144 0-.289.254-.305z"
      fill="currentColor"
    />
    <rect
      x={0.5}
      y={0.5}
      width={13}
      height={9}
      rx={0.5}
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconLiveStream = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
    {
      verticalAlign: 'middle',
    },
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
  ],
);
export default IconLiveStream;

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
      d="M4 15.1c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L13.7 3C15 1.7 17 1.7 18.3 3l10.4 10.4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L16.9 4.4c-.5-.5-1.4-.5-1.8 0L4.7 14.8c-.2.2-.4.3-.7.3z"
      fill="currentColor"
    />
    <path
      d="M16 30c-.6 0-1-.4-1-1V3.1c0-.6.4-1 1-1s1 .4 1 1V29c0 .5-.4 1-1 1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconArrowLUp =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconArrowLUp;

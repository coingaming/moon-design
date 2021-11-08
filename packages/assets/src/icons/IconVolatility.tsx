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
      d="M16.4 28.9c-1.8 0-3.2-1.4-3.2-3.2V6.3c0-.6-.5-1.2-1.2-1.2-.9 0-1.1.8-1.2 1.3L9.6 18.1c-.2 1.8-1.5 3.1-3.2 3.1H3c-.6 0-1-.4-1-1s.4-1 1-1h3.4c.9 0 1.1-1 1.2-1.3L8.9 6.1C9.2 4.2 10.4 3 12.1 3c1.8 0 3.2 1.4 3.2 3.2v19.5c0 .6.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V14.2c0-1.7 1.4-3.2 3.2-3.2 1.6 0 2.8 1.2 3.2 3l.7 3.8c.2 1.3.8 1.3 1.2 1.3h3c.6 0 1 .4 1 1s-.4 1-1 1h-3.2c-1.7 0-2.8-1.1-3.2-3l-.7-3.8c0-.3-.3-1.3-1.2-1.3-.6 0-1.2.5-1.2 1.2v11.6c.1 1.7-1.3 3.1-3.1 3.1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconVolatility =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconVolatility;

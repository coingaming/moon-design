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
      d="M6.5 12.657c.41-2.057 2.91-4.286 4.108-5.143 1.37-.343 5.443-.823 10.784 0 2.054.823 3.595 3.772 4.108 5.143m-19 0C6.842 15.4 9.17 21.71 15.743 25M6.5 12.657c4.108-.514 10.27-1.028 19 0M15.743 25c2.568-1.029 8.114-4.937 9.757-12.343M15.743 25c-2.875-5.76-4.45-10.971-4.621-12.857L14.202 7m1.541 18c2.876-5.76 4.45-10.971 4.622-12.857L17.284 7"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericLoyalty =
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
export default GenericLoyalty;

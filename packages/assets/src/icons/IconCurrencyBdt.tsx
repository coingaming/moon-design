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
      d="M5.692 0c1.153 0 2.025.294 2.619.881.35.338.62.81.812 1.415.192.606.288 1.46.288 2.564v1.735H18v2.938H9.41v6.088c0 .498.07.872.21 1.121.14.232.454.348.943.348.524 0 1.039-.116 1.545-.348a3.449 3.449 0 001.23-.908c.333-.373.498-.774.498-1.201 0-.16-.07-.312-.21-.454-.139-.143-.41-.214-.81-.214-.315 0-.595.027-.839.08l-.419-2.723c.629-.16 1.388-.24 2.278-.24 1.03 0 1.86.24 2.488.72.628.481.943 1.229.943 2.243 0 .962-.218 1.816-.655 2.564a5.841 5.841 0 01-1.728 1.869 8.564 8.564 0 01-2.357 1.148 8.61 8.61 0 01-2.461.374c-.734 0-1.354-.089-1.86-.267-.489-.178-.881-.41-1.178-.694a5.263 5.263 0 01-.55-.668c-.157-.25-.288-.596-.393-1.041-.087-.445-.13-1.042-.13-1.79V9.534h-2.2V6.595h2.2V4.993c0-.676-.088-1.183-.263-1.522-.174-.338-.576-.507-1.204-.507-.472 0-.97.107-1.493.32L2 .721C2.68.471 3.292.294 3.833.187A8.33 8.33 0 015.693 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyBdt = styled(Svg)<IconProps>(
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
export default IconCurrencyBdt;

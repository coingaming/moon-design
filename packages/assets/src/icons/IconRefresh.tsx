import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.638.493A1 1 0 018.007.138l5 2.938a1 1 0 01.329 1.411l-3 4.562a1 1 0 11-1.672-1.098l1.86-2.827C5.668 6.048 2 10.314 2 15.438c0 5.799 4.701 10.5 10.5 10.5S23 21.237 23 15.438c0-3.075-1.32-5.84-3.428-7.761a1 1 0 111.348-1.478A12.47 12.47 0 0125 15.438c0 6.903-5.596 12.5-12.5 12.5S0 22.34 0 15.438C0 9.583 4.025 4.668 9.458 3.31L6.993 1.862A1 1 0 016.638.493z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconRefresh = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconRefresh;
